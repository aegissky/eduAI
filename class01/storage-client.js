// storage-client.js — SQLite (sql.js WASM) 기반 로컬 스토리지
// Supabase → SQLite 마이그레이션 버전
// window.supaEdu 인터페이스 유지 (edu-app.js 무수정)

const DB_STORAGE_KEY = 'akc-edu-sqlite-v1';
let _db  = null;
let _SQL = null;

// ── DB 직렬화 → localStorage 영속 ────────────────────────────────────────────
function _persistDB() {
  if (!_db) return;
  try {
    const data = _db.export();
    const b64  = btoa(String.fromCharCode.apply(null, data));
    localStorage.setItem(DB_STORAGE_KEY, b64);
  } catch (e) {
    console.warn('[sqlite] persist failed:', e.message);
  }
}

// ── localStorage → DB 복원 ────────────────────────────────────────────────────
function _loadPersistedDB() {
  const b64 = localStorage.getItem(DB_STORAGE_KEY);
  if (!b64) return null;
  try {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return arr;
  } catch (e) {
    return null;
  }
}

// ── SQLite 초기화 ─────────────────────────────────────────────────────────────
async function _initDB() {
  if (_db) return _db;

  _SQL = await initSqlJs({
    locateFile: f => `https://cdn.jsdelivr.net/npm/sql.js@1.12.0/dist/${f}`
  });

  const saved = _loadPersistedDB();
  _db = saved ? new _SQL.Database(saved) : new _SQL.Database();

  _db.run(`
    CREATE TABLE IF NOT EXISTS edu_progress (
      user_id    TEXT NOT NULL,
      class_id   TEXT NOT NULL,
      status     TEXT NOT NULL DEFAULT 'started'
                   CHECK (status IN ('started','completed')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE (user_id, class_id)
    )
  `);
  _db.run(`
    CREATE TABLE IF NOT EXISTS edu_quiz_state (
      user_id    TEXT NOT NULL,
      class_id   TEXT NOT NULL,
      answered   TEXT NOT NULL DEFAULT '{}',
      score      INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE (user_id, class_id)
    )
  `);
  _db.run(`CREATE INDEX IF NOT EXISTS idx_progress_user ON edu_progress (user_id)`);
  _db.run(`CREATE INDEX IF NOT EXISTS idx_quiz_user    ON edu_quiz_state (user_id)`);

  _persistDB();
  return _db;
}

// ── User ID (익명 UUID, localStorage 영속) ────────────────────────────────────
function getUserId() {
  const KEY = 'akc-edu-uid';
  let uid = localStorage.getItem(KEY);
  if (!uid) {
    uid = 'u-' + crypto.randomUUID();
    localStorage.setItem(KEY, uid);
  }
  return uid;
}

// ── 진행 상태 저장 ─────────────────────────────────────────────────────────────
async function sbSaveProgress(progress, quizState) {
  const db      = await _initDB();
  const user_id = getUserId();

  const stmtP = db.prepare(`
    INSERT INTO edu_progress (user_id, class_id, status, updated_at)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, class_id)
    DO UPDATE SET status = excluded.status, updated_at = excluded.updated_at
  `);
  Object.entries(progress).forEach(([class_id, status]) => {
    stmtP.run([user_id, class_id, status]);
  });
  stmtP.free();

  const stmtQ = db.prepare(`
    INSERT INTO edu_quiz_state (user_id, class_id, answered, score, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, class_id)
    DO UPDATE SET answered = excluded.answered, score = excluded.score, updated_at = excluded.updated_at
  `);
  Object.entries(quizState).forEach(([class_id, qs]) => {
    stmtQ.run([user_id, class_id, JSON.stringify(qs.answered || {}), Math.max(0, qs.score || 0)]);
  });
  stmtQ.free();

  _persistDB();
}

// ── 진행 상태 불러오기 ─────────────────────────────────────────────────────────
async function sbLoadProgress() {
  const db      = await _initDB();
  const user_id = getUserId();

  const progress  = {};
  const quizState = {};

  const stmtP = db.prepare(`SELECT class_id, status FROM edu_progress WHERE user_id = ?`);
  stmtP.bind([user_id]);
  while (stmtP.step()) {
    const row = stmtP.getAsObject();
    progress[row.class_id] = row.status;
  }
  stmtP.free();

  const stmtQ = db.prepare(`SELECT class_id, answered, score FROM edu_quiz_state WHERE user_id = ?`);
  stmtQ.bind([user_id]);
  while (stmtQ.step()) {
    const row = stmtQ.getAsObject();
    quizState[row.class_id] = {
      answered: JSON.parse(row.answered || '{}'),
      score:    row.score || 0
    };
  }
  stmtQ.free();

  return { progress, quizState };
}

// ── Realtime 미지원 (로컬 단독 운영) ──────────────────────────────────────────
function initRealtime(_onRemoteChange) {
  updateSyncIndicator('offline');
}

// ── 연결 상태 표시 ─────────────────────────────────────────────────────────────
function updateSyncIndicator(status) {
  const el = document.getElementById('syncIndicator');
  if (!el) return;
  const map = {
    synced:  { text: '💾 로컬 저장됨', color: '#22c55e' },
    syncing: { text: '💾 저장 중…',    color: '#eab308' },
    offline: { text: '⚡ 로컬 전용',   color: '#64748b' },
    error:   { text: '⚠ 저장 오류',   color: '#ef4444' }
  };
  const s = map[status] || map.offline;
  el.textContent = s.text;
  el.style.color  = s.color;
}

// ── 페이지 로드 시 DB 사전 초기화 ─────────────────────────────────────────────
_initDB()
  .then(() => console.log('[sqlite] DB ready'))
  .catch(e  => console.warn('[sqlite] init failed:', e.message));

window.supaEdu = {
  sbSaveProgress,
  sbLoadProgress,
  initRealtime,
  getUserId,
  updateSyncIndicator
};
