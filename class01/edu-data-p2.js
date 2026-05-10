// PART 2 — M5~M8 (14 classes). Loaded after edu-data.js.
// Extends window.CURRICULUM.modules[].
// P2_VERSION: 2026-03-18
// AUTO-GENERATED version — use sync-trigger.js --p2-check to verify
const P2_VERSION = "2026-03-18";
(function() {
  const part2 = [
    // ─── M5 LearningZone ───────────────────────────────────────────
    {
      id: "m5", title: "LearningZone — 진화 에이전트", icon: "🌱", classes: [
        {
          id: "c5-1", title: "Reflection Agent", duration: "15분",
          objective: "Verify 검증 4항목과 Reflect 반성 깊이 4단계를 이해한다",
          sourceSection: "§6-1",
          content: [
            { heading: "Phase 1: Verify 검증 4항목", html: "<table><tr><th>검증 항목</th><th>기준</th><th>실패 시</th></tr><tr><td>출력 완전성</td><td>기대 항목 100% 충족</td><td>부분 실패 마킹</td></tr><tr><td>품질 임계값</td><td>코드 ≥ 80줄, 커버리지 ≥ 70%</td><td>재작업 요청</td></tr><tr><td>형식 준수</td><td>TypeScript/TSX 오류 0건</td><td>즉시 재작업</td></tr><tr><td>일관성</td><td>이전 결과 + 설계 원칙 일치</td><td>경고 기록</td></tr></table>" },
            { heading: "Phase 2: Reflect 반성 깊이 4단계", html: "<table><tr><th>깊이</th><th>트리거</th><th>분석 방법</th></tr><tr><td>Shallow</td><td>성공 케이스</td><td>성공 요인 1~2개 추출</td></tr><tr><td>Standard</td><td>첫 번째 실패</td><td>직접 원인 + 수정 방안</td></tr><tr><td>Deep</td><td>동일 패턴 2회↑</td><td>5-Why 근본 원인 분석</td></tr><tr><td>Critical</td><td>전체 파이프라인 실패</td><td>Lead 에스컬레이션 + 긴급 분석</td></tr></table>" }
          ],
          keyTerms: [
            { term: "5-Why", definition: "반복 실패 시 사용하는 근본 원인 분석법. '왜'를 5번 물어 원인의 원인을 추적" },
            { term: "Critical 반성", definition: "전체 파이프라인 실패 시 Lead 에스컬레이션과 긴급 분석을 수행하는 최고 깊이" },
            { term: "ReflectionReport", definition: "Reflection이 생성하는 사후 분석 보고서. 품질 검증 결과·근본 원인·LearningRecord 포함" }
          ],
          quiz: [
            { q: "품질 임계값 기준에서 코드 커버리지는 몇 % 이상이어야 하나요?", options: ["50%", "60%", "70%", "80%"], answer: 2, explanation: "품질 임계값: 코드 ≥ 80줄, 커버리지 ≥ 70%. 미달 시 재작업 요청." },
            { q: "동일 패턴이 2회 이상 반복될 때 Reflect 깊이는?", options: ["Shallow", "Standard", "Deep", "Critical"], answer: 2, explanation: "동일 패턴 2회 이상 발생 시 Deep 반성 — 5-Why 근본 원인 분석을 수행합니다." },
            { q: "형식 준수 검증 실패(TypeScript 오류) 시 처리는?", options: ["경고 기록", "부분 실패 마킹", "즉시 재작업", "Lead 에스컬레이션"], answer: 2, explanation: "TypeScript/TSX 문법 오류 발생 시 즉시 재작업을 요청합니다." }
          ]
        },
        {
          id: "c5-2", title: "LearningEng Agent", duration: "15분",
          objective: "지식 성숙도 4레벨의 조건과 신뢰도, Evolution 트리거 4조건을 이해한다",
          sourceSection: "§6-2",
          content: [
            { heading: "지식 성숙도 4레벨 & KB 구조", html: "<table><tr><th>레벨</th><th>발생 횟수</th><th>신뢰도</th><th>적용</th></tr><tr><td>Hypothesis</td><td>1~2회</td><td>40%</td><td>참고용</td></tr><tr><td>Emerging</td><td>3~5회</td><td>65%</td><td>조건부</td></tr><tr><td>Established</td><td>6~10회</td><td>80%</td><td>일반</td></tr><tr><td>Canonical</td><td>11회↑</td><td>95%</td><td>기본 전략</td></tr></table><p>KB 저장 경로: 오류패턴 <code>kb/patterns/errors/</code> · 성공패턴 <code>kb/patterns/success/</code> · 에이전트성능 <code>kb/metrics/agents/</code> · 도메인지식 <code>kb/domains/</code> · 전략매핑 <code>kb/strategies/</code></p>" },
            { heading: "Evolution 트리거 4조건", html: "<ul><li>동일 패턴 <strong>5회↑ 미해결</strong></li><li>successRate <strong>&lt; 60%</strong></li><li>신규 도메인 canonical 패턴 <strong>≥ 10개</strong></li><li>병목 에이전트 대기 <strong>&gt; 70%</strong></li></ul>" }
          ],
          keyTerms: [
            { term: "Canonical", definition: "11회 이상 발생·95% 신뢰도의 최고 성숙 지식. 에이전트 기본 전략으로 적용" },
            { term: "KnowledgeSummary", definition: "LearningEng이 Evolution에 전달하는 학습 누적 보고서. Evolution 트리거 목록 포함" },
            { term: "Evolution 트리거", definition: "LearningEng이 Evolution Agent 실행을 요청하는 4가지 조건 중 하나 충족 시 발동" }
          ],
          quiz: [
            { q: "Canonical 레벨 지식의 신뢰도는?", options: ["80%", "90%", "95%", "100%"], answer: 2, explanation: "Canonical은 11회 이상 발생한 가장 성숙한 지식으로 신뢰도 95%, 에이전트 기본 전략으로 적용됩니다." },
            { q: "Evolution 트리거 조건 중 successRate 기준은?", options: ["< 50%", "< 60%", "< 70%", "< 80%"], answer: 1, explanation: "successRate < 60%일 때 Evolution 트리거가 발동됩니다." },
            { q: "3~5회 발생한 패턴의 지식 성숙도 레벨은?", options: ["Hypothesis", "Emerging", "Established", "Canonical"], answer: 1, explanation: "3~5회 발생 패턴은 Emerging(65% 신뢰도) 레벨로 조건부 적용됩니다." }
          ]
        },
        {
          id: "c5-3", title: "Evolution Agent", duration: "15분",
          objective: "헌법 변경 위험도 4단계와 개정 불변 절차를 이해한다",
          sourceSection: "§6-3",
          content: [
            { heading: "헌법 변경 위험도 4단계", html: "<table><tr><th>위험도</th><th>범위</th><th>승인 절차</th></tr><tr><td>Patch</td><td>오타/표현 수정</td><td>Lead 자동 승인</td></tr><tr><td>Minor</td><td>스킬 추가, 임계값 조정</td><td>Lead 검토 + 24시간</td></tr><tr><td>Major</td><td>역할 변경, 섹션 추가</td><td>Lead + <strong>인간 승인</strong></td></tr><tr><td>Breaking</td><td>에이전트 추가/제거, 구조 변경</td><td>전체 리뷰 + <strong>인간 승인</strong></td></tr></table>" },
            { heading: "개정 불변 절차", html: "<p>① Evolution이 <code>헌법_draft.md</code> 작성 → ② Lead에 제출 → ③ Patch/Minor: Lead 단독 승인 | Major/Breaking: 인간 승인 → ④ 승인 시 <code>헌법_draft.md</code>를 <code>헌법.md</code>로 대체 → ⑤ 이전 버전 <code>헌법_v{n}.md</code> 보존 → ⑥ 전체 에이전트 갱신 알림.</p><p>⚠️ <strong>불변 규칙:</strong> rules.md §1(최상위 원칙)은 Evolution이 수정 제안 불가. Lead + 인간 공동 결정만 허용.</p>" }
          ],
          keyTerms: [
            { term: "EvolutionProposal", definition: "Evolution이 Lead에 제출하는 헌법 개정 제안. 변경 항목·위험도·영향 시뮬레이션·초안 경로 포함" },
            { term: "헌법_draft.md", definition: "Evolution이 작성하는 헌법 개정 초안. 승인 후 헌법.md로 대체됨" },
            { term: "Breaking", definition: "에이전트 추가/제거, 구조 변경 등 아키텍처 수준 변경. 전체 리뷰 + 인간 승인 필수" }
          ],
          quiz: [
            { q: "Minor 수준 헌법 변경의 승인 절차는?", options: ["Lead 자동 승인", "Lead 검토 + 24시간", "Lead + 인간 승인", "전체 리뷰 + 인간 승인"], answer: 1, explanation: "Minor(스킬 추가·임계값 조정)는 Lead 검토 후 24시간 대기 후 승인됩니다." },
            { q: "rules.md §1 수정 권한은 누구에게 있나요?", options: ["Evolution 단독", "Lead 단독", "Evolution + Lead", "Lead + 인간 공동"], answer: 3, explanation: "rules.md §1(최상위 원칙)은 Evolution이 수정 제안 불가. Lead + 인간 공동 결정만 허용됩니다." },
            { q: "헌법 개정 승인 후 이전 버전 처리는?", options: ["삭제", "backup/ 이동", "헌법_v{n}.md로 보존", "Lead 아카이브"], answer: 2, explanation: "승인 후 이전 버전은 헌법_v{n}.md 파일명으로 동일 폴더에 보존됩니다." }
          ]
        }
      ]
    },
    // ─── M6 핵심 데이터 구조 ────────────────────────────────────────
    {
      id: "m6", title: "핵심 데이터 구조", icon: "📊", classes: [
        {
          id: "c6-1", title: "sync_state.json 전체 스키마", duration: "15분",
          objective: "sync_state.json의 주요 필드 그룹(constitutionRegistry, loopGuard, ruleInfo)을 이해한다",
          sourceSection: "§7-1",
          content: [
            { heading: "주요 필드 그룹", html: "<ul><li><strong>constitutionRegistry</strong>: lastBootstrappedAt, files(경로별 checksum+mtime+status), conflictsDetected, missingFiles</li><li><strong>loopGuard</strong>: totalReentryCount, totalLlmTurns, sessionStartAt, forcedEscalation</li><li><strong>각 에이전트 상태</strong>: perception / worldmodel / planner / decision / reflection / learningeng / evolution — 각각 status + 관련 필드</li><li><strong>ruleInfo</strong>: lastCheckedAt, knownFiles(4개 파일 mtime), pendingReview</li></ul>" },
            { heading: "status 값 예시", html: "<table><tr><th>에이전트</th><th>status 값</th></tr><tr><td>perception</td><td>idle|collecting|processing|done|failed</td></tr><tr><td>decision</td><td>idle|reviewing|deciding|executing|paused|escalated</td></tr><tr><td>evolution</td><td>idle|analyzing|drafting|pending_approval|applying|done</td></tr></table>" }
          ],
          keyTerms: [
            { term: "constitutionRegistry", definition: "헌법 파일별 MD5 체크섬·수정시각·상태를 추적하는 등록부" },
            { term: "loopGuard", definition: "재진입 총횟수·LLM 턴·세션 시작 시각을 추적하는 무한 루프 방지 카운터" },
            { term: "ruleInfo", definition: "guide/rule_info/ 파일 변경 감지를 위한 기준 mtime 저장 필드" }
          ],
          quiz: [
            { q: "loopGuard에서 추적하는 값이 아닌 것은?", options: ["totalReentryCount", "totalLlmTurns", "sessionStartAt", "currentPlanId"], answer: 3, explanation: "currentPlanId는 planner 에이전트 상태 필드입니다. loopGuard는 재진입횟수·LLM턴·세션시작·강제에스컬레이션 여부를 추적합니다." },
            { q: "헌법 파일의 변경 감지에 사용하는 값 2가지는?", options: ["fileSize + encoding", "checksum(MD5) + mtime", "lineCount + hash", "filename + author"], answer: 1, explanation: "constitutionRegistry는 각 헌법 파일의 MD5 체크섬과 수정 시각(mtime)으로 변경을 감지합니다." },
            { q: "ruleInfo.pendingReview = true 의미는?", options: ["헌법 개정 대기", "guide/rule_info 변경 감지 후 사람 검토 대기", "에이전트 승인 대기", "loopGuard 초과"], answer: 1, explanation: "guide/rule_info/ 파일 변경이 감지되어 사람의 ①②③ 의사결정을 기다리는 상태입니다." }
          ]
        },
        {
          id: "c6-2", title: "history.md 로그 포맷", duration: "15분",
          objective: "에이전트별 history.md 로그 8종 형식을 이해한다",
          sourceSection: "§7-2",
          content: [
            { heading: "에이전트별 로그 형식 8종", html: "<table><tr><th>에이전트</th><th>형식</th></tr><tr><td>Perception</td><td>[PERCEPTION] ts | uri | qualityFlag | bytes</td></tr><tr><td>WorldModel</td><td>[WORLDMODEL] ts | id | uncertainty=score | entities=n | domain</td></tr><tr><td>Planner</td><td>[PLANNER] ts | planId | strategy | tasks=n | estimatedTurns=n</td></tr><tr><td>Decision</td><td>[DECISION] ts | directiveId | decision | risk | benefit</td></tr><tr><td>Reflection</td><td>[REFLECTION] ts | reportId | score | depth | patterns=n</td></tr><tr><td>LearningEng</td><td>[LEARNINGENG] ts | learned=n patterns | canonical=n | trigger=bool</td></tr><tr><td>Evolution</td><td>[EVOLUTION] ts | proposalId | changes=n | riskLevel | status</td></tr><tr><td>Glossary 갱신</td><td>[GLOSSARY] ts | 변경 헌법: 파일 | 추가=n 수정=n 삭제=n</td></tr></table>" },
            { heading: "history.md 위치 & 원칙", html: "<p>위치: <code>{프로젝트폴더}/history.md</code> — <strong>_docs/ 내 생성 절대 금지.</strong> 모든 CoT(사고 과정)와 에이전트 상태 변화를 실시간으로 기록합니다. 세션 종료 시 Archivist가 시맨틱 압축(원본 보존, 압축본 추가).</p>" }
          ],
          keyTerms: [
            { term: "[GLOSSARY] 로그", definition: "헌법 변경 시 glossaryData 갱신 결과를 기록하는 로그. 추가/수정/삭제 항목 수 포함" },
            { term: "시맨틱 압축", definition: "세션 종료 시 Archivist가 history.md를 의미 단위로 압축. 원본은 보존하고 압축본 추가" },
            { term: "CoT", definition: "Chain of Thought — 에이전트의 모든 사고 과정. history.md에 실시간 기록 필수" }
          ],
          quiz: [
            { q: "history.md는 어느 폴더에 생성해야 하나요?", options: ["#concept/_docs/", "{프로젝트폴더}/", "guide/", "_review/"], answer: 1, explanation: "history.md는 반드시 프로젝트 폴더 루트에 생성해야 합니다. _docs/ 내 생성은 절대 금지입니다." },
            { q: "[LEARNINGENG] 로그에 포함되는 필드는?", options: ["uri | qualityFlag", "learned=n | canonical=n | trigger=bool", "strategy | tasks=n", "changes=n | riskLevel"], answer: 1, explanation: "[LEARNINGENG] ts | learned=n patterns | canonical=n | trigger=bool 형식으로 기록됩니다." },
            { q: "Glossary 갱신 로그 태그는?", options: ["[CONSTITUTION]", "[GLOSSARY]", "[GLOSSARY-UPDATE]", "[TERM]"], answer: 1, explanation: "[GLOSSARY] 태그로 헌법 변경 시 glossaryData 갱신 결과를 기록합니다." }
          ]
        },
        {
          id: "c6-3", title: "태스크 산출물 & 인터페이스 타입", duration: "15분",
          objective: "4가지 태스크 산출물 규격과 8개 핵심 인터페이스 타입의 생성/소비 주체를 이해한다",
          sourceSection: "§7-3,4",
          content: [
            { heading: "태스크 산출물 4종", html: "<table><tr><th>파일</th><th>발행 주체</th><th>제출 대상</th></tr><tr><td>task_fe_ok.md</td><td>FE Dev</td><td>QA Reviewer</td></tr><tr><td>task_be_ok.md</td><td>BE Dev</td><td>QA Reviewer</td></tr><tr><td>task_db_ok.md</td><td>DB Admin</td><td>QA Reviewer</td></tr><tr><td>task_err.md</td><td>QA Reviewer</td><td>AgentTeam 전체</td></tr></table>" },
            { heading: "인터페이스 타입 8개", html: "<table><tr><th>타입명</th><th>생성</th><th>소비</th></tr><tr><td>PerceptionPayload</td><td>Perception</td><td>WorldModel</td></tr><tr><td>WorldState</td><td>WorldModel</td><td>Planner</td></tr><tr><td>ExecutionPlan</td><td>Planner</td><td>Decision</td></tr><tr><td>ActionDirective</td><td>Decision</td><td>FE/BE/DB/Tool/Infra</td></tr><tr><td>ReflectionReport</td><td>Reflection</td><td>LearningEng, Evolution</td></tr><tr><td>LearningRecord</td><td>Reflection</td><td>LearningEng</td></tr><tr><td>KnowledgeSummary</td><td>LearningEng</td><td>Evolution</td></tr><tr><td>EvolutionProposal</td><td>Evolution</td><td>Lead</td></tr></table>" }
          ],
          keyTerms: [
            { term: "task_err.md", definition: "QA가 Trinity 검증 실패 시 발행하는 통합 오류 보고서. FE·BE·DB 전 영역 오류를 단일 파일로 관리" },
            { term: "LearningRecord", definition: "Reflection이 추출하는 성공·실패 패턴 데이터. LearningEng에 전달" },
            { term: "ActionDirective", definition: "Decision이 APPROVE 후 실행 에이전트에 위임하는 실행 지시 문서" }
          ],
          quiz: [
            { q: "task_err.md를 발행하는 에이전트는?", options: ["Lead Planner", "FE Dev", "QA Reviewer", "Reflection"], answer: 2, explanation: "task_err.md는 QA Reviewer가 Trinity 검증 실패 시 발행합니다. AgentTeam 전체에 전달됩니다." },
            { q: "KnowledgeSummary의 생성 주체와 소비 주체는?", options: ["Reflection → LearningEng", "LearningEng → Evolution", "Evolution → Lead", "Planner → Decision"], answer: 1, explanation: "KnowledgeSummary는 LearningEng이 생성하고 Evolution이 소비합니다." },
            { q: "8개 인터페이스 타입 중 복수의 에이전트가 소비하는 것은?", options: ["PerceptionPayload", "ExecutionPlan", "ReflectionReport", "ActionDirective"], answer: 2, explanation: "ReflectionReport는 LearningEng과 Evolution 두 에이전트가 소비합니다." }
          ]
        }
      ]
    },
    // ─── M7 운영 정책 ──────────────────────────────────────────────
    {
      id: "m7", title: "운영 정책", icon: "📋", classes: [
        {
          id: "c7-1", title: "프로젝트 부트스트랩 절차", duration: "15분",
          objective: "부트스트랩 5단계와 헌법 변경 알림 범위 규칙을 이해한다",
          sourceSection: "§8-1",
          content: [
            { heading: "부트스트랩 5단계", html: "<p>실행 시점: 새 세션 시작 / sync_state.json 없음 / 재부트 명령 / 헌법 갱신 알림</p><p>① 헌법 등록부 로드(rules.md §5 파싱) → ② 하위 헌법 변경 감지(MD5+mtime 비교, 변경없음/변경감지/신규/없음 4경우) → ③ 헌법 간 충돌 검사(에이전트명 중복·sync키 충돌) → ④ sync_state.json 초기화/갱신 → ⑤ history.md 부트스트랩 완료 기록</p>" },
            { heading: "헌법 변경 알림 범위", html: "<table><tr><th>변경 파일</th><th>알림 범위</th></tr><tr><td>rules.md</td><td><strong>전체 에이전트</strong> 즉시 재로드</td></tr><tr><td>lead/헌법.md</td><td>Lead + 전체 즉시 재로드</td></tr><tr><td>cognitive/*/헌법.md</td><td>해당 CognitiveZone 에이전트</td></tr><tr><td>evolution/*/헌법.md</td><td>해당 LearningZone 에이전트</td></tr><tr><td>fe/be/db/헌법.md</td><td>해당 에이전트 + QA</td></tr></table>" }
          ],
          keyTerms: [
            { term: "부트스트랩", definition: "프로젝트 시작 시 Lead가 실행하는 헌법 로드 및 시스템 초기화 절차 (5단계)" },
            { term: "헌법 등록부", definition: "rules.md §5에 정의된 모든 하위 헌법 경로 목록. 부트스트랩 시 변경 감지 대상" },
            { term: "충돌 검사", definition: "부트스트랩 ③단계. 에이전트명 중복·sync키 충돌 감지 시 Lead 중단 + 수동 해결 요청" }
          ],
          quiz: [
            { q: "부트스트랩은 몇 단계로 구성되나요?", options: ["3단계", "4단계", "5단계", "7단계"], answer: 2, explanation: "부트스트랩은 ①헌법등록부로드 ②변경감지 ③충돌검사 ④sync_state초기화 ⑤history.md기록 — 5단계입니다." },
            { q: "rules.md 변경 시 알림 범위는?", options: ["Lead만", "해당 Zone 에이전트", "전체 에이전트 즉시 재로드", "QA + Lead"], answer: 2, explanation: "rules.md 변경 시 전체 에이전트 즉시 재로드가 필요합니다." },
            { q: "헌법 간 충돌 발견 시 처리는?", options: ["자동 해결", "Lead 단독 판단", "Lead 중단 + 사람 수동 해결 요청", "상위 헌법 우선 자동 적용"], answer: 2, explanation: "충돌 발견 시 Lead가 중단하고 사람(Human)에게 수동 해결을 요청합니다." }
          ]
        },
        {
          id: "c7-2", title: "에스컬레이션 공통 절차", duration: "15분",
          objective: "에스컬레이션 3단계와 Lead의 4가지 결정 분기를 이해한다",
          sourceSection: "§8-2",
          content: [
            { heading: "에스컬레이션 3단계", html: "<p>① <strong>상태 스냅샷 저장</strong>: sync_state.json + history.md에 현재 상태 전체 기록</p><p>② <strong>Lead에 보고</strong>: 발생 단계(에이전트명), 재시도 횟수 및 각 시도 결과, 최종 오류/미충족 조건, 권고 행동</p><p>③ <strong>Lead 결정 4가지 분기</strong></p>" },
            { heading: "Lead 결정 4가지 분기", html: "<table><tr><th>결정</th><th>처리</th></tr><tr><td>재시작 지시</td><td>새 파이프라인 세션으로 재실행</td></tr><tr><td>부분 결과 사용</td><td>PARTIAL 플래그로 이후 단계 계속</td></tr><tr><td>입력 수정 후 재실행</td><td>사람(Human)에게 입력 수정 요청</td></tr><tr><td>중단</td><td>현재 세션 종료, Reflection 최소 기록</td></tr></table>" }
          ],
          keyTerms: [
            { term: "에스컬레이션", definition: "에이전트가 자력으로 처리 불가 시 Lead에 보고하고 결정을 위임하는 절차" },
            { term: "PARTIAL 플래그", definition: "부분 결과를 사용하며 이후 단계를 계속 진행할 때 붙이는 불완전 표시" },
            { term: "상태 스냅샷", definition: "에스컬레이션 시 sync_state.json + history.md에 저장하는 현재 시스템 상태 전체 기록" }
          ],
          quiz: [
            { q: "에스컬레이션 첫 번째 단계는?", options: ["Lead에 보고", "상태 스냅샷 저장", "새 파이프라인 시작", "사람에게 수정 요청"], answer: 1, explanation: "에스컬레이션 ①단계는 sync_state.json + history.md에 현재 상태 스냅샷을 저장하는 것입니다." },
            { q: "Lead가 '부분 결과 사용' 결정 시 처리는?", options: ["세션 종료", "재시작", "PARTIAL 플래그로 계속 진행", "사람 개입 요청"], answer: 2, explanation: "부분 결과 사용 시 PARTIAL 플래그를 붙여 이후 단계를 계속 진행합니다." },
            { q: "Lead에 보고 시 포함 항목이 아닌 것은?", options: ["발생 단계(에이전트명)", "재시도 횟수", "권고 행동", "다음 프로젝트 계획"], answer: 3, explanation: "에스컬레이션 보고 항목: 발생 단계·재시도 횟수·최종 오류·권고 행동. 다음 프로젝트 계획은 포함 안 됩니다." }
          ]
        },
        {
          id: "c7-3", title: "헌법 관리 정책", duration: "15분",
          objective: "가이드 참조 트리거 절차, 파일 분리 300줄 정책, Glossary 갱신 체크리스트를 이해한다",
          sourceSection: "§9",
          content: [
            { heading: "'최신 정보 참고해' 트리거", html: "<p>키워드 <strong>'최신 정보 참고해'</strong> 수신 시: ① guide/ 폴더 전체 분석 → ② _docs 헌법 연관성 검토 → ③ 리뷰 보고서 생성(<code>_review/YYYY-MM-DD_가이드참조리뷰.md</code>) → ④ 이메일 발송(wskyland@gmail.com) → ⑤ 사람 승인 → ⑥ _docs 적용.</p><p>이 키워드 없이는 guide/ 내용을 헌법에 적용하지 않습니다.</p>" },
            { heading: "파일 분리 & Glossary 갱신", html: "<p>파일 분리 트리거: 헌법 파일 <strong>300줄 초과</strong> → <code>원본파일명_분리주제.md</code> 생성. 재분리 시 <code>원본파일명_분리주제_하위주제.md</code>.</p><p>Glossary 체크리스트 6항목: ① term이 §0 에이전트명과 일치 ② relation이 §4 협업관계와 일치 ③ 신규 en 값이 nodes[].id와 충돌 없음 ④ (AKC v4 신규/갱신) 태그 포함 ⑤ orphan relation 없음 ⑥ [GLOSSARY] 로그 기록</p>" }
          ],
          keyTerms: [
            { term: "가이드 지식 참조 트리거", definition: "'최신 정보 참고해' 키워드로 발동. guide/ 분석→리뷰→이메일→승인→헌법 적용 5단계" },
            { term: "파일 분리 300줄", definition: "헌법 파일이 300줄 초과 시 분리 파일 생성 트리거. 원본파일명_분리주제.md 형식" },
            { term: "orphan relation", definition: "에이전트 삭제 후 해당 에이전트를 참조하는 glossaryData 관계 항목이 남아있는 상태. 금지" }
          ],
          quiz: [
            { q: "가이드 참조 트리거 키워드는?", options: ["'가이드 적용해'", "'헌법 갱신해'", "'최신 정보 참고해'", "'업데이트해'"], answer: 2, explanation: "'최신 정보 참고해' 키워드만이 가이드 참조 → 헌법 적용 절차를 트리거합니다." },
            { q: "헌법 파일 분리 트리거 조건은?", options: ["200줄 초과", "250줄 초과", "300줄 초과", "500줄 초과"], answer: 2, explanation: "헌법 파일이 300줄을 초과할 때 분리 대상 섹션을 별도 파일로 분리합니다." },
            { q: "Glossary 갱신 후 history.md에 기록하는 태그는?", options: ["[CONSTITUTION]", "[TERM-UPDATE]", "[GLOSSARY]", "[VOCAB]"], answer: 2, explanation: "[GLOSSARY] ts | 변경 헌법: {파일} | 추가=n 수정=n 삭제=n 형식으로 기록합니다." }
          ]
        },
        {
          id: "c7-4", title: "프로젝트 & 업데이트 관리 정책", duration: "15분",
          objective: "_docs/ 화이트/블랙리스트, 런타임 폴더 구조, 업데이트 잠금 4조건을 이해한다",
          sourceSection: "§12, §13",
          content: [
            { heading: "_docs/ 허용/금지 & 런타임 구조", html: "<p><strong>허용(화이트리스트)</strong>: rules.md, rules_*.md, */헌법.md, */헌법_draft.md, */헌법_v{n}.md, edu/DOCX.md, _review/*.md</p><p><strong>금지(블랙리스트)</strong>: sync_state.json → 프로젝트 폴더 루트 / history.md → 프로젝트 폴더 / task_*.md → {프로젝트}/task/ / kb/ → {프로젝트}/kb/</p><p><strong>런타임 폴더</strong>: {프로젝트}/task/ + reports/ + kb/(patterns/metrics/domains/) + artifacts/</p>" },
            { heading: "업데이트 잠금 원칙 4조건", html: "<p>헌법 업데이트 허용 조건 <strong>4가지만</strong>:</p><ul><li>① '최신 정보 참고해' 발화</li><li>② 프로젝트 진행 중 명시적 요청</li><li>③ 프로젝트 완료 시 표 첨부 보고</li><li>④ 프로젝트 최종 완료 후 보고서 + 승인</li></ul><p>금지: 자의적 수정 / guide/rule_info 변경 자동 적용 / '필요할 것 같아서' 예방적 수정</p>" }
          ],
          keyTerms: [
            { term: "업데이트 잠금", definition: "헌법은 4가지 허용 조건 외에는 절대 수정 불가. Default: 잠금 상태" },
            { term: "화이트리스트", definition: "_docs/ 폴더에 존재할 수 있는 허용 파일 목록" },
            { term: "블랙리스트", definition: "_docs/ 폴더에 절대 생성 금지된 런타임 파일 목록" }
          ],
          quiz: [
            { q: "sync_state.json의 올바른 위치는?", options: ["_docs/", "_review/", "{프로젝트폴더} 루트", "kb/"], answer: 2, explanation: "sync_state.json은 _docs/ 내 생성이 금지되며 반드시 프로젝트 폴더 루트에 생성해야 합니다." },
            { q: "업데이트 잠금 허용 조건 개수는?", options: ["2가지", "3가지", "4가지", "제한 없음"], answer: 2, explanation: "헌법 업데이트는 정확히 4가지 조건(①최신정보참고해 ②진행중명시적요청 ③완료시보고 ④최종완료)만 허용됩니다." },
            { q: "_docs/ 화이트리스트에 포함되는 것은?", options: ["history.md", "task_fe_ok.md", "edu/DOCX.md", "sync_state.json"], answer: 2, explanation: "edu/DOCX.md는 _docs/ 허용 파일(화이트리스트)에 포함됩니다." }
          ]
        }
      ]
    },
    // ─── M8 실전 & 퀵 레퍼런스 ────────────────────────────────────
    {
      id: "m8", title: "실전 & 퀵 레퍼런스", icon: "🚀", classes: [
        {
          id: "c8-1", title: "승인 서버 운영", duration: "15분",
          objective: "approval-server.js 실행 방법, PORT, 승인/반려 URL 패턴을 이해한다",
          sourceSection: "§10",
          content: [
            { heading: "서버 실행 & 승인 URL", html: "<pre>// 실행\nnode \"D:/aegis/core/concept/_docs/_review/approval-server.js\"\n\n// 전체 승인\nhttp://localhost:3456/approve?items=be,db,fe,lead\n\n// 개별 승인\nhttp://localhost:3456/approve?items=fe\nhttp://localhost:3456/approve?items=be,db\n\n// 반려\nhttp://localhost:3456/reject?reason=사유</pre>" },
            { heading: "포트 충돌 해결", html: "<pre>// 포트 사용 프로세스 확인 (Windows)\nnetstat -ano | findstr :3456\n\n// 프로세스 종료\ntaskkill /F /PID &lt;PID&gt;</pre>" }
          ],
          keyTerms: [
            { term: "approval-server.js", definition: "헌법 변경 승인을 처리하는 로컬 Node.js 서버. PORT 3456" },
            { term: "PORT 3456", definition: "approval-server.js의 기본 포트. 충돌 시 netstat으로 확인 후 taskkill로 해제" },
            { term: "/approve?items=", definition: "승인 URL 패턴. items= 파라미터에 be,db,fe,lead 중 대상 지정" }
          ],
          quiz: [
            { q: "approval-server.js가 사용하는 포트는?", options: ["3000", "3456", "8080", "5000"], answer: 1, explanation: "approval-server.js는 PORT 3456을 사용합니다." },
            { q: "FE와 BE만 승인하는 URL은?", options: ["?items=all", "?items=fe,be", "?items=be,db,fe,lead", "?approve=fe,be"], answer: 1, explanation: "http://localhost:3456/approve?items=fe,be 형식으로 개별 지정합니다." },
            { q: "포트 충돌 시 Windows에서 확인 명령은?", options: ["lsof -i :3456", "netstat -ano | findstr :3456", "ps aux | grep 3456", "port-check 3456"], answer: 1, explanation: "Windows에서 netstat -ano | findstr :3456 으로 포트 사용 프로세스 PID를 확인합니다." }
          ]
        },
        {
          id: "c8-2", title: "에이전트 I/O & 검증 스킬 총정리", duration: "15분",
          objective: "8개 에이전트의 입출력과 실패 처리, 13개 검증 스킬 전체를 파악한다",
          sourceSection: "§11-1,2",
          content: [
            { heading: "에이전트별 핵심 I/O", html: "<table><tr><th>에이전트</th><th>입력</th><th>출력</th><th>실패 시</th></tr><tr><td>Perception</td><td>URI/파일/API</td><td>PerceptionPayload</td><td>FAILED → Lead</td></tr><tr><td>WorldModel</td><td>PerceptionPayload</td><td>WorldState</td><td>≥0.8 → Lead</td></tr><tr><td>Planner</td><td>WorldState</td><td>ExecutionPlan</td><td>순환의존성 → WorldModel(1회)</td></tr><tr><td>Decision</td><td>ExecutionPlan</td><td>ActionDirective</td><td>3회 REJECT → Lead</td></tr><tr><td>FE/BE/DB</td><td>ActionDirective</td><td>task_*_ok.md</td><td>2회 실패 → Reflection FAILED</td></tr><tr><td>Reflection</td><td>실행 결과</td><td>ReflectionReport</td><td>Critical → Lead</td></tr><tr><td>LearningEng</td><td>LearningRecord</td><td>KnowledgeSummary</td><td>성능 저하 → Lead</td></tr><tr><td>Evolution</td><td>KnowledgeSummary</td><td>EvolutionProposal</td><td>적용 실패(1회) → Lead</td></tr></table>" },
            { heading: "전체 검증 스킬 13개", html: "<table><tr><th>스킬명</th><th>도메인</th><th>주체</th><th>시점</th></tr><tr><td>FE_디자인시스템_준수_검증</td><td>FE</td><td>자체</td><td>작업 중</td></tr><tr><td>FE_렌더링성능_검증</td><td>FE</td><td>자체</td><td>제출 전</td></tr><tr><td>FE_접근성_검증</td><td>FE</td><td>QA</td><td>QA</td></tr><tr><td>FE_UX흐름_검증</td><td>FE</td><td>QA</td><td>QA</td></tr><tr><td>BE_예외처리_검증</td><td>BE</td><td>자체</td><td>작업 중</td></tr><tr><td>BE_API응답_검증</td><td>BE</td><td>자체</td><td>제출 전</td></tr><tr><td>BE_보안_검증</td><td>BE</td><td>QA</td><td>QA</td></tr><tr><td>BE_로직정합성_검증</td><td>BE</td><td>QA</td><td>QA</td></tr><tr><td>DB_무결성_검증</td><td>DB</td><td>자체</td><td>작업 중</td></tr><tr><td>DB_쿼리성능_검증</td><td>DB</td><td>자체</td><td>제출 전</td></tr><tr><td>DB_마이그레이션_검증</td><td>DB</td><td>QA</td><td>QA</td></tr><tr><td>DB_스키마정합성_검증</td><td>DB</td><td>QA</td><td>QA</td></tr><tr><td>반복오류_사전차단_검증</td><td>공통</td><td>자체</td><td>작업 중</td></tr></table>" }
          ],
          keyTerms: [
            { term: "검증 스킬 13개", definition: "FE 4개 + BE 4개 + DB 4개 + 공통 1개. 자체 6개 + QA 6개 + 공통 1개" },
            { term: "FE/BE/DB 2회 실패", definition: "실행 에이전트 2회 실패 시 Reflection에 FAILED로 보고하는 에스컬레이션 임계값" },
            { term: "자체 검증 vs QA 검증", definition: "자체 검증(6개): 작업 중·제출 전 에이전트가 직접 수행. QA 검증(6개): QA Reviewer가 외부 시점에서 수행" },
            { term: "WorldModel uncertainty 0.8", definition: "WorldModel이 불확실성 점수 ≥ 0.8 계산 시 자력 해결 불가 판단 → Lead 에스컬레이션 트리거" },
            { term: "반복오류 사전차단 검증", definition: "kb/에 쌓인 실패 패턴을 작업 착수 전 참조하여 동일 오류 재발을 예방하는 공통 검증 스킬" }
          ],
          quiz: [
            { q: "전체 검증 스킬 수는?", options: ["9개", "11개", "13개", "15개"], answer: 2, explanation: "FE 4개 + BE 4개 + DB 4개 + 공통 1개 = 총 13개 검증 스킬입니다." },
            { q: "Evolution의 출력은?", options: ["KnowledgeSummary", "ReflectionReport", "EvolutionProposal", "ActionDirective"], answer: 2, explanation: "Evolution은 KnowledgeSummary를 입력받아 EvolutionProposal을 생성하여 Lead에 제출합니다." },
            { q: "FE/BE/DB 에이전트 2회 실패 시 처리는?", options: ["Lead 에스컬레이션", "Reflection에 FAILED 보고", "세션 종료", "QA 재검증"], answer: 1, explanation: "실행 에이전트(FE/BE/DB) 2회 실패 시 Reflection에 FAILED를 보고합니다." },
            { q: "WorldModel이 Lead에 에스컬레이션하는 조건은?", options: ["실패 3회", "uncertainty ≥ 0.8", "플랜 순환의존성", "패턴 부족"], answer: 1, explanation: "WorldModel은 불확실성 점수가 0.8 이상일 때 자력 해결 불가 판단하여 Lead에 에스컬레이션합니다." }
          ]
        },
        {
          id: "c8-3", title: "에스컬레이션 맵 & 치트시트", duration: "15분",
          objective: "전체 에스컬레이션 경로와 주요 파일 경로를 한 번에 정리한다",
          sourceSection: "§11-3,4",
          content: [
            { heading: "에스컬레이션 경로 맵", html: "<table><tr><th>출발</th><th>조건</th><th>도착</th></tr><tr><td>Perception</td><td>3회 실패</td><td>Lead</td></tr><tr><td>WorldModel</td><td>uncertainty ≥ 0.8</td><td>Lead</td></tr><tr><td>Planner</td><td>순환의존성 1회 해결 실패</td><td>Lead</td></tr><tr><td>Decision</td><td>REJECT_REPLAN 3회 초과</td><td>Lead</td></tr><tr><td>FE/BE/DB</td><td>2회 실패</td><td>Reflection FAILED</td></tr><tr><td>Reflection</td><td>Critical 깊이</td><td>Lead</td></tr><tr><td>LearningEng</td><td>에이전트 성능 저하 3사이클↑</td><td>Lead</td></tr><tr><td>loopGuard</td><td>재진입 10회 / LLM 50턴 / 120분</td><td>Lead 강제 에스컬레이션</td></tr></table>" },
            { heading: "주요 파일 경로 치트시트", html: "<table><tr><th>파일</th><th>경로</th></tr><tr><td>최상위 헌법</td><td>_docs/rules.md</td></tr><tr><td>재진입 정책</td><td>_docs/rules_재진입정책.md</td></tr><tr><td>프로젝트 관리</td><td>_docs/rules_프로젝트관리.md</td></tr><tr><td>헌법 관리</td><td>_docs/rules_헌법관리.md</td></tr><tr><td>업데이트 관리</td><td>_docs/rules_업데이트관리.md</td></tr><tr><td>이벤트 버스</td><td>{프로젝트}/sync_state.json</td></tr><tr><td>작업 로그</td><td>{프로젝트}/history.md</td></tr><tr><td>용어 관계집</td><td>#concept/script.js → glossaryData</td></tr><tr><td>승인 서버</td><td>_review/approval-server.js</td></tr><tr><td>교육 데이터</td><td>_docs/edu/DOCX.md</td></tr></table>" }
          ],
          keyTerms: [
            { term: "에스컬레이션 맵", definition: "각 에이전트의 실패 조건과 에스컬레이션 목적지를 정리한 경로 지도" },
            { term: "loopGuard 강제 에스컬레이션", definition: "재진입 10회/LLM 50턴/120분 초과 시 자동으로 Lead에 강제 에스컬레이션" },
            { term: "glossaryData", definition: "#concept/script.js 내 const glossaryData = [...] — 다이어그램 용어 패널 데이터" }
          ],
          quiz: [
            { q: "FE/BE/DB 에이전트의 에스컬레이션 목적지는?", options: ["Lead 직접", "QA Reviewer", "Reflection (FAILED)", "LearningEng"], answer: 2, explanation: "FE/BE/DB 2회 실패 시 Reflection에 FAILED로 보고됩니다. Lead 직접 에스컬레이션이 아닙니다." },
            { q: "glossaryData는 어느 파일에 있나요?", options: ["#concept/index.html", "#concept/script.js", "_docs/rules_헌법관리.md", "_review/approval-server.js"], answer: 1, explanation: "glossaryData는 #concept/script.js 파일 내 const glossaryData = [...] 에 정의됩니다." },
            { q: "LearningEng이 Lead에 에스컬레이션하는 조건은?", options: ["canonical 패턴 부족", "에이전트 성능 저하 3사이클 이상", "Evolution 트리거 발동", "KnowledgeSummary 생성 실패"], answer: 1, explanation: "LearningEng은 에이전트 성능 저하가 3사이클 이상 지속될 때 Lead에 에스컬레이션합니다." }
          ]
        },
        // ─── C8-4 헌법 동기화 ────────────────────────────────────────

        {
          id: "c8-4", title: "헌법 동기화 흐름", duration: "15분",
          objective: "헌법 변경 → DOCX.md → 교육 플랫폼으로 이어지는 2단계 동기화 흐름을 이해하고 운영할 수 있다",
          sourceSection: "§E, sync-trigger.js",
          content: [
            { heading: "전체 동기화 흐름", html: "<p>헌법 동기화는 <strong>2개 구간</strong>으로 나뉩니다.</p><table><tr><th>구간</th><th>흐름</th><th>방식</th></tr><tr><td><strong>구간 1</strong></td><td>헌법 파일 변경 → DOCX.md 갱신</td><td>🔴 수동</td></tr><tr><td><strong>구간 2</strong></td><td>DOCX.md 변경 → edu-data.js + curriculum.md 갱신</td><td>🟢 자동 (sync-trigger.js)</td></tr></table><pre>헌법 파일 변경\n    │  (수동)\n    ▼\nDOCX.md 갱신\n    │  (자동 — sync-trigger.js --watch)\n    ▼\nedu-data.js 버전 갱신\ncurriculum.md 날짜 갱신\n    │\n    ▼\n교육 플랫폼 반영</pre>" },
            { heading: "구간 1: 헌법 → DOCX.md (수동)", html: "<p>헌법 파일이 변경되는 5가지 시점:</p><ul><li>① <strong>헌법 내용 수정</strong> — 해당 DOCX.md 섹션 직접 업데이트</li><li>② <strong>새 헌법 파일 추가</strong> — DOCX.md §1-1 폴더 구조 + 해당 섹션 신설</li><li>③ <strong>헌법 300줄 초과 분리</strong> — §1-1 폴더 구조 + 분리 파일 링크 갱신</li><li>④ <strong>Evolution 개정 승인 후</strong> — 헌법_draft.md → 헌법.md 대체 완료 시</li><li>⑤ <strong>직접 명령</strong> — <code>'DOCX.md 갱신해'</code> 요청 시 즉시 전체 분석</li></ul><p>DOCX.md와 헌법 파일의 <strong>섹션 매핑 기준</strong>은 <code>curriculum.md</code>의 DOCX.md 섹션 → 클래스 매핑 테이블을 참조합니다.</p>" },
            { heading: "구간 2: DOCX.md → 교육 플랫폼 (자동)", html: "<p><code>sync-trigger.js</code>가 처리하는 내용:</p><ul><li>DOCX.md의 <code>&gt; **최종 갱신:**</code> 날짜 추출</li><li><code>edu-data.js</code>의 <code>DOCX_VERSION</code> 상수와 비교</li><li>버전 불일치 시: edu-data.js 버전 갱신 + curriculum.md 날짜 갱신</li><li>새 <code>## / ###</code> 헤딩 감지 시: 미매핑 경고 출력</li><li>기존 헤딩 삭제 감지 시: 삭제 경고 출력</li></ul><pre>// 1회 실행\nnode D:/aegis/core/concept/_docs/edu/sync-trigger.js\n\n// 감시 모드 (DOCX.md 저장 시 자동 실행)\nnode D:/aegis/core/concept/_docs/edu/sync-trigger.js --watch</pre>" },
            { heading: "sync-trigger.js 출력 예시", html: "<pre>==================================================\nAKC Education Sync Trigger\n==================================================\n✅ 버전 갱신: 2026-03-14 → 2026-04-01\n   edu-data.js DOCX_VERSION 갱신 완료\n   curriculum.md 날짜 갱신 완료\n\n⚠️  미매핑 섹션 (새로 추가됨 — curriculum.md에 클래스 추가 필요):\n   - ## 14. 새로운 정책\n\n✅ 동기화 완료 (2026-04-01T09:00:00)</pre>" }
          ],
          keyTerms: [
            { term: "구간 1 (수동)", definition: "헌법 파일 변경 → DOCX.md 갱신. 사람 또는 Claude Code가 직접 업데이트" },
            { term: "구간 2 (자동)", definition: "DOCX.md 변경 → sync-trigger.js → edu-data.js + curriculum.md 자동 버전 갱신" },
            { term: "DOCX_VERSION", definition: "edu-data.js 상단의 버전 상수. sync-trigger.js가 DOCX.md 날짜와 비교하여 갱신 여부 판단" },
            { term: "미매핑 섹션 경고", definition: "DOCX.md에 새 ## 헤딩이 추가됐는데 curriculum.md에 매핑된 클래스가 없을 때 출력되는 경고" }
          ],
          quiz: [
            { q: "헌법 → DOCX.md 구간의 동기화 방식은?", options: ["sync-trigger.js 자동", "fs.watch 감지", "수동 업데이트", "Evolution 자동 적용"], answer: 2, explanation: "헌법 파일 변경 → DOCX.md 갱신은 수동 구간입니다. 사람 또는 Claude Code가 직접 업데이트합니다." },
            { q: "sync-trigger.js가 버전 비교에 사용하는 DOCX.md 필드는?", options: ["> **버전:**", "> **최종 갱신:**", "# AKC v4", "> **관리 주체:**"], answer: 1, explanation: "DOCX.md의 '> **최종 갱신:** YYYY-MM-DD' 라인에서 날짜를 추출하여 edu-data.js의 DOCX_VERSION과 비교합니다." },
            { q: "sync-trigger.js --watch 모드에서 감시하는 파일은?", options: ["모든 헌법 파일", "edu-data.js", "DOCX.md", "curriculum.md"], answer: 2, explanation: "sync-trigger.js --watch는 DOCX.md 파일 하나만 감시합니다. 변경 감지 시 500ms 디바운스 후 동기화 실행." },
            { q: "새 ## 헤딩이 DOCX.md에 추가됐을 때 sync-trigger.js 동작은?", options: ["자동으로 클래스 생성", "미매핑 섹션 경고 출력", "오류로 중단", "edu-data.js에 빈 클래스 추가"], answer: 1, explanation: "미매핑 섹션을 경고로 출력합니다. 실제 클래스 추가는 수동으로 curriculum.md와 edu-data.js를 업데이트해야 합니다." }
          ]
        }
      ]
    }
  ];

  // ─── M9 실전 구현 & 캡스톤 (Option A) ─────────────────────────────────────
  const m9 = {
    id: "m9", title: "실전 구현 & 캡스톤", icon: "🚀", classes: [
      {
        id: "c9-1", title: "MCP 툴 연결 실습", duration: "15분",
        objective: "AKC 에이전트에 MCP 서버를 연결하는 방법을 이해하고 설정 구조를 익힌다",
        sourceSection: "§실전-1",
        content: [
          { heading: "MCP란?", html: "<p>Model Context Protocol — AI 에이전트가 외부 도구(파일, DB, API, 브라우저)에 접근하는 표준 프로토콜.</p><table><tr><th>MCP 도구 유형</th><th>역할</th><th>연관 AKC 에이전트</th></tr><tr><td>filesystem</td><td>파일 읽기/쓰기</td><td>ToolAgent</td></tr><tr><td>browser (Playwright)</td><td>웹 크롤링·스크린샷</td><td>Perception</td></tr><tr><td>database</td><td>DB 쿼리</td><td>DB Admin</td></tr><tr><td>search</td><td>실시간 검색</td><td>WorldModel</td></tr></table>" },
          { heading: "설정 방법", html: "<pre>// .claude/settings.json\n{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"D:/gitlab/projects\"]\n    },\n    \"playwright\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@playwright/mcp\"]\n    }\n  }\n}</pre>" }
        ],
        keyTerms: [
          { term: "MCP", definition: "Model Context Protocol — AI 에이전트가 외부 도구에 접근하는 표준 프로토콜 (2024 Anthropic 공개)" },
          { term: "ToolAgent", definition: "외부 API 호출, 코드 실행, 검색 등 도구 사용을 전담하는 AgentZone 에이전트" },
          { term: "filesystem MCP", definition: "파일 읽기/쓰기를 처리하는 MCP 서버 유형. ToolAgent와 연동하여 에이전트가 프로젝트 파일을 조작" },
          { term: "Playwright MCP", definition: "웹 브라우저 자동화 MCP 서버. Perception 에이전트의 웹 크롤링·스크린샷 수집에 활용" },
          { term: "mcpServers", definition: ".claude/settings.json에 정의하는 MCP 서버 설정 블록. command + args 구조로 각 서버를 선언" }
        ],
        quiz: [
          { q: "MCP에서 웹 크롤링을 담당하는 서버 유형은?", options: ["filesystem", "browser (Playwright)", "database", "search"], answer: 1, explanation: "browser 유형(Playwright MCP)이 웹 크롤링을 담당하며 Perception 에이전트와 연동됩니다." },
          { q: "MCP 서버 설정 파일 위치는?", options: [".env", "package.json", ".claude/settings.json", "mcp.config.js"], answer: 2, explanation: "MCP 서버는 .claude/settings.json의 mcpServers 섹션에 설정합니다." },
          { q: "DB 쿼리를 처리하는 MCP 서버 유형과 연관 에이전트는?", options: ["filesystem - ToolAgent", "browser - Perception", "database - DB Admin", "search - WorldModel"], answer: 2, explanation: "database 유형 MCP 서버가 DB 쿼리를 처리하며 DB Admin 에이전트와 연동됩니다." },
          { q: "MCP(Model Context Protocol)를 공개한 회사는?", options: ["OpenAI", "Google", "Anthropic", "Microsoft"], answer: 2, explanation: "MCP는 2024년 Anthropic이 공개한 AI 에이전트 도구 접근 표준 프로토콜입니다." }
        ]
      },
      {
        id: "c9-2", title: "tmux AgentTeam 실행", duration: "15분",
        objective: "tmux 병렬 처리로 여러 AKC 에이전트를 동시에 실행하는 구조를 이해한다",
        sourceSection: "§실전-2",
        content: [
          { heading: "tmux 세션 구조 (6 Windows)", html: "<table><tr><th>Window</th><th>에이전트</th><th>역할</th></tr><tr><td>lead</td><td>Lead Planner</td><td>태스크 배분·조율</td></tr><tr><td>cognitive</td><td>Perception→Decision</td><td>인지 파이프라인</td></tr><tr><td>agents</td><td>FE/BE/DB (3분할)</td><td>병렬 실행</td></tr><tr><td>qa</td><td>QA Reviewer</td><td>Trinity 검증</td></tr><tr><td>evolution</td><td>Reflection→Evolution</td><td>학습·진화</td></tr><tr><td>monitor</td><td>sync_state 감시</td><td>상태 모니터링</td></tr></table>" },
          { heading: "akc-start.sh 핵심 구조", html: "<pre>#!/bin/bash\nSESSION=\"akc-$(date +%Y%m%d)-${PROJECT_NAME}\"\ntmux new-session -d -s \"$SESSION\" -n \"lead\"\ntmux new-window  -t \"$SESSION\" -n \"agents\"\ntmux split-window -t \"$SESSION:agents\" -h      # FE | BE+DB\ntmux split-window -t \"$SESSION:agents.1\" -v    # BE / DB\n# 각 pane에 claude CLI 실행\ntmux send-keys -t \"$SESSION:lead\" \\\n  \"claude --dangerously-skip-permissions\" Enter</pre>" }
        ],
        keyTerms: [
          { term: "tmux", definition: "터미널 멀티플렉서. 여러 터미널 세션을 하나의 창에서 병렬 관리 가능 — AKC AgentTeam 동시 실행에 활용" },
          { term: "AgentTeam", definition: "tmux 병렬 처리로 구성된 멀티에이전트 팀 (Lead + FE/BE/DB + QA + Evolution) — 6 Window 구조" },
          { term: "akc-start.sh", definition: "AKC AgentTeam tmux 세션을 자동 구성하는 쉘 스크립트. 세션 생성 + window/pane 분할 + claude CLI 실행 자동화" },
          { term: "tmux split-window", definition: "tmux 창 분할 명령. -h 수평 / -v 수직 분할. agents window에서 FE/BE/DB를 3개 pane으로 구분" },
          { term: "monitor window", definition: "tmux 6번째 window. sync_state.json 변화를 실시간 감시하여 전체 에이전트 상태 한눈에 파악" }
        ],
        quiz: [
          { q: "FE/BE/DB 3개 에이전트를 동시에 실행하는 tmux Window 이름은?", options: ["lead", "cognitive", "agents", "monitor"], answer: 2, explanation: "agents window를 수평/수직 분할하여 FE/BE/DB pane 3개를 동시 실행합니다." },
          { q: "에이전트 간 상태를 공유하는 HotZone 파일은?", options: ["history.md", "sync_state.json", "agents.md", "task_ok.md"], answer: 1, explanation: "sync_state.json이 HotZone(STM) 이벤트 버스 역할을 합니다." },
          { q: "tmux에서 Perception→Decision 인지 파이프라인이 실행되는 Window는?", options: ["lead", "cognitive", "agents", "evolution"], answer: 1, explanation: "cognitive window에서 Perception→WorldModel→Planner→Decision의 인지 파이프라인이 실행됩니다." },
          { q: "akc-start.sh에서 claude CLI 실행 시 사용하는 자율 옵션은?", options: ["--watch", "--auto-approve", "--dangerously-skip-permissions", "--headless"], answer: 2, explanation: "claude --dangerously-skip-permissions로 모든 툴 호출을 자동 승인하여 에이전트가 자율 실행합니다." }
        ]
      },
      {
        id: "c9-3", title: "sync_state.json 직접 조작", duration: "15분",
        objective: "sync_state.json 스키마를 이해하고 에이전트 상태를 직접 조회·수정할 수 있다",
        sourceSection: "§실전-3",
        content: [
          { heading: "주요 필드 조작 가이드", html: "<table><tr><th>필드</th><th>목적</th><th>예시 값</th></tr><tr><td>loopGuard.totalReentryCount</td><td>재진입 횟수 확인</td><td>0~10</td></tr><tr><td>decision.riskLevel</td><td>현재 위험도 조회</td><td>LOW/MEDIUM/HIGH/CRITICAL</td></tr><tr><td>perception.status</td><td>인식 단계 상태</td><td>idle/collecting/done/failed</td></tr><tr><td>evolution.pendingApprovalCount</td><td>승인 대기 헌법 변경 수</td><td>0, 1, 2...</td></tr></table>" },
          { heading: "루프가드 초기화 (Node.js)", html: "<pre>const fs = require('fs');\nconst state = JSON.parse(fs.readFileSync('sync_state.json', 'utf8'));\n\n// 루프가드 초기화\nstate.loopGuard.totalReentryCount = 0;\nstate.loopGuard.totalLlmTurns     = 0;\nstate.loopGuard.forcedEscalation  = false;\n\nfs.writeFileSync('sync_state.json', JSON.stringify(state, null, 2), 'utf8');\nconsole.log('루프가드 초기화 완료');</pre>" }
        ],
        keyTerms: [
          { term: "loopGuard", definition: "무한 루프 방지 카운터. 재진입 총 ≤10회 / LLM 턴 ≤50회 / 세션 ≤120분 절대 상한 — 초과 시 Lead 강제 에스컬레이션" },
          { term: "이벤트 버스", definition: "sync_state.json을 통한 에이전트 간 비동기 상태 공유 메커니즘 (HotZone STM)" },
          { term: "forcedEscalation", definition: "loopGuard 임계값(재진입 10회/LLM 50턴/120분) 초과 시 true로 설정되는 강제 에스컬레이션 플래그" },
          { term: "decision.riskLevel", definition: "Decision 에이전트의 현재 위험도 필드. LOW/MEDIUM/HIGH/CRITICAL 4단계 — sync_state.json에서 실시간 조회" },
          { term: "HotZone STM", definition: "단기 메모리 영역. sync_state.json(이벤트 버스) + history.md(작업 로그)로 구성. 에이전트 간 실시간 상태 공유" }
        ],
        quiz: [
          { q: "loopGuard에서 LLM 턴 절대 상한은?", options: ["20회", "30회", "50회", "100회"], answer: 2, explanation: "loopGuard 절대 상한: 재진입 총 ≤10회 / LLM 턴 ≤50회 / 세션 ≤120분" },
          { q: "Decision 에이전트의 현재 위험도를 확인하는 sync_state.json 필드는?", options: ["decision.status", "decision.riskLevel", "loopGuard.riskLevel", "planner.strategy"], answer: 1, explanation: "sync_state.json의 decision.riskLevel 필드로 LOW/MEDIUM/HIGH/CRITICAL 확인 가능." },
          { q: "loopGuard 세션 최대 지속 시간은?", options: ["30분", "60분", "120분", "240분"], answer: 2, explanation: "loopGuard의 세션 최대 지속 시간(maxDurationMinutes)은 120분(2시간)입니다." },
          { q: "루프가드 초기화 시 false로 재설정해야 하는 플래그는?", options: ["totalLlmTurns", "totalReentryCount", "forcedEscalation", "sessionStartAt"], answer: 2, explanation: "forcedEscalation은 강제 에스컬레이션 발동 여부를 나타내며 초기화 시 반드시 false로 재설정합니다." }
        ]
      },
      {
        id: "c9-4", title: "캡스톤 — 미니 프로젝트", duration: "15분",
        objective: "AKC v4 전체 인지루프를 활용하여 실제 미니 프로젝트를 기획하고 실행 구조를 설계한다",
        sourceSection: "§실전-4",
        content: [
          { heading: "캡스톤 프로젝트 가이드라인 (전체 9단계)", html: "<table><tr><th>단계</th><th>활동</th><th>산출물</th></tr><tr><td>①Observe</td><td>요구사항 수집 + Perception 실행</td><td>PerceptionPayload</td></tr><tr><td>②~④ 인지</td><td>WorldModel → Planner → Decision</td><td>ExecutionPlan + ActionDirective</td></tr><tr><td>⑤Execute</td><td>FE/BE/DB 구현 (tmux 3분할 병렬)</td><td>task_*_ok.md</td></tr><tr><td>⑥⑦검증</td><td>Trinity 검증 + Reflection</td><td>ReflectionReport</td></tr><tr><td>⑧⑨진화</td><td>LearningEng + Evolution</td><td>EvolutionProposal</td></tr></table>" },
          { heading: "추천 미니 프로젝트 주제", html: "<ul><li>TODO 앱 with Trinity 검증 (starter 레벨)</li><li>날씨 API 연동 대시보드 (dynamic 레벨)</li><li>간단한 메모 앱 with LocalStorage (starter 레벨)</li><li>포트폴리오 페이지 responsive (dynamic 레벨)</li></ul>" }
        ],
        keyTerms: [
          { term: "캡스톤", definition: "전체 과정을 통합 적용하는 최종 실습 프로젝트. 9단계 인지루프 전체를 실제 미니 프로젝트 구현에 적용" },
          { term: "Trinity 검증", definition: "FE(시각) + BE(로직) + DB(데이터) 3방향 교차 검증. enterprise 레벨 기본 필수 조건" },
          { term: "EvolutionProposal", definition: "캡스톤 9단계(⑧⑨진화) 최종 산출물. Evolution이 KnowledgeSummary 분석 후 헌법 개정안을 Lead에 제출" },
          { term: "starter 레벨", definition: "캡스톤 추천 난이도 중 가장 쉬운 단계. 단일 파일 수정·조건 추가 최소화 수준 (예: TODO 앱, 메모 앱)" },
          { term: "dynamic 레벨", definition: "캡스톤 추천 난이도 중간 단계. 기존 기능 추가·변경, 2~3개 파일 연동 (예: 날씨 API 대시보드, 포트폴리오)" }
        ],
        quiz: [
          { q: "캡스톤에서 tmux agents window에서 동시 실행하는 에이전트 조합은?", options: ["Lead+QA+Evolution", "FE+BE+DB", "Perception+WorldModel+Planner", "Reflection+LearningEng+Evolution"], answer: 1, explanation: "agents window를 3분할하여 FE/BE/DB를 병렬 실행합니다." },
          { q: "Trinity 검증의 3가지 검증 영역은?", options: ["속도+안전+품질", "코드+문서+테스트", "시각+로직+데이터", "FE+BE+인프라"], answer: 2, explanation: "Trinity 검증은 FE(시각) + BE(로직) + DB(데이터) 3방향 교차 검증입니다." },
          { q: "9단계 인지루프에서 ReflectionReport가 생성되는 구간은?", options: ["①Observe", "⑤Execute", "⑥⑦검증", "⑧⑨진화"], answer: 2, explanation: "⑥⑦ 검증 구간(Trinity 검증 + Reflection)에서 ReflectionReport가 생성됩니다." },
          { q: "캡스톤 starter 레벨 추천 주제로 적합한 것은?", options: ["MSA 마이크로서비스 전환", "날씨 API 연동 대시보드", "TODO 앱 with Trinity 검증", "포트폴리오 responsive 페이지"], answer: 2, explanation: "TODO 앱 with Trinity 검증이 starter 레벨입니다. 날씨 API 대시보드와 포트폴리오는 dynamic 레벨입니다." }
        ]
      }
    ]
  };

  if (window.CURRICULUM && window.CURRICULUM.modules) {
    window.CURRICULUM.modules.push(...part2, m9);
  }
})();
