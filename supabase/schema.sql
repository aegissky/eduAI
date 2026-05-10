-- ============================================================
-- AKC v4 Education Platform — SQLite Schema
-- Supabase(PostgreSQL) → SQLite 마이그레이션 버전
-- 사용: sqlite3 edu.db < schema.sql
-- ============================================================

-- ── edu_progress ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS edu_progress (
  id         INTEGER      PRIMARY KEY AUTOINCREMENT,
  user_id    TEXT         NOT NULL,
  class_id   TEXT         NOT NULL,
  status     TEXT         NOT NULL DEFAULT 'started'
               CHECK (status IN ('started', 'completed')),
  updated_at TEXT         NOT NULL DEFAULT (datetime('now')),
  UNIQUE (user_id, class_id)
);

CREATE INDEX IF NOT EXISTS idx_edu_progress_user ON edu_progress (user_id);

-- ── edu_quiz_state ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS edu_quiz_state (
  id         INTEGER      PRIMARY KEY AUTOINCREMENT,
  user_id    TEXT         NOT NULL,
  class_id   TEXT         NOT NULL,
  answered   TEXT         NOT NULL DEFAULT '{}'
               CHECK (json_valid(answered)),
  score      INTEGER      NOT NULL DEFAULT 0
               CHECK (score >= 0),
  updated_at TEXT         NOT NULL DEFAULT (datetime('now')),
  UNIQUE (user_id, class_id)
);

CREATE INDEX IF NOT EXISTS idx_edu_quiz_user ON edu_quiz_state (user_id);

-- ── updated_at 자동 갱신 트리거 ───────────────────────────────────────────────
CREATE TRIGGER IF NOT EXISTS trg_edu_progress_updated_at
  AFTER UPDATE ON edu_progress
  FOR EACH ROW
BEGIN
  UPDATE edu_progress SET updated_at = datetime('now') WHERE rowid = NEW.rowid;
END;

CREATE TRIGGER IF NOT EXISTS trg_edu_quiz_updated_at
  AFTER UPDATE ON edu_quiz_state
  FOR EACH ROW
BEGIN
  UPDATE edu_quiz_state SET updated_at = datetime('now') WHERE rowid = NEW.rowid;
END;
