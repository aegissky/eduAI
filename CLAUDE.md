# eduAI 개발 규칙

## CDN-OFFLINE 규칙 (필수)

> **외부 CDN 리소스는 반드시 로컬 번들로 대체한다.**

### 적용 대상
HTML 파일에서 `<script src="https://...">` 또는 `<link href="https://...">` 형태로 외부 CDN을 참조하는 모든 리소스.

### 절차

1. **CDN URL 확인** — 새 라이브러리 추가 시 CDN 참조 여부 검토
2. **로컬 다운로드** — `class01/assets/` 경로에 저장
   ```powershell
   Invoke-WebRequest -Uri "<CDN_URL>" -OutFile "class01/assets/<파일명>" -UseBasicParsing
   ```
3. **HTML 경로 교체** — CDN URL → `assets/<파일명>`
4. **git 커밋** — assets 파일 포함하여 커밋

### 현재 로컬 번들 목록

| 파일 | 원본 CDN | 용도 |
|------|----------|------|
| `assets/tailwind.min.js` | cdn.tailwindcss.com | UI 스타일링 |
| `assets/sql-wasm.js` | cdn.jsdelivr.net/npm/sql.js@1.12.0 | SQLite 엔진 |
| `assets/sql-wasm.wasm` | cdn.jsdelivr.net/npm/sql.js@1.12.0 | SQLite WASM 바이너리 |

### WASM/Worker 파일 경로 주의
- `locateFile` 또는 `workerUrl` 콜백이 있는 라이브러리는 `assets/` 경로로 재지정 필수
- 예시 (`storage-client.js`):
  ```js
  initSqlJs({ locateFile: f => `assets/${f}` })
  ```

### 오류 감지
- 로드 실패 시 `#cdnErrorBanner` 배너가 자동 표시됨 (`index.html`)
- 새 HTML 파일 추가 시 동일한 오류 감지 스크립트 포함 필수:
  ```html
  <script>
    window.addEventListener('error', function(e) {
      var src = (e.target && e.target.src) || '';
      if (src.includes('assets/')) {
        document.getElementById('cdnErrorBanner').style.display = 'block';
      }
    }, true);
  </script>
  ```

---

## 스토리지 규칙

- **DB**: sql.js SQLite (브라우저 localStorage 직렬화)
- **인터페이스**: `window.supaEdu` — `storage-client.js` 에서 정의
- **백업**: `class01/backup_data.json` — 마이그레이션 데이터 스냅샷 (앱 최초 실행 시 자동 시드)
- **사용자 데이터 백업**: 대시보드 💾 백업 버튼 → JSON 파일 다운로드

## 파일 구조 규칙

```
eduAI/
├── class01/
│   ├── assets/        ← 로컬 번들 (CDN 대체 파일)
│   ├── *.html         ← 앱 페이지 (CDN 참조 금지)
│   ├── *.js           ← 앱 로직
│   ├── *.css          ← 커스텀 스타일
│   └── backup_data.json  ← 초기 시드 데이터
└── supabase/
    ├── schema.sql     ← SQLite DDL
    ├── migrate.py     ← 데이터 마이그레이션 스크립트
    └── backup_data.json  ← 원본 백업
```

## sync-task 규칙

- `sync-task.js`는 `D:\projects\products\eduAI\class01\sync_state.json` (원본)을 우선 읽음
- 태스크 상태 변경 시 **원본 + 로컬 양쪽** 동시 저장
- 원본과 불일치 시: `node sync-task.js --sync` 로 원본 → 로컬 재동기화
- `sync_state.json`은 `.gitignore` 제외 대상 (로컬 전용)

## 커밋 규칙

- `assets/` 파일은 반드시 커밋에 포함 (오프라인 동작 보장)
- `.env`, `*.db` 는 커밋 금지 (`.gitignore` 적용)
