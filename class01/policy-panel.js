// AKC v4 교육 플랫폼 — 헌법·정책 패널 로직
(function () {
  'use strict';

  // ── 간단 마크다운 → HTML 변환 ───────────────────────────────────────────
  function mdToHtml(md) {
    if (!md) return '';
    let h = md
      // 코드 블록 (```lang...```)
      .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
        `<pre><code>${esc(code)}</code></pre>`)
      // 인라인 코드
      .replace(/`([^`]+)`/g, (_, code) =>
        `<code class="inline-code">${esc(code)}</code>`)
      // 굵게
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // 기울임
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // H1~H4
      .replace(/^#### (.+)$/gm, '<h4 class="md-h4">$1</h4>')
      .replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>')
      // 수평선
      .replace(/^---$/gm, '<hr class="md-hr">')
      // 표 (간단 파서)
      .replace(/((?:^\|.+\|\s*\n)+)/gm, (table) => parseTable(table))
      // 인용
      .replace(/^> (.+)$/gm, '<blockquote class="md-blockquote">$1</blockquote>')
      // 순서 없는 목록 항목
      .replace(/^[-*] (.+)$/gm, '<li class="md-li">$1</li>')
      // li 그룹 묶기
      .replace(/(<li[^>]*>[\s\S]*?<\/li>\s*)+/g, m => `<ul class="md-ul">${m}</ul>`)
      // 링크
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="md-link">$1</a>')
      // 줄바꿈 → <br> (빈 줄은 단락)
      .replace(/\n\n+/g, '</p><p class="md-p">')
      .replace(/\n/g, '<br>');
    return `<p class="md-p">${h}</p>`;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function parseTable(raw) {
    const rows = raw.trim().split('\n').filter(r => r.trim());
    let html = '<table class="md-table"><thead>';
    rows.forEach((row, idx) => {
      const cells = row.split('|').filter((_, i, a) => i > 0 && i < a.length - 1);
      if (idx === 0) {
        html += '<tr>' + cells.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
      } else if (idx === 1 && cells.every(c => /^[-: ]+$/.test(c))) {
        // separator row — skip
      } else {
        html += '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
      }
    });
    html += '</tbody></table>';
    return html;
  }

  // ── DOM refs ──────────────────────────────────────────────────────────────
  const view          = document.getElementById('policyView');
  const glossListEl   = document.getElementById('glossaryList');
  const glossDetailEl = document.getElementById('glossaryDetail');
  const glossSearchEl = document.getElementById('glossarySearch');
  const policyListEl  = document.getElementById('policyList');
  const policyContentEl = document.getElementById('policyContent');

  if (!view) return;

  // ── State ────────────────────────────────────────────────────────────────
  let glossFilter  = { type: 'all', q: '' };
  let policyFilter = { zone: 'all' };
  let selectedPolicy = null;

  // ── Zone 색상 매핑 ──────────────────────────────────────────────────────
  const ZONE_COLORS = {
    system:    { bg: '#1e3a5f', border: '#3b82f6', badge: '#60a5fa', label: '시스템 헌법' },
    agent:     { bg: '#1a3a2a', border: '#22c55e', badge: '#4ade80', label: 'AgentZone' },
    cognitive: { bg: '#3b1f5e', border: '#a855f7', badge: '#c084fc', label: 'CognitiveZone' },
    learning:  { bg: '#1a3b2e', border: '#10b981', badge: '#34d399', label: 'LearningZone' },
    docs:      { bg: '#2a2a1a', border: '#f59e0b', badge: '#fbbf24', label: '참고 문서' },
  };

  // ── 용어집 렌더 ───────────────────────────────────────────────────────────
  function renderGlossList() {
    const data  = window.GLOSSARY_DATA || [];
    const q     = glossFilter.q.toLowerCase();
    const type  = glossFilter.type;

    let filtered = data;
    if (type !== 'all') filtered = filtered.filter(d => d.type === type);
    if (q) filtered = filtered.filter(d =>
      d.ko.toLowerCase().includes(q) ||
      d.en.toLowerCase().includes(q) ||
      (d.desc || '').toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      glossListEl.innerHTML = '<div class="policy-empty">검색 결과 없음</div>';
      return;
    }

    // 용어 / 관계 그룹 분리
    const terms    = filtered.filter(d => d.type === 'term');
    const relations = filtered.filter(d => d.type === 'relation');

    let html = '';
    if (terms.length) {
      html += `<div class="gloss-cat-header" style="color:#60a5fa">📌 용어 (${terms.length})</div>`;
      html += terms.map(d => glossRow(d)).join('');
    }
    if (relations.length) {
      html += `<div class="gloss-cat-header" style="color:#f59e0b">🔗 관계 (${relations.length})</div>`;
      html += relations.map(d => glossRow(d)).join('');
    }
    glossListEl.innerHTML = html;

    // 클릭 이벤트
    glossListEl.querySelectorAll('.gloss-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = +row.getAttribute('data-idx');
        showGlossDetail(filtered[idx]);
      });
    });
  }

  function glossRow(d) {
    const typeColor = d.type === 'term' ? '#60a5fa' : '#f59e0b';
    return `<div class="gloss-row" data-idx="${(window.GLOSSARY_DATA||[]).indexOf(d)}">
      <span class="gloss-type" style="color:${typeColor}">${d.type === 'term' ? '용어' : '관계'}</span>
      <div class="gloss-names">
        <span class="gloss-ko">${esc(d.ko)}</span>
        <span class="gloss-en">${esc(d.en)}</span>
      </div>
    </div>`;
  }

  function showGlossDetail(d) {
    const typeColor = d.type === 'term' ? '#60a5fa' : '#f59e0b';
    glossDetailEl.innerHTML = `
      <div class="detail-back" id="glossBackBtn">‹ 목록으로</div>
      <span class="detail-cat-badge" style="color:${typeColor};border-color:${typeColor}">
        ${d.type === 'term' ? '용어' : '관계'}
      </span>
      <div class="detail-en">${esc(d.en)}</div>
      <div class="detail-ko">${esc(d.ko)}</div>
      <div class="detail-desc-label">설명</div>
      <div class="detail-desc">${esc(d.desc || '설명 없음')}</div>`;
    document.getElementById('glossBackBtn').addEventListener('click', hideGlossDetail);
    glossDetailEl.classList.remove('hidden');
    glossListEl.style.display = 'none';
    glossSearchEl.style.display = 'none';
  }

  function hideGlossDetail() {
    glossDetailEl.classList.add('hidden');
    glossListEl.style.display = '';
    glossSearchEl.style.display = '';
  }

  // ── 정책 목록 렌더 ────────────────────────────────────────────────────────
  function renderPolicyList() {
    const data = window.POLICY_DATA || [];
    const zone = policyFilter.zone;
    const filtered = zone === 'all' ? data : data.filter(d => d.zone === zone);

    if (filtered.length === 0) {
      policyListEl.innerHTML = '<div class="policy-empty">해당 항목 없음</div>';
      return;
    }

    // Zone 별 그룹
    const groups = {};
    filtered.forEach(d => {
      if (!groups[d.zone]) groups[d.zone] = [];
      groups[d.zone].push(d);
    });

    let html = '';
    Object.entries(groups).forEach(([z, items]) => {
      const zc = ZONE_COLORS[z] || { badge: '#94a3b8', label: z };
      html += `<div class="policy-zone-header" style="color:${zc.badge}">
        ${esc(zc.label)} (${items.length})
      </div>`;
      html += items.map(d => policyRow(d)).join('');
    });
    policyListEl.innerHTML = html;

    policyListEl.querySelectorAll('.policy-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.getAttribute('data-id');
        const item = (window.POLICY_DATA || []).find(d => d.id === id);
        if (item) showPolicyContent(item);
      });
    });
  }

  function policyRow(d) {
    const zc  = ZONE_COLORS[d.zone] || { badge: '#94a3b8', border: '#334155' };
    const active = selectedPolicy && selectedPolicy.id === d.id ? 'active' : '';
    return `<div class="policy-row ${active}" data-id="${esc(d.id)}" style="border-left-color:${zc.badge}">
      <div class="policy-row-title">${esc(d.title)}</div>
      <div class="policy-row-path" title="${esc(d.path)}">${esc(d.path)}</div>
      <div class="policy-row-summary">${esc(d.summary)}</div>
    </div>`;
  }

  function showPolicyContent(d) {
    selectedPolicy = d;
    const zc = ZONE_COLORS[d.zone] || { badge: '#94a3b8', border: '#334155' };

    policyContentEl.innerHTML = `
      <div class="policy-content-header">
        <div class="detail-back" id="policyBackBtn">‹ 목록으로</div>
        <span class="detail-cat-badge" style="color:${zc.badge};border-color:${zc.badge}">
          ${esc(d.zoneLabel)}
        </span>
        <div class="policy-content-title">${esc(d.title)}</div>
        <div class="policy-content-path">${esc(d.path)}</div>
      </div>
      <div class="policy-content-body">${mdToHtml(d.content)}</div>`;

    document.getElementById('policyBackBtn').addEventListener('click', hidePolicyContent);
    policyContentEl.classList.remove('hidden');
    policyListEl.style.display = 'none';
    // Re-render list to update active state
    renderPolicyList();
  }

  function hidePolicyContent() {
    selectedPolicy = null;
    policyContentEl.classList.add('hidden');
    policyListEl.style.display = '';
    renderPolicyList();
  }

  // ── 탭 필터 이벤트 ────────────────────────────────────────────────────────
  function initTabs() {
    // 용어 타입 탭
    document.querySelectorAll('.gloss-type-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gloss-type-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        glossFilter.type = btn.getAttribute('data-type');
        hideGlossDetail();
        renderGlossList();
      });
    });

    // 정책 zone 탭
    document.querySelectorAll('.policy-zone-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.policy-zone-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        policyFilter.zone = btn.getAttribute('data-zone');
        hidePolicyContent();
        renderPolicyList();
      });
    });

    // 용어 검색
    if (glossSearchEl) {
      glossSearchEl.addEventListener('input', () => {
        glossFilter.q = glossSearchEl.value.trim();
        renderGlossList();
      });
    }
  }

  // ── 공개 API ──────────────────────────────────────────────────────────────
  window.initPolicyPanel = function () {
    initTabs();
    renderGlossList();
    renderPolicyList();
  };

  const mainEl = document.getElementById('mainContent');

  function setMainPolicyMode(on) {
    if (!mainEl) return;
    if (on) {
      mainEl._origOverflow = mainEl.style.overflow;
      mainEl._origPadding  = mainEl.style.padding;
      mainEl.style.overflow = 'hidden';
      mainEl.style.padding  = '0';
    } else {
      mainEl.style.overflow = mainEl._origOverflow || '';
      mainEl.style.padding  = mainEl._origPadding  || '';
    }
  }

  window.showPolicyView = function () {
    const dv = document.getElementById('dashboardView');
    const lv = document.getElementById('lessonView');
    if (dv) dv.classList.add('hidden');
    if (lv) lv.classList.add('hidden');
    setMainPolicyMode(true);
    view.classList.remove('hidden');
    view.style.display = 'flex';
    document.querySelectorAll('[data-nav]').forEach(b => b.classList.remove('nav-active'));
    const policyNavBtn = document.getElementById('policyNavBtn');
    if (policyNavBtn) policyNavBtn.classList.add('nav-active');
  };

  window.hidePolicyView = function () {
    view.classList.add('hidden');
    view.style.display = 'none';
    setMainPolicyMode(false);
    document.querySelectorAll('[data-nav]').forEach(b => b.classList.remove('nav-active'));
  };

  // ── dashboardBtn 클릭 시 policyView 숨김 훅 ─────────────────────────────
  window.addEventListener('load', () => {
    const dashBtn = document.getElementById('dashboardBtn');
    if (dashBtn) {
      dashBtn.addEventListener('click', () => {
        if (!view.classList.contains('hidden')) {
          hidePolicyView();
        }
      });
    }
  });

  // ── 초기화 ────────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    if (window.GLOSSARY_DATA && window.POLICY_DATA) {
      window.initPolicyPanel();
    }
  });
})();
