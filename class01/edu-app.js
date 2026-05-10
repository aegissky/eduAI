// AKC v4 Education Platform - App Logic v2
// Requires: edu-data.js (window.CURRICULUM)

const STORAGE_KEY = 'akc-edu-progress';

// ── Mastery Config (Option B) ───────────────────────────────────────────────
const MASTERY = {
  unfamiliar: { label: '미학습',    color: '#475569', bg: '#1e293b', border: '#334155' },
  familiar:   { label: '학습 완료', color: '#3b82f6', bg: '#1e3a5f', border: '#1d4ed8' },
  proficient: { label: '능숙',      color: '#eab308', bg: '#422006', border: '#ca8a04' },
  mastered:   { label: '숙달',      color: '#22c55e', bg: '#14532d', border: '#16a34a' }
};
const MASTERY_DOTS = { unfamiliar: '⚪', familiar: '🔵', proficient: '🟡', mastered: '🟢' };
const ACCENT      = '#06B6D4';
const ACCENT_DARK = '#0891B2';
const ACCENT_DIM  = '#164E63';

// ── State ───────────────────────────────────────────────────────────────────
const state = {
  currentClassId: null,
  view: 'dashboard',
  progress:    {},   // { classId: 'completed' }
  quizState:   {},   // { classId: { answered: {qIdx: optIdx}, score: 0 } }
  sidebarOpen: {},   // { moduleId: bool }
  searchQuery: ''
};

// ── Init ────────────────────────────────────────────────────────────────────
function init() {
  if (!window.CURRICULUM) {
    document.getElementById('mainContent').innerHTML =
      '<div class="text-red-400 p-8">edu-data.js 파일이 없습니다. CURRICULUM 데이터를 먼저 로드해 주세요.</div>';
    return;
  }
  loadProgress();
  updateMetaInfo();
  const modules = CURRICULUM.modules || [];
  modules.forEach((mod, i) => { state.sidebarOpen[mod.id] = (i === 0); });
  renderSidebar();
  showDashboard();
  document.getElementById('dashboardBtn').addEventListener('click', showDashboard);
  initKeyboard();

  // Realtime 구독 초기화 (supabase-client.js 로드 후)
  if (window.supaEdu && window.supaEdu.initRealtime) {
    // N-07: 300ms 디바운스 — 연속 이벤트 시 마지막 1회만 렌더링
    let realtimeTimer = null;
    const pendingChanges = {};

    window.supaEdu.initRealtime((type, classId, row) => {
      // 원격 변경을 로컬 state에 즉시 반영
      if (type === 'progress') {
        state.progress[classId] = row.status;
      } else if (type === 'quiz') {
        state.quizState[classId] = { answered: row.answered || {}, score: row.score || 0 };
      }
      pendingChanges[classId] = type;

      // localStorage 즉시 동기화
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          progress: state.progress, quizState: state.quizState
        }));
      } catch(e) {}

      // UI 갱신은 디바운스 처리 (300ms 내 중복 이벤트 병합)
      clearTimeout(realtimeTimer);
      realtimeTimer = setTimeout(() => {
        renderSidebar();
        updateProgressBar();
        if (state.view === 'dashboard') {
          renderStatsCards();
          renderQuizChart();
          renderMasteryMatrix();
          renderModuleCards();
        } else if (state.view === 'lesson') {
          const changed = Object.keys(pendingChanges);
          if (changed.includes(state.currentClassId)) renderQuiz(state.currentClassId);
        }
        Object.keys(pendingChanges).forEach(k => delete pendingChanges[k]);
      }, 300);
    });
  }
}

// ── Meta Info 동적 계산 (N-05) ───────────────────────────────────────────────
function updateMetaInfo() {
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  const modCount = modules.length;
  const clsCount = modules.reduce((acc, m) => acc + (m.classes || []).length, 0);

  // duration 파싱 (예: "15분", "1시간 30분")
  function parseMins(dur) {
    if (!dur) return 0;
    let total = 0;
    const h = dur.match(/(\d+)\s*시간/);
    const m = dur.match(/(\d+)\s*분/);
    if (h) total += parseInt(h[1]) * 60;
    if (m) total += parseInt(m[1]);
    return total;
  }

  const totalMins = modules.reduce((acc, m) =>
    acc + (m.classes || []).reduce((s, c) => s + parseMins(c.duration), 0), 0);
  const hours = Math.floor(totalMins / 60);
  const mins  = totalMins % 60;
  const timeStr = hours > 0
    ? (mins > 0 ? `약 ${hours}시간 ${mins}분` : `약 ${hours}시간`)
    : `약 ${mins}분`;

  const headerMeta    = document.getElementById('headerMeta');
  const dashboardMeta = document.getElementById('dashboardMeta');
  if (headerMeta)    headerMeta.textContent    = `Autonomous Knowledge Core · ${clsCount} Classes`;
  if (dashboardMeta) dashboardMeta.textContent = `${modCount}개 모듈 · ${clsCount}개 클래스 · ${timeStr}`;
}

// ── Keyboard Shortcuts (F-01) ───────────────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (state.view !== 'lesson') return;
    if (e.key === 'ArrowRight') {
      const next = getNextClass(state.currentClassId);
      if (next) showLesson(next.id);
    } else if (e.key === 'ArrowLeft') {
      const prev = getPrevClass(state.currentClassId);
      if (prev) showLesson(prev.id);
    } else if (e.key === 'Escape') {
      showDashboard();
    }
  });
}

