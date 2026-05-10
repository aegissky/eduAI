// AKC v4 교육 플랫폼 — UI 유틸리티 (툴팁 트래커 + 모바일 사이드바 토글)

// ── AKC Tooltip 마우스 위치 추적 ─────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.akc-tip .akc-tooltip').forEach(tip => {
    tip.style.left = (e.clientX - 60) + 'px';
    tip.style.top  = (e.clientY - 80) + 'px';
  });
});

// ── 모바일 사이드바 토글 ──────────────────────────────────────────────────────
(function () {
  const btn     = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!btn || !sidebar || !overlay) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  btn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  // 모바일에서 수업 클릭 시 사이드바 자동 닫기
  sidebar.addEventListener('click', e => {
    if (e.target.closest('[data-class-id]') && window.innerWidth < 768) {
      closeSidebar();
    }
  });
})();
