// AKC v4 교육 플랫폼 — 영한 용어집 패널 로직
(function () {
  const panel       = document.getElementById('vocabPanel');
  const tab         = document.getElementById('vocabTab');
  const list        = document.getElementById('vocabList');
  const search      = document.getElementById('vocabSearch');
  const viewport    = document.getElementById('vocabViewport');
  const detail      = document.getElementById('vocabDetailContent');
  const headerTitle = document.getElementById('vocabHeaderTitle');
  let pinned = false;

  // 탭 클릭 → 고정/해제 토글
  tab.addEventListener('click', () => {
    pinned = !pinned;
    panel.classList.toggle('pinned', pinned);
  });

  search.addEventListener('input', () => {
    showList();
    renderVocabList(search.value.trim());
  });

  function escSafe(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function highlight(text, query) {
    if (!query) return escSafe(text);
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return escSafe(text);
    return escSafe(text.slice(0, idx))
      + '<mark class="vocab-highlight">' + escSafe(text.slice(idx, idx + query.length)) + '</mark>'
      + escSafe(text.slice(idx + query.length));
  }

  function showList() {
    viewport.classList.remove('show-detail');
    headerTitle.textContent = '📖 영한 용어집';
    search.style.display = '';
  }

  function showDetail(v) {
    const cats = window.VOCAB_CATS || {};
    const cfg  = cats[v.cat] || { label: v.cat, color: '#94a3b8' };

    detail.innerHTML = `
      <div class="detail-back" id="vocabBackBtn">
        ‹ 목록으로
      </div>
      <span class="detail-cat-badge" style="color:${cfg.color};">${escSafe(cfg.label)}</span>
      <div class="detail-en">${escSafe(v.en)}</div>
      <div class="detail-ko">${escSafe(v.ko)}</div>
      <div class="detail-desc-label">설명</div>
      <div class="detail-desc">${escSafe(v.desc || '설명이 없습니다.')}</div>`;

    document.getElementById('vocabBackBtn').addEventListener('click', showList);

    viewport.classList.add('show-detail');
    headerTitle.textContent = '📄 용어 설명';
    search.style.display = 'none';

    // 패널이 닫혀 있으면 열기
    if (!pinned) { panel.classList.add('pinned'); pinned = true; }
  }

  function renderVocabList(q) {
    const data  = window.VOCAB_DATA || [];
    const cats  = window.VOCAB_CATS || {};
    const lower = q.toLowerCase();

    const filtered = q
      ? data.filter(v => v.en.toLowerCase().includes(lower) || v.ko.includes(q) || (v.desc||'').includes(q))
      : data;

    if (filtered.length === 0) {
      list.innerHTML = '<div class="vocab-empty">검색 결과 없음</div>';
      return;
    }

    function makeRow(v, q) {
      return `<div class="vocab-row" data-en="${escSafe(v.en)}">
        <span class="vocab-en">${q ? highlight(v.en, q) : escSafe(v.en)}</span>
        <span class="vocab-ko">${q ? highlight(v.ko, q) : escSafe(v.ko)}</span>
      </div>`;
    }

    if (q) {
      list.innerHTML = filtered.map(v => makeRow(v, q)).join('');
    } else {
      const groups = {};
      filtered.forEach(v => {
        if (!groups[v.cat]) groups[v.cat] = [];
        groups[v.cat].push(v);
      });
      list.innerHTML = Object.entries(groups).map(([cat, items]) => {
        const cfg = cats[cat] || { label: cat, color: '#94a3b8' };
        return `<div class="vocab-cat-header" style="color:${cfg.color}">${escSafe(cfg.label)}</div>`
          + items.map(v => makeRow(v, '')).join('');
      }).join('');
    }

    list.querySelectorAll('.vocab-row').forEach(row => {
      row.addEventListener('click', () => {
        const en   = row.getAttribute('data-en');
        const item = (window.VOCAB_DATA || []).find(v => v.en === en);
        if (item) showDetail(item);
      });
    });
  }

  window.addEventListener('load', () => renderVocabList(''));
})();