// ── Progress ────────────────────────────────────────────────────────────────
function loadProgress() {
  // 1) localStorage로 즉시 복원 (동기)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.progress  = saved.progress  || {};
      state.quizState = saved.quizState || {};
    }
  } catch(e) { state.progress = {}; state.quizState = {}; }

  // 2) Supabase에서 최신 데이터로 덮어쓰기 (비동기, 로드 후 UI 갱신)
  if (window.supaEdu) {
    window.supaEdu.updateSyncIndicator('syncing');
    window.supaEdu.sbLoadProgress().then(remote => {
      if (remote && Object.keys(remote.progress).length > 0) {
        state.progress  = remote.progress;
        state.quizState = remote.quizState;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          progress: state.progress, quizState: state.quizState
        }));
        renderSidebar();
        if (state.view === 'dashboard') showDashboard();
        else if (state.currentClassId)  showLesson(state.currentClassId);
      }
      window.supaEdu.updateSyncIndicator('synced');
    }).catch(() => window.supaEdu.updateSyncIndicator('error'));
  }
}

function saveProgress() {
  // 1) localStorage 즉시 저장 (동기)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      progress: state.progress, quizState: state.quizState
    }));
  } catch(e) { console.warn('localStorage save failed:', e); }

  // 2) Supabase 비동기 저장 (논블로킹)
  if (window.supaEdu) {
    window.supaEdu.updateSyncIndicator('syncing');
    window.supaEdu.sbSaveProgress(state.progress, state.quizState)
      .then(() => window.supaEdu.updateSyncIndicator('synced'))
      .catch(() => window.supaEdu.updateSyncIndicator('error'));
  }
}

function updateProgressBar() {
  const all   = getAllClasses();
  const total = all.length;
  const done  = all.filter(c => state.progress[c.id] === 'completed').length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
  const textEl = document.getElementById('progressText');
  const barEl  = document.getElementById('progressBar');
  if (textEl) textEl.textContent = `${done} / ${total} 완료`;
  if (barEl)  barEl.style.width  = pct + '%';
  // 모바일 미니 진행률
  const mobileBar  = document.getElementById('progressBarMobile');
  const mobileText = document.getElementById('progressTextMobile');
  if (mobileBar)  mobileBar.style.width  = pct + '%';
  if (mobileText) mobileText.textContent = pct + '%';
}

