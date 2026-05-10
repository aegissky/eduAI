// PART 4 — M12 (3 classes). Loaded after edu-data-p3.js.
// 참조 지식: guide/agent_skill_info/akc_sync.md
//           AKC 환경 구성 싱크 프로세스 룰 v1.0.0
(function () {
  const part4 = [

    // ─── M12 AKC 싱크 프로세스 & 실전 환경 구성 ──────────────────────
    {
      id: "m12", title: "AKC 싱크 프로세스", icon: "🔗", classes: [

        // ── c12-1 AKC 9단계 ↔ 프로젝트 에이전트 매핑 ──────────────────
        {
          id: "c12-1", title: "AKC 9단계 ↔ 프로젝트 에이전트 매핑", duration: "15분",
          objective: "AKC v4 9단계 인지 루프와 실제 프로젝트 에이전트(CRAWLER~SIMULATE)가 어떻게 1:1 매핑되는지 이해한다",
          sourceSection: "§akc-sync-2",
          content: [
            {
              heading: "싱크 프로세스 목적",
              html: "<p><code>#concept/_docs</code> 헌법에서 확정된 AKC v4 규칙을 실제 프로젝트 폴더에 적용하여, 해당 프로젝트가 <strong>9단계 인지 루프</strong>로 자율 동작할 수 있는 런타임 환경을 구성하는 프로세스입니다.</p><pre>#concept/_docs (헌법 원본)\n        │\n        ▼  [싱크 프로세스]\n{프로젝트}/  (AKC 환경 구성 완료)\n  ├── sync_state.json     ← 이벤트 버스\n  ├── history.md          ← 작업 CCTV\n  ├── task/               ← 태스크 큐 (MD 파일 기반)\n  ├── reports/            ← 분석·결과 보고서\n  └── kb/                 ← 프로젝트 지식 베이스</pre>"
            },
            {
              heading: "AKC 9단계 ↔ pagesystem 에이전트 매핑표",
              html: "<table><tr><th>AKC 단계</th><th>AKC 에이전트</th><th>프로젝트 에이전트</th><th>담당 Phase</th><th>입력</th><th>출력</th></tr><tr><td>① Observe</td><td>Perception</td><td><strong>CRAWLER</strong></td><td>Phase 1</td><td>대상 URL</td><td>phase01_crawler.json</td></tr><tr><td>② Understand</td><td>WorldModel</td><td><strong>EXTRACTOR</strong></td><td>Phase 2</td><td>phase01_crawler.json</td><td>phase02_extractor.json</td></tr><tr><td>③ Plan</td><td>Planner</td><td><strong>VISION</strong></td><td>Phase 3</td><td>phase02_extractor.json</td><td>phase03_vision.json</td></tr><tr><td>④ Decide</td><td>Decision</td><td><strong>PLANNER</strong></td><td>Phase 4</td><td>phase03_vision.json</td><td>phase04_planner.json</td></tr><tr><td>⑤ Execute</td><td>FE/BE/DB</td><td><strong>ASSET</strong></td><td>Phase 5</td><td>phase04_planner.json</td><td>src/ + ZIP</td></tr><tr><td>⑤ Execute (변형)</td><td>FE</td><td><strong>SIMULATE</strong></td><td>Phase 0</td><td>tokens.json</td><td>sim_*.html</td></tr><tr><td>⑥⑦ Verify·Reflect</td><td>Reflection</td><td><strong>knowhow/</strong></td><td>완료 후</td><td>ExecutionResult</td><td>kb/patterns/</td></tr><tr><td>⑧ Learn</td><td>LearningEng</td><td><strong>knowhow_loader.py</strong></td><td>완료 후</td><td>ReflectionReport</td><td>kb/metrics/</td></tr><tr><td>⑨ Improve</td><td>Evolution</td><td><em>미구현 — 추후</em></td><td>세션 종료 후</td><td>KnowledgeSummary</td><td>EvolutionProposal</td></tr><tr><td>조율</td><td>Lead Planner</td><td><strong>server.js</strong></td><td>전체</td><td>사용자 요청</td><td>jobId + 파이프라인 실행</td></tr></table>"
            },
            {
              heading: "파이프라인 실행 흐름",
              html: "<pre>[LEAD] sync_state.json 초기화\n  ↓\n[PERCEPTION/CRAWLER] Phase 1\n  → perception.status: idle → running → done\n  ↓\n[WORLDMODEL/EXTRACTOR] Phase 2\n  → worldmodel.status: running → done\n  ↓\n[PLANNER/VISION] Phase 3\n  → planner.status: running → done\n  ↓\n[DECISION/PLANNER_AGENT] Phase 4\n  → decision.status: running → done\n  ↓\n[EXECUTION/ASSET] Phase 5\n  → execution.asset.status: running → done\n  ↓\n[REFLECTION] 자동 실행\n  → kb/patterns/errors/ 또는 success/ 저장\n  ↓\n[LEARNINGENG] knowhow_loader.py\n  → kb/metrics/agents/ 지표 갱신\n  ↓\n[LEAD] pipeline.status = \"complete\"</pre>"
            }
          ],
          keyTerms: [
            { term: "싱크 프로세스", definition: "#concept/_docs 헌법을 실제 프로젝트에 적용하여 AKC 9단계 인지 루프 런타임 환경을 구성하는 절차" },
            { term: "이벤트 버스", definition: "sync_state.json — 모든 에이전트의 현재 상태를 실시간으로 공유하는 중앙 상태 파일" },
            { term: "작업 CCTV", definition: "history.md — 파이프라인 전 단계의 실행 이력을 시간 순서로 기록하는 로그 파일" },
            { term: "SIMULATE", definition: "⑤ Execute 변형. tokens.json을 입력받아 sim_*.html 시뮬레이션 파일을 생성하는 FE 특화 에이전트" }
          ],
          quiz: [
            { q: "AKC ③ Plan 단계에 매핑되는 pagesystem 에이전트는?", options: ["CRAWLER", "EXTRACTOR", "VISION", "PLANNER"], answer: 2, explanation: "Planner(AKC) ↔ VISION(pagesystem). Phase 3에서 phase02_extractor.json을 입력받아 phase03_vision.json을 생성합니다." },
            { q: "pagesystem에서 전체 파이프라인을 조율하는 에이전트(Lead 역할)는?", options: ["phase4_planner.py", "server.js", "knowhow_loader.py", "simulate.py"], answer: 1, explanation: "server.js가 Lead Planner 역할. 사용자 요청을 받아 jobId를 부여하고 Phase 1~5를 순차 실행합니다." },
            { q: "⑧ Learn 단계를 담당하는 pagesystem 구성요소는?", options: ["knowhow/", "knowhow_loader.py", "kb/patterns/", "reports/"], answer: 1, explanation: "LearningEng ↔ knowhow_loader.py. 완료 후 자동 실행되어 kb/metrics/agents/ 지표를 갱신합니다." },
            { q: "sync_state.json의 역할을 가장 잘 설명한 것은?", options: ["태스크 파일 저장소", "에이전트 간 실시간 상태 공유 이벤트 버스", "헌법 원본 보관소", "오류 로그 파일"], answer: 1, explanation: "sync_state.json은 HotZone(STM)의 이벤트 버스로, 모든 에이전트 상태를 idle/running/done/failed 값으로 실시간 공유합니다." }
          ]
        },

        // ── c12-2 싱크 프로세스 실행 절차 (Step 1~5) ─────────────────
        {
          id: "c12-2", title: "싱크 프로세스 실행 절차", duration: "15분",
          objective: "새 프로젝트에 AKC 환경을 구성하는 5단계 절차(부트스트랩 → 태스크 큐 → 지식 누적 → Evolution)를 실행할 수 있다",
          sourceSection: "§akc-sync-3",
          content: [
            {
              heading: "Step 1 — 프로젝트 부트스트랩 (최초 1회)",
              html: "<pre># 1. 런타임 폴더 생성\nmkdir -p task/{pending,in_progress,done,approval_pending,anomaly}\nmkdir -p reports\nmkdir -p kb/{patterns/{errors,success},metrics/agents,domains}\n\n# 2. 이벤트 버스 초기화\n# sync_state.json 생성 (모든 에이전트 status = \"idle\")\n\n# 3. 작업 CCTV 초기화\n# history.md 생성 (INIT 이벤트 기록)\n\n# 4. akc_sync.md 생성 (매핑 정책 문서)</pre>"
            },
            {
              heading: "Step 3 — 태스크 큐 관리 규칙",
              html: "<table><tr><th>상태</th><th>경로</th><th>파일명 규칙</th></tr><tr><td>처리 대기</td><td>task/pending/</td><td>YYYYMMDD_HHMMSS_{작업명}.md</td></tr><tr><td>실행 중</td><td>task/in_progress/</td><td>YYYYMMDD_HHMMSS_{작업명}.md</td></tr><tr><td>완료</td><td>task/done/</td><td>YYYYMMDD_HHMMSS_{작업명}.md</td></tr><tr><td>QA 반려</td><td>task/</td><td>task_err.md (통합 파일)</td></tr><tr><td>승인 대기</td><td>task/approval_pending/</td><td>YYYYMMDD_{스킬명}_approval.md</td></tr><tr><td>이상 감지</td><td>task/anomaly/</td><td>YYYYMMDD_{문제요약}.md</td></tr></table><p><strong>처리 우선순위:</strong> ① in_progress 비어있으면 pending 최고령 파일 처리 → ② 시작 시 pending→in_progress 이동 → ③ 완료 시 in_progress→done 이동 + sync_state.json 갱신 → ④ approval_pending 존재 시 사람 보고 → ⑤ anomaly 존재 시 Reflection 우선 처리</p>"
            },
            {
              heading: "Step 4 — 지식 누적 (Reflection → LearningEng)",
              html: "<pre>Phase 5 완료 후 Reflection 자동 실행\n  ├─ QG 통과 (성공)\n  │    → kb/patterns/success/{domain}_{timestamp}.md 저장\n  ├─ QG 실패 (오류)\n  │    → kb/patterns/errors/{오류코드}_{timestamp}.md 저장\n  └─ 크래시\n       → task/anomaly/ + history.md [ERROR] 기록\n\nLearningEng (knowhow_loader.py):\n  → kb/metrics/agents/{agent_id}_{날짜}.json 지표 갱신\n  → 동일 오류 3회 이상\n       → task/approval_pending/ 패턴 자산화 승인 요청</pre>"
            },
            {
              heading: "Step 5 — Evolution (헌법 개정 제안)",
              html: "<pre>kb/metrics/ 분석\n  → 반복 실패 패턴 발견\n  → reports/evolution_proposal_{날짜}.md 생성\n  → 사람에게 보고\n  → 승인 시 CLAUDE.md 관련 섹션 업데이트</pre><p>⚠️ Evolution은 현재 <strong>수동 운영</strong>. LearningEng가 누적 지식을 분석하고 개선안을 제안하면 사람이 최종 승인합니다.</p>"
            }
          ],
          keyTerms: [
            { term: "부트스트랩", definition: "새 프로젝트에 AKC 런타임 환경을 최초 1회 구성하는 절차. task/·reports/·kb/ 폴더 생성 + sync_state.json·history.md 초기화" },
            { term: "태스크 큐", definition: "task/ 폴더의 MD 파일로 에이전트 간 작업을 전달하는 파일 기반 큐 시스템" },
            { term: "approval_pending", definition: "사람의 승인을 기다리는 태스크 상태. 동일 오류 3회 이상 발생 시 LearningEng가 자동 생성" },
            { term: "anomaly", definition: "에이전트 크래시 등 정상 복구 불가 이상 상태. Reflection이 우선 처리하며 history.md에 [ERROR] 기록" },
            { term: "EvolutionProposal", definition: "LearningEng가 kb/metrics/ 분석 후 생성하는 헌법 개정 제안 보고서. 사람 승인 후 CLAUDE.md에 반영" }
          ],
          quiz: [
            { q: "새 프로젝트 부트스트랩 시 생성해야 하는 폴더가 아닌 것은?", options: ["task/pending/", "kb/patterns/errors/", "reports/", "node_modules/"], answer: 3, explanation: "부트스트랩 대상: task/(5개 하위), reports/, kb/(patterns/errors·success, metrics/agents, domains). node_modules/는 npm install로 별도 생성합니다." },
            { q: "동일 오류 3회 이상 발생 시 LearningEng의 자동 조치는?", options: ["즉시 헌법 수정", "task/anomaly/ 파일 생성", "task/approval_pending/ 패턴 자산화 승인 요청", "파이프라인 강제 중단"], answer: 2, explanation: "동일 오류 3회 이상 시 LearningEng는 task/approval_pending/에 패턴 자산화 승인 요청 파일을 생성합니다. 헌법 수정은 사람 승인 후에만 가능합니다." },
            { q: "태스크 파일의 처리 우선순위 1순위는?", options: ["anomaly/ 처리", "approval_pending/ 보고", "in_progress가 비어있으면 pending 최고령 파일", "done/ 검토"], answer: 0, explanation: "anomaly(이상 감지)가 존재하면 Reflection이 가장 먼저 처리합니다. 정상 흐름에서는 in_progress가 비어있을 때 pending 최고령 파일을 처리합니다." },
            { q: "Evolution 단계의 현재 운영 방식은?", options: ["완전 자동화", "수동 운영 (사람 승인 필수)", "LearningEng가 자동 적용", "QA 통과 후 자동 적용"], answer: 1, explanation: "Evolution은 현재 수동 운영입니다. 개선 제안서(evolution_proposal)가 생성되면 사람이 검토·승인 후 CLAUDE.md에 반영합니다." }
          ]
        },

        // ── c12-3 루프 가드 & 재시도 정책 + 구성 체크리스트 ────────────
        {
          id: "c12-3", title: "루프 가드 & 재시도 정책", duration: "10분",
          objective: "3가지 루프 가드 한도, 6개 에이전트별 재시도 정책, AKC 환경 구성 체크리스트를 숙지한다",
          sourceSection: "§akc-sync-5,6,7",
          content: [
            {
              heading: "루프 가드 정책 (§6 rules_재진입정책.md 준수)",
              html: "<table><tr><th>가드</th><th>기준</th><th>강제 조치</th></tr><tr><td>세션 재진입 총횟수</td><td>≤ 10회</td><td>Lead(server.js) 강제 에스컬레이션</td></tr><tr><td>LLM 턴 총횟수</td><td>≤ 50턴</td><td>Lead 강제 종료</td></tr><tr><td>세션 최대 실행 시간</td><td>≤ 120분</td><td>Lead 강제 중단</td></tr></table><pre>// server.js 루프 가드 체크 (Phase 시작 전)\nfunction checkLoopGuard(syncState) {\n  const lg = syncState.loopGuard;\n  if (lg.sessionReentryCount >= lg.maxReentry) {\n    throw new Error('[LOOPGUARD] 재진입 한도 초과');\n  }\n  if (lg.totalLlmTurns >= lg.maxLlmTurns) {\n    throw new Error('[LOOPGUARD] LLM 턴 한도 초과');\n  }\n}</pre>"
            },
            {
              heading: "에이전트별 재시도 정책",
              html: "<table><tr><th>에이전트</th><th>최대 재시도</th><th>백오프</th><th>초과 시</th></tr><tr><td>CRAWLER (Perception)</td><td>3회</td><td>1→3→9초</td><td>Lead 에스컬레이션</td></tr><tr><td>EXTRACTOR (WorldModel)</td><td>2회</td><td>즉시</td><td>PARTIAL로 전달</td></tr><tr><td>VISION (Planner)</td><td>3회</td><td>즉시</td><td>Lead 에스컬레이션</td></tr><tr><td>PLANNER_AGENT (Decision)</td><td>3회</td><td>즉시</td><td>Lead 에스컬레이션</td></tr><tr><td>ASSET (Execution)</td><td>2회</td><td>5→15초</td><td>Reflection에 FAILED</td></tr><tr><td>SIMULATE (Execution)</td><td>2회</td><td>5→15초</td><td>Reflection에 FAILED</td></tr></table>"
            },
            {
              heading: "sync_state.json 상태값 6종",
              html: "<table><tr><th>값</th><th>의미</th></tr><tr><td><code>idle</code></td><td>대기 중 — 아직 실행되지 않은 초기 상태</td></tr><tr><td><code>running</code></td><td>실행 중 — 현재 Phase 처리 중</td></tr><tr><td><code>done</code></td><td>성공 완료 — 정상 산출물 생성</td></tr><tr><td><code>failed</code></td><td>실패 — 재시도 가능 (재진입 정책 적용)</td></tr><tr><td><code>crashed</code></td><td>크래시 — 사람 개입 필요</td></tr><tr><td><code>skipped</code></td><td>건너뜀 — 이전 결과 재사용</td></tr></table>"
            },
            {
              heading: "AKC 환경 구성 체크리스트",
              html: "<ul><li>☐ sync_state.json 생성 (모든 에이전트 status = \"idle\")</li><li>☐ history.md 생성 (INIT 이벤트 기록)</li><li>☐ task/ 폴더 구조 생성 (5개 하위 폴더)</li><li>☐ reports/ 폴더 생성</li><li>☐ kb/ 폴더 구조 생성 (patterns/errors·success, metrics/agents, domains)</li><li>☐ CLAUDE.md에 AKC 에이전트 매핑 테이블 추가</li><li>☐ server.js에 sync_state.json 읽기/쓰기 통합</li><li>☐ history.md 자동 기록 로직 추가</li><li>☐ 루프 가드 검사 로직 추가</li><li>☐ Reflection 자동 실행 로직 추가 (Phase 5 완료 후)</li></ul>"
            }
          ],
          keyTerms: [
            { term: "루프 가드", definition: "무한 루프 방지를 위한 3가지 한도: 세션 재진입 ≤10회, LLM 턴 ≤50턴, 실행 시간 ≤120분" },
            { term: "PARTIAL 전달", definition: "EXTRACTOR 재시도 2회 초과 시 완전하지 않은 결과를 다음 Phase에 그대로 전달하는 정책 (Lead 에스컬레이션 없이 계속 진행)" },
            { term: "백오프(Backoff)", definition: "재시도 간 대기 시간. CRAWLER는 1→3→9초 지수 증가, ASSET·SIMULATE는 5→15초 고정 증가" },
            { term: "skipped 상태", definition: "이전 실행의 캐시 결과를 재사용할 때의 상태값. 동일 URL 재분석 등 중복 실행 방지에 활용" }
          ],
          quiz: [
            { q: "CRAWLER(Perception) 에이전트의 백오프 패턴은?", options: ["즉시 재시도", "5→15초", "1→3→9초", "10→30→90초"], answer: 2, explanation: "CRAWLER는 지수 백오프 방식으로 1→3→9초 대기 후 재시도합니다. 3회 초과 시 Lead 에스컬레이션." },
            { q: "sync_state.json에서 '사람 개입이 필요한' 상태값은?", options: ["failed", "skipped", "crashed", "idle"], answer: 2, explanation: "crashed는 에이전트가 비정상 종료된 상태로 재시도 정책으로 복구 불가. 사람 개입이 필요합니다." },
            { q: "LLM 턴 한도(50턴) 초과 시 강제 조치는?", options: ["Reflection 에스컬레이션", "Lead 강제 종료", "파이프라인 일시 정지", "anomaly 파일 생성"], answer: 1, explanation: "루프 가드 정책: LLM 턴 ≤50턴. 초과 시 Lead(server.js)가 파이프라인을 강제 종료합니다." },
            { q: "EXTRACTOR가 재시도 2회 초과 시 처리 방식은?", options: ["Lead 에스컬레이션", "파이프라인 중단", "PARTIAL 결과로 다음 Phase에 전달", "task/anomaly/ 생성"], answer: 2, explanation: "WorldModel(EXTRACTOR)은 2회 초과 시 완전하지 않은 PARTIAL 결과를 다음 Phase에 그대로 전달합니다. Lead 에스컬레이션 없이 계속 진행." }
          ]
        }
      ]
    }
  ];

  if (window.CURRICULUM && window.CURRICULUM.modules) {
    window.CURRICULUM.modules.push(...part4);
  }
})();
