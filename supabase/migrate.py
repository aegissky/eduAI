"""
migrate.py — Supabase → SQLite 완전 마이그레이션
실행: python supabase/migrate.py [DB 경로 (기본: <root>/edu.db)]

단계:
  1. schema.sql DDL → SQLite 적용
  2. Supabase REST API → edu_progress / edu_quiz_state 전체 추출 (페이지네이션)
  3. SQLite upsert
  4. 행 수 검증

Supabase 프로젝트가 일시중지 상태라면:
  - Supabase 대시보드 → 프로젝트 Restore 후 재실행
  - 스키마만 생성하려면: python supabase/migrate.py --schema-only
"""

import sys
import io
import os
import json
import sqlite3
import pathlib

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCHEMA_ONLY = '--schema-only' in sys.argv
args = [a for a in sys.argv[1:] if not a.startswith('--')]

# ── .env 로드 ─────────────────────────────────────────────────────────────────
ENV_FILE = pathlib.Path(__file__).parent.parent / '.env'
if ENV_FILE.exists():
    for line in ENV_FILE.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            k, v = line.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip())

SUPABASE_URL = os.environ.get('NEXT_PUBLIC_SUPABASE_URL', '').rstrip('/')
SERVICE_KEY  = os.environ.get('SUPABASE_SERVICE_KEY', '')
SCHEMA_FILE  = pathlib.Path(__file__).parent / 'schema.sql'
DB_PATH      = pathlib.Path(args[0]) if args else pathlib.Path(__file__).parent.parent / 'edu.db'

HEADERS = {
    'apikey':        SERVICE_KEY,
    'Authorization': f'Bearer {SERVICE_KEY}',
    'Content-Type':  'application/json',
}
PAGE_SIZE = 1000


# ── 1. SQLite 스키마 생성 ─────────────────────────────────────────────────────
def run_schema(conn):
    print(f'[schema] SQLite DB: {DB_PATH.resolve()}')
    sql = SCHEMA_FILE.read_text(encoding='utf-8')
    # executescript() 는 자동 commit + 멀티 스테이트먼트 처리
    try:
        conn.executescript(sql)
        print('[schema] 스키마 적용 완료')
    except sqlite3.OperationalError as e:
        print(f'[schema] ⚠️  {e}')
    print()


# ── 2. Supabase REST 전체 추출 (페이지네이션) ─────────────────────────────────
def fetch_all(table):
    try:
        import httpx
    except ImportError:
        print('  ❌ httpx 없음 → pip install httpx')
        sys.exit(1)

    rows   = []
    offset = 0

    while True:
        try:
            r = httpx.get(
                f'{SUPABASE_URL}/rest/v1/{table}',
                headers={**HEADERS,
                         'Range': f'{offset}-{offset + PAGE_SIZE - 1}',
                         'Range-Unit': 'items',
                         'Prefer': 'count=exact'},
                params={'select': '*', 'order': 'id.asc'},
                verify=False,
                timeout=30
            )
        except Exception as e:
            print(f'  ❌ {table} 연결 실패: {e}')
            print('     Supabase 프로젝트가 일시중지 상태일 수 있습니다.')
            print('     https://supabase.com/dashboard 에서 프로젝트를 Restore 후 재실행하세요.')
            return None   # None = 실패 신호

        if r.status_code not in (200, 206):
            print(f'  ❌ {table} 조회 실패: HTTP {r.status_code} {r.text[:200]}')
            return None

        batch = r.json()
        rows.extend(batch)
        print(f'  [{table}] 추출 {len(rows)}행 ...')

        cr = r.headers.get('content-range', '')
        if cr and '/' in cr:
            total = int(cr.split('/')[1])
            if len(rows) >= total:
                break
        if len(batch) < PAGE_SIZE:
            break
        offset += PAGE_SIZE

    return rows