// ── Mastery (Option B) ──────────────────────────────────────────────────────
function getMastery(classId) {
  if (state.progress[classId] !== 'completed') return 'unfamiliar';
  const cls = findClassById(classId);
  if (!cls || !cls.quiz || cls.quiz.length === 0) return 'familiar';
  const qs = state.quizState[classId];
  if (!qs || Object.keys(qs.answered).length < cls.quiz.length) return 'familiar';
  const score = cls.quiz.reduce((acc, q, i) => acc + (qs.answered[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round((score / cls.quiz.length) * 100);
  if (pct >= 80) return 'mastered';
  if (pct >= 60) return 'proficient';
  return 'familiar';
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function getAllClasses() {
  const result  = [];
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  modules.forEach((mod, mi) => {
    (mod.classes || []).forEach((cls, ci) => {
      result.push({ ...cls, moduleId: mod.id, moduleIndex: mi, classIndex: ci });
    });
  });
  return result;
}

function findClassById(id) {
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  for (const mod of modules) {
    for (const cls of (mod.classes || [])) { if (cls.id === id) return cls; }
  }
  return null;
}

function getNextClass(classId) {
  const all = getAllClasses();
  const idx = all.findIndex(c => c.id === classId);
  return idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
}

function getPrevClass(classId) {
  const all = getAllClasses();
  const idx = all.findIndex(c => c.id === classId);
  return idx > 0 ? all[idx - 1] : null;
}

function getModuleProgress(moduleId) {
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  const mod   = modules.find(m => m.id === moduleId);
  if (!mod) return { done: 0, total: 0 };
  const total = (mod.classes || []).length;
  const done  = (mod.classes || []).filter(c => state.progress[c.id] === 'completed').length;
  return { done, total };
}

function getFirstIncompleteClass() {
  return getAllClasses().find(c => state.progress[c.id] !== 'completed') || null;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Sidebar (with search F-02) ──────────────────────────────────────────────
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // 사이드바 구조 최초 1회만 생성
  if (!document.getElementById('sidebarSearch')) {
    sidebar.innerHTML = `
      <div class="px-3 py-2 border-b border-slate-800 sticky top-0 bg-slate-950 z-10">
        <input id="sidebarSearch" type="text" placeholder="강의 검색..."
          class="w-full px-2.5 py-1.5 text-xs bg-slate-800 border border-slate-700 rounded-md text-slate-300 placeholder-slate-600 focus:outline-none"
          style="caret-color:${ACCENT}" />
      </div>
      <div id="sidebarModules"></div>`;

    document.getElementById('sidebarSearch').addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderSidebarModules();
    });
  }

  renderSidebarModules();
}

function renderSidebarModules() {
  const container = document.getElementById('sidebarModules');
  if (!container) return;
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  const q = (state.searchQuery || '').toLowerCase().trim();

  const modulesHtml = modules.map(mod => {
    const { done, total } = getModuleProgress(mod.id);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isOpen = !!state.sidebarOpen[mod.id];
    const filtered = (mod.classes || []).filter(cls => !q || cls.title.toLowerCase().includes(q));
    if (q && filtered.length === 0) return '';

    const classItems = filtered.map(cls => {
      const isActive   = state.currentClassId === cls.id;
      const isComplete = state.progress[cls.id] === 'completed';
      const dot = MASTERY_DOTS[getMastery(cls.id)];
      return `
        <div class="class-item flex items-center gap-2 px-4 py-2 cursor-pointer text-sm transition-colors hover:bg-slate-800
          ${isActive ? 'active' : ''} ${isComplete ? 'completed' : ''}"
          data-class-id="${cls.id}"
          style="${isActive ? `border-left:3px solid ${ACCENT}; padding-left:13px;` : 'border-left:3px solid transparent; padding-left:13px;'}">
          <span class="text-xs shrink-0">${dot}</span>
          <span class="${isActive ? 'text-white' : isComplete ? 'text-slate-400' : 'text-slate-300'} flex-1 truncate">
            ${escapeHtml(cls.title)}
          </span>
          <span class="text-slate-600 text-xs shrink-0">${cls.duration || ''}</span>
        </div>`;
    }).join('');

    const shouldOpen = q ? true : isOpen;
    return `
      <div class="module-block" data-module-id="${mod.id}">
        <div class="module-header flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-slate-800/50 transition-colors border-b border-slate-800/50"
          data-module-toggle="${mod.id}">
          <span class="text-base shrink-0">${mod.icon || '📦'}</span>
          <div class="flex-1 min-w-0">
            <div class="text-xs font-semibold text-slate-200 truncate">${escapeHtml(mod.title)}</div>
            <div class="flex items-center gap-2 mt-0.5">
              <div style="flex:1;height:3px;background:#1e293b;border-radius:2px;">
                <div style="width:${pct}%;height:100%;background:${pct===100 ? '#22c55e' : ACCENT};border-radius:2px;"></div>
              </div>
              <span class="text-xs text-slate-500 shrink-0">${done}/${total}</span>
            </div>
          </div>
          <span class="text-slate-500 text-xs ml-1 ${shouldOpen ? 'rotate-90' : ''}" style="display:inline-block;transition:transform 0.2s;">▶</span>
        </div>
        <div class="module-classes" style="max-height:${shouldOpen ? '2000px' : '0'}">${classItems}</div>
      </div>`;
  }).join('');

  container.innerHTML = modulesHtml;

  container.querySelectorAll('[data-module-toggle]').forEach(el => {
    el.addEventListener('click', () => {
      const modId = el.getAttribute('data-module-toggle');
      state.sidebarOpen[modId] = !state.sidebarOpen[modId];
      renderSidebarModules();
    });
  });
  container.querySelectorAll('[data-class-id]').forEach(el => {
    el.addEventListener('click', () => showLesson(el.getAttribute('data-class-id')));
  });
}

// ── CSV 내보내기 (N-06) ──────────────────────────────────────────────────────
function exportProgressCSV() {
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  const rows = [
    ['모듈', '클래스', '상태', '퀴즈 정답', '퀴즈 총문항', '퀴즈 점수(%)', '숙달도']
  ];

  modules.forEach(mod => {
    (mod.classes || []).forEach(cls => {
      const status   = state.progress[cls.id] === 'completed' ? '완료' : '미완료';
      const qs       = state.quizState[cls.id];
      const qLen     = cls.quiz ? cls.quiz.length : 0;
      const answered = qs && qLen > 0 && Object.keys(qs.answered || {}).length === qLen;
      const correct  = answered ? (qs.score || 0) : '';
      const total    = qLen > 0 ? qLen : '';
      const pct      = answered && qLen > 0 ? Math.round((qs.score / qLen) * 100) : '';
      const mastery  = MASTERY[getMastery(cls.id)]?.label || '';
      rows.push([mod.title, cls.title, status, correct, total, pct, mastery]);
    });
  });

  const csv = rows.map(r =>
    r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `akc-progress-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Dashboard ────────────────────────────────────────────────────────────────
function showDashboard() {
  state.view = 'dashboard';
  state.currentClassId = null;
  document.getElementById('dashboardView')?.classList.remove('hidden');
  document.getElementById('lessonView')?.classList.add('hidden');
  updateProgressBar();
  renderContinueWidget();
  renderStatsCards();
  renderQuizChart();
  renderMasteryMatrix();
  renderModuleCards();
  renderSidebar();
}

function renderContinueWidget() {
  const container = document.getElementById('continueBtn');
  if (!container) return;
  const all  = getAllClasses();
  const done = all.filter(c => state.progress[c.id] === 'completed').length;

  if (done === all.length && all.length > 0) {
    container.innerHTML = `
      <div class="flex items-center gap-3 p-4 rounded-xl bg-green-950/50 border border-green-800 mb-4">
        <span class="text-2xl">🎉</span>
        <div>
          <div class="text-green-400 font-semibold">모든 강의를 완료했습니다!</div>
          <div class="text-green-600 text-sm mt-0.5">AKC v4 전 과정을 마스터했습니다.</div>
        </div>
      </div>`;
    return;
  }

  const next = getFirstIncompleteClass();
  if (!next) return;
  const mod = (CURRICULUM.modules || []).find(m => m.id === next.moduleId);

  container.innerHTML = `
    <div class="flex items-center gap-4 p-4 rounded-xl mb-4 border"
      style="background:${ACCENT_DIM}33;border-color:${ACCENT_DARK}55;">
      <div class="flex-1">
        <div class="text-xs font-medium mb-1" style="color:${ACCENT}">이어서 학습</div>
        <div class="text-white font-semibold">${escapeHtml(next.title)}</div>
        <div class="text-slate-500 text-xs mt-0.5">${escapeHtml(mod ? mod.title : '')}</div>
      </div>
      <button id="continueClassBtn"
        class="px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors shrink-0"
        style="background:${ACCENT_DARK};"
        onmouseover="this.style.background='${ACCENT}'"
        onmouseout="this.style.background='${ACCENT_DARK}'">
        이어서 학습 →
      </button>
    </div>`;

  document.getElementById('continueClassBtn')?.addEventListener('click', () => {
    state.sidebarOpen[next.moduleId] = true;
    showLesson(next.id);
  });
}

// ── Stats Cards (N-03) ──────────────────────────────────────────────────────
function renderStatsCards() {
  const container = document.getElementById('statsCards');
  if (!container) return;
  const all   = getAllClasses();
  const total = all.length;
  const done  = all.filter(c => state.progress[c.id] === 'completed').length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

  // 전체 퀴즈 정답률
  let qCorrect = 0, qTotal = 0;
  all.forEach(c => {
    const qs = state.quizState[c.id];
    const qLen = c.quiz ? c.quiz.length : 0;
    if (qs && qLen > 0 && Object.keys(qs.answered || {}).length === qLen) {
      qCorrect += (qs.score || 0);
      qTotal   += qLen;
    }
  });
  const quizPct = qTotal > 0 ? Math.round((qCorrect / qTotal) * 100) : null;
  const quizColor = quizPct === null ? '#475569' : quizPct >= 80 ? '#22c55e' : quizPct >= 50 ? '#eab308' : '#f87171';

  // 숙달 클래스 수
  const masteredCnt  = all.filter(c => getMastery(c.id) === 'mastered').length;
  const proficientCnt = all.filter(c => getMastery(c.id) === 'proficient').length;

  // 예상 잔여 학습 시간 (duration 파싱)
  function parseMins(dur) {
    if (!dur) return 0;
    const m = dur.match(/(\d+)\s*분/);
    return m ? parseInt(m[1]) : 0;
  }
  const remainMins = all
    .filter(c => state.progress[c.id] !== 'completed')
    .reduce((acc, c) => acc + parseMins(c.duration), 0);
  const remainStr = remainMins >= 60
    ? `${Math.floor(remainMins / 60)}시간 ${remainMins % 60}분`
    : remainMins > 0 ? `${remainMins}분` : '—';

  const cards = [
    {
      label: '전체 완료율',
      value: `${pct}%`,
      sub: `${done} / ${total} 클래스`,
      color: pct === 100 ? '#22c55e' : ACCENT,
      icon: '📈'
    },
    {
      label: '퀴즈 정답률',
      value: quizPct !== null ? `${quizPct}%` : '—',
      sub: quizPct !== null ? `${qCorrect} / ${qTotal} 정답` : '퀴즈 미응시',
      color: quizColor,
      icon: '🧠'
    },
    {
      label: '숙달 현황',
      value: `${masteredCnt}개`,
      sub: `🟡 능숙 ${proficientCnt}개 포함`,
      color: '#22c55e',
      icon: '🏆'
    },
    {
      label: '잔여 학습 시간',
      value: remainStr,
      sub: `미완료 ${total - done}개 클래스`,
      color: '#94a3b8',
      icon: '⏱'
    }
  ];

  container.innerHTML = cards.map(c => `
    <div class="rounded-xl p-4 border border-slate-700 bg-slate-800/40">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-lg">${c.icon}</span>
        <span class="text-xs text-slate-400">${c.label}</span>
      </div>
      <div class="text-2xl font-bold mb-0.5" style="color:${c.color}">${c.value}</div>
      <div class="text-xs text-slate-500">${c.sub}</div>
    </div>`).join('');
}

// ── Quiz Score Chart (N-03) ──────────────────────────────────────────────────
function renderQuizChart() {
  const container = document.getElementById('quizChart');
  if (!container) return;
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];

  // 모듈별 퀴즈 점수 집계
  const data = modules.map(mod => {
    let correct = 0, total = 0, answered = 0;
    (mod.classes || []).forEach(c => {
      const qs   = state.quizState[c.id];
      const qLen = c.quiz ? c.quiz.length : 0;
      if (qLen > 0) {
        total += qLen;
        if (qs && Object.keys(qs.answered || {}).length === qLen) {
          correct  += (qs.score || 0);
          answered += qLen;
        }
      }
    });
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : null;
    return { label: mod.title, icon: mod.icon || '📦', pct, answered, total };
  }).filter(d => d.total > 0);

  if (data.every(d => d.pct === null)) {
    container.innerHTML = `
      <div class="rounded-xl border border-slate-700 p-4 mb-4">
        <div class="text-sm font-semibold text-slate-200 mb-2">모듈별 퀴즈 점수</div>
        <div class="text-xs text-slate-500">아직 퀴즈를 응시한 모듈이 없습니다.</div>
      </div>`;
    return;
  }

  const maxPct = 100;
  const bars = data.map(d => {
    const barPct = d.pct !== null ? d.pct : 0;
    const color  = d.pct === null ? '#334155'
                 : d.pct >= 80 ? '#22c55e'
                 : d.pct >= 50 ? '#eab308' : '#f87171';
    const label  = d.pct !== null ? `${d.pct}%` : '미응시';
    const labelColor = d.pct === null ? '#475569' : color;
    // title 단축 (12자 이하)
    const shortTitle = d.label.length > 12 ? d.label.slice(0, 11) + '…' : d.label;
    return `
      <div class="flex items-center gap-3 group" title="${escapeHtml(d.label)} — ${label}">
        <div class="text-sm shrink-0 w-5 text-center">${d.icon}</div>
        <div class="text-xs text-slate-400 w-28 truncate shrink-0">${escapeHtml(shortTitle)}</div>
        <div class="flex-1 relative" style="height:18px;background:#1e293b;border-radius:4px;overflow:hidden;">
          <div style="height:100%;width:${barPct}%;background:${color};border-radius:4px;transition:width 0.5s ease;"></div>
          ${d.pct !== null && d.pct >= 10 ? `<span style="position:absolute;left:6px;top:50%;transform:translateY(-50%);font-size:0.65rem;color:#0f172a;font-weight:700;">${d.pct}%</span>` : ''}
        </div>
        <div class="text-xs font-bold w-10 text-right shrink-0" style="color:${labelColor}">${label}</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="rounded-xl border border-slate-700 p-4 mb-4">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-semibold text-slate-200">모듈별 퀴즈 점수</span>
        <span class="text-xs text-slate-500">
          <span style="color:#22c55e">■</span> 80%+
          <span style="color:#eab308;margin-left:6px">■</span> 50%+
          <span style="color:#f87171;margin-left:6px">■</span> ~50%
        </span>
      </div>
      <div class="space-y-2">${bars}</div>
    </div>`;
}

// ── Mastery Matrix (Option B) ────────────────────────────────────────────────
function renderMasteryMatrix() {
  const container = document.getElementById('masteryMatrix');
  if (!container) return;
  const all    = getAllClasses();
  const counts = { unfamiliar: 0, familiar: 0, proficient: 0, mastered: 0 };
  all.forEach(c => counts[getMastery(c.id)]++);

  container.innerHTML = `
    <div class="rounded-xl border border-slate-700 p-4 mb-4">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-semibold text-slate-200">숙달도 현황</span>
        <span class="text-xs text-slate-500">${all.length}개 강의</span>
      </div>
      <div class="flex flex-wrap gap-3 mb-3">
        ${Object.entries(MASTERY).map(([k, v]) => `
          <div class="flex items-center gap-1.5">
            <span class="text-sm">${MASTERY_DOTS[k]}</span>
            <span class="text-xs text-slate-400">${v.label}</span>
            <span class="text-xs font-bold" style="color:${v.color}">${counts[k]}</span>
          </div>`).join('')}
      </div>
      <div class="flex flex-wrap gap-1">
        ${all.map(c => {
          const m = getMastery(c.id);
          const cfg = MASTERY[m];
          return `<div title="${escapeHtml(c.title)} — ${cfg.label}"
            style="width:14px;height:14px;border-radius:3px;background:${cfg.bg};border:1px solid ${cfg.border};cursor:pointer;transition:transform 0.1s;"
            onmouseover="this.style.transform='scale(1.4)'"
            onmouseout="this.style.transform='scale(1)'"
            onclick="showLesson('${c.id}')"></div>`;
        }).join('')}
      </div>
    </div>`;
}

function renderModuleCards() {
  const container = document.getElementById('moduleCards');
  if (!container) return;
  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];

  container.innerHTML = modules.map(mod => {
    const { done, total } = getModuleProgress(mod.id);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const allDone    = done === total && total > 0;
    const hasStarted = done > 0;
    const masteredCnt = (mod.classes || []).filter(c => getMastery(c.id) === 'mastered').length;
    const borderColor = allDone ? '#22c55e' : hasStarted ? ACCENT : '#334155';
    const badgeClass  = allDone ? 'text-green-400 bg-green-950' : hasStarted ? 'text-cyan-400 bg-cyan-950' : 'text-slate-500 bg-slate-800';
    const badgeText   = allDone ? '완료' : hasStarted ? '진행 중' : '미시작';

    // 퀴즈 평균 점수 계산 (전체 문항 응답 완료된 클래스만 집계)
    let quizCorrect = 0, quizTotal = 0;
    (mod.classes || []).forEach(c => {
      const qs = state.quizState[c.id];
      const qLen = c.quiz ? c.quiz.length : 0;
      if (qs && qLen > 0 && Object.keys(qs.answered || {}).length === qLen) {
        quizCorrect += (qs.score || 0);
        quizTotal   += qLen;
      }
    });
    const avgPct = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : null;
    const quizColor = avgPct === null ? '#475569' : avgPct >= 80 ? '#22c55e' : avgPct >= 50 ? '#eab308' : '#f87171';
    const quizBadge = avgPct === null
      ? `<span style="color:#475569">퀴즈 미응시</span>`
      : `<span style="color:${quizColor}">📊 평균 ${avgPct}%</span>`;

    return `
      <div class="rounded-xl p-4 bg-slate-800/50 border cursor-pointer hover:bg-slate-800 transition-all group"
        style="border-color:${borderColor}" data-module-card="${mod.id}">
        <div class="flex items-start justify-between mb-3">
          <span class="text-2xl">${mod.icon || '📦'}</span>
          <span class="text-xs px-2 py-0.5 rounded-full font-medium ${badgeClass}">${badgeText}</span>
        </div>
        <h3 class="text-sm font-semibold text-white mb-1 transition-colors" style="group-hover:color:${ACCENT}">
          ${escapeHtml(mod.title)}
        </h3>
        <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
          <span>${done} / ${total} 클래스</span>
          <span style="color:#22c55e">🟢 ${masteredCnt} 숙달</span>
        </div>
        <div class="text-xs mb-2">${quizBadge}</div>
        <div style="height:4px;background:#1e293b;border-radius:2px;">
          <div style="height:100%;width:${pct}%;background:${allDone ? '#22c55e' : ACCENT};border-radius:2px;transition:width 0.4s;"></div>
        </div>
      </div>`;
  }).join('');

  container.querySelectorAll('[data-module-card]').forEach(el => {
    el.addEventListener('click', () => {
      const modId = el.getAttribute('data-module-card');
      const mod   = (CURRICULUM.modules || []).find(m => m.id === modId);
      if (!mod || !mod.classes || !mod.classes.length) return;
      const target = mod.classes.find(c => state.progress[c.id] !== 'completed') || mod.classes[0];
      state.sidebarOpen[modId] = true;
      showLesson(target.id);
    });
  });
}

// ── Lesson ───────────────────────────────────────────────────────────────────
function showLesson(classId) {
  const cls = findClassById(classId);
  if (!cls) return;
  state.view = 'lesson';
  state.currentClassId = classId;

  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  for (const mod of modules) {
    if ((mod.classes || []).some(c => c.id === classId)) {
      state.sidebarOpen[mod.id] = true; break;
    }
  }

  document.getElementById('dashboardView')?.classList.add('hidden');
  document.getElementById('lessonView')?.classList.remove('hidden');
  renderLessonHeader(cls);
  renderContent(cls);
  renderKeyTerms(cls);
  renderQuiz(classId);
  renderLessonNav(classId);
  updateProgressBar();
  renderSidebar();
  document.getElementById('mainContent')?.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonHeader(cls) {
  const container = document.getElementById('lessonHeader');
  if (!container) return;
  const isComplete = state.progress[cls.id] === 'completed';
  const mastery    = getMastery(cls.id);

  const modules = (CURRICULUM && CURRICULUM.modules) ? CURRICULUM.modules : [];
  let modTitle = '', modIcon = '';
  for (const mod of modules) {
    if ((mod.classes || []).some(c => c.id === cls.id)) { modTitle = mod.title; modIcon = mod.icon || ''; break; }
  }

  container.innerHTML = `
    <div class="border-b border-slate-700 pb-5">
      <div class="flex items-center gap-2 text-xs text-slate-500 mb-2">
        <span>${modIcon}</span>
        <span>${escapeHtml(modTitle)}</span>
        <span class="text-slate-700">›</span>
        <span>${MASTERY_DOTS[mastery]} ${MASTERY[mastery].label}</span>
      </div>
      <div class="flex items-start justify-between gap-4">
        <h2 class="text-2xl font-bold text-white leading-tight">${escapeHtml(cls.title)}</h2>
        ${isComplete ? '<span class="text-xs px-2 py-1 rounded-full bg-green-950 text-green-400 border border-green-800 shrink-0 mt-1">✅ 완료됨</span>' : ''}
      </div>
      <div class="flex flex-wrap items-center gap-2 mt-3">
        ${cls.duration ? `<span class="text-xs px-2 py-1 rounded-full border"
          style="background:${ACCENT_DIM}55;color:${ACCENT};border-color:${ACCENT_DARK}55;">${escapeHtml(cls.duration)}</span>` : ''}
        ${cls.sourceSection ? `<span class="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">${escapeHtml(cls.sourceSection)}</span>` : ''}
        ${cls.level ? `<span class="text-xs px-2 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800">${escapeHtml(cls.level)}</span>` : ''}
      </div>
      ${cls.objective ? `
        <div class="mt-4 p-3 rounded-lg border" style="background:${ACCENT_DIM}22;border-color:${ACCENT_DARK}44;">
          <div class="text-xs font-semibold mb-1" style="color:${ACCENT}">학습 목표</div>
          <p class="text-sm text-slate-300">${escapeHtml(cls.objective)}</p>
        </div>` : ''}
    </div>`;
}

function renderContent(cls) {
  const container = document.getElementById('lessonContent');
  if (!container) return;
  const sections = cls.content || [];
  if (!sections.length) {
    container.innerHTML = '<p class="text-slate-500 text-sm italic">콘텐츠가 준비 중입니다.</p>';
    return;
  }
  container.innerHTML = sections.map(sec => `
    <div class="space-y-3">
      ${sec.heading ? `<h3 class="text-base font-semibold flex items-center gap-2" style="color:${ACCENT};">
        <span class="w-1 h-4 rounded inline-block" style="background:${ACCENT};"></span>
        ${escapeHtml(sec.heading)}
      </h3>` : ''}
      <div>${sec.html || ''}</div>
    </div>`).join('');
}

function renderKeyTerms(cls) {
  const container = document.getElementById('keyTerms');
  if (!container) return;
  const terms = cls.keyTerms || [];
  if (!terms.length) { container.innerHTML = ''; return; }
  const termId = 'keyTerms_' + cls.id;
  container.innerHTML = `
    <div class="rounded-xl border border-slate-700 overflow-hidden">
      <button class="w-full flex items-center justify-between px-4 py-3 bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
        onclick="toggleKeyTerms('${termId}')">
        <span class="text-sm font-semibold text-slate-200">📚 핵심 용어 (${terms.length}개)</span>
        <span id="${termId}_arrow" class="text-slate-500 text-xs" style="display:inline-block;transition:transform 0.2s;">▼</span>
      </button>
      <div id="${termId}" class="px-4 py-3 bg-slate-900/50">
        <div class="flex flex-wrap gap-2">
          ${terms.map(t => `
            <div class="term-chip">
              <span class="inline-block px-2.5 py-1 rounded-full text-xs font-medium border cursor-default"
                style="background:${ACCENT_DIM}55;color:${ACCENT};border-color:${ACCENT_DARK}55;">
                ${escapeHtml(t.term)}
              </span>
              <div class="term-tooltip">${escapeHtml(t.definition || t.desc || '')}</div>
            </div>`).join('')}
        </div>
        <dl class="mt-3 space-y-2">
          ${terms.map(t => `
            <div class="flex gap-3 text-xs">
              <dt class="font-semibold shrink-0 w-28" style="color:${ACCENT}">${escapeHtml(t.term)}</dt>
              <dd class="text-slate-400">${escapeHtml(t.definition || t.desc || '')}</dd>
            </div>`).join('')}
        </dl>
      </div>
    </div>`;
}

function toggleKeyTerms(id) {
  const el    = document.getElementById(id);
  const arrow = document.getElementById(id + '_arrow');
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? '' : 'none';
  if (arrow) arrow.style.transform = isHidden ? 'rotate(180deg)' : '';
}
window.toggleKeyTerms = toggleKeyTerms;

// ── Quiz (B-01 B-02 fixed + retry F-03) ─────────────────────────────────────
function renderQuiz(classId) {
  const container = document.getElementById('quizSection');
  if (!container) return;
  const cls = findClassById(classId);
  if (!cls) return;
  const questions = cls.quiz || [];
  if (!state.quizState[classId]) state.quizState[classId] = { answered: {}, score: 0 };
  const qs         = state.quizState[classId];
  const isComplete = state.progress[classId] === 'completed';

  if (!questions.length) {
    container.innerHTML = `
      <div class="rounded-xl border border-slate-700 p-5 bg-slate-800/30">
        <div class="text-sm font-semibold text-slate-300 mb-3">학습 체크</div>
        <p class="text-slate-500 text-sm mb-4">이 강의에는 퀴즈가 없습니다.</p>
        ${!isComplete
          ? `<button onclick="markComplete('${classId}')" class="px-4 py-2 rounded-lg text-white text-sm font-medium" style="background:${ACCENT_DARK}">학습 완료 표시</button>`
          : '<div class="flex items-center gap-2 text-green-400 text-sm"><span>✅</span><span>완료된 강의입니다.</span></div>'}
      </div>`;
    return;
  }

  const allAnswered = Object.keys(qs.answered).length === questions.length;

  const questionsHtml = questions.map((q, qIdx) => {
    const answered    = qs.answered.hasOwnProperty(qIdx);
    const selectedOpt = qs.answered[qIdx];

    const optsHtml = (q.options || []).map((opt, oIdx) => {
      let styleExtra = 'background:#1e293b; border:1px solid #334155; color:#cbd5e1;';
      let cls_extra  = '';
      if (answered) {
        if (oIdx === q.answer) {                              // ← B-02 FIX
          styleExtra = 'background:#14532d; border:1px solid #22c55e; color:#bbf7d0;';
          cls_extra  = 'correct';
        } else if (oIdx === selectedOpt && oIdx !== q.answer) { // ← B-02 FIX
          styleExtra = 'background:#450a0a; border:1px solid #ef4444; color:#fca5a5;';
          cls_extra  = 'wrong';
        } else {
          styleExtra = 'background:#1e293b; border:1px solid #334155; color:#64748b;';
        }
      }
      return `
        <button class="quiz-opt w-full text-left px-3 py-2.5 rounded-lg text-sm ${answered ? 'answered' : ''} ${cls_extra}"
          style="${styleExtra} transition:all 0.2s;"
          onclick="handleAnswer('${classId}', ${qIdx}, ${oIdx})" ${answered ? 'disabled' : ''}>
          <span class="font-mono text-xs mr-2 opacity-60">${String.fromCharCode(65 + oIdx)}.</span>${escapeHtml(opt)}
        </button>`;
    }).join('');

    const expHtml = answered && q.explanation
      ? `<div class="mt-2 p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-400">
          <span class="font-semibold" style="color:${ACCENT}">해설: </span>${escapeHtml(q.explanation)}
        </div>` : '';

    return `
      <div class="question-block space-y-2" data-q="${qIdx}">
        <p class="text-sm font-medium text-slate-200">
          <span class="font-semibold mr-1" style="color:${ACCENT}">Q${qIdx + 1}.</span>${escapeHtml(q.q)}
        </p>
        <div class="space-y-1.5">${optsHtml}</div>
        ${expHtml}
      </div>`;
  }).join('');

  let scoreHtml = '';
  if (allAnswered) {
    const score = questions.reduce((acc, q, i) => acc + (qs.answered[i] === q.answer ? 1 : 0), 0); // ← B-02 FIX
    qs.score = score;
    const pct          = Math.round((score / questions.length) * 100);
    const color        = pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-yellow-400' : 'text-red-400';
    const masteryLabel = pct >= 80 ? '🟢 숙달' : pct >= 60 ? '🟡 능숙' : '🔵 학습 완료';
    saveProgress();
    scoreHtml = `
      <div class="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-700">
        <div class="flex items-center justify-between mb-2">
          <div>
            <span class="text-sm text-slate-400">점수: </span>
            <span class="text-lg font-bold ${color}">${score} / ${questions.length}</span>
            <span class="text-xs text-slate-500 ml-2">(${pct}%)</span>
          </div>
          <span class="text-sm font-medium">${masteryLabel}</span>
        </div>
        <div class="flex gap-2">
          ${!isComplete
            ? `<button onclick="markComplete('${classId}')" class="px-4 py-2 rounded-lg text-white text-sm font-medium" style="background:${ACCENT_DARK}">학습 완료 표시</button>`
            : '<div class="flex items-center gap-2 text-green-400 text-sm"><span>✅</span><span>완료됨</span></div>'}
          <button onclick="retryQuiz('${classId}')"
            class="px-3 py-2 rounded-lg text-sm border border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors">
            다시 풀기
          </button>
        </div>
      </div>`;
  }

  const skipHtml = !allAnswered && !isComplete
    ? `<div class="mt-3 text-right">
        <button onclick="skipQuiz('${classId}')" class="text-xs text-slate-600 hover:text-slate-400 transition-colors underline">퀴즈 건너뛰기</button>
      </div>` : '';

  container.innerHTML = `
    <div class="rounded-xl border border-slate-700 overflow-hidden">
      <div class="px-5 py-3 bg-slate-800/60 border-b border-slate-700 flex items-center justify-between">
        <span class="text-sm font-semibold text-slate-200">📝 학습 체크 (${questions.length}문항)</span>
        <span class="text-xs text-slate-500">← → 키로 강의 이동 · Esc 대시보드</span>
      </div>
      <div class="p-5 space-y-5">${questionsHtml}${scoreHtml}${skipHtml}</div>
    </div>`;
}

function handleAnswer(classId, qIdx, optIdx) {
  const cls = findClassById(classId);
  if (!cls) return;
  if (!state.quizState[classId]) state.quizState[classId] = { answered: {}, score: 0 };
  const qs = state.quizState[classId];
  if (qs.answered.hasOwnProperty(qIdx)) return;
  qs.answered[qIdx] = optIdx;
  saveProgress();
  renderQuiz(classId);
  if (state.view === 'lesson') renderLessonHeader(cls);
}
window.handleAnswer = handleAnswer;

function skipQuiz(classId) {
  const cls = findClassById(classId);
  if (!cls) return;
  if (!state.quizState[classId]) state.quizState[classId] = { answered: {}, score: 0 };
  const qs = state.quizState[classId];
  (cls.quiz || []).forEach((q, i) => {
    if (!qs.answered.hasOwnProperty(i)) {
      const wrongOpt = (q.options || []).findIndex((_, oIdx) => oIdx !== q.answer);
      qs.answered[i] = wrongOpt >= 0 ? wrongOpt : 0;
    }
  });
  saveProgress();
  renderQuiz(classId);
}
window.skipQuiz = skipQuiz;

// ── Quiz Retry (F-03) ────────────────────────────────────────────────────────
function retryQuiz(classId) {
  if (!state.quizState[classId]) return;
  state.quizState[classId] = { answered: {}, score: 0 };
  saveProgress();
  renderQuiz(classId);
  if (state.view === 'lesson') renderLessonHeader(findClassById(classId));
}
window.retryQuiz = retryQuiz;

function markComplete(classId) {
  state.progress[classId] = 'completed';
  saveProgress();
  updateProgressBar();
  renderSidebar();
  renderQuiz(classId);
  renderLessonHeader(findClassById(classId));
  renderLessonNav(classId);
  const m = getMastery(classId);
  showToast(`✅ 학습 완료! ${MASTERY_DOTS[m]} ${MASTERY[m].label}`);
}
window.markComplete = markComplete;

// ── Progress Reset (F-04) ────────────────────────────────────────────────────
function resetProgress() {
  if (!confirm('⚠️ 모든 진행률과 퀴즈 기록을 초기화하시겠습니까?')) return;
  state.progress  = {};
  state.quizState = {};
  saveProgress();
  updateProgressBar();
  showDashboard();
  showToast('🔄 진행률이 초기화되었습니다.');
}
window.resetProgress = resetProgress;

function showToast(message) {
  document.getElementById('toast')?.remove();
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
    background:${ACCENT_DIM}; color:#e0f7fa; padding:10px 20px; border-radius:8px;
    border:1px solid ${ACCENT_DARK}; font-size:0.875rem; z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.5); pointer-events:none;
    animation:fadeInUp 0.3s ease;`;
  if (!document.getElementById('toastStyle')) {
    const style = document.createElement('style');
    style.id = 'toastStyle';
    style.textContent = `@keyframes fadeInUp {
      from { opacity:0; transform:translateX(-50%) translateY(12px); }
      to   { opacity:1; transform:translateX(-50%) translateY(0); }
    }`;
    document.head.appendChild(style);
  }
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function renderLessonNav(classId) {
  const container = document.getElementById('lessonNav');
  if (!container) return;
  const prev = getPrevClass(classId);
  const next = getNextClass(classId);
  const btnBase     = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors';
  const btnActive   = `${btnBase} bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600`;
  const btnDisabled = `${btnBase} bg-slate-800/30 text-slate-600 border border-slate-800 cursor-not-allowed`;

  container.innerHTML = `
    <button onclick="${prev ? `showLesson('${prev.id}')` : ''}"
      class="${prev ? btnActive : btnDisabled}" ${!prev ? 'disabled' : ''}>← 이전 강의</button>
    <button onclick="showDashboard()"
      class="${btnBase} bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700">대시보드로</button>
    <button onclick="${next ? `showLesson('${next.id}')` : ''}"
      class="${next ? btnActive : btnDisabled}" ${!next ? 'disabled' : ''}>다음 강의 →</button>`;
}
window.showLesson     = showLesson;
window.showDashboard  = showDashboard;

// Initialize
document.addEventListener('DOMContentLoaded', init);
