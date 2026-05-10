#!/usr/bin/env node
/**
 * sync-task.js — sync_state.json + history.md 태스크 상태 업데이트 CLI
 *
 * 사용법:
 *   node sync-task.js <task_id> <status> [메모]
 *
 * 예시:
 *   node sync-task.js FE-002 completed "키보드 단축키 구현 완료"
 *   node sync-task.js FE-003 in_progress
 *   node sync-task.js --list
 */

const fs   = require('fs');
const path = require('path');

const SYNC_PATH    = path.join(__dirname, 'sync_state.json');
const HISTORY_PATH = path.join(__dirname, 'history.md');

const VALID_STATUS = ['pending', 'in_progress', 'completed', 'failed', 'skipped'];

function loadSync() {
  return JSON.parse(fs.readFileSync(SYNC_PATH, 'utf8'));
}

function saveSync(data) {
  fs.writeFileSync(SYNC_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function appendHistory(line) {
  fs.appendFileSync(HISTORY_PATH, line + '\n', 'utf8');
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function listTasks() {
  const data = loadSync();
  const STATUS_ICON = {
    completed:   '✅',
    in_progress: '🔄',
    pending:     '⏳',
    failed:      '❌',
    skipped:     '⏭️',
  };
  console.log('\nsync_state.json 태스크 목록:');
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

  const data = loadSync();
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

  const historyLine = `[${taskId}] ${today()} | ${prevStatus.toUpperCase()} → ${status.toUpperCase()}${memo ? ' | ' + memo : ''}`;
  appendHistory(historyLine);

  console.log(`✅ ${taskId} 상태 업데이트: ${prevStatus} → ${status}`);
  if (memo) console.log(`   메모: ${memo}`);
  console.log(`   sync_state.json + history.md 동기화 완료`);
}

// ── main ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--list' || args[0] === '-l') {
  listTasks();
} else if (args.length >= 2) {
  updateTask(args[0], args[1], args.slice(2).join(' ') || undefined);
} else {
  console.log('사용법: node sync-task.js <task_id> <status> [메모]');
  console.log('        node sync-task.js --list');
  process.exit(1);
}