# ── 3. SQLite upsert ──────────────────────────────────────────────────────────
def load_progress(conn, rows):
    for r in rows:
        conn.execute("""
            INSERT INTO edu_progress (user_id, class_id, status, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(user_id, class_id)
            DO UPDATE SET status = excluded.status, updated_at = excluded.updated_at
        """, (r['user_id'], r['class_id'], r['status'], r.get('updated_at', '')))
    conn.commit()
    return len(rows)


def load_quiz_state(conn, rows):
    for r in rows:
        answered = r.get('answered', {})
        conn.execute("""
            INSERT INTO edu_quiz_state (user_id, class_id, answered, score, updated_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(user_id, class_id)
            DO UPDATE SET answered = excluded.answered, score = excluded.score,
                          updated_at = excluded.updated_at
        """, (r['user_id'], r['class_id'],
              json.dumps(answered, ensure_ascii=False),
              max(0, r.get('score', 0)),
              r.get('updated_at', '')))
    conn.commit()
    return len(rows)


# ── 4. 검증 ──────────────────────────────────────────────────────────────────
def verify(conn, p_src, q_src):
    p_cnt = conn.execute('SELECT COUNT(*) FROM edu_progress').fetchone()[0]
    q_cnt = conn.execute('SELECT COUNT(*) FROM edu_quiz_state').fetchone()[0]
    p_ok  = p_cnt == len(p_src)
    q_ok  = q_cnt == len(q_src)
    print(f'\n[verify] edu_progress   Supabase {len(p_src):>5}행 → SQLite {p_cnt:>5}행  {"✅" if p_ok else "❌"}')
    print(f'[verify] edu_quiz_state Supabase {len(q_src):>5}행 → SQLite {q_cnt:>5}행  {"✅" if q_ok else "❌"}')
    return p_ok and q_ok


# ── main ──────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    print('=== AKC v4 Education — Supabase → SQLite Migration ===')
    print(f'  Supabase URL : {SUPABASE_URL or "(미설정)"}')
    print(f'  SQLite DB    : {DB_PATH.resolve()}')
    print(f'  모드         : {"스키마만" if SCHEMA_ONLY else "스키마 + 데이터"}')
    print()

    conn = sqlite3.connect(DB_PATH)
    conn.execute('PRAGMA journal_mode=WAL')
    conn.execute('PRAGMA foreign_keys=ON')

    # 1. 스키마
    run_schema(conn)

    if SCHEMA_ONLY:
        conn.close()
        print(f'=== 완료 (스키마만) — {DB_PATH.resolve()} ===')
        sys.exit(0)

    # 2. 데이터 추출
    if not SUPABASE_URL or not SERVICE_KEY:
        print('❌ .env에 NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_KEY 필요')
        conn.close()
        sys.exit(1)

    print('[extract] Supabase 데이터 추출 중...')
    progress_rows = fetch_all('edu_progress')
    quiz_rows     = fetch_all('edu_quiz_state')

    if progress_rows is None or quiz_rows is None:
        conn.close()
        print('\n⚠️  데이터 추출 실패 — 스키마는 생성됨')
        print('   Supabase 프로젝트 복원 후: python supabase/migrate.py')
        sys.exit(1)

    print(f'\n  edu_progress   : {len(progress_rows)}행')
    print(f'  edu_quiz_state : {len(quiz_rows)}행\n')

    # 3. 적재
    print('[load] SQLite 적재 중...')
    p_cnt = load_progress(conn, progress_rows)
    q_cnt = load_quiz_state(conn, quiz_rows)
    print(f'  edu_progress   upsert {p_cnt}행')
    print(f'  edu_quiz_state upsert {q_cnt}행')

    # 4. 검증
    ok = verify(conn, progress_rows, quiz_rows)
    conn.close()

    print()
    if ok:
        print(f'=== 완료 — {DB_PATH.resolve()} ===')
    else:
        print('=== ⚠️  건수 불일치 — 로그 확인 후 재실행 ===')
        sys.exit(1)
