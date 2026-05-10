# AKC v4 교육 플랫폼 (eduAI)

**Autonomous Knowledge Core v4** — AI 에이전트 운영체제 학습 플랫폼

순수 HTML/JS 기반의 오프라인 교육 앱입니다. 서버 없이 브라우저만으로 실행되며 학습 진행률과 퀴즈 데이터를 SQLite(sql.js)로 로컬 저장합니다.

---

## 실행 방법

```
class01/index.html  을 브라우저로 열면 바로 실행됩니다.
```

> 서버, Node.js, Python 불필요. 인터넷 연결 불필요 (완전 오프라인 동작).

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 커리큘럼 | M0~M21 — 22개 모듈, 66개 클래스 |
| 퀴즈 | 클래스별 객관식 퀴즈 + 숙달도 추적 |
| 진행률 | 대시보드 — 완료율, 퀴즈 점수 차트, 모듈 카드 |
| 용어집 | 영한 용어 168개 + 슬라이드 패널 |
| 헌법·정책 | AKC 거버넌스 문서 탐색 패널 |
| 백업/복원 | JSON 파일로 학습 데이터 내보내기/불러오기 |
| 업데이트 이력 | changelog.html |

---

## 파일 구조

```
eduAI/
├── class01/
│   ├── index.html              진입점
│   ├── changelog.html          업데이트 이력
│   ├── assets/
│   │   ├── tailwind.min.js     Tailwind CSS (로컬 번들)
│   │   ├── sql-wasm.js         SQLite 엔진 (로컬 번들)
│   │   └── sql-wasm.wasm       SQLite WASM 바이너리
│   ├── edu-app.js              앱 메인 로직
│   ├── edu-data.js             커리큘럼 M0
│   ├── edu-data-p2~p6.js       커리큘럼 M1~M21
│   ├── storage-client.js       SQLite 스토리지 (window.supaEdu)
│   ├── vocab-data.js           용어 사전
│   ├── vocab-panel.js          용어집 패널
│   ├── policy-data.js          헌법·정책 데이터
│   ├── policy-panel.js         헌법·정책 패널
│   ├── ui-utils.js             UI 유틸리티
│   ├── sync-task.js            태스크 상태 CLI
│   ├── style.css               커스텀 스타일
│   └── backup_data.json        초기 시드 데이터 (최초 실행 시 자동 로드)
└── supabase/
    ├── schema.sql              SQLite DDL
    ├── migrate.py              Supabase → SQLite 데이터 마이그레이션
    ├── check_db.py             DB 상태 확인 유틸
    └── backup_data.json        마이그레이션 원본 스냅샷
```

---

## 스토리지 구조

```
브라우저 localStorage
  └── akc-edu-sqlite-v1   SQLite DB 전체 (Base64 직렬화)
  └── akc-edu-uid         익명 사용자 ID (UUID)
  └── akc-edu-seeded-v1   최초 시드 완료 플래그
```

- 앱 **최초 실행 시** `backup_data.json` → SQLite DB 자동 시드
- 데이터 분실 방지: 대시보드 **💾 백업** 버튼으로 JSON 파일 로컬 저장
- 복원: **📂 복원** 버튼으로 백업 JSON 불러오기

---

## 데이터 마이그레이션 (Supabase → SQLite)

Supabase 프로젝트가 활성화된 경우:

```bash
# 의존성
pip install httpx

# 실행 (.env 파일 필요)
python supabase/migrate.py

# 스키마만 생성
python supabase/migrate.py --schema-only
```

`.env` 파일 (커밋 금지):
```
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_KEY=<service_role_jwt>
```

---

## 태스크 상태 관리 (sync-task.js)

```bash
node class01/sync-task.js --list                        # 태스크 목록
node class01/sync-task.js FE-001 completed "완료"       # 상태 업데이트
node class01/sync-task.js --sync                        # 원본 → 로컬 재동기화
```

원본 경로: `D:\projects\products\eduAI\class01\sync_state.json`

---

## 개발 규칙

→ [CLAUDE.md](./CLAUDE.md) 참조

핵심 규칙: **외부 CDN 사용 금지 — 반드시 `assets/`에 로컬 번들로 저장**
