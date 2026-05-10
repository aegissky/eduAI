// PART 5 — M13~M18 (13 classes). Loaded after edu-data-p4.js.
// 참조: guide/concept-report.md | 렌더링 포맷: {heading,html} / {term,definition} / {q,options,answer,explanation}
// 마지막 수정: 2026-03-21 (포맷 수정 + 내용 상세화)

(function () {
  const part5 = [

    // ══════════════════════════════════════════════════════════════════
    // M13 — 에이전트 설계 개념
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m13", title: "에이전트 설계 개념", icon: "🧠", classes: [

        // ── c13-1 ───────────────────────────────────────────────────────
        {
          id: "c13-1",
          title: "자율 진화형 AI 설계 철학 & 5단계 실행 루프",
          duration: "15분",
          objective: "AI를 자율 진화 시스템으로 설계하는 5대 원칙과 5단계 실행 루프, NEVER STOP 자율성 정책을 이해한다.",
          sourceSection: "agent-design-concepts.md §1~§2",
          content: [
            {
              heading: "자율 진화형 AI의 핵심 목표 & 5대 설계 원칙",
              html: "<p>AI를 단순한 코딩 도구가 아니라 <strong>'스스로 작업 공정을 설계하고, 결과물을 검증하며, 실패에서 배워 노하우를 자산화하는 시스템'</strong>으로 구축하는 것이 핵심 목표입니다.</p><table><tr><th>원칙</th><th>설명</th></tr><tr><td><strong>재귀적 자기 개선</strong></td><td>작업 완료 후 Self-Reflection 루프 실행 → 프롬프트·스킬 고도화</td></tr><tr><td><strong>격리 (Isolation)</strong></td><td>작업 영역을 Git 브랜치 단위로 격리하여 에이전트 간 충돌 방지</td></tr><tr><td><strong>가시성 (Visibility)</strong></td><td>모든 결정 근거를 Context Note에 기록 — 추적 가능성 확보</td></tr><tr><td><strong>SDD</strong></td><td>상위 Spec → 하위 Task 파생, Hook 기반 에이전트 소통</td></tr><tr><td><strong>자산화 루프</strong></td><td>성공·실패 패턴을 압축 메모리로 저장 후 다음 루프에서 재활용</td></tr></table>"
            },
            {
              heading: "5단계 자율 에이전트 실행 루프 & NEVER STOP 정책",
              html: "<ol style='padding-left:1.2rem;color:#cbd5e1;font-size:0.875rem;'><li><strong>Cognition</strong>: 요구사항 분석, 폴더·기술 스택 스캔 → Project Plan.md 생성</li><li><strong>Planning</strong>: 발생 가능 오류 사전 시뮬레이션, Task DAG 생성</li><li><strong>Execution</strong>: Sub-Agent 포크, 격리 환경(Git 브랜치)에서 작업, 공유 메모리로 상태 공유</li><li><strong>Validation</strong>: 비잔틴 에이전트가 비판적 검토, 핵심 오류만 추출하여 보고</li><li><strong>Self-Improve</strong>: 패턴·해결 이력을 압축 히스토리로 저장 → 다음 루프 입력</li></ol><p style='margin-top:0.75rem;padding:0.5rem 0.75rem;background:#0f172a;border-left:3px solid #ef4444;border-radius:4px;font-size:0.8rem;'><strong>⚠️ NEVER STOP 자율성 정책:</strong> 루프 시작 후 '계속할까요?' '좋은 멈춤 지점인가요?' 절대 금지. 아이디어 소진 시 이전 결과 재검토·실패 패턴 재조합·더 근본적 변경 시도. 종료 조건: <strong>사람이 수동 중단할 때만</strong>.</p>"
            },
            {
              heading: "Simplicity Criterion (단순성 판단 기준)",
              html: "<p>변경 채택 여부를 개선량과 복잡도 비용으로 함께 평가한다. 예: 0.001 개선 + 20줄 복잡한 코드 → <strong>기각</strong> / 0.001 개선 + 코드 삭제 → <strong>채택</strong>.</p><table><tr><th>상황</th><th>판정</th></tr><tr><td>작은 개선 + 복잡도 증가 (코드 추가)</td><td>🔴 기각</td></tr><tr><td>작은 개선 + 코드 삭제</td><td>🟢 채택 (단순화 승리)</td></tr><tr><td>동등 성능 + 단순화</td><td>🟢 채택</td></tr><tr><td>큰 개선 + 합리적 복잡도</td><td>🟢 채택</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "재귀적 자기 개선", definition: "에이전트가 작업 완료 후 Self-Reflection 루프를 실행하여 프롬프트·스킬을 스스로 고도화하는 원칙" },
            { term: "NEVER STOP 자율성 정책", definition: "루프 시작 후 사람의 수동 중단 외에는 절대 멈추지 않는 자율성 원칙. 아이디어 소진 시 더 심층 분석" },
            { term: "Simplicity Criterion", definition: "변경 채택 여부를 개선량과 복잡도 비용으로 동시에 평가하는 기준. 작은 개선+복잡도 증가=기각" },
            { term: "자산화 루프", definition: "성공·실패 패턴을 압축 메모리(kb/)로 저장하고 다음 루프에서 재활용하는 지식 축적 사이클" },
            { term: "Task DAG", definition: "Directed Acyclic Graph. 태스크 간 의존 관계를 방향성 비순환 그래프로 표현한 실행 계획 구조" }
          ],
          quiz: [
            { q: "자율 진화형 AI 5대 설계 원칙 중 '격리(Isolation)'의 구체적 방법은?", options: ["컨테이너 격리", "Git 브랜치 단위 격리", "Redis 채널 격리", "파일 시스템 격리"], answer: 1, explanation: "격리(Isolation)는 작업 영역을 Git 브랜치 단위로 격리하여 에이전트 간 충돌을 방지합니다." },
            { q: "5단계 실행 루프에서 '비잔틴 에이전트가 비판적 검토'를 담당하는 단계는?", options: ["1단계 Cognition", "3단계 Execution", "4단계 Validation", "5단계 Self-Improve"], answer: 2, explanation: "4단계 Validation에서 비잔틴 에이전트가 결과를 비판적으로 검토하고 핵심 오류만 추출합니다." },
            { q: "Simplicity Criterion에서 '채택' 판정을 받는 경우는?", options: ["작은 개선 + 코드 추가", "작은 개선 + 코드 삭제", "큰 개선 + 큰 복잡도 증가", "동등 성능 + 코드 추가"], answer: 1, explanation: "'작은 개선 + 코드 삭제'는 단순화 승리로 채택됩니다. 반대로 작은 개선이어도 복잡도가 증가하면 기각됩니다." },
            { q: "NEVER STOP 자율성 정책에서 허용되는 유일한 종료 조건은?", options: ["아이디어 소진 시", "오류 3회 이상 발생 시", "사람이 수동 중단할 때", "세션 시간 초과 시"], answer: 2, explanation: "NEVER STOP 정책에서 종료 조건은 오직 '사람이 수동 중단할 때'뿐입니다. 아이디어 소진 시에도 더 심층 분석을 계속합니다." }
          ]
        },

        // ── c13-2 ───────────────────────────────────────────────────────
        {
          id: "c13-2",
          title: "에이전트 자율 행동 4 Rules & 멀티 에이전트 충돌 해결",
          duration: "15분",
          objective: "에이전트 자율 행동 4 Rules와 멀티 에이전트 간 충돌 해결 5가지 전략을 파악한다.",
          sourceSection: "agent-design-concepts.md §3~§5",
          content: [
            {
              heading: "에이전트 자율 행동 4 Rules",
              html: "<table><tr><th>규칙</th><th>내용</th></tr><tr><td><strong>Rule 1 Self-Check</strong></td><td>'다 했습니다' 선언 전 보안·예외·성능 린트 자가 점검 필수</td></tr><tr><td><strong>Rule 2 Memory Mgmt</strong></td><td>대화가 길어지면 핵심 맥락 요약 → 작업압축 파일 갱신 (토큰 절약)</td></tr><tr><td><strong>Rule 3 Error Handling</strong></td><td>핵심 에러 정보만 추출 전달 → 불필요한 Stack Trace·경로 제거 후 전달</td></tr><tr><td><strong>Rule 4 Evolution</strong></td><td>'이번 작업에서 배운 스킬·규칙은 무엇인가?' 스스로 질문 후 kb/에 기록</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;'>에이전트 역할 모드: <strong>리더</strong>(전체 지휘·통합) / <strong>단독</strong>(도메인 전담) / <strong>멀티 AgentTeam</strong>(협업 병렬)</p>"
            },
            {
              heading: "멀티 에이전트 충돌 유형 & 해결 5전략",
              html: "<p><strong>충돌 3유형:</strong> ① 동일 입력에 서로 다른 결론 ② 동일 리소스에 다른 액션(삭제 vs 수정) ③ 상하위 역할 간 정책 충돌(Supervisor vs Worker)</p><table><tr><th>#</th><th>전략</th><th>방법</th></tr><tr><td>①</td><td>우선순위 계층</td><td>Supervisor 최종 권한 보유 (EditorAgent &gt; WriterAgent)</td></tr><tr><td>②</td><td>룰 기반 합의</td><td>신뢰도 점수 높은 쪽, 최신 정보, 더 구체적 근거 채용</td></tr><tr><td>③</td><td>Arbitrator 에이전트</td><td>제3의 중재 에이전트가 충돌 결과를 검토 후 최종안 결정</td></tr><tr><td>④</td><td>일관성 체크 단계</td><td>실행 전 논리·사실 일관성 검사 에이전트 삽입</td></tr><tr><td>⑤</td><td>프로토콜 프롬프트화</td><td>system 프롬프트에 충돌 시 행동 규칙을 명시적으로 기술</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "Rule 1 Self-Check", definition: "'다 했습니다' 전 보안·예외·성능 린트를 자가 점검하는 규칙. 산출물 품질 보장의 첫 단계" },
            { term: "Rule 4 Evolution", definition: "작업 완료 후 '이번에 배운 스킬·규칙은 무엇인가?'를 스스로 묻고 kb/에 기록하는 자기 진화 규칙" },
            { term: "Arbitrator 에이전트", definition: "멀티 에이전트 충돌 시 제3의 중재자 역할. 충돌하는 에이전트의 결과를 검토하고 최종안을 결정" },
            { term: "AgentTeam", definition: "협업 기반 병렬 수행 모드. 여러 에이전트가 동시에 작업하며 QA 병목을 해소하는 구조" },
            { term: "프로토콜 프롬프트화", definition: "충돌 발생 시 에이전트가 따를 행동 규칙을 system 프롬프트에 사전 명시하는 충돌 예방 전략" }
          ],
          quiz: [
            { q: "에이전트가 '다 했습니다' 선언 전에 수행해야 하는 Rule은?", options: ["Rule 2 Memory Mgmt", "Rule 1 Self-Check", "Rule 3 Error Handling", "Rule 4 Evolution"], answer: 1, explanation: "Rule 1 Self-Check는 '다 했습니다' 전에 보안·예외·성능 린트를 자가 점검하는 규칙입니다." },
            { q: "Rule 4 Evolution에서 에이전트가 작업 완료 후 스스로 물어야 하는 질문은?", options: ["다음 작업은 무엇인가?", "이번 작업에서 배운 스킬·규칙은 무엇인가?", "오류는 몇 개인가?", "비용은 얼마인가?"], answer: 1, explanation: "Rule 4 Evolution은 '이번 작업에서 배운 스킬·규칙은 무엇인가?'를 스스로 묻고 기록하는 자기 진화 규칙입니다." },
            { q: "멀티 에이전트 충돌 해결 전략 중 제3의 중재 에이전트를 사용하는 방법은?", options: ["우선순위 계층", "룰 기반 합의", "Arbitrator 에이전트", "프로토콜 프롬프트화"], answer: 2, explanation: "Arbitrator 에이전트는 충돌하는 에이전트들의 결과를 검토하여 제3자 입장에서 최종안을 결정합니다." },
            { q: "Rule 2 Memory Mgmt의 목적은?", options: ["보안 점검", "토큰 절약과 맥락 관리", "오류 필터링", "스킬 기록"], answer: 1, explanation: "Rule 2 Memory Mgmt는 대화가 길어질 때 핵심 맥락을 요약·압축하여 토큰을 절약하고 맥락을 유지하는 규칙입니다." }
          ]
        },

        // ── c13-3 ───────────────────────────────────────────────────────
        {
          id: "c13-3",
          title: "영역별 에이전트 분류 & RAG 스킬 업그레이드",
          duration: "10분",
          objective: "5개 영역별 에이전트 역할, 3대 관리 문서, RAG 기반 스킬 업그레이드 프로세스를 이해한다.",
          sourceSection: "agent-design-concepts.md §6~§10",
          content: [
            {
              heading: "3대 관리 문서 & 영역별 에이전트 역할 분류",
              html: "<p><strong>3대 관리 문서:</strong> <strong>Project Plan</strong>(설계도 — 전체 목표·마일스톤·수정 불가 영역) / <strong>Context Note</strong>(시방서 — 기술 선택 이유·노하우) / <strong>Todo Checklist</strong>(공정표 — 진행률·다음 할 일 실시간 갱신)</p><table><tr><th>영역</th><th>에이전트 스킬</th><th>통제 방식</th></tr><tr><td>기획</td><td>Spec-Architect</td><td>SDD 기반 요구사항 명세 (API First)</td></tr><tr><td>디자인</td><td>UI/UX Visualizer</td><td>디자인 시스템 연동, 고해상도 자동 생성</td></tr><tr><td>개발</td><td>Full-Stack Coder</td><td>격리 브랜치, 표준 템플릿 준수</td></tr><tr><td>검증</td><td>Arbitrator (중재자)</td><td>상호 리뷰, 신뢰도 점수 기반 머지</td></tr><tr><td>배포·운영</td><td>DevOps Agent</td><td>자동 품질 검사 후 결과 보고서 생성</td></tr></table>"
            },
            {
              heading: "RAG 기반 스킬 업그레이드 & QA 병목 해결",
              html: "<p><strong>RAG 스킬 업그레이드 프로세스:</strong> RAG로 최신 Skills 탐색 → 자산화 가능 여부 검토 → 계획 수립 + 보고서 생성 → 기존 스킬 업그레이드 / 신규 스킬 추가 → 기술 스택 분석·설계 → 기술표 최적 선정</p><table><tr><th>기능 레벨</th><th>기준</th><th>특징</th></tr><tr><td>단순</td><td>조건 추가, 소스 변경 최소화</td><td>1개 파일 수정</td></tr><tr><td>중간</td><td>기존 기능 추가 또는 변경, 조건 1개 이상</td><td>2~3개 파일 연동</td></tr><tr><td>복잡</td><td>소스 틀 변경, 대규모 파일 이동·오류 다발</td><td>전체 구조 영향</td></tr></table><p style='font-size:0.8rem;color:#94a3b8;margin-top:0.5rem;'>QA 병목 해결: 영역별 Leader 하위에 병렬 SubAgent를 구성하여 단순·중간·복잡 기능을 분리 처리</p>"
            }
          ],
          keyTerms: [
            { term: "Context Note", definition: "시방서 역할. 기술 선택 이유와 노하우를 기록하여 에이전트 간 결정 근거를 투명하게 공유하는 문서" },
            { term: "Spec-Architect", definition: "기획 영역 에이전트. SDD 기반 API First 방식으로 요구사항을 명세하는 역할" },
            { term: "RAG 스킬 업그레이드", definition: "Retrieval-Augmented Generation으로 최신 스킬을 탐색하고 자산화·업그레이드하는 반복 프로세스" },
            { term: "기능 복잡도 분류", definition: "단순(1파일) / 중간(2~3파일 연동) / 복잡(전체 구조 영향)으로 기능을 분류하여 QA 병목을 해소하는 기준" }
          ],
          quiz: [
            { q: "3대 관리 문서 중 '기술 선택 이유와 노하우를 기록'하는 문서는?", options: ["Project Plan", "Context Note", "Todo Checklist", "history.md"], answer: 1, explanation: "Context Note(시방서)는 기술 선택 이유와 노하우를 기록하여 에이전트 간 결정 근거를 투명하게 공유합니다." },
            { q: "RAG 기반 스킬 업그레이드 프로세스에서 'RAG로 최신 Skills 탐색' 바로 다음 단계는?", options: ["기존 스킬 업그레이드", "계획 수립 + 보고서 생성", "자산화 가능 여부 검토", "기술표 최적 선정"], answer: 2, explanation: "RAG 탐색 → 자산화 가능 여부 검토 → 계획 수립 + 보고서 생성 → 스킬 업그레이드 순입니다." },
            { q: "기능 복잡도 분류에서 '2~3개 파일 연동'에 해당하는 레벨은?", options: ["단순", "중간", "복잡", "위험"], answer: 1, explanation: "중간 레벨은 기존 기능 추가·변경, 조건 1개 이상으로 2~3개 파일이 연동되는 경우입니다." },
            { q: "QA 병목 해결 방안으로 제시된 구조는?", options: ["단일 QA 에이전트 강화", "영역별 Leader 하위 병렬 SubAgent 구성", "Arbitrator 중앙 집중", "Canonical 패턴 강제 적용"], answer: 1, explanation: "영역별 Leader 하위에 병렬 SubAgent를 구성하여 단순·중간·복잡 기능을 분리 처리함으로써 QA 병목을 해소합니다." }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // M14 — Agentic AI 아키텍처
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m14", title: "Agentic AI 아키텍처", icon: "🏗️", classes: [

        // ── c14-1 ───────────────────────────────────────────────────────
        {
          id: "c14-1",
          title: "기본 인지 루프 & 계층형 멀티 에이전트 아키텍처",
          duration: "15분",
          objective: "4단계→9단계 인지 루프 진화와 계층형 멀티 에이전트 아키텍처의 8개 레이어 역할을 이해한다.",
          sourceSection: "agentic-ai-architecture.md §1~§2",
          content: [
            {
              heading: "인지 루프 진화: 4단계 → 9단계",
              html: "<p><strong>기존 4단계:</strong> 인식 → 추론 → 자가학습 → 행동</p><p><strong>최신 확장 9단계:</strong></p><pre>Observe → Understand → Plan → Decide → Act\n  → Verify → Reflect → Learn → Improve</pre><p style='font-size:0.8rem;color:#94a3b8;'>AKC v4가 채택한 9단계 구조. ⑥ 이후(Learn/Improve) → ① Observe 직접 점프는 금지, 반드시 다음 세션의 새 루프로 시작</p>"
            },
            {
              heading: "계층형 멀티 에이전트 아키텍처 — 8개 레이어",
              html: "<table><tr><th>레이어</th><th>주요 기능</th></tr><tr><td><strong>1. Perception</strong></td><td>텍스트·이미지·음성·API·IoT 입력 수집, Feature Extraction, World Model Update, Situation Awareness</td></tr><tr><td><strong>2. Memory</strong></td><td>Working(scratchpad) / Episodic(task history) / Semantic(vector DB) / Procedural(workflows)</td></tr><tr><td><strong>3. Reasoning</strong></td><td>Interpretation → Hypothesis Generation → Logical Reasoning → Planning → Decision Making</td></tr><tr><td><strong>4. Meta-Cognition</strong></td><td>Self Reflection, Error Detection, Strategy Adjustment, Goal Management → AKC v2에서 Reflection·Learning Layer로 세분화</td></tr><tr><td><strong>5. Learning</strong></td><td>Reinforcement Learning, Self-Supervised Learning, Experience Replay, Memory Consolidation</td></tr><tr><td><strong>6. Action</strong></td><td>Action Planning → Tool Selection → Execution → Feedback Monitoring</td></tr><tr><td><strong>7. Coordination</strong></td><td>Agent Orchestration, Communication, Task Delegation, Collective Intelligence</td></tr><tr><td><strong>8. Governance</strong></td><td>Safety, Policy Enforcement, Resource Management (토큰·GPU·시간 예산 제어)</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "인지 루프 (Cognitive Loop)", definition: "에이전트가 외부 신호를 받아 행동하고 학습하는 순환 처리 구조. 4단계에서 9단계로 진화" },
            { term: "Perception Layer", definition: "다양한 소스(텍스트·이미지·API·IoT)에서 입력을 수집하고 Feature Extraction과 Situation Awareness를 담당하는 인지 계층" },
            { term: "Meta-Cognition Layer", definition: "자기 인식 계층. Self Reflection·Error Detection·Strategy Adjustment. AKC v2에서 Reflection+Learning Layer로 세분화" },
            { term: "Governance Layer", definition: "Safety, Policy Enforcement, Resource Management(토큰·GPU·시간)를 관리하는 최상위 제어 계층" },
            { term: "Coordination Layer", definition: "멀티 에이전트 간 오케스트레이션, 통신, 태스크 위임, Collective Intelligence를 담당하는 협력 계층" }
          ],
          quiz: [
            { q: "9단계 인지 루프에서 'Act(행동)' 다음에 오는 두 단계는?", options: ["Learn → Improve", "Verify → Reflect", "Plan → Decide", "Observe → Understand"], answer: 1, explanation: "9단계 루프에서 Act 다음은 Verify(검증) → Reflect(반성)입니다. Learn과 Improve는 그 이후입니다." },
            { q: "Working Memory(scratchpad)와 Episodic Memory(task history)가 속하는 레이어는?", options: ["Perception Layer", "Reasoning Layer", "Memory Layer", "Meta-Cognition Layer"], answer: 2, explanation: "Working, Episodic, Semantic, Procedural Memory 모두 Memory Layer에 속합니다." },
            { q: "토큰·GPU·시간 등의 자원을 관리하는 레이어는?", options: ["Coordination Layer", "Governance Layer", "Action Layer", "Learning Layer"], answer: 1, explanation: "Governance Layer가 Safety, Policy Enforcement, Resource Management(토큰·GPU·시간)를 담당합니다." },
            { q: "Meta-Cognition Layer가 AKC v2에서 세분화된 두 레이어는?", options: ["Perception + Action", "Reasoning + Planning", "Reflection Layer + Learning Layer", "Coordination + Governance"], answer: 2, explanation: "AKC v2에서 Meta-Cognition Layer는 Reflection Layer(§3 #9)와 Learning Layer(§3 #10)로 세분화되었습니다." }
          ]
        },

        // ── c14-2 ───────────────────────────────────────────────────────
        {
          id: "c14-2",
          title: "AKC v2 메모리 아키텍처 & Reflection 롤백 정책",
          duration: "15분",
          objective: "AKC v2의 12레이어 구조, Cold/Hot/Trace 메모리 3종, Reflection Layer의 실험 롤백 판정 기준을 익힌다.",
          sourceSection: "agentic-ai-architecture.md §3",
          content: [
            {
              heading: "AKC v2 12레이어 구조 & 메모리 3종",
              html: "<pre style='font-size:0.75rem;'>AKC Cognitive Core\n├ 1. Perception  2. Knowledge  3. World Model  4. Goal Management\n├ 5. Planning    6. Decision   7. Execution    8. Verification\n└ 9. Reflection  10. Learning  11. Coordination 12. Evolution</pre><table><tr><th>메모리 유형</th><th>구현</th><th>특성</th></tr><tr><td><strong>Cold Memory</strong></td><td>Global SkillNet, KB, Case Library</td><td>장기 정적 지식</td></tr><tr><td><strong>Hot Memory</strong></td><td>sync_state.json, task_state, working context</td><td>프로젝트 런타임 동적</td></tr><tr><td><strong>Trace Memory</strong></td><td>history.md, reasoning log, <code>experiment_results.tsv</code></td><td>실험 이력 추적, append-only</td></tr></table><p style='font-size:0.8rem;margin-top:0.5rem;'>Trace Memory TSV 5필드: <code>commit | val_metric | resource_gb | status | description</code> — status는 keep/discard/crash. TSV를 사용하는 이유: description에 쉼표가 포함될 수 있어 CSV 금지</p>"
            },
            {
              heading: "Reflection Layer — 실험 롤백 정책 (autoresearch 패턴)",
              html: "<table><tr><th>상황</th><th>판단</th><th>행동</th></tr><tr><td>지표 개선 (val_metric 감소)</td><td>keep</td><td>브랜치 전진, TSV에 keep 기록</td></tr><tr><td>지표 동등 또는 악화</td><td>discard</td><td>git reset으로 이전 커밋 롤백, TSV 기록</td></tr><tr><td>크래시 — 단순 수정 가능 (타입 오류·import 누락)</td><td>수정 재시도</td><td>수정 후 재실행 (최대 2~3회)</td></tr><tr><td>크래시 — 근본적 문제</td><td>crash</td><td>skip 후 다음 실험, TSV crash 기록</td></tr><tr><td>타임아웃 (예산 2배 초과)</td><td>discard</td><td>강제 종료 + discard + revert</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "Cold Memory", definition: "Global SkillNet, KB, Case Library 등 장기 정적 지식을 담는 저장소. 프로젝트 간 공유되며 Archivist가 관리" },
            { term: "Hot Memory", definition: "sync_state.json, task_state 등 프로젝트 런타임의 동적 상태를 담는 메모리. HotZone에 해당" },
            { term: "Trace Memory", definition: "history.md, reasoning log, experiment_results.tsv 등 실험 이력을 append-only로 추적하는 메모리" },
            { term: "experiment_results.tsv", definition: "Trace Memory 구현체. commit·val_metric·resource_gb·status(keep/discard/crash)·description 5필드로 실험을 추적" },
            { term: "Reflection Layer 롤백 정책", definition: "실험 결과를 keep/discard/crash로 판정하여 브랜치 전진 또는 git reset을 결정하는 자율 실험 관리 정책" }
          ],
          quiz: [
            { q: "AKC v2에서 'Global SkillNet'과 'Knowledge Base'가 속하는 메모리 유형은?", options: ["Hot Memory", "Trace Memory", "Cold Memory", "Working Memory"], answer: 2, explanation: "Cold Memory는 Global SkillNet, KB, Case Library 등 장기 정적 지식을 담는 저장소입니다." },
            { q: "experiment_results.tsv에서 크래시 발생 시 val_metric 값은?", options: ["999.999", "null", "0.000000", "-1"], answer: 2, explanation: "크래시 시 프로세스가 비정상 종료되어 val_metric은 0.000000으로 기록됩니다." },
            { q: "Reflection Layer에서 '타임아웃(예산 2배 초과)' 시 취하는 행동은?", options: ["keep — 브랜치 유지", "수정 후 재시도", "discard + revert", "crash 기록 후 진행"], answer: 2, explanation: "타임아웃 시 강제 종료 + discard + revert로 처리합니다. 이전 커밋으로 복원됩니다." },
            { q: "experiment_results.tsv에서 CSV 대신 TSV(탭 구분자)를 사용하는 이유는?", options: ["파일 크기가 작아서", "description 필드에 쉼표가 포함될 수 있어서", "TSV가 국제 표준이라서", "git 추적이 쉬워서"], answer: 1, explanation: "description 필드에 쉼표가 포함될 수 있으므로 CSV 대신 탭 구분자(TSV)를 사용합니다." }
          ]
        },

        // ── c14-3 ───────────────────────────────────────────────────────
        {
          id: "c14-3",
          title: "Agent Skill Schema & AKC v3 확장 에이전트",
          duration: "10분",
          objective: "에이전트 스킬 정의에 필요한 8필드 스키마와 AKC v3에서 권장하는 8종 확장 에이전트를 파악한다.",
          sourceSection: "agentic-ai-architecture.md §4~§5",
          content: [
            {
              heading: "Agent Skill Schema — 8필드 구조",
              html: "<table><tr><th>필드</th><th>설명</th><th>예시</th></tr><tr><td><strong>name</strong></td><td>스킬 이름</td><td>CodeImplementation</td></tr><tr><td><strong>domain</strong></td><td>도메인 분류</td><td>FE / BE / DB / 공통</td></tr><tr><td><strong>input</strong></td><td>입력 요구사항</td><td>requirements, rules</td></tr><tr><td><strong>reasoning</strong></td><td>추론 전략</td><td>architecture analysis</td></tr><tr><td><strong>output</strong></td><td>출력 형식</td><td>TypeScript 파일</td></tr><tr><td><strong>tools</strong></td><td>사용 도구 목록</td><td>code generator, linter</td></tr><tr><td><strong>validation</strong></td><td>검증 방법</td><td>unit test, QA Trinity</td></tr><tr><td><strong>learning</strong></td><td>학습·패턴 추출 방식</td><td>pattern extraction → kb/</td></tr></table>"
            },
            {
              heading: "AKC v3 권장 추가 에이전트 8종",
              html: "<table><tr><th>에이전트</th><th>역할</th></tr><tr><td><strong>Strategy Agent</strong></td><td>중장기 전략 수립 및 목표 정렬</td></tr><tr><td><strong>Planning Agent</strong></td><td>작업 계획 생성 및 Task DAG 최적화</td></tr><tr><td><strong>Risk Agent</strong></td><td>실행 전 리스크 분석 및 완화 계획</td></tr><tr><td><strong>Security Agent</strong></td><td>코드·인프라 보안 취약점 검증</td></tr><tr><td><strong>Reflection Agent</strong></td><td>자기 평가 및 개선점 도출</td></tr><tr><td><strong>Learning Agent</strong></td><td>지식 자산화 확장 및 패턴 관리</td></tr><tr><td><strong>Tool Agent</strong></td><td>MCP·자동화 도구 제어 및 API 호출</td></tr><tr><td><strong>Infra Agent</strong></td><td>인프라 설정·배포·모니터링</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "Agent Skill Schema", definition: "에이전트 스킬을 정의하는 8필드 구조체. name/domain/input/reasoning/output/tools/validation/learning 포함" },
            { term: "validation (스킬 필드)", definition: "스킬 실행 결과의 검증 방법을 정의하는 필드. 예: unit test, QA Trinity 검증" },
            { term: "learning (스킬 필드)", definition: "스킬 실행 후 어떻게 패턴을 추출하고 kb/에 저장할지를 정의하는 필드" },
            { term: "Risk Agent", definition: "AKC v3에서 권장하는 에이전트. 작업 실행 전 리스크를 분석하고 완화 계획을 수립하는 역할" },
            { term: "Tool Agent", definition: "MCP(Model Context Protocol)와 자동화 도구를 제어하고 외부 API를 호출하는 에이전트" }
          ],
          quiz: [
            { q: "Agent Skill Schema의 8필드 중 '어떻게 결과를 검증할지'를 정의하는 필드는?", options: ["reasoning", "tools", "validation", "learning"], answer: 2, explanation: "validation 필드는 스킬 실행 결과의 검증 방법(unit test, QA Trinity 등)을 정의합니다." },
            { q: "AKC v3에서 'MCP·자동화 도구 제어'를 담당하는 에이전트는?", options: ["Strategy Agent", "Security Agent", "Tool Agent", "Infra Agent"], answer: 2, explanation: "Tool Agent는 MCP(Model Context Protocol)와 자동화 도구를 제어하고 외부 API를 호출합니다." },
            { q: "Agent Skill Schema에서 '학습·패턴 추출 방식'을 정의하는 필드는?", options: ["reasoning", "output", "tools", "learning"], answer: 3, explanation: "learning 필드는 스킬 실행 후 지식을 어떻게 추출하고 kb/에 저장할지를 정의합니다." },
            { q: "AKC v3에서 '리스크 분석 및 완화 계획'을 담당하는 에이전트는?", options: ["Security Agent", "Risk Agent", "Reflection Agent", "Planning Agent"], answer: 1, explanation: "Risk Agent는 작업 실행 전 리스크를 분석하고 완화 계획을 수립하는 역할을 담당합니다." }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // M15 — 엔터프라이즈 기술 스택 & 보안
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m15", title: "엔터프라이즈 기술 스택 & 보안", icon: "🔒", classes: [

        // ── c15-1 ───────────────────────────────────────────────────────
        {
          id: "c15-1",
          title: "온프라미스 기술 스택 & MD 파일 Fallback 정책",
          duration: "15분",
          objective: "엔터프라이즈 온프라미스 표준 스택 6종, Kafka 토픽 4종, MD 파일 Fallback 매핑 규칙을 이해한다.",
          sourceSection: "enterprise-tech-stack-security.md §1~§2",
          content: [
            {
              heading: "온프라미스 최적화 기술 스택 & Kafka 토픽",
              html: "<table><tr><th>계층</th><th>기술</th><th>선택 이유</th></tr><tr><td>Backend</td><td>Java 17+ (Spring Boot 3.x)</td><td>국내 엔터프라이즈 표준, 폐쇄망 레퍼런스 최다</td></tr><tr><td>Frontend</td><td>React (CSR)</td><td>빌드 후 Nginx 정적 배포 용이</td></tr><tr><td>DB — Cold</td><td>PostgreSQL</td><td>승인된 스킬·정책 영구 저장 (장기 기억)</td></tr><tr><td>DB — Hot</td><td>Redis</td><td>컨텍스트 캐싱·임시 승인 대기 (단기 기억)</td></tr><tr><td>Message Bus</td><td>Kafka</td><td>에이전트 간 비동기 이벤트 스트리밍</td></tr><tr><td>Runtime</td><td>Docker & Docker Compose</td><td>OS·라이브러리 파편화 방지</td></tr></table><table style='margin-top:0.5rem;'><tr><th>Kafka 토픽</th><th>방향</th><th>용도</th></tr><tr><td>task.request</td><td>Orchestrator → Agent</td><td>작업 할당</td></tr><tr><td>skill.update.request</td><td>Agent → Guardian</td><td>스킬 자산화 승인 요청</td></tr><tr><td>anomaly.report</td><td>Agent → Researcher</td><td>문제 감지 → 자율 연구 트리거</td></tr><tr><td>resource.alert</td><td>Monitor → Orchestrator</td><td>CPU·Memory·Token 임계치 초과 알림</td></tr></table>"
            },
            {
              heading: "인프라 없을 때 — MD 파일 Fallback 정책",
              html: "<p>Kafka·PostgreSQL·Redis <strong>환경이 없을 경우</strong> MD 파일 구조로 동일한 워크플로우를 운영한다.</p><table><tr><th>인프라</th><th>MD 파일 대체</th></tr><tr><td>PostgreSQL (Cold)</td><td>skills/approved/ 폴더 내 개별 .md</td></tr><tr><td>Redis (Hot)</td><td>sync_state.json + hot_context.md</td></tr><tr><td>Kafka task.request</td><td>tasks/pending/*.md (생성 순 FIFO 처리)</td></tr><tr><td>Kafka skill.update.request</td><td>tasks/approval_pending/*.md</td></tr><tr><td>Kafka anomaly.report</td><td>tasks/anomaly/*.md</td></tr><tr><td>Kafka resource.alert</td><td>logs/resource_alert.md 추가 기록</td></tr></table><p style='font-size:0.8rem;margin-top:0.5rem;'><strong>핵심 원칙:</strong> MD 모드와 인프라 모드는 동일한 워크플로우를 공유한다. 환경이 달라져도 에이전트 행동 정책은 변경되지 않는다.</p>"
            }
          ],
          keyTerms: [
            { term: "PostgreSQL (Cold DB)", definition: "승인된 스킬·정책을 영구 저장하는 Cold Memory 구현체. 에이전트 장기 지식 기반" },
            { term: "Redis (Hot DB)", definition: "컨텍스트 캐싱·임시 승인 대기 등 단기 상태를 관리하는 Hot Memory 구현체" },
            { term: "Kafka task.request", definition: "Orchestrator → Agent 방향의 작업 할당 메시지를 전달하는 Kafka 토픽" },
            { term: "anomaly.report", definition: "Agent → Auto-Researcher 방향. 문제 감지 시 자율 연구를 트리거하는 Kafka 토픽. MD Fallback: tasks/anomaly/*.md" },
            { term: "MD 파일 Fallback", definition: "Kafka/PG/Redis 없는 환경에서 동일한 워크플로우를 MD 파일 구조(tasks/, skills/, hot_context.md)로 대체하는 경량 운영 모드" }
          ],
          quiz: [
            { q: "에이전트 간 비동기 이벤트 스트리밍을 담당하는 기술은?", options: ["Redis", "PostgreSQL", "Kafka", "Docker"], answer: 2, explanation: "Kafka는 에이전트 간 비동기 이벤트 스트리밍을 위한 Message Bus 역할을 합니다." },
            { q: "Kafka 없는 환경에서 'skill.update.request' 토픽을 대체하는 MD 파일 위치는?", options: ["tasks/pending/", "tasks/anomaly/", "tasks/approval_pending/", "skills/approved/"], answer: 2, explanation: "skill.update.request(스킬 자산화 승인 요청)는 tasks/approval_pending/*.md 파일로 대체합니다." },
            { q: "MD 파일 Fallback 정책의 핵심 원칙은?", options: ["인프라와 다른 워크플로우 적용", "MD 모드와 인프라 모드는 동일한 워크플로우 공유", "MD 파일은 임시용으로만 사용", "인프라 도입 시 모든 정책 재설계"], answer: 1, explanation: "MD 파일 모드와 인프라 모드는 동일한 워크플로우를 공유합니다. 환경이 달라져도 에이전트 행동 정책은 변경되지 않습니다." },
            { q: "Kafka 'anomaly.report' 토픽의 방향과 용도는?", options: ["Orchestrator → Agent / 작업 할당", "Agent → Researcher / 문제 감지→자율 연구 트리거", "Agent → Guardian / 스킬 승인 요청", "Monitor → Orchestrator / 리소스 알림"], answer: 1, explanation: "anomaly.report 토픽은 Agent → Auto-Researcher 방향으로, 문제를 감지하여 자율 연구를 트리거합니다." }
          ]
        },

        // ── c15-2 ───────────────────────────────────────────────────────
        {
          id: "c15-2",
          title: "보안 체크리스트 & 배포 토폴로지 3종",
          duration: "15분",
          objective: "엔터프라이즈 보안 3영역(SCA·인젝션·취약점)과 단일PC→LAN→멀티네트워크 배포 토폴로지 확장 원칙을 파악한다.",
          sourceSection: "enterprise-tech-stack-security.md §3~§4",
          content: [
            {
              heading: "보안 체크리스트 3영역",
              html: "<table><tr><th>영역</th><th>주요 체크 항목</th></tr><tr><td><strong>① SCA (종속성 검증)</strong></td><td>Snyk / OWASP Dependency-Check로 CVE 취약 라이브러리 차단. devDependencies 제외 빌드(최소 권한). 폐쇄망: Nexus/Artifactory 내부 저장소</td></tr><tr><td><strong>② 입력값 검증·인젝션 방지</strong></td><td>SQL Injection: #{variable} 바인딩 강제, 동적 문자열 결합 금지. XSS: HTML Escape + Lucent-XSS 필터. 파일 업로드: Whitelist 확장자, 크기 제한, Web Root 외부 저장</td></tr><tr><td><strong>③ 시스템 취약점</strong></td><td>Broken Access Control: 모든 API 권한(Role) 체크. Error Handling: Stack Trace·DB 구조 화면 노출 금지, 공통 에러 페이지. Secret Management: 환경변수 또는 Jasypt 암호화</td></tr></table>"
            },
            {
              heading: "배포 토폴로지 3종 & 구성 기본 원칙",
              html: "<table><tr><th>토폴로지</th><th>구성</th><th>특징</th></tr><tr><td><strong>단일 PC</strong></td><td>Docker Compose: PG + Redis + Kafka + 에이전트 컨테이너</td><td>완전 오프라인, 개발·테스트 환경</td></tr><tr><td><strong>LAN 멀티 PC</strong></td><td>PC1: 인프라 노드 / PC2~N: 에이전트 노드<br>Kafka advertised.listeners → PC1 LAN IP 고정</td><td>10~50 에이전트 확장 가능</td></tr><tr><td><strong>멀티 네트워크</strong></td><td>운영망·연구망 분리<br>Kafka MirrorMaker 2 토픽 브리지<br>PG 마스터-레플리카</td><td>1000+ 에이전트, 세그먼트 간 미러링</td></tr></table><p style='font-size:0.8rem;margin-top:0.5rem;'><strong>5대 구성 원칙:</strong> ① 단일 PC → LAN → 멀티 네트워크 단계적 확장 ② advertised.listeners 환경변수 분리 ③ PostgreSQL 단일 진실 원천 유지 ④ 에이전트 컨테이너는 주소만 바꿔 어느 노드에도 배포 ⑤ 폐쇄망 완전 오프라인 동작</p>"
            }
          ],
          keyTerms: [
            { term: "SCA (Software Composition Analysis)", definition: "종속성 패키지의 알려진 취약점(CVE)을 검사하는 보안 분석. Snyk, OWASP Dependency-Check 등 도구 사용" },
            { term: "SQL Injection 방지", definition: "MyBatis/JPA에서 #{variable} 바인딩 강제, 동적 문자열 결합 금지로 SQL Injection을 방어하는 방법" },
            { term: "Jasypt", definition: "Spring에서 DB 패스워드·API 키를 암호화하여 설정 파일에 저장하는 라이브러리. Secret Management에 활용" },
            { term: "Kafka MirrorMaker 2", definition: "멀티 네트워크 토폴로지에서 서로 다른 Kafka 클러스터 간 토픽을 미러링(복제)하는 브리지 컴포넌트" },
            { term: "advertised.listeners", definition: "Kafka 브로커가 외부에 광고하는 연결 주소. LAN 멀티 PC 환경에서 PC1의 LAN IP로 고정 설정 필요" }
          ],
          quiz: [
            { q: "SQL Injection 방지를 위해 MyBatis/JPA에서 사용해야 하는 변수 바인딩 방식은?", options: ["${variable}", "#{variable}", ":variable", "?variable"], answer: 1, explanation: "#{variable} 형식의 바인딩은 PreparedStatement를 생성하여 SQL Injection을 방지합니다. ${variable}은 문자열 치환으로 위험합니다." },
            { q: "네트워크 세그먼트 간 Kafka 토픽 미러링을 담당하는 컴포넌트는?", options: ["Kafka Connect", "Kafka Streams", "Kafka MirrorMaker 2", "Zookeeper"], answer: 2, explanation: "Kafka MirrorMaker 2는 멀티 네트워크 토폴로지에서 토픽 브리지 역할을 합니다." },
            { q: "Error Handling 보안 정책에서 API 에러 응답에 절대 노출해서는 안 되는 정보는?", options: ["HTTP 상태 코드", "에러 메시지", "Stack Trace와 DB 구조", "타임스탬프"], answer: 2, explanation: "에러 시 Stack Trace와 DB 구조(테이블명, 컬럼명 등)는 화면에 노출해서는 안 됩니다." },
            { q: "비밀번호·API 키의 코드 하드코딩을 방지하는 Spring 암호화 라이브러리는?", options: ["BCrypt", "Jasypt", "JWT", "Bouncy Castle"], answer: 1, explanation: "Jasypt는 Spring 설정 파일의 DB 패스워드·API 키를 암호화 관리하는 라이브러리입니다." }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // M16 — 토큰 최적화 & 운영 도구
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m16", title: "토큰 최적화 & 운영 도구", icon: "⚙️", classes: [

        // ── c16-1 ───────────────────────────────────────────────────────
        {
          id: "c16-1",
          title: "Claude Code 토큰 최적화 전략",
          duration: "10분",
          objective: "MCP 설정 최적화, 작업 단위 분리 5단계 흐름, 모델 선택 전략으로 토큰 비용을 최소화하는 방법을 익힌다.",
          sourceSection: "rule_info/claude-token-optimization.md §1~§7",
          content: [
            {
              heading: "작업 단위 분리 5단계 & 모델 선택 전략",
              html: "<table><tr><th>단계</th><th>명령</th><th>목적</th></tr><tr><td>작업 시작</td><td><code>/rename \"작업명\"</code></td><td>세션 이름 지정</td></tr><tr><td>작업 진행 후 압축</td><td><code>/compact \"요약내용\"</code></td><td>컨텍스트 압축 + 인덱스 관리</td></tr><tr><td>컨텍스트 초기화</td><td><code>/clear</code></td><td>불필요한 이전 컨텍스트 제거</td></tr><tr><td>히스토리 확인</td><td><code>#</code> 입력</td><td>작업 히스토리 탐색</td></tr><tr><td>세션 복귀</td><td><code>/resume</code></td><td>이전 작업 이어가기</td></tr></table><table style='margin-top:0.5rem;'><tr><th>용도</th><th>모델</th><th>특징</th></tr><tr><td>단순 질문 (빠름)</td><td>haiku</td><td>저비용, 빠른 응답</td></tr><tr><td>코딩 작업 (주력)</td><td>sonnet</td><td>균형잡힌 성능</td></tr><tr><td>복잡한 설계 (필요 시만)</td><td>opus + /plan</td><td>최고 성능, 고비용</td></tr></table>"
            },
            {
              heading: "추가 최적화 설정",
              html: "<ul><li><strong>MCP Load 5% 설정</strong> → 불필요한 도구 로드 최소화</li><li><strong>mcp tool search: true</strong> → 필요한 도구만 동적 검색</li><li><strong>/thinking mode</strong> → 기본값 8,000 토큰 소비. 단순 작업 시 비활성화 권장</li><li><strong>오류 Hook 전처리</strong> → 핵심 에러 정보만 추출, Stack Trace·경로 제거 후 Claude에 전달</li><li><strong>팀 관리</strong> → Claude Code 관리자 기능으로 팀원 전체 settings.json 고정 가능</li></ul><p style='font-size:0.8rem;margin-top:0.5rem;color:#94a3b8;'>토큰 사용량 확인: <code>/context</code> 명령으로 현재 컨텍스트 토큰 사용량 즉시 확인</p>"
            }
          ],
          keyTerms: [
            { term: "/rename + /clear + /resume", definition: "작업 단위 분리 3단계 흐름. /rename으로 이름 지정 → /clear로 컨텍스트 초기화 → /resume으로 복귀" },
            { term: "/compact", definition: "현재 컨텍스트를 지정한 요약 내용으로 압축하는 명령. 인덱스 관리와 함께 토큰을 절약" },
            { term: "MCP Load 5%", definition: "MCP 서버의 도구 로드 비율을 5%로 제한하여 불필요한 도구 초기화를 최소화하는 설정" },
            { term: "/thinking mode", definition: "Claude의 추론 과정을 명시적으로 실행하는 모드. 기본값 8,000 토큰 소비. 단순 작업 시 비활성화 권장" },
            { term: "오류 Hook 전처리", definition: "hooks 발생 시 핵심 에러 정보만 추출하고 Stack Trace·경로를 제거하여 Claude에 전달하는 토큰 절약 방법" }
          ],
          quiz: [
            { q: "Claude Code에서 현재 컨텍스트 토큰 사용량을 확인하는 명령어는?", options: ["/status", "/context", "/tokens", "/usage"], answer: 1, explanation: "/context 명령으로 현재 컨텍스트의 토큰 사용량을 확인할 수 있습니다." },
            { q: "복잡한 시스템 설계 작업에서 권장되는 모델과 플래그 조합은?", options: ["haiku + /fast", "sonnet + /think", "opus + /plan", "sonnet + /context"], answer: 2, explanation: "복잡한 설계에는 최고 성능의 opus 모델에 /plan 플래그를 조합합니다. 고비용이므로 필요 시에만 사용." },
            { q: "/thinking mode의 기본(default) 토큰 사용량은?", options: ["2,000 토큰", "4,000 토큰", "8,000 토큰", "16,000 토큰"], answer: 2, explanation: "/thinking mode는 기본값으로 8,000 토큰을 사용합니다. 단순 작업에서는 비활성화가 권장됩니다." },
            { q: "MCP Load 설정에서 불필요한 도구 로드를 최소화하기 위한 권장 설정값은?", options: ["1%", "5%", "20%", "50%"], answer: 1, explanation: "MCP Load를 5%로 설정하여 불필요한 도구 로드를 최소화합니다. mcp tool search: true와 함께 사용." }
          ]
        },

        // ── c16-2 ───────────────────────────────────────────────────────
        {
          id: "c16-2",
          title: "백그라운드 서버 4종 & Gmail 이메일 발송 유틸",
          duration: "10분",
          objective: "AKC 시스템을 지원하는 4개 백그라운드 서버의 역할·실행 명령과 Gmail 발송 유틸(mail_sender.py) 사용법을 파악한다.",
          sourceSection: "agent_skill_info/bg-servers.md + rule_info/email-sender-guide.md",
          content: [
            {
              heading: "백그라운드 서버 4종",
              html: "<table><tr><th>#</th><th>이름</th><th>역할</th><th>포트·이벤트</th></tr><tr><td>1</td><td><strong>approval-server</strong></td><td>헌법 개정 승인 HTTP 서버. 메일 승인 링크가 이 서버로 연결됨. <strong>항상 켜둬야 함</strong></td><td>PORT 3456</td></tr><tr><td>2</td><td><strong>sync-trigger --watch</strong></td><td>_docs/ 헌법 변경 → DOCX.md 양방향 동기화 (600ms 디바운스). <strong>헌법 작업 시 필수</strong></td><td>_docs/**/*.md 감시</td></tr><tr><td>3</td><td><strong>sync-trigger --guide-watch</strong></td><td>guide/ 변경 감지 → guide-baseline.json 갱신·콘솔 보고. '최신 정보 참고해' 트리거 전 권장</td><td>guide/**/* 감시</td></tr><tr><td>4</td><td><strong>update-structure --watch</strong></td><td>#concept 구조 변경 → structure.md 자동 갱신 (1000ms 디바운스). approval-server가 자동 호출</td><td>#concept/**/* 감시</td></tr></table><p style='font-size:0.8rem;margin-top:0.5rem;'>포트 충돌 확인: <code>netstat -ano | findstr :3456</code></p>"
            },
            {
              heading: "Gmail 발송 유틸 (mail_sender.py) 주요 기능 & AKC 연동",
              html: "<table><tr><th>기능</th><th>파라미터</th><th>설명</th></tr><tr><td>Markdown → HTML 자동 변환</td><td>body_markdown</td><td>헌법 리뷰 보고서를 Markdown으로 전달하면 HTML 이메일로 자동 변환</td></tr><tr><td>다중 수신자</td><td>to_emails, cc_emails, bcc_emails</td><td>To / Cc / Bcc 지원. 미지정 시 기본 수신자 wskyland@gmail.com</td></tr><tr><td>파일 첨부</td><td>attachment_path</td><td>결과 보고서 PDF 등 첨부 가능</td></tr><tr><td>유효성 검증</td><td>자동</td><td>이메일 형식 오류·첨부 파일 없음 시 발송 중단, 로그 기록</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;'><strong>AKC 연동 시나리오:</strong> '지침동기화' 트리거 → 헌법 리뷰 보고서 생성 → <code>mail_sender.py</code>로 wskyland@gmail.com 자동 발송 + 승인 링크(http://localhost:3456/approve) 포함. SMTP: smtp.gmail.com PORT 587 (STARTTLS). Google 앱 비밀번호 필수</p>"
            }
          ],
          keyTerms: [
            { term: "approval-server (PORT 3456)", definition: "헌법 개정 승인/반려 HTTP 서버. 항상 켜둬야 하며, 메일 승인 링크(localhost:3456/approve)가 이 서버로 연결됨" },
            { term: "sync-trigger --watch", definition: "_docs/ 헌법 파일 변경을 600ms 디바운스로 감지하여 DOCX.md에 양방향 동기화를 수행하는 프로세스" },
            { term: "sync-trigger --guide-watch", definition: "guide/ 폴더 변경을 800ms 디바운스로 감지하여 guide-baseline.json 갱신·콘솔 보고하는 프로세스" },
            { term: "body_markdown (mail_sender.py)", definition: "Markdown 형식의 본문을 HTML로 자동 변환하여 이메일로 발송하는 파라미터. 리뷰 보고서 발송에 활용" },
            { term: "Gmail 앱 비밀번호", definition: "Google 계정 2단계 인증 후 발급하는 16자리 앱 전용 비밀번호. SMTP 인증에 일반 Gmail 비밀번호 대신 사용" }
          ],
          quiz: [
            { q: "헌법 개정 승인 서버(approval-server)의 포트 번호는?", options: ["3000", "3456", "3457", "4000"], answer: 1, explanation: "approval-server는 PORT 3456에서 실행됩니다. 메일 승인 링크도 이 포트로 연결됩니다." },
            { q: "sync-trigger --guide-watch가 감시하는 폴더는?", options: ["_docs/**/*.md", "education/**/*", "guide/**/*", "#concept/**/*"], answer: 2, explanation: "sync-trigger --guide-watch는 guide/ 폴더 전체의 변경(신규·수정·삭제)을 감지합니다." },
            { q: "mail_sender.py에서 Markdown을 HTML로 자동 변환하여 발송하는 파라미터는?", options: ["body_html", "body_text", "body_markdown", "html_content"], answer: 2, explanation: "body_markdown 파라미터에 Markdown 내용을 전달하면 자동으로 HTML로 변환하여 이메일을 발송합니다." },
            { q: "Gmail SMTP 발송 시 사용하는 포트와 암호화 방식은?", options: ["465 / SSL", "587 / STARTTLS", "25 / 없음", "993 / TLS"], answer: 1, explanation: "Gmail SMTP는 smtp.gmail.com의 PORT 587에서 STARTTLS 암호화로 연결합니다." }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // M17 — AI 아키텍트 역할 & 시스템 설계
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m17", title: "AI 아키텍트 역할 & 시스템 설계", icon: "🎯", classes: [

        // ── c17-1 ───────────────────────────────────────────────────────
        {
          id: "c17-1",
          title: "AI 아키텍트 역할과 4단계 설계 프로세스",
          duration: "15분",
          objective: "엔터프라이즈급 AI 시스템을 설계하는 아키텍트의 역할, 4단계 설계 프로세스, 핵심 에이전트 5종을 이해한다.",
          sourceSection: "rule_info/아키텍트역할.txt",
          content: [
            {
              heading: "AI 아키텍트 역할 & 4단계 설계 프로세스",
              html: "<p>자가진화 멀티에이전트(Claude Code 기반), MCP, RAG·자동연구, PostgreSQL·Redis·Kafka, LangGraph·CrewAI, 자원 최적화(GPU·CPU·Memory·Token), 스킬 자산화, 재귀적 피드백 루프를 통합하는 <strong>엔터프라이즈급 기획-설계 문서</strong>를 생성하는 역할.</p><table><tr><th>Phase</th><th>내용</th><th>주요 산출물</th></tr><tr><td><strong>Phase 1</strong>: 비전·요구사항</td><td>시스템 목표, FR(기능 요구사항) 10개, NFR(비기능), KPI</td><td>요구사항 명세서</td></tr><tr><td><strong>Phase 2</strong>: 시스템 아키텍처</td><td>컴포넌트 역할·기술 스택·인터페이스, 데이터 흐름(Mermaid), MCP 상세 스펙</td><td>시스템 설계 문서</td></tr><tr><td><strong>Phase 3</strong>: 인프라·배포</td><td>Docker Compose(PG·Redis·Kafka), Kubernetes 확장, Prometheus+Grafana 모니터링, CI/CD</td><td>인프라 설계 문서</td></tr><tr><td><strong>Phase 4</strong>: 로드맵·리스크</td><td>Phase 1 MVP(2주) → Phase 2 Full(4주) → Phase 3 자가진화(6주), 리스크 해결책</td><td>실행 계획 + 리스크 레지스터</td></tr></table>"
            },
            {
              heading: "핵심 에이전트 5종 & 지능형 에이전트 4계층",
              html: "<table><tr><th>에이전트</th><th>역할</th><th>기술 스택</th></tr><tr><td><strong>Master Orchestrator</strong></td><td>태스크 분해·Sub-Agent 스폰닝</td><td>LangGraph, LLM</td></tr><tr><td><strong>Skill Builder</strong></td><td>Python 스크립트 생성·최적화</td><td>LLM + Python Interpreter + PostgreSQL Skill DB</td></tr><tr><td><strong>Librarian Agent</strong></td><td>RAG·자산 관리</td><td>Vector DB + Redis + MCP Protocol</td></tr><tr><td><strong>Guardian Agent</strong></td><td>품질·자원 제어</td><td>Custom Validator + Redis Cache</td></tr><tr><td><strong>Auto-Researcher</strong></td><td>웹·RAG 자동 연구</td><td>RAG Engine + Kafka Triggers</td></tr></table><p style='font-size:0.8rem;margin-top:0.5rem;'><strong>지능형 에이전트 4계층:</strong> Perception Layer(다중 모달리티·Intent 추출) → Brain·Reasoning Layer(LLM·CoT·Task Decomposition·Self-Reflection) → Memory Layer(단기 Context Window + 장기 RAG·Vector DB) → Action Layer(Tool 선택·외부 API·Feedback)</p>"
            }
          ],
          keyTerms: [
            { term: "Master Orchestrator", definition: "LangGraph 기반의 태스크 분해 및 Sub-Agent 스폰닝 담당 에이전트. AI 시스템의 총괄 조율자" },
            { term: "Librarian Agent", definition: "RAG와 Vector DB를 활용하여 지식 자산을 관리하는 에이전트. MCP Protocol로 다른 에이전트와 연동" },
            { term: "Auto-Researcher", definition: "RAG Engine과 Kafka Triggers를 활용하여 웹·RAG 기반 자동 연구를 수행하는 에이전트" },
            { term: "Chain of Thought (CoT)", definition: "문제를 단계별로 사고하여 해결책을 도출하는 LLM 추론 기법. Brain·Reasoning Layer의 핵심 전략" },
            { term: "Catastrophic Forgetting", definition: "AI가 새로운 내용을 학습할 때 기존 지식을 잃는 현상. MoE(Mixture of Experts) 또는 Multi-Agent 방식으로 해결" }
          ],
          quiz: [
            { q: "AI 아키텍트 4단계 설계 중 'Docker Compose + Kubernetes + Prometheus'를 다루는 Phase는?", options: ["Phase 1: 비전·요구사항", "Phase 2: 시스템 아키텍처", "Phase 3: 인프라·배포", "Phase 4: 로드맵·리스크"], answer: 2, explanation: "Phase 3(인프라·배포)에서 Docker Compose, Kubernetes 확장, Prometheus+Grafana 모니터링을 다룹니다." },
            { q: "웹·RAG 자동 연구를 담당하며 Kafka Triggers를 사용하는 에이전트는?", options: ["Master Orchestrator", "Librarian Agent", "Guardian Agent", "Auto-Researcher"], answer: 3, explanation: "Auto-Researcher는 RAG Engine과 Kafka Triggers를 활용하여 웹·RAG 기반 자동 연구를 수행합니다." },
            { q: "지능형 에이전트 4계층에서 '문제를 단계별로 사고하는' 기법(Brain Layer)은?", options: ["RAG", "Task Decomposition", "Chain of Thought (CoT)", "Self-Reflection"], answer: 2, explanation: "CoT(Chain of Thought)는 문제를 단계별로 사고하여 해결책을 도출하는 LLM 추론 기법입니다." },
            { q: "Catastrophic Forgetting 문제를 해결하는 방법으로 제시된 것은?", options: ["단일 에이전트 강화", "MoE/Multi-Agent 방식", "Redis 캐시 확장", "Kafka 토픽 증가"], answer: 1, explanation: "Catastrophic Forgetting은 MoE(Mixture of Experts) 또는 Multi-Agent 방식으로 해결합니다." }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // M18 — 갱신 체인 & Redis 동기화 아키텍처
    // ══════════════════════════════════════════════════════════════════
    {
      id: "m18", title: "갱신 체인 & Redis 동기화 아키텍처", icon: "🔄", classes: [

        // ── c18-1 ───────────────────────────────────────────────────────
        {
          id: "c18-1",
          title: "전체 갱신 체인 C1~C7",
          duration: "15분",
          objective: "guide → 헌법 → DOCX.md → 교육 플랫폼 → 다이어그램으로 이어지는 7개 갱신 체인 흐름과 sync-trigger.js 양방향 동기화를 파악한다.",
          sourceSection: "orchestration/sync-memory.md §1~§8",
          content: [
            {
              heading: "갱신 체인 C1~C7 전체 목록",
              html: "<table><tr><th>체인</th><th>트리거</th><th>연쇄 갱신 대상</th></tr><tr><td><strong>C1</strong></td><td>guide/rule_info 파일 신규·수정 감지</td><td>헌법 → DOCX.md → edu-data → diagram</td></tr><tr><td><strong>C2</strong></td><td>헌법 수동 개정 요청 (사람 지시)</td><td>DOCX.md → edu-data → diagram</td></tr><tr><td><strong>C3</strong></td><td>프로젝트 완료 보고 시점</td><td>헌법(승인 후) → DOCX.md → edu-data</td></tr><tr><td><strong>C4</strong></td><td>헌법 적용 후 자동</td><td>diagram-data.js + layer-data.js 동시 갱신</td></tr><tr><td><strong>C5</strong></td><td>DOCX.md 버전(DOCX_VERSION) 변경</td><td>edu-data.js → edu-data-p2/p3 검토</td></tr><tr><td><strong>C6</strong></td><td>diagram-data.js 신규 term/relation 추가</td><td>vocab-data.js 수동 반영</td></tr><tr><td><strong>C7</strong></td><td>세션 종료 또는 컨텍스트 95% 도달</td><td>##day-Joblist/YYYY-MM-DD.md 저장</td></tr></table>"
            },
            {
              heading: "sync-trigger.js 양방향 동기화 & 누락 자동화 케이스",
              html: "<p><strong>방향1 (Backward Sync):</strong> _docs/ 헌법 파일 변경 감지(600ms 디바운스) → CONSTITUTION_TO_SECTION 매핑으로 섹션 파악 → DOCX.md 해당 섹션에 <code>[갱신 필요]</code> 마커 삽입 + 날짜 갱신</p><p><strong>방향2 (Forward Sync):</strong> DOCX.md 변경 감지 → DOCX_VERSION 비교 → 불일치 시 edu-data.js DOCX_VERSION 갱신 + curriculum.md 날짜 갱신</p><table style='margin-top:0.5rem;'><tr><th>누락 자동화 케이스</th><th>현재</th><th>개선 방향</th></tr><tr><td>vocab-data.js ↔ diagram-data.js</td><td>완전 수동</td><td>sync-trigger.js에 vocab 갱신 훅 추가</td></tr><tr><td>edu-data-p2/p3.js 버전 관리</td><td>DOCX_VERSION 없음</td><td>P2_VERSION, P3_VERSION 상수 추가</td></tr><tr><td>index.html 총 클래스 수</td><td>수동 계산</td><td>edu-app.js에서 동적 카운트로 대체</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "C1~C7 갱신 체인", definition: "guide/rule_info 변경부터 교육 플랫폼·다이어그램·히스토리까지 연쇄 갱신되는 7개 체인 구조" },
            { term: "Backward Sync (방향1)", definition: "_docs/ 헌법 파일 변경 → DOCX.md 해당 섹션에 [갱신 필요] 마커를 삽입하는 역방향 동기화" },
            { term: "Forward Sync (방향2)", definition: "DOCX.md 버전 변경 → edu-data.js DOCX_VERSION을 갱신하는 순방향 동기화" },
            { term: "DOCX_VERSION", definition: "edu-data.js에서 DOCX.md와 동기화 여부를 판단하는 날짜 버전 상수. 불일치 시 자동 갱신 트리거" },
            { term: "갱신 필요 마커", definition: "Backward Sync가 DOCX.md 해당 섹션에 삽입하는 표시자. '> ⚠️ [갱신 필요] — 파일명 변경 감지(timestamp)' 형식" }
          ],
          quiz: [
            { q: "sync-trigger.js 방향1(Backward Sync)이 하는 일은?", options: ["DOCX.md → edu-data.js 버전 갱신", "헌법 파일 변경 → DOCX.md 갱신 필요 마커 삽입", "vocab-data.js 자동 갱신", "diagram-data.js 에이전트 스캔"], answer: 1, explanation: "방향1(Backward Sync)은 _docs/ 헌법 파일 변경을 600ms 디바운스로 감지하여 DOCX.md 해당 섹션에 [갱신 필요] 마커를 삽입합니다." },
            { q: "C7 체인의 트리거 조건 2가지는?", options: ["헌법 변경 + 프로젝트 완료", "세션 종료 + 컨텍스트 95% 도달", "guide 변경 + 승인 요청", "DOCX 변경 + diagram 갱신"], answer: 1, explanation: "C7(히스토리 저장)은 세션 종료 또는 컨텍스트 95% 도달 시 트리거됩니다." },
            { q: "vocab-data.js ↔ diagram-data.js 동기화의 현재 상태는?", options: ["완전 자동화", "완전 수동", "반자동 (sync-trigger 일부 처리)", "Redis 큐로 자동화"], answer: 1, explanation: "vocab-data.js와 diagram-data.js 동기화는 현재 완전 수동 처리로, sync-trigger.js에 vocab 갱신 훅 추가가 필요합니다." },
            { q: "sync-trigger.js Backward Sync에서 사용하는 디바운스 시간은?", options: ["100ms", "300ms", "600ms", "1000ms"], answer: 2, explanation: "Backward Sync는 600ms 디바운스를 적용하여 빠른 연속 변경 시 불필요한 중복 실행을 방지합니다." }
          ]
        },

        // ── c18-2 ───────────────────────────────────────────────────────
        {
          id: "c18-2",
          title: "Redis 기반 태스크 큐 & 동기화 관리 아키텍처",
          duration: "15분",
          objective: "AKC v4 Redis 동기화 관리 시스템의 6가지 데이터 구조, 태스크 생명주기, 4개 구현 컴포넌트를 이해한다.",
          sourceSection: "orchestration/redis-sync-architecture.md §2~§6",
          content: [
            {
              heading: "Redis 데이터 구조 6종 (akc: 네임스페이스)",
              html: "<table><tr><th>자료구조</th><th>키 패턴</th><th>용도</th></tr><tr><td><strong>LIST</strong></td><td>akc:task:queue:{type}</td><td>태스크 FIFO 큐 (RPUSH로 추가, BLPOP으로 블로킹 대기)</td></tr><tr><td><strong>HASH</strong></td><td>akc:task:status:{taskId}</td><td>태스크 상태 추적 (pending/in_progress/done/error)</td></tr><tr><td><strong>SORTED SET</strong></td><td>akc:task:done</td><td>완료 이력. SCORE=Unix timestamp로 시간순 조회(ZREVRANGE)</td></tr><tr><td><strong>STREAM</strong></td><td>akc:task:error</td><td>오류 로그 append-only (XADD 추가, XREVRANGE 조회)</td></tr><tr><td><strong>HASH</strong></td><td>akc:sync:state:{파일경로}</td><td>파일별 동기화 상태 (synced/stale/pending/error)</td></tr><tr><td><strong>STRING + EX</strong></td><td>akc:sync:lock:{체인명}</td><td>분산 잠금 — 중복 실행 방지. SET key NX EX 30 패턴</td></tr></table>"
            },
            {
              heading: "태스크 생명주기 & 4개 구현 컴포넌트",
              html: "<pre style='font-size:0.75rem;'>태스크 생명주기:\n1. 생성: RPUSH → akc:task:queue:sync + HSET status='pending'\n2. 처리: BLPOP(블로킹 대기) → SET lock NX EX 30 → HSET status='in_progress'\n3a. 성공: HSET status='done' + ZADD done(이력) + DEL lock\n3b. 실패: XADD error Stream + HSET status='error' → 재시도 큐 push\n4.  재시도 3회 초과: RPUSH akc:task:dead  (Dead Letter)</pre><table style='margin-top:0.5rem;'><tr><th>컴포넌트</th><th>역할</th><th>포트</th></tr><tr><td><strong>akc-task-api.js</strong></td><td>Redis CRUD 래퍼 (createTask/completeTask/failTask 등)</td><td>—</td></tr><tr><td><strong>sync-executor.js</strong></td><td>BLPOP → 태스크 실행 → 결과 Redis 저장 (Worker)</td><td>—</td></tr><tr><td><strong>akc-dashboard.js</strong></td><td>HTTP 대시보드 (큐 현황·완료 이력·오류 로그 시각화)</td><td>3457</td></tr><tr><td><strong>akc-cli.js</strong></td><td>터미널 관리 도구 (queue/history/errors/dead 조회·재시도)</td><td>—</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "BLPOP (Blocking Left Pop)", definition: "Redis LIST에서 항목이 없을 때 새 항목이 들어올 때까지 블로킹 대기하는 커맨드. sync-executor.js가 큐 소비에 사용" },
            { term: "SET key NX EX 30", definition: "키가 없을 때만 설정(NX)하고 30초 TTL(EX)을 적용하는 원자적 분산 잠금 패턴. 중복 실행 방지" },
            { term: "Dead Letter", definition: "재시도 3회 초과 시 akc:task:dead에 보관되는 태스크. akc-cli.js로 조회하고 수동 재시도 가능" },
            { term: "SORTED SET (ZADD)", definition: "SCORE(Unix timestamp)로 정렬되는 집합. 완료 이력 조회에 사용. ZREVRANGE로 최신 이력부터 조회" },
            { term: "akc-dashboard.js (PORT 3457)", definition: "Redis 상태를 HTTP로 시각화하는 대시보드. 큐 현황·완료 이력·오류 로그·동기화 체인 상태를 제공" }
          ],
          quiz: [
            { q: "Redis에서 태스크 큐 처리 시 'Executor가 블로킹 대기'에 사용하는 커맨드는?", options: ["LPOP", "BRPOP", "BLPOP", "SUBSCRIBE"], answer: 2, explanation: "BLPOP(Blocking Left Pop)은 큐가 비어있을 때 새 항목이 들어올 때까지 블로킹 대기합니다." },
            { q: "완료된 태스크 이력을 시간순으로 조회하기 위해 사용하는 Redis 자료구조는?", options: ["LIST", "HASH", "SORTED SET", "STREAM"], answer: 2, explanation: "SORTED SET에 SCORE=Unix timestamp로 완료 이력을 저장하면 ZREVRANGE로 시간순 조회가 가능합니다." },
            { q: "분산 잠금(중복 실행 방지)을 위해 사용하는 Redis 커맨드 패턴은?", options: ["HSET + TTL", "SET key NX EX 30", "INCR + EXPIRE", "SETNX + EXPIRE"], answer: 1, explanation: "SET key value NX EX 30은 키가 없을 때만 설정(NX)하고 30초 TTL(EX)을 적용하는 원자적 분산 잠금 패턴입니다." },
            { q: "재시도 3회 초과 시 태스크가 이동하는 곳은?", options: ["akc:task:queue:retry", "akc:task:error", "akc:task:dead (Dead Letter)", "akc:sync:state"], answer: 2, explanation: "3회 재시도 초과 시 akc:task:dead에 RPUSH하여 Dead Letter로 보냅니다. akc-cli.js로 수동 재시도 가능합니다." }
          ]
        }
      ]
    }

  ]; // end part5

  if (window.CURRICULUM && window.CURRICULUM.modules) {
    window.CURRICULUM.modules.push(...part5);
  }
})();
