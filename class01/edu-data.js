// DOCX_VERSION: 2026-03-18
// AUTO-GENERATED from DOCX.md — use sync-trigger.js to update version
const DOCX_VERSION = "2026-03-18";

window.CURRICULUM = {
  version: "AKC v4",
  docxVersion: DOCX_VERSION,
  totalClasses: 61,
  modules: [
    // ─── M0 오리엔테이션 ───────────────────────────────────────────
    {
      id: "m0", title: "오리엔테이션", icon: "🎯", classes: [
        {
          id: "c0-1", title: "AKC v4란 무엇인가", duration: "15분",
          objective: "AKC v4 시스템 전체 구조와 #concept 폴더의 역할을 이해한다",
          sourceSection: "§1",
          content: [
            { heading: "폴더 구조", html: "<p><code>_docs/</code> 폴더 구성: <strong>edu/DOCX.md</strong>(종합참조), <strong>rules.md</strong>(최상위헌법), <strong>rules_재진입정책.md</strong>(§6), <strong>rules_프로젝트관리.md</strong>(§7~9), <strong>rules_헌법관리.md</strong>(§A~D), <strong>rules_업데이트관리.md</strong>(§E), 그리고 lead/fe/be/db/cognitive/evolution 하위 헌법 폴더, <strong>_review/</strong>(승인서버+리뷰보고서).</p>" },
            { heading: "헌법 상속 계층도", html: "<p><strong>rules.md</strong>(최상위) → 4개 분리파일 → <strong>AgentZone</strong>(Lead/FE/BE/DB) / <strong>CognitiveZone</strong>(Perception/WorldModel/Planner/Decision) / <strong>LearningZone</strong>(Reflection/LearningEng/Evolution).</p><p>⚠️ <strong>#concept</strong>는 초지능 정책 폴더 — 직접 작업 금지, 반드시 복사 후 별도 프로젝트 폴더에서 사용.</p>" }
          ],
          keyTerms: [
            { term: "AKC", definition: "Autonomous Knowledge Core — 자율 지식 코어 시스템" },
            { term: "#concept", definition: "초지능 정책 폴더. 모든 프로젝트 헌법의 원본 보관소. 직접 작업 금지" },
            { term: "헌법", definition: "에이전트의 역할·규칙·절차를 정의하는 rules.md 및 파생 파일 집합" }
          ],
          quiz: [
            { q: "헌법 충돌 시 우선순위는?", options: ["하위 헌법 우선", "상위 헌법 우선", "최신 헌법 우선", "Lead 판단"], answer: 1, explanation: "충돌 시 rules.md(최상위) > 영역 헌법 > 개별 에이전트 헌법 순으로 우선합니다." },
            { q: "#concept 폴더에서 직접 작업해도 되는 파일은?", options: ["sync_state.json", "history.md", "_docs/rules.md", "없음 — 모두 금지"], answer: 3, explanation: "#concept는 초지능 정책 폴더로 직접 작업이 절대 금지됩니다. 반드시 복사 후 사용해야 합니다." },
            { q: "rules_재진입정책.md는 어떤 섹션을 담당하나요?", options: ["§A~D", "§7~9", "§6", "§E"], answer: 2, explanation: "rules_재진입정책.md는 §6 인지 루프 재시도·재진입 정책과 루프 가드를 담당합니다." }
          ]
        }
      ]
    },
    // ─── M1 시스템 아키텍처 ────────────────────────────────────────
    {
      id: "m1", title: "시스템 아키텍처", icon: "🏗️", classes: [
        {
          id: "c1-1", title: "5-Zone 메모리 구조", duration: "15분",
          objective: "AKC v4의 5개 Zone 역할과 메모리 유형을 구분할 수 있다",
          sourceSection: "§2-1",
          content: [
            { heading: "5-Zone 구조", html: "<table><tr><th>Zone</th><th>역할</th><th>소속 에이전트</th><th>메모리</th></tr><tr><td><strong>ColdZone</strong></td><td>장기 지식 저장</td><td>Global SkillNet(KB), rules.md, ProjectLevel</td><td>LTM</td></tr><tr><td><strong>CognitiveZone</strong></td><td>인지 처리 파이프라인</td><td>Perception, WorldModel, Planner, Decision</td><td>처리 메모리</td></tr><tr><td><strong>AgentZone</strong></td><td>실행 에이전트</td><td>Lead, FE, BE, DB, ToolAgent, InfraAgent</td><td>작업 메모리</td></tr><tr><td><strong>HotZone</strong></td><td>실시간 상태 공유</td><td>sync_state.json, history.md</td><td>STM</td></tr><tr><td><strong>LearningZone</strong></td><td>자기 진화</td><td>Reflection, LearningEng, Evolution</td><td>학습 메모리</td></tr></table>" },
            { heading: "메모리 흐름", html: "<p>ColdZone(LTM) → CognitiveZone → AgentZone → HotZone(STM) → LearningZone 순으로 정보가 흐르며, LearningZone에서 축적된 지식은 다시 ColdZone에 SAI화(저장)됩니다.</p>" }
          ],
          keyTerms: [
            { term: "LTM", definition: "Long-Term Memory — ColdZone의 장기 지식 저장소" },
            { term: "STM", definition: "Short-Term Memory — HotZone의 실시간 상태 공유 메모리" },
            { term: "SAI화", definition: "세션 종료 시 Archivist가 kb/ 지식을 Global SkillNet에 영구 저장하는 과정" }
          ],
          quiz: [
            { q: "sync_state.json과 history.md는 어느 Zone에 속하나요?", options: ["ColdZone", "AgentZone", "HotZone", "LearningZone"], answer: 2, explanation: "sync_state.json과 history.md는 실시간 상태 공유를 담당하는 HotZone(STM)에 속합니다." },
            { q: "자기 진화(Self-Evolution)를 담당하는 Zone은?", options: ["CognitiveZone", "AgentZone", "ColdZone", "LearningZone"], answer: 3, explanation: "Reflection, LearningEng, Evolution 에이전트로 구성된 LearningZone이 자기 진화를 담당합니다." },
            { q: "Planner 에이전트는 어느 Zone 소속인가요?", options: ["AgentZone", "CognitiveZone", "LearningZone", "HotZone"], answer: 1, explanation: "Planner는 인지 처리 파이프라인의 ③Plan 단계를 담당하는 CognitiveZone 소속입니다." }
          ]
        },
        {
          id: "c1-2", title: "전체 에이전트 목록", duration: "15분",
          objective: "15개 에이전트의 영문 ID, 소속 Zone, 루프 단계를 암기한다",
          sourceSection: "§2-2",
          content: [
            { heading: "AgentZone 에이전트 (8개)", html: "<table><tr><th>에이전트</th><th>영문 ID</th><th>루프 단계</th></tr><tr><td>Lead Planner</td><td>Lead</td><td>사령탑</td></tr><tr><td>FE Dev</td><td>FE</td><td>Execute</td></tr><tr><td>BE Dev</td><td>BE</td><td>Execute</td></tr><tr><td>DB Admin</td><td>DB</td><td>Execute</td></tr><tr><td>Tool Agent</td><td>ToolAgent</td><td>Execute</td></tr><tr><td>Infra Agent</td><td>InfraAgent</td><td>Execute</td></tr><tr><td>QA Reviewer</td><td>QA</td><td>Verify</td></tr><tr><td>Archivist</td><td>Archivist</td><td>종료</td></tr></table>" },
            { heading: "CognitiveZone + LearningZone (7개)", html: "<table><tr><th>에이전트</th><th>Zone</th><th>루프 단계</th></tr><tr><td>Perception</td><td>Cognitive</td><td>① Observe</td></tr><tr><td>WorldModel</td><td>Cognitive</td><td>② Understand</td></tr><tr><td>Planner</td><td>Cognitive</td><td>③ Plan</td></tr><tr><td>Decision</td><td>Cognitive</td><td>④ Decide</td></tr><tr><td>Reflection</td><td>Learning</td><td>⑥⑦ Verify→Reflect</td></tr><tr><td>LearningEng</td><td>Learning</td><td>⑧ Learn</td></tr><tr><td>Evolution</td><td>Learning</td><td>⑨ Improve</td></tr></table>" }
          ],
          keyTerms: [
            { term: "Lead Planner", definition: "전체 사령탑. SDD 명세 작성 및 태스크 큐 배분 담당" },
            { term: "Archivist", definition: "세션 종료 시 kb/ 지식을 Global SkillNet에 SAI화하는 아카이브 에이전트" },
            { term: "QA Reviewer", definition: "Trinity 검증(시각·로직·데이터)으로 산출물 품질을 검증하는 에이전트" }
          ],
          quiz: [
            { q: "전체 에이전트 수는 몇 개인가요?", options: ["12개", "13개", "15개", "17개"], answer: 2, explanation: "AgentZone 8개 + CognitiveZone 4개 + LearningZone 3개 = 총 15개 에이전트입니다." },
            { q: "⑧ Learn 단계를 담당하는 에이전트는?", options: ["Reflection", "Evolution", "LearningEng", "Archivist"], answer: 2, explanation: "LearningEng 에이전트가 ⑧ Learn 단계에서 패턴 학습과 KB 갱신을 담당합니다." },
            { q: "헌법 파일이 없는 에이전트는? (복수 선택 중 해당하는 것)", options: ["Lead Planner", "QA Reviewer", "Perception", "Evolution"], answer: 1, explanation: "QA Reviewer, ToolAgent, InfraAgent, Archivist는 별도 헌법 파일이 없습니다." }
          ]
        },
        {
          id: "c1-3", title: "프로젝트 레벨 설정", duration: "15분",
          objective: "5가지 프로젝트 레벨의 차이와 기본값(default)을 이해한다",
          sourceSection: "§2-3",
          content: [
            { heading: "프로젝트 레벨 5종", html: "<table><tr><th>레벨</th><th>대상</th><th>FE 구성</th><th>QA 기준</th></tr><tr><td>starter</td><td>소규모</td><td>단독</td><td>핵심 3항목</td></tr><tr><td>dynamic</td><td>중규모</td><td>단독/2팀</td><td>표준 Trinity</td></tr><tr><td><strong>enterprise</strong> ★</td><td>대규모</td><td>다중 팀 병렬</td><td>전 항목 100%</td></tr><tr><td>desktop-app</td><td>데스크탑</td><td>단독/2팀</td><td>성능·안정성</td></tr><tr><td>mobile-app</td><td>모바일</td><td>단독/2팀</td><td>반응성·배터리</td></tr></table>" },
            { heading: "enterprise 레벨 특징", html: "<p><strong>enterprise</strong>는 default 레벨입니다. 다중 FE 팀 자동 병렬 분배, 전 영역 검증 스킬(영역별 전체 + 공통) 포함, QA 전 항목 100% 필수. 스킬 자동 생성 조건은 작업 착수 후 <strong>5분 이상 진전 없음</strong>입니다.</p>" }
          ],
          keyTerms: [
            { term: "enterprise (default)", definition: "대규모 복합 프로젝트용 기본 레벨. 다중 팀 병렬, QA 100% 필수" },
            { term: "Trinity 검증", definition: "시각·로직·데이터 3가지 축의 품질 검증. dynamic 레벨 이상 적용" },
            { term: "스킬 자동 생성", definition: "작업 착수 후 5분 이상 진전 없을 때 자동으로 스킬 요청을 발동하는 조건" }
          ],
          quiz: [
            { q: "AKC v4의 기본(default) 프로젝트 레벨은?", options: ["starter", "dynamic", "enterprise", "desktop-app"], answer: 2, explanation: "enterprise가 default 레벨입니다. 대규모 복합 프로젝트에 최적화되어 있습니다." },
            { q: "스킬 자동 생성 발동 조건은?", options: ["QA 80% 미만", "작업 착수 후 5분 이상 진전 없음", "재진입 3회 초과", "uncertainty ≥ 0.5"], answer: 1, explanation: "모든 레벨에서 작업 착수 후 5분 이상 진전이 없을 때 스킬 자동 생성이 발동됩니다." },
            { q: "mobile-app 레벨의 QA 기준은?", options: ["핵심 3항목", "표준 Trinity", "전 항목 100%", "반응성·배터리 중심"], answer: 3, explanation: "mobile-app 레벨은 반응성·배터리·네트워크 최적화 검증 스킬을 우선으로 합니다." }
          ]
        }
      ]
    },
    // ─── M2 인지 루프 ──────────────────────────────────────────────
    {
      id: "m2", title: "인지 루프 파이프라인", icon: "🔄", classes: [
        {
          id: "c2-1", title: "9단계 인지 루프 전체 흐름", duration: "15분",
          objective: "9단계 인지 루프의 순서, 담당 에이전트, 출력 데이터를 말할 수 있다",
          sourceSection: "§3-1",
          content: [
            { heading: "루프 시작 방법", html: "<p>사람의 요청이 들어오면 <strong>Lead Planner → Planner</strong> 순으로 작업이 지시됩니다. Planner가 인지 루프의 실질적 시작점입니다.</p><ol><li><strong>Lead</strong>: 사람 요청 수신 → Planner에게 작업 지시</li><li><strong>Planner</strong>: KB(이전 결과·전략) 탐색 + Perception에 분석 요청</li><li>이후 ① OBSERVE부터 9단계 루프 진행</li></ol>" },
            { heading: "9단계 루프", html: "<table><tr><th>단계</th><th>키워드</th><th>에이전트</th><th>출력</th></tr><tr><td>①</td><td>OBSERVE</td><td>Perception</td><td>PerceptionPayload</td></tr><tr><td>②</td><td>UNDERSTAND</td><td>WorldModel</td><td>WorldState</td></tr><tr><td>③</td><td>PLAN</td><td>Planner</td><td>ExecutionPlan</td></tr><tr><td>④</td><td>DECIDE</td><td>Decision</td><td>ActionDirective (누가·기술·방법 배분)</td></tr><tr><td>⑤</td><td>EXECUTE</td><td>FE/BE/DB/Tool</td><td>task_*_ok.md</td></tr><tr><td>⑥</td><td>VERIFY</td><td>Reflection</td><td>—</td></tr><tr><td>⑦</td><td>REFLECT</td><td>Reflection</td><td>ReflectionReport</td></tr><tr><td>⑧</td><td>LEARN</td><td>LearningEng</td><td>KnowledgeSummary</td></tr><tr><td>⑨</td><td>IMPROVE</td><td>Evolution</td><td>EvolutionProposal</td></tr></table>" },
            { heading: "루프 종료 후", html: "<p>⑨ IMPROVE 완료 후 EvolutionProposal은 Lead에 제출되고, 다음 세션의 새 루프로 이어집니다. <strong>⑥ 이후(Learn/Improve)에서 ① Observe로의 직접 점프는 금지</strong>되며 반드시 다음 세션의 새 루프로 시작해야 합니다.</p>" }
          ],
          keyTerms: [
            { term: "PerceptionPayload", definition: "Perception이 생성하는 수집 데이터 구조. source, raw, metadata, qualityFlag 포함" },
            { term: "ActionDirective", definition: "Decision이 발행하는 실행 승인 문서. RBET 스코어와 APPROVE/REJECT/PAUSE 결정 포함" },
            { term: "EvolutionProposal", definition: "Evolution이 Lead에 제출하는 헌법 개정 제안 문서" }
          ],
          quiz: [
            { q: "③ PLAN 단계의 출력 데이터는?", options: ["WorldState", "ActionDirective", "ExecutionPlan", "ReflectionReport"], answer: 2, explanation: "Planner 에이전트가 ③ PLAN 단계에서 ExecutionPlan을 생성하여 Decision에 전달합니다." },
            { q: "Reflection 에이전트가 담당하는 루프 단계는?", options: ["⑤⑥", "⑥⑦", "⑦⑧", "⑧⑨"], answer: 1, explanation: "Reflection은 ⑥ VERIFY(품질 검증)와 ⑦ REFLECT(근본 원인 분석) 두 단계를 담당합니다." },
            { q: "루프 완료 후 금지된 재진입 방향은?", options: ["⑤→③", "⑥→⑤", "⑨→① 직접 점프", "②→①"], answer: 2, explanation: "⑥ 이후에서 ① Observe로의 직접 점프는 금지됩니다. 반드시 다음 세션의 새 루프로 시작해야 합니다." }
          ]
        },
        {
          id: "c2-2", title: "재진입 정책 & 루프 가드", duration: "15분",
          objective: "6가지 재진입 경로와 루프 가드 절대 상한 3가지를 정확히 말할 수 있다",
          sourceSection: "§3-2",
          content: [
            { heading: "재진입 허용 맵 6경로", html: "<table><tr><th>재진입</th><th>트리거</th><th>최대</th></tr><tr><td>②→① WorldModel→Perception</td><td>uncertainty ≥ 0.5</td><td>2회</td></tr><tr><td>③→② Planner→WorldModel</td><td>순환 의존성 감지</td><td>1회</td></tr><tr><td>③→③ Decision→Planner</td><td>REJECT_REPLAN</td><td>3회</td></tr><tr><td>⑤→③ Reflection→Planner</td><td>Verify 2회 실패</td><td>—</td></tr><tr><td>⑤→⑤ 실행 에이전트</td><td>실행 오류</td><td>2회 (5→15초)</td></tr><tr><td>⑥→⑤ Reflection→Execute</td><td>검증 실패</td><td>2회</td></tr></table>" },
            { heading: "루프 가드 절대 상한", html: "<p>단일 파이프라인 실행 내 <strong>재진입 총 ≤ 10회</strong>, <strong>LLM 턴 ≤ 50회</strong>, <strong>세션 ≤ 120분</strong>. 초과 시 Lead 강제 에스컬레이션. 카운터는 <code>sync_state.json</code>의 <code>loopGuard</code> 필드에서 추적합니다.</p>" }
          ],
          keyTerms: [
            { term: "REJECT_REPLAN", definition: "Decision이 risk 0.5~0.7일 때 Planner에 재계획을 요청하는 결정. 최대 3회" },
            { term: "loopGuard", definition: "무한 루프 방지 장치. 재진입≤10회, LLM턴≤50회, 세션≤120분" },
            { term: "Backoff", definition: "재시도 간격. 실행 에이전트 자체 재시도는 5초→15초 간격 적용" }
          ],
          quiz: [
            { q: "루프 가드의 세션 최대 실행 시간은?", options: ["60분", "90분", "120분", "180분"], answer: 2, explanation: "단일 파이프라인 세션은 최대 120분으로 제한됩니다. 초과 시 Lead 강제 에스컬레이션." },
            { q: "Decision→Planner 재계획(REJECT_REPLAN) 최대 횟수는?", options: ["1회", "2회", "3회", "5회"], answer: 2, explanation: "Decision이 REJECT_REPLAN을 발행할 수 있는 최대 횟수는 3회입니다. 초과 시 Lead 에스컬레이션." },
            { q: "WorldModel이 Perception에 재관측을 요청하는 조건은?", options: ["uncertainty ≥ 0.3", "uncertainty ≥ 0.5", "uncertainty ≥ 0.8", "항상 가능"], answer: 1, explanation: "WorldModel의 uncertainty 스코어가 0.5 이상일 때 Perception에 재관측을 요청합니다(최대 2회)." }
          ]
        }
      ]
    },
    // ─── M3 AgentZone ──────────────────────────────────────────────
    {
      id: "m3", title: "AgentZone — 실행 에이전트", icon: "⚙️", classes: [
        {
          id: "c3-1", title: "Lead Planner", duration: "15분",
          objective: "Lead Planner의 핵심 책임, 태스크 페이로드 필드, 스킬 상태 4가지를 이해한다",
          sourceSection: "§4-1",
          content: [
            { heading: "Lead의 역할 — 인지 루프 시작점", html: "<p>Lead Planner는 Cognitive Core를 직접 실행하지 않습니다. 역할 분리:</p><ul><li><strong>Lead</strong>: 사람 요청 수신 → <strong>Planner에게 작업 지시</strong> (사령탑·조율자)</li><li><strong>Planner</strong>: KB 탐색 + Perception 분석 요청 → 전략 수립 (인지 루프 실질 시작점)</li><li><strong>Decision</strong>: 배분 결정 — 누가·어떤 기술·어떻게 (RBET 평가)</li></ul>" },
            { heading: "태스크 페이로드 & 스킬 상태", html: "<p>페이로드 필드: <code>task_id / assignee / title / priority / parallel / constitution / skills / validation_skills / relation_policy</code></p><table><tr><th>스킬 상태</th><th>의미</th><th>사용 가능</th></tr><tr><td>pending</td><td>사람 검토 대기</td><td>❌</td></tr><tr><td>approved</td><td>승인 완료</td><td>✅</td></tr><tr><td>rejected</td><td>반려</td><td>❌</td></tr><tr><td>deprecated</td><td>대체됨</td><td>❌</td></tr></table>" },
            { heading: "태스크 라이프사이클 & 우선순위", html: "<p>배분 기본 순서: <strong>DB 스키마 → BE 코어 로직 → FE UI</strong>.</p><p>라이프사이클: 작업 중 → task_ok.md 제출 → QA 검토 → 100% 통과 시 다음 태스크 / 미통과 시 task_err.md → 보완 재작업.</p>" }
          ],
          keyTerms: [
            { term: "SDD", definition: "System Design Document — Lead가 작성하는 시스템 설계 명세서" },
            { term: "task_ok.md", definition: "에이전트가 작업 완료 시 QA에 제출하는 완료 보고서" },
            { term: "task_err.md", definition: "QA가 Trinity 검증 실패 시 발행하는 통합 오류 보고서" }
          ],
          quiz: [
            { q: "태스크 배분 기본 우선순위 순서는?", options: ["FE→BE→DB", "BE→DB→FE", "DB→BE→FE", "Lead가 매번 결정"], answer: 2, explanation: "기본 순서는 DB 스키마 → BE 코어 로직 → FE UI입니다. 의존성을 고려한 순서입니다." },
            { q: "approved 상태의 스킬만 에이전트가 사용할 수 있나요?", options: ["아니오, pending도 가능", "예, approved만 가능", "deprecated도 가능", "사람 승인 불필요"], answer: 1, explanation: "오직 approved 상태의 스킬만 에이전트가 사용할 수 있습니다." },
            { q: "스킬 요청 발동 조건 2가지는?", options: ["오류 3회 발생", "5분 이상 진전 없음 또는 QA 100% 미만", "재진입 5회 초과", "Lead 명령 시만"], answer: 1, explanation: "① 작업 착수 후 5분 이상 진전 없음 ② QA 100% 미만 판정 — 두 조건 중 하나면 스킬 요청 발동." }
          ]
        },
        {
          id: "c3-2", title: "FE Dev", duration: "15분",
          objective: "FE Dev의 의존성, 산출물, 자체/QA 검증 스킬 4가지를 구분할 수 있다",
          sourceSection: "§4-2",
          content: [
            { heading: "의존성 & 산출물", html: "<p>BE API 계약 수신 전에는 <strong>mock 데이터</strong>로 개발. 산출물 <code>task_fe_ok.md</code>: 컴포넌트 목록, 디자인 준수 체크, 스크린샷 경로 포함.</p><p>컴포넌트 상태 변화는 <code>history.md</code>에 실시간 기록.</p>" },
            { heading: "검증 스킬 4가지", html: "<table><tr><th>스킬명</th><th>주체</th><th>시점</th></tr><tr><td>FE_디자인시스템_준수_검증</td><td>🔵 자체</td><td>작업 중</td></tr><tr><td>FE_렌더링성능_검증</td><td>🔵 자체</td><td>제출 전</td></tr><tr><td>FE_접근성_검증</td><td>🔴 QA</td><td>QA 단계</td></tr><tr><td>FE_UX흐름_검증</td><td>🔴 QA</td><td>QA 단계</td></tr></table>" }
          ],
          keyTerms: [
            { term: "mock 데이터", definition: "BE API 미완성 시 FE 개발에 사용하는 가짜 응답 데이터" },
            { term: "task_fe_ok.md", definition: "FE Dev가 QA에 제출하는 완료 보고서. 컴포넌트 목록·디자인 준수·스크린샷 포함" },
            { term: "FE_렌더링성능_검증", definition: "FE Dev가 제출 전 자체 실행하는 렌더링 성능 검증 스킬" }
          ],
          quiz: [
            { q: "FE_접근성_검증의 주체와 시점은?", options: ["FE 자체, 작업 중", "QA, 작업 중", "QA, QA 단계", "FE 자체, 제출 전"], answer: 2, explanation: "FE_접근성_검증은 🔴 QA가 QA 단계에서 실행합니다." },
            { q: "BE API 계약 없을 때 FE 개발 방식은?", options: ["개발 중단", "mock 데이터 사용", "BE 완료 대기", "빈 컴포넌트 제출"], answer: 1, explanation: "BE API 계약 수신 전에는 mock 데이터로 개발을 진행합니다." },
            { q: "FE가 제출 전 자체 실행하는 검증 스킬은?", options: ["FE_접근성_검증", "FE_디자인시스템_준수_검증", "FE_렌더링성능_검증", "FE_UX흐름_검증"], answer: 2, explanation: "FE_렌더링성능_검증은 FE Dev가 제출 전 자체 실행합니다. FE_디자인시스템_준수_검증은 작업 중 실행." }
          ]
        },
        {
          id: "c3-3", title: "BE Dev", duration: "15분",
          objective: "BE Dev의 API 응답 형식, 의존성, 검증 스킬을 이해한다",
          sourceSection: "§4-3",
          content: [
            { heading: "API 응답 형식 & 의존성", html: "<p>표준 API 응답 구조: <code>{ status, data, message }</code>. DB 스키마 변경 수신 즉시 <strong>ORM 갱신</strong> 필수.</p><p>산출물 <code>task_be_ok.md</code>: 엔드포인트 목록, SDD 매핑표, 테스트 결과, 보안 명세 포함.</p>" },
            { heading: "검증 스킬 4가지", html: "<table><tr><th>스킬명</th><th>주체</th><th>시점</th></tr><tr><td>BE_예외처리_검증</td><td>🔵 자체</td><td>작업 중</td></tr><tr><td>BE_API응답_검증</td><td>🔵 자체</td><td>제출 전</td></tr><tr><td>BE_보안_검증</td><td>🔴 QA</td><td>QA 단계</td></tr><tr><td>BE_로직정합성_검증</td><td>🔴 QA</td><td>QA 단계</td></tr></table>" }
          ],
          keyTerms: [
            { term: "ORM", definition: "Object-Relational Mapping — DB 스키마 변경 시 즉시 갱신해야 하는 객체-관계 매핑 레이어" },
            { term: "SDD 매핑표", definition: "System Design Document와 실제 구현된 API 엔드포인트 간의 대응 표" },
            { term: "BE_보안_검증", definition: "QA가 QA 단계에서 실행하는 API 보안 취약점 검증 스킬" }
          ],
          quiz: [
            { q: "BE의 표준 API 응답 구조는?", options: ["{code, result}", "{status, data, message}", "{error, body}", "{success, payload, info}"], answer: 1, explanation: "BE Dev의 표준 API 응답 형식은 { status, data, message } 구조입니다." },
            { q: "DB 스키마 변경 시 BE의 즉시 처리 사항은?", options: ["FE에 알림", "ORM 갱신", "task_err.md 발행", "Lead에 에스컬레이션"], answer: 1, explanation: "DB 스키마 변경 수신 즉시 ORM을 갱신해야 합니다." },
            { q: "BE_API응답_검증의 시점은?", options: ["작업 중", "제출 전", "QA 단계", "세션 종료 시"], answer: 1, explanation: "BE_API응답_검증은 BE Dev가 제출 전 자체 실행합니다." }
          ]
        },
        {
          id: "c3-4", title: "DB Admin & 공통 검증 스킬", duration: "15분",
          objective: "DB Admin의 3NF 원칙, 스키마 변경 전파 규칙, 공통 스킬을 이해한다",
          sourceSection: "§4-4",
          content: [
            { heading: "DB Admin 규칙", html: "<p>정규화 기준: 최소 <strong>3NF</strong>. 역정규화 시 반드시 사유 기록. 스키마 변경 발생 시 즉시 BE에 전파 — 테이블명, 변경유형, 마이그레이션 스크립트 포함.</p><p>산출물 <code>task_db_ok.md</code>: ERD, DDL 스크립트, 인덱스 전략, 정합성 체크 포함.</p>" },
            { heading: "공통 검증 스킬 (전 에이전트)", html: "<table><tr><th>스킬명</th><th>주체</th><th>시점</th></tr><tr><td>반복오류_사전차단_검증</td><td>🔵 자체</td><td>작업 중</td></tr></table><p>FE / BE / DB 세 에이전트 모두 작업 중 자체 실행. 이전에 발생한 동일 오류 패턴을 사전 차단하는 공통 스킬입니다.</p>" }
          ],
          keyTerms: [
            { term: "3NF", definition: "Third Normal Form — DB 설계의 최소 정규화 기준. 이행적 함수 종속성 제거" },
            { term: "DDL", definition: "Data Definition Language — CREATE/ALTER/DROP 등 스키마 정의 SQL 스크립트" },
            { term: "반복오류_사전차단_검증", definition: "FE/BE/DB 전체에 공통 적용되는 자체 검증 스킬. 작업 중 실행하여 반복 오류를 사전 차단" }
          ],
          quiz: [
            { q: "DB Admin의 최소 정규화 기준은?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: 2, explanation: "DB Admin은 최소 3NF(제3정규형)를 기준으로 스키마를 설계합니다." },
            { q: "공통 검증 스킬 '반복오류_사전차단_검증'의 시점은?", options: ["제출 전", "QA 단계", "작업 중", "세션 시작 시"], answer: 2, explanation: "반복오류_사전차단_검증은 FE/BE/DB 모두 작업 중 자체 실행합니다." },
            { q: "스키마 변경 전파 시 포함해야 할 내용은?", options: ["ERD만", "테이블명+변경유형+마이그레이션 스크립트", "DDL 스크립트만", "인덱스 전략만"], answer: 1, explanation: "스키마 변경 시 테이블명, 변경유형, 마이그레이션 스크립트를 즉시 BE에 전파해야 합니다." }
          ]
        }
      ]
    },
    // ─── M4 CognitiveZone ──────────────────────────────────────────
    {
      id: "m4", title: "CognitiveZone — 인지 에이전트", icon: "🧠", classes: [
        {
          id: "c4-1", title: "Perception Agent", duration: "15분",
          objective: "Perception의 입력 타입 4종, qualityFlag 4단계, PerceptionPayload 구조를 이해한다",
          sourceSection: "§5-1",
          content: [
            { heading: "입력 타입 & qualityFlag", html: "<table><tr><th>입력 타입</th><th>방법</th><th>우선순위</th></tr><tr><td>URL</td><td>Playwright + 스크롤</td><td>HIGH</td></tr><tr><td>파일</td><td>직접 읽기 + base64</td><td>HIGH</td></tr><tr><td>API</td><td>HTTP + JSON 파싱</td><td>MEDIUM</td></tr><tr><td>사용자 입력</td><td>전처리 + 의도 태깅</td><td>MEDIUM</td></tr></table><table><tr><th>qualityFlag</th><th>기준</th><th>처리</th></tr><tr><td>CLEAN</td><td>completeness ≥ 80%</td><td>WorldModel 전달</td></tr><tr><td>PARTIAL</td><td>50~79%</td><td>불완전 플래그 전달</td></tr><tr><td>NOISY</td><td>&lt; 50%</td><td>재시도 큐 등록</td></tr><tr><td>FAILED</td><td>수집 불가</td><td>Lead 에스컬레이션</td></tr></table>" },
            { heading: "재시도 & PerceptionPayload", html: "<p>재시도: <strong>1초 → 3초 → 9초</strong> (최대 3회). 구조: <code>{ id, source: {type, uri, fetchedAt}, raw: {html?, text?, screenshotBase64?, structuredData?}, metadata: {contentType, byteSize, completeness, noiseFiltered, lang?}, qualityFlag }</code></p>" }
          ],
          keyTerms: [
            { term: "CLEAN", definition: "completeness ≥ 80%. WorldModel에 바로 전달되는 최상품질 데이터" },
            { term: "FAILED", definition: "수집 불가 상태. Lead 에스컬레이션 트리거" },
            { term: "qualityFlag", definition: "수집 데이터 품질 등급: CLEAN / PARTIAL / NOISY / FAILED" }
          ],
          quiz: [
            { q: "qualityFlag = CLEAN이 되려면 completeness가 얼마 이상이어야 하나요?", options: ["60%", "70%", "80%", "90%"], answer: 2, explanation: "completeness ≥ 80%일 때 CLEAN 플래그가 부여되고 WorldModel로 바로 전달됩니다." },
            { q: "Perception의 재시도 간격은?", options: ["1→2→4초", "1→3→9초", "2→5→10초", "즉시 3회"], answer: 1, explanation: "재시도는 1초 → 3초 → 9초 간격으로 최대 3회 진행됩니다." },
            { q: "URL 입력 수집 시 사용하는 도구는?", options: ["Selenium", "Playwright + 스크롤 시뮬레이션", "직접 읽기", "HTTP 파싱"], answer: 1, explanation: "URL 타입 입력은 Playwright chromium + 스크롤 시뮬레이션으로 수집합니다(HIGH 우선순위)." }
          ]
        },
        {
          id: "c4-2", title: "WorldModel Agent", duration: "15분",
          objective: "WorldModel의 4단계 이해 레이어, uncertainty 기준표, WorldState 구조를 이해한다",
          sourceSection: "§5-2",
          content: [
            { heading: "이해 레이어 4단계 & uncertainty", html: "<table><tr><th>레이어</th><th>역할</th><th>출력</th></tr><tr><td>Syntactic</td><td>HTML/텍스트 파싱</td><td>구조화 데이터</td></tr><tr><td>Semantic</td><td>엔티티 추출, 의미 분석</td><td>엔티티 목록</td></tr><tr><td>Contextual</td><td>도메인 분류, 비즈니스 로직</td><td>컨텍스트 맵</td></tr><tr><td>Temporal</td><td>시간 변화 추적, 델타 계산</td><td>변경 이력</td></tr></table><table><tr><th>uncertainty</th><th>수준</th><th>행동</th></tr><tr><td>0.0–0.2</td><td>LOW</td><td>Planner 즉시 전달</td></tr><tr><td>0.2–0.5</td><td>MEDIUM</td><td>조건부 전달</td></tr><tr><td>0.5–0.8</td><td>HIGH</td><td>Perception 재수집(최대 2회)</td></tr><tr><td>0.8–1.0</td><td>CRITICAL</td><td>Lead 에스컬레이션</td></tr></table>" },
            { heading: "WorldState 구조", html: "<p><code>{ id, basedOn: string[], entities: Entity[], relations: Relation[], context: {domain, primaryGoal, constraints[], assumptions[]}, uncertainty: {score, sources[], missingData[]}, delta?: {added[], removed[], changed[]} }</code></p>" }
          ],
          keyTerms: [
            { term: "uncertainty", definition: "WorldModel의 세계 이해 불확실성 스코어. 0.0(확실)~1.0(완전 불확실)" },
            { term: "Contextual 레이어", definition: "도메인 분류와 비즈니스 로직 이해를 담당하는 3번째 이해 레이어" },
            { term: "WorldState", definition: "WorldModel이 생성하는 현재 세계의 구조화된 표현. 엔티티·관계·컨텍스트·불확실성 포함" }
          ],
          quiz: [
            { q: "uncertainty ≥ 0.8일 때 WorldModel의 행동은?", options: ["Planner에 전달", "Perception 재수집", "Lead 에스컬레이션", "작업 중단"], answer: 2, explanation: "uncertainty 0.8~1.0(CRITICAL)일 때 Lead 에스컬레이션이 발생합니다." },
            { q: "시간 변화 추적과 델타 계산을 담당하는 레이어는?", options: ["Syntactic", "Semantic", "Contextual", "Temporal"], answer: 3, explanation: "Temporal 레이어가 시간 변화 추적과 델타 계산을 담당하며 변경 이력을 출력합니다." },
            { q: "Perception 재수집을 요청하는 uncertainty 범위는?", options: ["0.0~0.2", "0.2~0.5", "0.5~0.8", "0.8~1.0"], answer: 2, explanation: "uncertainty 0.5~0.8(HIGH)일 때 Perception에 재수집을 요청합니다(최대 2회)." }
          ]
        },
        {
          id: "c4-3", title: "Planner Agent", duration: "20분",
          objective: "5가지 전략 선택 기준, 태스크 분해 4가지 제약, 에이전트 배정 기준, REQUIREMENT-FIRST 강제 정책을 이해한다",
          sourceSection: "§5-3",
          content: [
            { heading: "전략 5가지 & 태스크 분해 규칙", html: "<table><tr><th>전략</th><th>적용 조건</th></tr><tr><td>Sequential</td><td>강한 의존성, 안전 우선</td></tr><tr><td>Parallel</td><td>독립 태스크 ≥ 3개</td></tr><tr><td>Hierarchical</td><td>복합 목표, 하위 목표 다수</td></tr><tr><td>Adaptive</td><td>uncertainty &gt; 0.3</td></tr><tr><td>Minimal</td><td>단순 태스크, 빠른 응답</td></tr></table><p>분해 규칙: 단일 태스크 <strong>≤ 30분</strong> / LLM <strong>≤ 5회</strong> / 깊이 <strong>≤ 5단계</strong> / 병렬 브랜치 <strong>≤ 4개</strong></p>" },
            { heading: "에이전트 배정 기준", html: "<table><tr><th>태스크 타입</th><th>배정 에이전트</th></tr><tr><td>UI 컴포넌트, 화면 구현</td><td>FE Dev</td></tr><tr><td>API, 비즈니스 로직</td><td>BE Dev</td></tr><tr><td>스키마, 쿼리 최적화</td><td>DB Admin</td></tr><tr><td>외부 도구, 스크래핑</td><td>ToolAgent</td></tr><tr><td>인프라, 배포, CI/CD</td><td>InfraAgent</td></tr></table>" },
            { heading: "REQUIREMENT-FIRST 정책 (§0-A)", html: "<p><strong>핵심 원칙:</strong> Planner는 요구사항이 확정되기 전에 태스크 분해·ExecutionPlan 생성을 절대 시작할 수 없다. 이 원칙은 <strong>Lead 지시보다 우선</strong>한다.</p><p><strong>강제 4단계 절차:</strong></p><ol><li><strong>Step 1. 요구사항 작성</strong> — 목적·범위·성공 기준·비기능 요건 명세</li><li><strong>Step 2. 요구사항 검토</strong> — WorldModel에 5차원 완성도 확인 요청</li><li><strong>Step 3. 계획 수립</strong> — 요구사항 기반 ExecutionPlan 작성</li><li><strong>Step 4. 태스크 생성</strong> → Decision 전달</li></ol><p><strong>면제 항목 (절차 생략 가능):</strong></p><table><tr><th>면제 항목</th><th>조건</th></tr><tr><td>단순 오타 수정</td><td>코드 로직에 영향 없는 텍스트 수정</td></tr><tr><td>주석 추가·수정</td><td>동작에 영향 없는 문서화</td></tr><tr><td>사람이 정확한 값 지정</td><td>'X파일 Y줄 Z값으로 바꿔' 형식의 단일 수정</td></tr></table><p>⚠️ <strong>절대 금지:</strong> 요구사항 없이 태스크 분해·생성·ExecutionPlan 작성</p>" }
          ],
          keyTerms: [
            { term: "Adaptive 전략", definition: "uncertainty > 0.3일 때 선택하는 유연한 실행 전략" },
            { term: "Parallel 전략", definition: "독립 태스크가 3개 이상일 때 병렬 처리하는 전략. 브랜치 최대 4개" },
            { term: "ExecutionPlan", definition: "Planner가 Decision에 제출하는 태스크 분해 결과물. 의존성 그래프·전략·Fallback 포함" },
            { term: "REQUIREMENT-FIRST", definition: "Planner의 강제 정책. 요구사항 확정 전 태스크 분해·ExecutionPlan 생성 절대 금지. Lead 지시보다 우선" },
            { term: "요구사항 우선 강제", definition: "Planner §0-A 정책. 목적·범위·성공 기준·비기능 요건을 명세한 뒤 WorldModel의 5차원 완성도 검토를 거쳐야만 계획 수립이 허용됨" }
          ],
          quiz: [
            { q: "Parallel 전략 적용 조건은?", options: ["의존성 있는 태스크", "독립 태스크 ≥ 3개", "uncertainty > 0.3", "단순 태스크"], answer: 1, explanation: "독립 태스크가 3개 이상일 때 Parallel 전략을 선택합니다. 병렬 브랜치는 최대 4개." },
            { q: "단일 태스크 최대 허용 시간은?", options: ["15분", "20분", "30분", "60분"], answer: 2, explanation: "단일 태스크는 30분을 초과하지 않도록 분해해야 합니다." },
            { q: "CI/CD 관련 태스크는 어느 에이전트에 배정하나요?", options: ["BE Dev", "DB Admin", "ToolAgent", "InfraAgent"], answer: 3, explanation: "인프라, 배포, CI/CD 관련 태스크는 InfraAgent에 배정합니다." },
            { q: "REQUIREMENT-FIRST 정책에서 요구사항 검토를 요청하는 에이전트는?", options: ["Decision", "WorldModel", "Lead Planner", "Perception"], answer: 1, explanation: "Planner는 요구사항 작성 후 WorldModel에 5차원 완성도 확인을 요청합니다(Step 2)." }
          ]
        },
        {
          id: "c4-4", title: "Decision Agent & RBET", duration: "15분",
          objective: "RBET 4가지 기준과 가중치, 결정 유형 5가지, 안전 게이트 4가지를 이해한다",
          sourceSection: "§5-4",
          content: [
            { heading: "RBET 결정 프레임", html: "<table><tr><th>기준</th><th>가중치</th><th>내용</th></tr><tr><td><strong>R</strong>isk</td><td>35%</td><td>실패 확률 × 불가역성 × 영향 범위</td></tr><tr><td><strong>B</strong>enefit</td><td>30%</td><td>목표 달성 기여도 × 품질 향상</td></tr><tr><td><strong>E</strong>fficiency</td><td>20%</td><td>토큰 소비 + 실행 시간</td></tr><tr><td><strong>T</strong>rust</td><td>15%</td><td>배정 에이전트 과거 성공률</td></tr></table>" },
            { heading: "결정 유형 5가지 & 안전 게이트", html: "<table><tr><th>결정</th><th>조건</th></tr><tr><td>APPROVE</td><td>riskScore &lt; 0.3, 안전 게이트 통과</td></tr><tr><td>APPROVE_MODIFIED</td><td>riskScore &lt; 0.5, 일부 수정</td></tr><tr><td>REJECT_REPLAN</td><td>riskScore 0.5~0.7</td></tr><tr><td>REJECT_ESCALATE</td><td>riskScore &gt; 0.7</td></tr><tr><td>PAUSE</td><td>정보 부족</td></tr></table><p>안전 게이트(명시적 승인 필요): ① 파일 삭제/덮어쓰기 ② DB 스키마 변경 ③ 외부 API 쓰기 ④ 헌법 갱신</p>" }
          ],
          keyTerms: [
            { term: "RBET", definition: "Risk(35%) · Benefit(30%) · Efficiency(20%) · Trust(15%) — Decision의 의사결정 프레임워크" },
            { term: "REJECT_ESCALATE", definition: "riskScore > 0.7일 때 Lead에 에스컬레이션하는 결정" },
            { term: "안전 게이트", definition: "명시적 인간 승인이 필요한 4가지 위험 행동: 파일삭제/DB변경/외부API쓰기/헌법갱신" }
          ],
          quiz: [
            { q: "RBET에서 Risk의 가중치는?", options: ["20%", "30%", "35%", "40%"], answer: 2, explanation: "Risk는 가장 높은 35% 가중치를 가집니다. 실패 확률 × 불가역성 × 영향 범위로 계산됩니다." },
            { q: "riskScore 0.6일 때 Decision의 결정은?", options: ["APPROVE", "APPROVE_MODIFIED", "REJECT_REPLAN", "REJECT_ESCALATE"], answer: 2, explanation: "riskScore 0.5~0.7 범위는 REJECT_REPLAN — Planner에 재계획을 요청합니다(최대 3회)." },
            { q: "안전 게이트에 해당하지 않는 것은?", options: ["DB 스키마 변경", "파일 삭제", "API 읽기 요청", "헌법 갱신"], answer: 2, explanation: "API 읽기 요청은 안전 게이트 대상이 아닙니다. 외부 API '쓰기'만 해당됩니다." }
          ]
        }
      ]
    }
  ] // modules array continued in edu-data-p2.js
};
