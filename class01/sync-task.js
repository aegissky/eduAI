#!/usr/bin/env node
/**
 * sync-task.js — sync_state.json 태스크 상태 업데이트 + 원본 동기화 CLI
 *
 * 사용법:
 *   node sync-task.js <task_id> <status> [메모]
 *   node sync-task.js --list
 *   node sync-task.js --sync          원본 → 로컬 동기화
 *
 * 원본 경로: D:\projects\products\eduAI\class01\sync_state.json
 * 로컬 경로: (이 파일과 같은 디렉토리)\sync_state.json
 */

const fs   = require('fs');
const path = require('path');

const LOCAL_PATH  = path.join(__dirname, 'sync_state.json');
const ORIGIN_PATH = path.normalize('D:\\projects\\products\\eduAI\\class01\\sync_state.json');

const VALID_STATUS = ['pending', 'in_progress', 'completed', 'failed', 'skipped'];

// ── sync_state.json 로드 (원본 우선, 없으면 로컬) ────────────────────────────
function loadSync() {
  const src = fs.existsSync(ORIGIN_PATH) ? ORIGIN_PATH : LOCAL_PATH;
  if (!fs.existsSync(src)) {
    console.error(`❌ sync_state.json 없음: ${src}`);
    process.exit(1);
  }
  return { data: JSON.parse(fs.readFileSync(src, 'utf8')), src };
}

// ── 양쪽 저장 ─────────────────────────────────────────────────────────────────
function saveSync(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(LOCAL_PATH, json, 'utf8');
  if (fs.existsSync(path.dirname(ORIGIN_PATH))) {
    fs.writeFileSync(ORIGIN_PATH, json, 'utf8');
    console.log(`   동기화: ${ORIGIN_PATH}`);
  }
}

// ── 원본 → 로컬 단방향 동기화 ────────────────────────────────────────────────
function syncFromOrigin() {
  if (!fs.existsSync(ORIGIN_PATH)) {
    console.error(`❌ 원본 없음: ${ORIGIN_PATH}`);
    process.exit(1);
  }
  const content = fs.readFileSync(ORIGIN_PATH, 'utf8');
  fs.writeFileSync(LOCAL_PATH, content, 'utf8');
  console.log(`✅ 원본 → 로컬 동기화 완료`);
  console.log(`   원본: ${ORIGIN_PATH}`);
  console.log(`   로컬: ${LOCAL_PATH}`);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function listTasks() {
  const { data, src } = loadSync();
  const STATUS_ICON = {
    completed:   '✅',
    in_progress: '🔄',
    pending:     '⏳',
    failed:      '❌',
    skipped:     '⏭️',
  };
  console.log(`\n[출처: ${src}]`);
  console.log('sync_state.json 태스크 목록:');
  console.log('─'.repeat(60));
  data.tasks.forEach(t => {
    const icon = STATUS_ICON[t.status] || '❓';
    const dep  = t.depends_on ? ` (depends: ${t.depends_on})` : '';
    console.log(`  ${icon} [${t.task_id}] ${t.title}${dep}`);
    console.log(`     status: ${t.status} | priority: ${t.priority}`);
  });
  console.log('─'.repeat(60));
}

function updateTask(taskId, status, memo) {
  if (!VALID_STATUS.includes(status)) {
    console.error(`❌ 유효하지 않은 status: ${status}`);
    console.error(`   허용값: ${VALID_STATUS.join(', ')}`);
    process.exit(1);
  }

  const { data } = loadSync();
  const task = data.tasks.find(t => t.task_id === taskId);
  if (!task) {
    console.error(`❌ 태스크를 찾을 수 없음: ${taskId}`);
    listTasks();
    process.exit(1);
  }

  const prevStatus = task.status;
  task.status = status;

  if (status === 'completed') {
    task.completedAt = today();
  } else if (status === 'in_progress') {
    task.startedAt = today();
    delete task.completedAt;
  }

  saveSync(data);

  console.log(`✅ ${taskId} 상태 업데이트: ${prevStatus} → ${status}`);
  if (memo) console.log(`   메모: ${memo}`);
  console.log(`   로컬 + 원본 sync_state.json 동기화 완료`);
}

// ── main ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--list' || args[0] === '-l') {
  listTasks();
} else if (args[0] === '--sync' || args[0] === '-s') {
  syncFromOrigin();
} else if (args.length >= 2) {
  updateTask(args[0], args[1], args.slice(2).join(' ') || undefined);
} else {
  console.log('사용법: node sync-task.js <task_id> <status> [메모]');
  console.log('        node sync-task.js --list');
  console.log('        node sync-task.js --sync   (원본 → 로컬 동기화)');
  process.exit(1);
}
