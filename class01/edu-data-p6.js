// PART 6 — M19~M22 (9 classes). Loaded after edu-data-p5.js.
// 참조 지식: #Global SkillNet/ 전체 스킬 폴더 (00~22), #concept/_docs/rules.md §K
// 렌더링 포맷: {heading,html} / {term,definition} / {q,options,answer,explanation}
// 마지막 수정: 2026-03-22 (M22 §K 경험 자산화 정책 모듈 추가)

(function () {
  const part6 = [

    // ══════════════════════════════════════════════════════
    // M19 — #Global SkillNet 스킬 체계
    // ══════════════════════════════════════════════════════
    {
      id: "m19",
      title: "#Global SkillNet 스킬 체계",
      icon: "🕸️",
      classes: [

        // ─────────────────────────────────────────────────
        // C19-1: 스킬 체계 전체 구조와 번호 체계
        // ─────────────────────────────────────────────────
        {
          id: "c19-1",
          title: "스킬 네트워크 전체 구조와 번호 체계",
          duration: "15분",
          objective: "#Global SkillNet의 23개 스킬 번호 체계, 계층 구조, 역할 분류를 이해한다.",
          sourceSection: "#Global SkillNet/ 00~22 폴더",
          content: [
            {
              heading: "#Global SkillNet이란 & 23개 스킬 전체 목록",
              html: "<p>#Global SkillNet은 AKC v4 에이전트 시스템에서 각 역할 에이전트가 사용하는 스킬을 번호 체계로 관리하는 전역 스킬 저장소입니다. 각 폴더에는 <strong>SKILL.md</strong>(역할 정의)와 <strong>agent_local.md</strong>(운영 규칙)가 포함됩니다.</p><table><tr><th>번호</th><th>폴더명</th><th>역할</th><th>난이도</th></tr><tr><td>00</td><td>manager_search_skill</td><td>SkillNet 전체 목록·검색 관리</td><td>초급</td></tr><tr><td>01</td><td>core_planning_skill</td><td>핵심 계획 수립</td><td>초급</td></tr><tr><td>02</td><td>design_style_component</td><td>디자인 스타일·컴포넌트 가이드</td><td>초급</td></tr><tr><td>03</td><td>dev_lead_skill</td><td>개발 리드</td><td>중급</td></tr><tr><td>04</td><td>test_skill</td><td>테스트 전략·실행</td><td>중급</td></tr><tr><td>05</td><td>db_skill</td><td>DB 스키마·마이그레이션</td><td>중급</td></tr><tr><td>06</td><td>deploy_skill</td><td>CI/CD·배포 정책</td><td>중급</td></tr><tr><td>07</td><td>verify_skill</td><td>통합 검증</td><td>중급</td></tr><tr><td>08</td><td>qa_reviewer_skill</td><td>QA 리뷰어</td><td>중급</td></tr><tr><td>09</td><td>Agent_Collaboration_skill</td><td>에이전트 간 협업 규칙</td><td>중급</td></tr><tr><td>10</td><td>archivist_skill</td><td>지식 아카이브 관리</td><td>중급</td></tr><tr><td>11</td><td>reflection_skill</td><td>Reflection — 반성 (AKC v4)</td><td>고급</td></tr><tr><td>12</td><td>learning_skill</td><td>LearningEng — 학습 (AKC v4)</td><td>고급</td></tr><tr><td>13</td><td>evolution_skill</td><td>Evolution — 진화 (AKC v4)</td><td>고급</td></tr><tr><td>14</td><td>core_perception_skill</td><td>Perception — 핵심 인식 (AKC v4)</td><td>고급</td></tr><tr><td>15</td><td>core_world_skill</td><td>WorldModel — 세계 모델링 (AKC v4)</td><td>고급</td></tr><tr><td>16</td><td>core_decision_skill</td><td>Decision — 핵심 결정 (AKC v4)</td><td>고급</td></tr><tr><td>17</td><td>fe_dev_skill</td><td>FE Dev: UI/UX 구현</td><td>중급</td></tr><tr><td>18</td><td>be_dev_skill</td><td>BE Dev: 코어 로직·API</td><td>중급</td></tr><tr><td>19</td><td>tool_agent_connect_skill</td><td>툴 에이전트 연결 (MCP)</td><td>초급</td></tr><tr><td>20</td><td>infra_config_skill</td><td>인프라 설정 (Cloud/K8s)</td><td>중급</td></tr><tr><td>21</td><td>memory_admin_skill</td><td>메모리 관리 정책</td><td>고급</td></tr><tr><td>22</td><td>ai_architect_skill</td><td>AI 시스템 아키텍트 (Root Genome)</td><td>고급</td></tr></table>"
            },
            {
              heading: "스킬 계층 구조 (3계층) & 난이도 분류",
              html: "<ol style='padding-left:1.2rem;color:#cbd5e1;font-size:0.875rem;'><li><strong>Layer 0 — Root:</strong> 22번(AI 아키텍트) → 전체 스킬의 유전자 원점, GENOME 8유전자 정의. 모든 스킬이 상속</li><li><strong>Layer 1 — 관리:</strong> 00번(검색/목록) → SkillNet 전체 폴더 상하관계 관리. 스킬 탐색 진입점</li><li><strong>Layer 2 — 실행:</strong> 01~21번 → 각 역할별 전문화 스킬 (초급 4개 / 중급 12개 / 고급 8개)</li></ol><table><tr><th>난이도</th><th>번호</th><th>특징</th></tr><tr><td>초급</td><td>00, 01, 02, 19</td><td>특정 기술 스택 없이 운영 구조·계획·가이드·인터페이스 제공</td></tr><tr><td>중급</td><td>03~10, 17, 18, 20</td><td>FE/BE/DB/QA 등 전문 개발·운영 스킬</td></tr><tr><td>고급</td><td>11~16, 21, 22</td><td>AKC v4 인지 루프, 메모리 관리, AI 아키텍트</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "#Global SkillNet", definition: "AKC v4 에이전트 시스템의 전역 스킬 저장소. 00~22번 23개 폴더로 구성. 각 폴더에 SKILL.md + agent_local.md 포함" },
            { term: "SKILL.md", definition: "각 스킬 폴더의 역할 정의 파일. 스킬 목적·사용 시점·입력/출력·검증 조건 명시" },
            { term: "agent_local.md", definition: "각 스킬 폴더의 운영 규칙 파일. 에이전트 행동 기준, 제약 사항, 협업 인터페이스 정의" },
            { term: "Root Genome", definition: "22번 ai_architect_skill이 보유한 전체 스킬의 사상·개념 원점. 00~21번 모든 스킬이 GENOME 8유전자를 상속" },
            { term: "번호 체계", definition: "00~22 숫자로 스킬을 분류하는 #Global SkillNet 체계. 번호는 역할·난이도·계층 관계를 암시" }
          ],
          quiz: [
            { q: "#Global SkillNet에서 전체 스킬의 'Root Genome(루트 유전자)' 역할을 하는 스킬 번호는?", options: ["00번 manager_search_skill", "01번 core_planning_skill", "21번 memory_admin_skill", "22번 ai_architect_skill"], answer: 3, explanation: "22번 ai_architect_skill이 #Global SkillNet 전체의 Root Genome으로, 모든 스킬(00~21, 99)의 사상·개념 원점입니다." },
            { q: "AKC v4 인지 에이전트(Perception/WorldModel/Decision)에 해당하는 스킬 번호 범위는?", options: ["00~03번", "11~13번", "14~16번", "19~21번"], answer: 2, explanation: "14번(Perception), 15번(WorldModel), 16번(Decision)이 AKC v4 인지 에이전트 스킬입니다." },
            { q: "각 스킬 폴더 내 '운영 규칙'을 담당하는 파일은?", options: ["SKILL.md", "README.md", "agent_local.md", "rules.md"], answer: 2, explanation: "각 스킬 폴더에는 SKILL.md(역할 정의)와 agent_local.md(운영·행동 규칙)가 포함됩니다." },
            { q: "00번 manager_search_skill의 핵심 역할은?", options: ["API 엔드포인트 관리", "SkillNet 전체 스킬 목록·상하관계 관리", "메모리 동기화", "테스트 자동화"], answer: 1, explanation: "00번은 #Global SkillNet 전체 폴더의 스킬 목록을 관리하고, 폴더 간 상하관계 규칙을 정의하는 Layer 1 관리 스킬입니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C19-2: 초급 스킬 그룹 (00~02, 19)
        // ─────────────────────────────────────────────────
        {
          id: "c19-2",
          title: "초급 스킬 그룹 — 기반 운영 스킬 (00·01·02·19번)",
          duration: "15분",
          objective: "초급 스킬 4개(검색/계획/디자인/MCP)의 역할과 사용 시점을 파악한다.",
          sourceSection: "#Global SkillNet/ 00, 01, 02, 19",
          content: [
            {
              heading: "초급 스킬 4개 상세 & 공통 특징",
              html: "<p>초급 스킬은 에이전트 시스템의 <strong>기반 레이어</strong>를 담당합니다. 특정 기술 스택 없이 운영 구조·계획·가이드·인터페이스를 제공하며, 다른 모든 스킬이 이 4개를 전제 조건으로 활용합니다.</p><table><tr><th>번호</th><th>스킬명</th><th>핵심 기능</th><th>사용 시점</th></tr><tr><td>00</td><td>manager_search_skill</td><td>SkillNet 전체 목록 탐색, 폴더 상하관계 관리</td><td>스킬 검색·참조 시 항상</td></tr><tr><td>01</td><td>core_planning_skill</td><td>프로젝트 시작 전 계획 수립, PDCA 기반 태스크 설계</td><td>프로젝트 킥오프</td></tr><tr><td>02</td><td>design_style_component</td><td>디자인 레이아웃·컬러·타이포·컴포넌트 가이드 제공</td><td>UI 개발 착수 전</td></tr><tr><td>19</td><td>tool_agent_connect_skill</td><td>MCP 기반 외부 도구 연결 인터페이스 정의</td><td>외부 API·툴 연동 시</td></tr></table>"
            },
            {
              heading: "02번 디자인·19번 MCP 스킬 핵심 정책",
              html: "<p><strong>02번 핵심 원칙:</strong> 화면·스타일·컴포넌트 생성 시 <strong>반드시 02번 스킬의 가이드를 먼저 참조</strong>해야 합니다. FE Dev(17번)는 02번을 의존 관계로 선언합니다. 이를 통해 프로젝트 전체 시각적 일관성을 유지합니다.</p><p><strong>19번 MCP 연결:</strong> MCP(Model Context Protocol)는 Claude Code가 외부 툴(파일시스템·브라우저·DB·Slack 등)과 통신하는 표준 인터페이스입니다. 19번 스킬은 각 에이전트가 사용 가능한 MCP 서버 목록과 연결 정책을 정의합니다.</p><table><tr><th>MCP 서버 유형</th><th>역할</th><th>연관 에이전트</th></tr><tr><td>filesystem</td><td>파일 읽기/쓰기</td><td>ToolAgent</td></tr><tr><td>browser (Playwright)</td><td>웹 크롤링·스크린샷</td><td>Perception</td></tr><tr><td>database</td><td>DB 쿼리</td><td>DB Admin</td></tr><tr><td>search</td><td>실시간 검색</td><td>WorldModel</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "manager_search_skill (00번)", definition: "SkillNet 전체 폴더·스킬 목록 탐색·상하관계 관리 담당. 스킬 참조 시 항상 먼저 호출하는 진입점 스킬" },
            { term: "core_planning_skill (01번)", definition: "PDCA 기반으로 프로젝트 계획·태스크 설계를 수행하는 스킬. 프로젝트 킥오프 시 필수" },
            { term: "design_style_component (02번)", definition: "디자인 레이아웃·컬러·타이포·컴포넌트 가이드를 제공하는 스킬. UI 개발 착수 전 반드시 참조" },
            { term: "tool_agent_connect_skill (19번)", definition: "MCP 기반 외부 도구 연결 인터페이스를 정의하는 스킬. 각 에이전트의 사용 가능한 MCP 서버 목록 관리" },
            { term: "PDCA", definition: "Plan-Do-Check-Act. 01번 core_planning_skill이 기반하는 반복 개선 사이클 방법론" }
          ],
          quiz: [
            { q: "UI 개발 착수 전에 반드시 참조해야 하는 초급 스킬 번호는?", options: ["00번", "01번", "02번", "19번"], answer: 2, explanation: "02번 design_style_component는 디자인 레이아웃·컬러·컴포넌트 가이드를 제공하여 UI 일관성을 보장합니다." },
            { q: "19번 tool_agent_connect_skill이 기반하는 외부 툴 연결 표준 프로토콜은?", options: ["REST API", "GraphQL", "MCP (Model Context Protocol)", "WebSocket"], answer: 2, explanation: "MCP(Model Context Protocol)는 Claude Code가 외부 도구와 통신하는 표준 인터페이스로, 19번 스킬이 이를 기반으로 합니다." },
            { q: "01번 core_planning_skill이 기반하는 프로세스 방법론은?", options: ["Scrum", "Waterfall", "PDCA", "Kanban"], answer: 2, explanation: "01번은 PDCA(Plan-Do-Check-Act) 기반으로 프로젝트 계획과 태스크 설계를 수행합니다." },
            { q: "초급 스킬 4개가 '기반 레이어' 역할을 하는 이유는?", options: ["난이도가 낮아서", "운영 구조·계획·가이드·인터페이스를 제공하여 모든 스킬이 전제 조건으로 사용", "미구현 상태여서", "자동화 불가 영역이어서"], answer: 1, explanation: "초급 스킬은 운영 구조(00), 계획 방법론(01), 디자인 가이드(02), 툴 인터페이스(19)를 제공하는 기반 레이어입니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C19-3: 중급 스킬 그룹 (03~10, 17~18, 20)
        // ─────────────────────────────────────────────────
        {
          id: "c19-3",
          title: "중급 스킬 그룹 — 전문 개발·운영 스킬 (03~10·17·18·20번)",
          duration: "20분",
          objective: "중급 스킬 12개의 역할과 상호 의존 관계, FE/BE 개발 스킬의 검증 체계를 이해한다.",
          sourceSection: "#Global SkillNet/ 03~10, 17, 18, 20",
          content: [
            {
              heading: "중급 스킬 12개 전체 목록 & 역할",
              html: "<table><tr><th>번호</th><th>스킬명</th><th>핵심 기능</th><th>주요 산출물</th></tr><tr><td>03</td><td>dev_lead_skill</td><td>개발 팀 리드·태스크 분배·진행 조율</td><td>Task Payload</td></tr><tr><td>04</td><td>test_skill</td><td>테스트 전략 수립·자동화 테스트 실행</td><td>테스트 리포트</td></tr><tr><td>05</td><td>db_skill</td><td>스키마 설계·마이그레이션·쿼리 최적화</td><td>DDL/Migration</td></tr><tr><td>06</td><td>deploy_skill</td><td>CI/CD 파이프라인·배포 정책·롤백 전략</td><td>배포 로그</td></tr><tr><td>07</td><td>verify_skill</td><td>자체 검증·통합 테스트·Match Rate 측정</td><td>검증 결과</td></tr><tr><td>08</td><td>qa_reviewer_skill</td><td>QA 검토·OWASP 점검·최종 승인</td><td>QA 보고서</td></tr><tr><td>09</td><td>Agent_Collaboration_skill</td><td>에이전트 간 인터페이스 계약·병렬 협업 규칙</td><td>협업 계약서</td></tr><tr><td>10</td><td>archivist_skill</td><td>경험·패턴 아카이브·Knowledge Base 관리</td><td>KB 항목</td></tr><tr><td>17</td><td>fe_dev_skill</td><td>UI 컴포넌트 구현·UX 흐름 개발</td><td>task_fe_ok.md</td></tr><tr><td>18</td><td>be_dev_skill</td><td>API 엔드포인트·비즈니스 로직 구현</td><td>task_be_ok.md</td></tr><tr><td>20</td><td>infra_config_skill</td><td>클라우드·K8s·Terraform 인프라 구성</td><td>IaC 코드</td></tr></table>"
            },
            {
              heading: "07번 vs 08번 역할 구분 & FE/BE 검증 체계",
              html: "<table><tr><th>항목</th><th>07번 verify_skill</th><th>08번 qa_reviewer_skill</th></tr><tr><td>수행 주체</td><td>개발 에이전트 자체 (FE/BE)</td><td>독립 QA Reviewer 에이전트</td></tr><tr><td>시점</td><td>작업 중·제출 전 (자체 검증)</td><td>제출 후 (외부 검토)</td></tr><tr><td>초점</td><td>기술적 정합성·성능·오류 사전 차단</td><td>비즈니스 요구사항·보안·UX 흐름</td></tr><tr><td>Match Rate</td><td>1차 측정 (90% 기준)</td><td>최종 승인 판정</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;'><strong>17번 FE Dev 검증 5개:</strong> FE_디자인시스템_준수(자체) / FE_렌더링성능(자체) / 반복오류_사전차단(자체) / FE_접근성(QA) / FE_UX흐름(QA)</p><p style='font-size:0.8rem;color:#94a3b8;'><strong>18번 BE Dev 검증 5개:</strong> BE_예외처리(자체) / BE_API응답(자체) / 반복오류_사전차단(자체) / BE_보안(QA) / BE_로직정합성(QA). API 응답 표준: <code>{ status, data, message }</code></p>"
            }
          ],
          keyTerms: [
            { term: "dev_lead_skill (03번)", definition: "개발 팀 리드 역할. 태스크 페이로드 분배·진행 조율을 담당하며 17(FE)/18(BE)/05(DB)에 동시 착수 지시" },
            { term: "fe_dev_skill (17번)", definition: "FE Dev 구현 스킬. 5개 검증 스킬 보유 — 자체 3개(디자인/렌더링/반복오류) + QA 2개(접근성/UX흐름)" },
            { term: "be_dev_skill (18번)", definition: "BE Dev 구현 스킬. API 응답 표준 { status, data, message }. 5개 검증 스킬 보유" },
            { term: "archivist_skill (10번)", definition: "경험·패턴을 Knowledge Base에 아카이브하는 스킬. 성공·실패 패턴을 재활용 가능한 형태로 저장" },
            { term: "Match Rate", definition: "07번 verify_skill이 1차 측정하는 기술 정합성 지표. 90% 기준 미달 시 재작업. 08번 QA가 최종 판정" }
          ],
          quiz: [
            { q: "17번 FE Dev의 자체 검증(자체 수행)이 아닌 QA 단계에서 수행되는 검증은?", options: ["FE_디자인시스템_준수_검증", "FE_렌더링성능_검증", "반복오류_사전차단_검증", "FE_접근성_검증"], answer: 3, explanation: "FE_접근성_검증과 FE_UX흐름_검증은 QA Reviewer(08번)가 QA 단계에서 수행합니다. 나머지 3개는 FE Dev 자체 검증입니다." },
            { q: "18번 BE Dev의 표준 API 응답 형식은?", options: ["{ code, result, error }", "{ status, data, message }", "{ success, payload, reason }", "{ httpStatus, body, meta }"], answer: 1, explanation: "18번 BE Dev 스킬의 API 응답 표준은 { status, data, message } 형식입니다." },
            { q: "07번(verify)과 08번(qa_reviewer)의 핵심 차이는?", options: ["사용 언어가 다름", "07번은 자체 검증(개발자), 08번은 독립 QA 검토(외부)", "07번은 보안, 08번은 성능", "07번은 FE 전용, 08번은 BE 전용"], answer: 1, explanation: "07번은 개발 에이전트가 자체 수행하는 기술 검증이고, 08번은 독립 QA Reviewer가 비즈니스·보안·UX를 검토하는 외부 검증입니다." },
            { q: "성공·실패 패턴을 KB(Knowledge Base)에 아카이브하여 재활용하는 역할을 하는 스킬은?", options: ["03번 dev_lead_skill", "07번 verify_skill", "09번 Agent_Collaboration_skill", "10번 archivist_skill"], answer: 3, explanation: "10번 archivist_skill은 에이전트의 경험·패턴을 Knowledge Base에 저장하고 관리하여 반복 학습을 지원합니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C19-4: 고급 스킬 그룹 (11~16, 21~22)
        // ─────────────────────────────────────────────────
        {
          id: "c19-4",
          title: "고급 스킬 그룹 — AKC v4 인지·진화·아키텍트 (11~16·21·22번)",
          duration: "20분",
          objective: "AKC v4 인지 루프 6개 스킬과 메모리 관리·AI 아키텍트 스킬의 역할을 이해한다.",
          sourceSection: "#Global SkillNet/ 11~16, 21, 22",
          content: [
            {
              heading: "AKC v4 인지 에이전트 스킬 6개 & 9단계 루프",
              html: "<p>고급 스킬은 AKC v4 인지 루프(Observe→Understand→Plan→Decide→Execute→Verify→Reflect→Learn→Improve)를 구현하는 에이전트 스킬입니다.</p><table><tr><th>번호</th><th>스킬명</th><th>인지 루프 단계</th><th>핵심 기능</th></tr><tr><td>14</td><td>core_perception_skill</td><td>1단계 Observe (관찰)</td><td>환경·입력 데이터 감지·정제</td></tr><tr><td>15</td><td>core_world_skill</td><td>2단계 Understand (이해)</td><td>관찰 데이터 → 세계 모델 구축</td></tr><tr><td>16</td><td>core_decision_skill</td><td>3~4단계 Plan·Decide (계획·결정)</td><td>목표 기반 행동 계획 수립·실행 결정</td></tr><tr><td>11</td><td>reflection_skill</td><td>6~7단계 Verify·Reflect (검증·반성)</td><td>실행 결과 검증 및 자기 반성</td></tr><tr><td>12</td><td>learning_skill</td><td>8단계 Learn (학습)</td><td>실패·성공 패턴 → 내재화</td></tr><tr><td>13</td><td>evolution_skill</td><td>9단계 Improve (진화)</td><td>학습 결과 → 스킬·정책 고도화</td></tr></table>"
            },
            {
              heading: "21번 메모리 관리 vs 22번 AI 아키텍트 & GENOME 8유전자",
              html: "<table><tr><th>항목</th><th>21번 memory_admin_skill</th><th>22번 ai_architect_skill</th></tr><tr><td>역할</td><td>메모리 관리 정책 정의</td><td>전체 스킬 네트워크 진화 설계</td></tr><tr><td>범위</td><td>sync_state.json·Redis·KB 관리 규칙</td><td>00~21번 모든 스킬 + GENOME 8유전자</td></tr><tr><td>특징</td><td>핫존/콜드존 분리, 동기화 타이밍</td><td>자율 발전 바이러스(Infection→Propagation)</td></tr><tr><td>갱신 주기</td><td>런타임 실시간 동기화</td><td>에이전트 진화 이벤트 발생 시</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;'><strong>GENOME 8유전자:</strong> G1:SELF_OPTIMIZE / G2:ASSETIZE / G3:COST_AWARE / G4:HUMAN_GATE / G5:SPECIALIZE / G6:CONNECT / G7:VERIFY_FIRST / G8:EVOLVE_TOGETHER</p>"
            }
          ],
          keyTerms: [
            { term: "core_perception_skill (14번)", definition: "AKC v4 1단계 Observe 담당. 환경에서 신호를 감지·정제하여 PerceptionPayload 생성" },
            { term: "core_decision_skill (16번)", definition: "AKC v4 3~4단계 Plan·Decide 담당. 목표 기반 행동 계획 수립 및 실행 여부를 최종 결정" },
            { term: "evolution_skill (13번)", definition: "AKC v4 9단계 Improve 담당. 학습 결과를 기반으로 스킬·정책을 실제로 고도화하는 진화 스킬" },
            { term: "GENOME 8유전자", definition: "22번 ai_architect_skill이 정의하는 전체 스킬 진화 원칙. G1(자기최적화)~G8(공진화)의 8개 유전자로 구성" },
            { term: "memory_admin_skill (21번)", definition: "sync_state.json·Redis·KB 메모리 관리 정책 정의. 핫존/콜드존 분리 및 동기화 타이밍 규칙 포함" }
          ],
          quiz: [
            { q: "AKC v4 인지 루프에서 '환경·입력 데이터 감지·정제'를 담당하는 스킬(1단계 Observe)은?", options: ["11번 reflection_skill", "14번 core_perception_skill", "15번 core_world_skill", "16번 core_decision_skill"], answer: 1, explanation: "14번 core_perception_skill이 1단계 Observe(관찰) 담당으로, 환경에서 신호를 감지하고 정제합니다." },
            { q: "GENOME 8유전자 중 '역량 초과 시 타 스킬 호출'에 해당하는 유전자 코드는?", options: ["G2:ASSETIZE", "G4:HUMAN_GATE", "G6:CONNECT", "G8:EVOLVE_TOGETHER"], answer: 2, explanation: "G6:CONNECT는 현재 스킬의 역량을 초과하는 작업 발생 시 다른 스킬을 호출하여 협업하는 유전자입니다." },
            { q: "학습한 패턴을 스킬·정책으로 고도화하는 AKC v4 9단계(Improve)를 담당하는 스킬은?", options: ["11번 reflection_skill", "12번 learning_skill", "13번 evolution_skill", "22번 ai_architect_skill"], answer: 2, explanation: "13번 evolution_skill이 9단계 Improve 담당으로, 학습 결과를 기반으로 스킬과 정책을 실제로 고도화합니다." },
            { q: "22번 ai_architect_skill의 자율 발전 바이러스 4단계 순서는?", options: ["Replication → Infection → Propagation → Mutation", "Infection → Replication → Mutation → Propagation", "Mutation → Infection → Replication → Propagation", "Propagation → Mutation → Infection → Replication"], answer: 1, explanation: "자율 발전 바이러스 4단계: Infection(GENOME 로드) → Replication(G1~G8 적용) → Mutation(경험 기반 개선) → Propagation(인간 승인 후 배포) 순서입니다." }
          ]
        }

      ] // end m19 classes
    },

    // ══════════════════════════════════════════════════════
    // M20 — 스킬 최적화 원칙
    // ══════════════════════════════════════════════════════
    {
      id: "m20",
      title: "스킬 최적화 원칙",
      icon: "⚡",
      classes: [

        // ─────────────────────────────────────────────────
        // C20-1: 중복 기능 통합 원칙과 사례
        // ─────────────────────────────────────────────────
        {
          id: "c20-1",
          title: "중복 기능 통합 원칙 — 장점·효과·성능 기반 판단",
          duration: "15분",
          objective: "스킬 간 중복 기능을 식별하고, 장점·안정성·효과·성능 기준으로 통합 또는 분리 결정하는 원칙을 이해한다.",
          sourceSection: "#Global SkillNet/ 22_ai_architect_skill/SKILL.md",
          content: [
            {
              heading: "중복 유형 3가지 & 통합/분리 결정 기준표",
              html: "<table><tr><th>중복 유형</th><th>판단 기준</th><th>처리 방법</th><th>예시</th></tr><tr><td>완전 중복 (identical)</td><td>동일 입력·동일 출력</td><td>하나 제거, 더 안정적인 것 유지</td><td>동일 코드 검증 로직 2곳 존재</td></tr><tr><td>부분 중복 (overlapping)</td><td>공통 로직 일부 공유</td><td>공통 부분 추출 → 상위 스킬로 위임</td><td>FE·BE 모두 '반복오류_사전차단' 사용</td></tr><tr><td>개념적 중복 (conceptual)</td><td>다른 구현, 같은 목적</td><td>성능·안정성 비교 후 우수한 것 유지</td><td>07(verify) vs 08(qa): 목적 유사하나 층위 다름</td></tr></table><table style='margin-top:0.75rem;'><tr><th>기준</th><th>통합 선택</th><th>분리 유지</th></tr><tr><td>안정성</td><td>단일 검증된 구현이 더 안정적</td><td>각 에이전트별 맞춤 검증 필요</td></tr><tr><td>성능(G3)</td><td>중복 실행으로 비용 낭비 확인됨</td><td>병렬 실행으로 성능 이득</td></tr><tr><td>GENOME</td><td>G3:COST_AWARE (비용 절감 우선)</td><td>G5:SPECIALIZE (전문화 우선)</td></tr></table>"
            },
            {
              heading: "스킬 최적화 4단계 프로세스 & 공유 사례",
              html: "<ol style='padding-left:1.2rem;color:#cbd5e1;font-size:0.875rem;'><li><strong>스캔:</strong> 전체 스킬 목록에서 유사 기능 태그로 그룹화</li><li><strong>비교:</strong> 장점·안정성·효과·성능·비용(토큰) 5개 항목 점수 산정</li><li><strong>결정:</strong> 통합(상위 스킬 위임) / 분리 유지 / 전문화(SPECIALIZE) 중 선택</li><li><strong>검증:</strong> G4(HUMAN_GATE) — 인간 승인 후 적용, 변경 이력 KB 등록</li></ol><p style='margin-top:0.75rem;padding:0.5rem 0.75rem;background:#0f172a;border-left:3px solid #3b82f6;border-radius:4px;font-size:0.8rem;'><strong>부분 중복 최적 설계 사례:</strong> 17번(FE)과 18번(BE)이 '반복오류_사전차단_검증'을 공유합니다. 완전 중복이 아닌 이유: 각 에이전트가 독립적으로 자체 검증을 수행해야 하는 아키텍처 원칙 때문입니다. 검증 로직 자체는 공통 KB에서 관리하여 일관성을 유지합니다.</p>"
            }
          ],
          keyTerms: [
            { term: "완전 중복 (identical)", definition: "동일 입력·동일 출력의 완전히 같은 기능. 하나를 제거하고 더 안정적인 것만 유지하는 것이 원칙" },
            { term: "부분 중복 (overlapping)", definition: "공통 로직 일부를 공유하는 중복. 공통 부분을 상위 스킬로 추출·위임하는 방식으로 최적화" },
            { term: "G3:COST_AWARE", definition: "GENOME 3번 유전자. 토큰·CPU·메모리 비용을 최소화. 중복 실행 비용이 큰 경우 통합을 선호" },
            { term: "G5:SPECIALIZE", definition: "GENOME 5번 유전자. 반복 패턴을 전문화. 각 에이전트별 특화 검증이 필요한 경우 분리 유지" },
            { term: "G4:HUMAN_GATE", definition: "GENOME 4번 유전자. 스킬 최적화 4단계 검증에서 인간 승인을 강제하는 원칙. 자율 변경 절대 금지" }
          ],
          quiz: [
            { q: "17번(FE)과 18번(BE)이 '반복오류_사전차단_검증'을 공유하는 것이 '완전 중복'이 아닌 이유는?", options: ["파일명이 다르기 때문", "각 에이전트가 독립적으로 자체 검증을 수행해야 하는 아키텍처 원칙 때문", "실행 시간이 다르기 때문", "QA 단계에서만 사용하기 때문"], answer: 1, explanation: "아키텍처 원칙상 FE와 BE는 독립적으로 자체 검증을 수행해야 합니다. 부분 중복이지만 검증 로직은 공통 KB에서 관리하여 일관성을 유지합니다." },
            { q: "스킬 통합 결정 시 GENOME 유전자 중 '비용 절감'을 우선시하는 유전자는?", options: ["G1:SELF_OPTIMIZE", "G3:COST_AWARE", "G5:SPECIALIZE", "G7:VERIFY_FIRST"], answer: 1, explanation: "G3:COST_AWARE는 토큰·CPU·메모리 비용을 최소화하는 유전자로, 중복 실행 비용이 큰 경우 통합을 선호합니다." },
            { q: "스킬 최적화 4단계 중 '인간 승인 후 적용'을 강제하는 단계는?", options: ["① 스캔", "② 비교", "③ 결정", "④ 검증 (G4:HUMAN_GATE)"], answer: 3, explanation: "4단계 검증에서 G4:HUMAN_GATE 원칙에 따라 인간 승인 후 적용합니다. 자율 변경은 절대 금지입니다." },
            { q: "07번(verify)과 08번(qa_reviewer)이 '개념적 중복'임에도 분리 유지하는 주된 이유는?", options: ["파일 크기가 다르기 때문", "층위(자체 검증 vs 독립 QA)가 다르고 각 도메인 특화 커버리지가 필요하기 때문", "구현 언어가 다르기 때문", "담당 에이전트가 같기 때문"], answer: 1, explanation: "07번은 개발자 자체 기술 검증, 08번은 독립 QA의 비즈니스·보안 검토로 층위가 다르며 각각 특화된 커버리지를 담당합니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C20-2: 스킬 자산화 프로세스
        // ─────────────────────────────────────────────────
        {
          id: "c20-2",
          title: "스킬 자산화 프로세스 — 경험을 재사용 가능한 자산으로",
          duration: "15분",
          objective: "에이전트 경험을 체계적으로 자산화하여 #Global SkillNet에 등록하는 전체 프로세스를 이해한다.",
          sourceSection: "#Global SkillNet/ 22_ai_architect_skill/SKILL.md §GENOME",
          content: [
            {
              heading: "자산화(G2:ASSETIZE)란 & 7단계 프로세스",
              html: "<p>자산화(G2:ASSETIZE)는 에이전트 작업에서 반복 가능한 패턴·해결책·규칙을 추출하여 재사용 가능한 스킬·KB 항목으로 변환하는 과정입니다. 단순 기록이 아니라 <strong>다른 에이전트가 즉시 활용할 수 있는 형태로 구조화</strong>하는 것이 핵심입니다.</p><ol style='padding-left:1.2rem;color:#cbd5e1;font-size:0.875rem;'><li><strong>발견:</strong> 작업 완료 후 Rule 4(Evolution) 적용 — '이번 작업에서 배운 것은?'</li><li><strong>추출:</strong> 반복 가능한 패턴·해결책을 원시 메모로 기록</li><li><strong>구조화:</strong> SKILL.md 형식으로 정제 (역할·사용 시점·입력/출력·검증 조건)</li><li><strong>분류:</strong> 초급/중급/고급 난이도 태깅, 적합한 스킬 번호 폴더 결정</li><li><strong>중복 검사:</strong> 기존 스킬과 유사도 비교 → 통합 or 신규 등록 결정</li><li><strong>승인 요청:</strong> G4(HUMAN_GATE) — 인간에게 변경 내용·근거·효과 보고</li><li><strong>배포:</strong> 승인 후 해당 폴더 SKILL.md 업데이트, G8(EVOLVE_TOGETHER) — 연결 스킬에 전파</li></ol>"
            },
            {
              heading: "자산화 대상 분류 & 품질 기준",
              html: "<table><tr><th>자산 유형</th><th>설명</th><th>저장 위치</th><th>예시</th></tr><tr><td>스킬 패턴</td><td>반복 성공 작업 방법론</td><td>해당 번호 SKILL.md</td><td>BE_API응답_검증 로직</td></tr><tr><td>오류 패턴</td><td>반복 실패 원인·해결책</td><td>10번 KB archivist</td><td>퀴즈 question 필드 버그</td></tr><tr><td>인터페이스 계약</td><td>에이전트 간 표준 I/O</td><td>09번 협업 스킬</td><td>{ status, data, message }</td></tr><tr><td>최적화 규칙</td><td>비용·성능 개선 규칙</td><td>22번 GENOME</td><td>토큰 절약 프롬프트 패턴</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;'><strong>자산화 품질 기준 (G7:VERIFY_FIRST):</strong> ① 재현 가능성(동일 입력→동일 결과) ② 완전성(사용 시점·전제조건·예외 명시) ③ 비용 효율(기존 대비 토큰·시간 절약 입증) ④ 안전성(다른 스킬에 부작용 없음)</p>"
            }
          ],
          keyTerms: [
            { term: "G2:ASSETIZE", definition: "GENOME 2번 유전자. 에이전트 경험에서 반복 가능한 패턴을 추출하여 재사용 가능한 스킬·KB 항목으로 자산화" },
            { term: "Rule 4 Evolution", definition: "작업 완료 후 '이번에 배운 스킬·규칙은 무엇인가?'를 스스로 묻는 자기 진화 규칙. 자산화의 출발점" },
            { term: "G7:VERIFY_FIRST", definition: "GENOME 7번 유전자. 자산 등록 전 Guardian 검증을 통과해야 하는 원칙. 재현 가능성·완전성·비용 효율·안전성 4가지 검증" },
            { term: "G8:EVOLVE_TOGETHER", definition: "GENOME 8번 유전자. 한 스킬의 진화가 연결된 스킬에 전파되어 공진화를 이끄는 원칙" },
            { term: "Guardian 검증", definition: "자산화 품질 기준 4가지(재현성·완전성·비용효율·안전성)를 통과해야 하는 스킬 등록 전 필수 검증 단계" }
          ],
          quiz: [
            { q: "스킬 자산화 7단계 중 인간 승인을 받는 단계는?", options: ["3단계 구조화", "4단계 분류", "6단계 승인 요청 (G4:HUMAN_GATE)", "7단계 배포"], answer: 2, explanation: "6단계에서 G4:HUMAN_GATE 원칙에 따라 인간에게 변경 내용·근거·효과를 보고하고 승인을 받습니다. 자율 등록은 절대 금지입니다." },
            { q: "에이전트가 작업 완료 후 자산화를 시작하게 하는 Rule은?", options: ["Rule 1 Self-Check", "Rule 2 Memory Mgmt", "Rule 3 Error Handling", "Rule 4 Evolution"], answer: 3, explanation: "Rule 4 Evolution은 '이번 작업에서 배운 스킬·규칙은 무엇인가?'를 스스로 물어 자산화의 출발점이 됩니다." },
            { q: "한 스킬의 진화가 연결된 다른 스킬에도 전파되도록 하는 GENOME 유전자는?", options: ["G2:ASSETIZE", "G5:SPECIALIZE", "G6:CONNECT", "G8:EVOLVE_TOGETHER"], answer: 3, explanation: "G8:EVOLVE_TOGETHER는 한 스킬의 진화 이벤트가 연결된 스킬에 전파되어 공진화를 이끄는 유전자입니다." },
            { q: "자산화 품질 기준(G7:VERIFY_FIRST)에서 '재현 가능성'의 정의는?", options: ["다른 에이전트도 같은 스킬 사용 가능", "동일 입력 시 동일 결과가 나옴", "비용이 50% 이상 절감됨", "승인 횟수가 1회 이상임"], answer: 1, explanation: "재현 가능성은 동일한 입력에 대해 항상 동일한 결과를 보장하는 특성으로, 스킬 자산의 핵심 품질 기준입니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C20-3: 스킬 네트워크 표준화와 #concept 연동
        // ─────────────────────────────────────────────────
        {
          id: "c20-3",
          title: "스킬 네트워크 표준화와 #concept 정형화 연동",
          duration: "15분",
          objective: "#Global SkillNet 최적화가 #concept 헌법 정형화·안정성·신뢰·성능·표준화에 미치는 영향을 이해한다.",
          sourceSection: "#concept/_docs/rules.md + #Global SkillNet/ 전체",
          content: [
            {
              heading: "스킬 최적화 → #concept 품질 향상 연결 구조",
              html: "<table><tr><th>스킬 최적화 항목</th><th>#concept 영향</th><th>구체적 효과</th></tr><tr><td>난이도 분류 (초/중/고급)</td><td>정형화·표준화</td><td>에이전트별 적정 스킬 매칭, 오버엔지니어링 방지</td></tr><tr><td>중복 기능 통합</td><td>성능 향상·비용 절감</td><td>동일 검증 로직 1회 실행, 토큰 낭비 제거</td></tr><tr><td>자산화 프로세스 표준화</td><td>신뢰성 향상</td><td>검증된 패턴만 사용, 반복 오류 제거</td></tr><tr><td>GENOME 8유전자 상속</td><td>안정성 향상</td><td>모든 스킬이 일관된 진화 원칙 적용</td></tr><tr><td>HUMAN_GATE 강제</td><td>신뢰성·거버넌스</td><td>무허가 변경 차단, 감사 이력 유지</td></tr><tr><td>archivist KB 관리</td><td>지식 누적·재활용</td><td>동일 문제 반복 해결 불필요</td></tr></table>"
            },
            {
              heading: "표준화 달성 3가지 조건 & 현재 구현 현황",
              html: "<p><strong>표준화 달성 3조건:</strong> ① <strong>일관성</strong> — 동일 유형 태스크는 동일 스킬 사용 (예: 모든 BE 검증은 18번 경유) ② <strong>추적 가능성</strong> — 모든 스킬 사용 기록이 sync_state.json + history.md에 남음 ③ <strong>갱신 가능성</strong> — 스킬 진화 시 하위 호환성 유지 또는 명시적 마이그레이션 가이드 제공</p><table><tr><th>항목</th><th>현황</th><th>목표</th><th>우선순위</th></tr><tr><td>완성된 스킬</td><td>8개 (00, 02, 17, 18, 22 + 01, 19, 21 부분)</td><td>23개 완성</td><td>높음</td></tr><tr><td>AKC v4 인지 스킬</td><td>미구현 6개 (14~16, 11~13)</td><td>전체 구현</td><td>최高</td></tr><tr><td>자산화 표준</td><td>SKILL.md 형식 확립 (17, 18번 기준)</td><td>전 스킬 통일</td><td>높음</td></tr></table><p style='margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;'><strong>#concept 최적화 달성 경로:</strong> Step 1 AKC v4 인지 스킬 6개 구현(14→15→16→11→12→13) → Step 2 중복 스캔 → Step 3 통합 실행 → Step 4 자산화 통일 → Step 5 지침동기화 → Step 6 검증</p>"
            }
          ],
          keyTerms: [
            { term: "정형화", definition: "스킬 최적화를 통해 #concept 헌법 구조가 일관된 형태로 표준화되는 품질 향상 효과" },
            { term: "표준화 달성 3조건", definition: "일관성(동일 스킬 사용) + 추적 가능성(sync_state+history 기록) + 갱신 가능성(하위 호환) — 모두 충족해야 표준화 달성" },
            { term: "지침동기화", definition: "#Global SkillNet 업데이트 내용을 #concept/_docs 헌법에 반영하는 동기화 절차. HUMAN_GATE 통과 필수" },
            { term: "추적 가능성", definition: "표준화 달성 조건 중 하나. 모든 스킬 사용 기록이 sync_state.json + history.md에 남아야 하는 기준" },
            { term: "AKC v4 인지 스킬 미구현", definition: "14~16번(인지) + 11~13번(진화) 총 6개 스킬이 현재 미구현 상태. #concept 최우선 구현 대상" }
          ],
          quiz: [
            { q: "#Global SkillNet 최적화가 #concept에 가져다 주는 '성능 향상' 효과의 구체적 내용은?", options: ["더 빠른 CPU 처리", "동일 검증 로직 중복 실행 제거 → 토큰 낭비 감소", "더 많은 에이전트 추가", "메모리 할당 증가"], answer: 1, explanation: "중복 기능 통합으로 동일 검증 로직을 1회만 실행하여 토큰·처리 비용을 절감합니다. 이것이 성능 향상의 핵심입니다." },
            { q: "표준화 달성의 3가지 충족 기준 중 '동일 유형 태스크는 동일 스킬 사용'에 해당하는 기준은?", options: ["추적 가능성", "일관성", "갱신 가능성", "재현 가능성"], answer: 1, explanation: "일관성은 동일 유형의 태스크에 항상 동일 스킬을 사용하는 기준으로, 표준화의 핵심입니다." },
            { q: "#concept 최적화 달성 경로에서 가장 먼저 완성해야 할 스킬 그룹은?", options: ["전통 에이전트 스킬 (03~10번)", "AKC v4 인지 스킬 (14~16, 11~13번)", "인프라 스킬 (20번)", "메모리 스킬 (21번)"], answer: 1, explanation: "AKC v4 인지 스킬 6개(14→15→16→11→12→13)가 #concept 핵심 아키텍처와 직결되므로 최우선 구현 대상입니다." },
            { q: "스킬 표준화의 '추적 가능성' 조건을 충족하기 위해 사용 기록이 남아야 하는 파일은?", options: ["SKILL.md + agent_local.md", "sync_state.json + history.md", "CLAUDE.md + rules.md", "edu-data.js + vocab-data.js"], answer: 1, explanation: "추적 가능성은 sync_state.json(현재 상태)과 history.md(이력 기록)에 모든 스킬 사용 내역이 남아야 충족됩니다." }
          ]
        }

      ] // end m20 classes
    }

    // ══════════════════════════════════════════════════════
    // M21 — 개발 언어 구현 스킬 (02번 분리 정책 — 교육 전용)
    // ══════════════════════════════════════════════════════
    {
      id: "m21",
      title: "개발 언어 구현 스킬 (교육 전용)",
      icon: "⌨️",
      classes: [

        // ─────────────────────────────────────────────────
        // C21-1: React + TypeScript 컴포넌트 구현 패턴
        // ─────────────────────────────────────────────────
        {
          id: "c21-1",
          title: "React + TypeScript 컴포넌트 구현 패턴",
          duration: "20분",
          objective: "React + TypeScript 기반 컴포넌트를 설계 원칙에 따라 구현하는 표준 패턴을 익힌다.",
          sourceSection: "#Global SkillNet/ 02번 분리 정책 → M21",
          content: [
            {
              heading: "이 모듈의 위치 — 02번 분리 정책",
              html: `<div style="background:#0f172a;border:1px solid #334155;border-radius:6px;padding:12px;margin:8px 0">
<p style="color:#94a3b8;font-size:0.8rem;margin:0">📌 <strong style="color:#f59e0b">상위 정책 (SKILL_POLICY.md)</strong> 에 따라 이 클래스는 02번(디자인 스타일) 스킬에서 분리된 <strong style="color:#22d3ee">교육 전용</strong> 영역입니다.<br>
스킬 업그레이드 정책 제외 · 프레임워크 변경 시 이 class만 갱신 · #concept 지침동기화 체인 미포함</p></div>`
            },
            {
              heading: "컴포넌트 구현 3원칙",
              html: `<table>
<tr><th>원칙</th><th>내용</th><th>예시</th></tr>
<tr><td>단일 책임</td><td>컴포넌트 하나 = 역할 하나</td><td>Button은 클릭만, Form은 입력만</td></tr>
<tr><td>Props 타입 명시</td><td>interface로 Props 타입 선언 필수</td><td>interface ButtonProps { label: string; onClick: () => void }</td></tr>
<tr><td>조합 우선</td><td>상속보다 조합으로 확장</td><td>Card = CardHeader + CardBody + CardFooter</td></tr>
</table>`
            },
            {
              heading: "표준 컴포넌트 구현 템플릿",
              html: `<pre>// Atom 예시 — Button
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label, variant = 'primary', size = 'md',
  disabled = false, onClick
}: ButtonProps) => {
  return (
    &lt;button
      onClick={onClick}
      disabled={disabled}
      className={cn(variants[variant], sizes[size])}
    &gt;
      {label}
    &lt;/button&gt;
  );
};</pre>`
            },
            {
              heading: "Molecule 패턴 — 조합 구성",
              html: `<pre>// Form = Label + Input + ErrorMessage 조합
interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;  // Input, Select 등 주입
}

export const FormField = ({ label, name, error, children }: FormFieldProps) => (
  &lt;div className="flex flex-col gap-1"&gt;
    &lt;label htmlFor={name} className="text-sm font-medium"&gt;{label}&lt;/label&gt;
    {children}
    {error &amp;&amp; &lt;span className="text-xs text-red-400"&gt;{error}&lt;/span&gt;}
  &lt;/div&gt;
);</pre>`
            }
          ],
          keyTerms: [
            { term: "단일 책임 원칙", definition: "컴포넌트 하나가 하나의 역할만 담당. 재사용성과 테스트 용이성을 높인다" },
            { term: "Props 인터페이스", definition: "TypeScript interface로 컴포넌트 입력 타입을 명시. 런타임 오류 사전 방지" },
            { term: "조합 패턴", definition: "상속 대신 조합으로 컴포넌트를 확장. children prop이나 slot 패턴 활용" },
            { term: "Atom/Molecule/Organism", definition: "컴포넌트 계층: 기본 단위(Atom) → 조합(Molecule) → 레이아웃(Organism)" }
          ],
          quiz: [
            { q: "React 컴포넌트 구현 3원칙 중 '컴포넌트 하나 = 역할 하나'에 해당하는 원칙은?", options: ["조합 우선", "Props 타입 명시", "단일 책임", "계층 분리"], answer: 2, explanation: "단일 책임 원칙(SRP)은 컴포넌트 하나가 하나의 역할만 담당하도록 하여 재사용성과 유지보수성을 높입니다." },
            { q: "TypeScript에서 컴포넌트 Props 타입을 선언하는 올바른 방법은?", options: ["type Props = any", "interface ButtonProps { ... }", "let props: object", "Props = {}"], answer: 1, explanation: "interface로 Props 타입을 명시하면 TypeScript 컴파일 단계에서 타입 오류를 사전 방지할 수 있습니다." },
            { q: "Molecule 컴포넌트의 특징으로 올바른 것은?", options: ["DB와 직접 연결", "단일 HTML 태그", "Atom 컴포넌트들의 조합", "라우팅 담당"], answer: 2, explanation: "Molecule은 Atom 컴포넌트들(Label + Input + Error 등)을 조합하여 만든 복합 컴포넌트입니다." },
            { q: "이 모듈(M21)이 02번 스킬에서 분리된 이유는?", options: ["난이도가 높아서", "개발 언어(React/TS)로 구현 가능한 스킬 — 스킬 업그레이드 정책 제외 대상", "별도 에이전트가 담당해서", "비용이 많이 들어서"], answer: 1, explanation: "상위 정책(SKILL_POLICY.md)에 따라 특정 프레임워크로 구현 가능한 스킬은 02번에서 분리되어 교육 전용 class로 관리됩니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C21-2: Tailwind CSS + shadcn/ui 활용
        // ─────────────────────────────────────────────────
        {
          id: "c21-2",
          title: "Tailwind CSS + shadcn/ui 활용",
          duration: "20분",
          objective: "Tailwind CSS 유틸리티 클래스와 shadcn/ui 컴포넌트를 디자인 토큰과 연계하여 사용하는 방법을 익힌다.",
          sourceSection: "#Global SkillNet/ 02번 분리 정책 → M21",
          content: [
            {
              heading: "Tailwind CSS — 디자인 토큰 연동",
              html: `<pre>// tailwind.config.ts — 02번 디자인 토큰을 Tailwind에 등록
export default {
  theme: {
    extend: {
      colors: {
        primary:    '#0284C7',
        secondary:  '#64748B',
        background: '#0F172A',
        surface:    '#1E293B',
      },
      spacing: {
        xs: '4px', sm: '8px', md: '16px',
        lg: '24px', xl: '32px', '2xl': '48px',
      },
      borderRadius: {
        sm: '4px', md: '8px', lg: '12px', full: '9999px'
      }
    }
  }
};</pre>`
            },
            {
              heading: "유틸리티 클래스 패턴 — cn() 헬퍼",
              html: `<pre>// cn() = clsx + tailwind-merge → 조건부 클래스 충돌 방지
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 사용 예시
const buttonClass = cn(
  'px-md py-sm rounded-md font-medium transition-colors',
  variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
  variant === 'ghost'   && 'bg-transparent border border-surface',
  disabled && 'opacity-50 cursor-not-allowed'
);</pre>`
            },
            {
              heading: "shadcn/ui 컴포넌트 설치 및 커스터마이즈",
              html: `<pre># shadcn/ui 컴포넌트 추가 (CLI)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog

// components/ui/button.tsx 생성됨 → 직접 수정 가능
// Radix UI 기반 — 접근성(ARIA) 자동 처리
// 02번 디자인 토큰 색상 변수와 연동:
// --primary: 221.2 83.2% 53.3%;  (CSS 변수)</pre>`
            },
            {
              heading: "반응형 구현 — Mobile First 클래스",
              html: `<table>
<tr><th>레이아웃</th><th>모바일 (기본)</th><th>태블릿 (md:)</th><th>데스크탑 (lg:)</th></tr>
<tr><td>그리드</td><td>grid-cols-1</td><td>md:grid-cols-2</td><td>lg:grid-cols-3</td></tr>
<tr><td>사이드바</td><td>hidden</td><td>md:block w-48</td><td>lg:w-64</td></tr>
<tr><td>폰트</td><td>text-sm</td><td>md:text-base</td><td>lg:text-lg</td></tr>
<tr><td>패딩</td><td>p-sm</td><td>md:p-md</td><td>lg:p-lg</td></tr>
</table>`
            }
          ],
          keyTerms: [
            { term: "Tailwind CSS", definition: "유틸리티 우선 CSS 프레임워크. 클래스명으로 스타일을 직접 지정. 빌드 시 미사용 클래스 제거" },
            { term: "cn() 헬퍼", definition: "clsx + tailwind-merge 조합. 조건부 클래스 적용 + Tailwind 클래스 충돌 자동 해결" },
            { term: "shadcn/ui", definition: "Radix UI 기반 접근성 컴포넌트 라이브러리. 소스코드 직접 소유(복사 방식) — 완전 커스터마이즈 가능" },
            { term: "CSS 변수 연동", definition: "shadcn/ui의 --primary 등 CSS 변수를 tailwind.config에서 참조 → 02번 디자인 토큰과 통합" }
          ],
          quiz: [
            { q: "Tailwind CSS에서 조건부 클래스 충돌을 방지하기 위해 사용하는 헬퍼 함수는?", options: ["classnames()", "cn() (clsx + tailwind-merge)", "styled()", "css()"], answer: 1, explanation: "cn()은 clsx(조건부 클래스)와 tailwind-merge(Tailwind 충돌 해결)를 결합한 헬퍼입니다." },
            { q: "shadcn/ui의 핵심 특징으로 올바른 것은?", options: ["npm 패키지로만 사용", "소스코드 직접 소유(복사 방식) — 완전 커스터마이즈", "Vue.js 전용", "CSS-in-JS 방식"], answer: 1, explanation: "shadcn/ui는 컴포넌트를 프로젝트에 직접 복사하는 방식이므로 소스코드를 완전히 소유하고 자유롭게 수정할 수 있습니다." },
            { q: "02번 디자인 토큰의 색상을 Tailwind에 등록하는 파일은?", options: ["index.css", "App.tsx", "tailwind.config.ts", "globals.css"], answer: 2, explanation: "tailwind.config.ts의 theme.extend.colors에 02번 디자인 토큰 색상값을 등록하여 유틸리티 클래스로 사용합니다." },
            { q: "Mobile First 반응형에서 '태블릿(768px) 이상에서만 사이드바 표시'를 구현하는 Tailwind 클래스는?", options: ["sm:block hidden", "hidden md:block", "lg:block display-none", "tablet:show"], answer: 1, explanation: "hidden(모바일 숨김) + md:block(768px 이상 표시)으로 Mobile First 반응형을 구현합니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C21-3: Zustand + TanStack Query 상태 관리
        // ─────────────────────────────────────────────────
        {
          id: "c21-3",
          title: "Zustand + TanStack Query 상태 관리",
          duration: "20분",
          objective: "Zustand(전역 상태)와 TanStack Query(서버 상태)를 분리하여 관리하는 패턴을 익힌다.",
          sourceSection: "#Global SkillNet/ 02번 분리 정책 → M21",
          content: [
            {
              heading: "상태 분류 — 전역 vs 서버",
              html: `<table>
<tr><th>유형</th><th>도구</th><th>예시</th><th>특징</th></tr>
<tr><td><strong>전역 UI 상태</strong></td><td>Zustand</td><td>사이드바 열림/닫힘, 테마, 모달 상태</td><td>클라이언트 전용, 동기</td></tr>
<tr><td><strong>서버 상태</strong></td><td>TanStack Query</td><td>API 데이터, 페이지네이션, 캐시</td><td>비동기, 자동 캐싱·갱신</td></tr>
<tr><td><strong>로컬 UI 상태</strong></td><td>useState</td><td>input 값, hover 여부</td><td>컴포넌트 단위</td></tr>
</table>`
            },
            {
              heading: "Zustand 스토어 — 표준 패턴",
              html: `<pre>// stores/ui.store.ts
import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  theme: 'dark' | 'light';
  toggleSidebar: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
}

export const useUIStore = create&lt;UIState&gt;((set) => ({
  sidebarOpen: true,
  theme: 'dark',
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
}));

// 사용 — 컴포넌트에서
const { sidebarOpen, toggleSidebar } = useUIStore();</pre>`
            },
            {
              heading: "TanStack Query — 서버 상태 패턴",
              html: `<pre>// hooks/useUsers.ts — API 데이터 훅
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 조회
export const useUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(r => r.json()),
  staleTime: 5 * 60 * 1000,  // 5분 캐시
});

// 변경 + 자동 무효화
export const useCreateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => fetch('/api/users', { method:'POST', body: JSON.stringify(data) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  });
};</pre>`
            },
            {
              heading: "BE Dev(18번) API 응답 표준과 연동",
              html: `<pre>// BE Dev 표준 응답 { status, data, message } 타입 정의
interface APIResponse&lt;T&gt; {
  status: number;
  data: T;
  message: string;
}

// TanStack Query에서 타입 안전하게 사용
const useUsers = () => useQuery&lt;APIResponse&lt;User[]&gt;&gt;({
  queryKey: ['users'],
  queryFn: async () => {
    const res = await fetch('/api/v1/users');
    if (!res.ok) throw new Error('API 오류');
    return res.json();  // { status, data, message }
  }
});</pre>`
            }
          ],
          keyTerms: [
            { term: "Zustand", definition: "경량 전역 상태 관리 라이브러리. Context API 불필요, Provider 없이 사용 가능. UI 상태 전용" },
            { term: "TanStack Query", definition: "서버 상태 관리 라이브러리. 자동 캐싱·갱신·에러 처리. useQuery/useMutation 훅 제공" },
            { term: "staleTime", definition: "TanStack Query에서 데이터가 '신선'한 것으로 간주되는 시간. 이 시간 내 동일 쿼리는 서버 요청 안 함" },
            { term: "invalidateQueries", definition: "useMutation 성공 후 관련 캐시를 무효화하여 자동으로 최신 데이터를 다시 불러오게 하는 함수" }
          ],
          quiz: [
            { q: "'사이드바 열림/닫힘 상태' 관리에 적합한 도구는?", options: ["TanStack Query", "Zustand", "Redux Saga", "Apollo Client"], answer: 1, explanation: "사이드바 열림/닫힘은 클라이언트 전용 전역 UI 상태이므로 Zustand가 적합합니다. TanStack Query는 서버 데이터 관리용입니다." },
            { q: "TanStack Query에서 API 데이터 조회에 사용하는 훅은?", options: ["useMutation", "useStore", "useQuery", "useFetch"], answer: 2, explanation: "useQuery는 데이터 조회, useMutation은 데이터 변경(POST/PUT/DELETE)에 사용합니다." },
            { q: "useMutation 성공 후 관련 캐시를 최신화하는 메서드는?", options: ["clearCache()", "refetch()", "invalidateQueries()", "resetStore()"], answer: 2, explanation: "invalidateQueries()로 관련 queryKey의 캐시를 무효화하면 TanStack Query가 자동으로 최신 데이터를 다시 불러옵니다." },
            { q: "18번 BE Dev의 표준 응답 형식을 TypeScript로 타입 정의한 것은?", options: [
              "type Res = { code: number; body: T }",
              "interface APIResponse&lt;T&gt; { status: number; data: T; message: string }",
              "type Result = { ok: boolean; payload: T }",
              "interface Response { items: T[]; total: number }"
            ], answer: 1, explanation: "18번 BE Dev 스킬의 API 응답 표준은 { status, data, message }이며, 제네릭 T로 data 타입을 명시합니다." }
          ]
        }

      ] // end m21 classes
    }

    // ══════════════════════════════════════════════════════
    // M22 — §K 경험 자산화 정책
    // ══════════════════════════════════════════════════════
    {
      id: "m22",
      title: "§K 경험 자산화 정책",
      icon: "📚",
      classes: [

        // ─────────────────────────────────────────────────
        // C22-1: 경험 자산화 철학 — 왜 모든 경험이 자산인가
        // ─────────────────────────────────────────────────
        {
          id: "c22-1",
          title: "경험 자산화 철학 — 모든 경험은 자산이다",
          duration: "15분",
          objective: "§K 경험 자산화 정책의 핵심 철학과 3가지 기본 원칙을 이해한다.",
          sourceSection: "#concept/_docs/rules.md §K",
          content: [
            {
              heading: "§K 경험 자산화 정책 — 핵심 철학",
              html: "<p>§K 정책은 AKC v4 시스템이 실패·포기·시행착오를 포함한 <strong>모든 경험을 지식 자산으로 변환</strong>하는 원칙입니다. 실패는 손실이 아니라 미래 에이전트를 위한 '이 방향은 막혔다'는 지도입니다.</p><table><tr><th>원칙</th><th>내용</th><th>이유</th></tr><tr><td>모든 경험 = 자산</td><td>성공·실패·포기 구분 없이 모두 기록</td><td>실패도 다음 시도의 방향을 줄이는 정보</td></tr><tr><td>삭제 금지</td><td>지식은 삭제 대신 deprecated 표시</td><td>과거 맥락 보존 — 미래에 다시 유효해질 수 있음</td></tr><tr><td>현재 최선</td><td>현재 시점의 최선을 기록하면 충분</td><td>완벽한 정보를 기다리는 것 자체가 손실</td></tr></table>"
            },
            {
              heading: "5단계 Status Lifecycle — 경험이 지식이 되는 과정",
              html: "<p>모든 경험은 아래 5단계를 거쳐 검증된 지식(canonical)으로 성장합니다.</p><table><tr><th>단계</th><th>상태</th><th>설명</th></tr><tr><td>1단계</td><td><code>experience</code></td><td>발생한 사실·경험의 최초 기록 (5분 룰 — 즉시 기록)</td></tr><tr><td>2단계</td><td><code>attempt</code></td><td>해결 시도 기록 (실패도 포함 — 포기 금지)</td></tr><tr><td>3단계</td><td><code>draft</code></td><td>패턴 인식 및 가설 수립</td></tr><tr><td>4단계</td><td><code>verified</code></td><td>2개 이상 사례에서 검증 완료</td></tr><tr><td>5단계</td><td><code>canonical</code></td><td>3개 이상 도메인에서 검증 → 표준 지식으로 승격</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "§K 경험 자산화 정책", definition: "AKC v4 헌법 §K. 성공·실패·포기를 포함한 모든 경험을 지식 자산으로 변환하는 원칙. K-1~K-7 7개 세부 정책으로 구성" },
            { term: "5단계 Status Lifecycle", definition: "experience → attempt → draft → verified → canonical. 모든 경험이 검증된 표준 지식으로 성장하는 5단계 경로" },
            { term: "삭제 금지 원칙", definition: "§K의 핵심 제약. 지식은 삭제하지 않고 deprecated 표시 후 보존. 과거 맥락이 미래에 다시 유효해질 수 있기 때문" },
            { term: "현재 최선 원칙", definition: "완벽한 정보를 기다리지 않고, 현재 시점의 최선 정보를 즉시 기록하는 것이 가장 좋은 자산화 방법이라는 원칙" }
          ],
          quiz: [
            { q: "§K 경험 자산화 정책의 3가지 기본 원칙이 아닌 것은?", options: ["모든 경험 = 자산", "삭제 금지", "완벽할 때만 기록", "현재 최선"], answer: 2, explanation: "§K의 3원칙은 '모든 경험=자산', '삭제 금지', '현재 최선'입니다. '완벽할 때만 기록'은 §K와 정반대 원칙입니다." },
            { q: "5단계 Lifecycle에서 '3개 이상 도메인에서 검증 완료' 조건을 만족할 때 부여되는 상태는?", options: ["verified", "draft", "canonical", "attempt"], answer: 2, explanation: "canonical은 3개 이상 도메인에서 동일 패턴이 검증될 때 부여되는 최종 상태로, 표준 지식(boilerplate)으로 승격됩니다." },
            { q: "실패한 해결 시도를 기록하는 §K의 단계는?", options: ["experience", "attempt", "draft", "verified"], answer: 1, explanation: "attempt 단계는 해결을 시도했으나 실패한 경험을 기록합니다. '포기도 자산이다' 원칙에 따라 포기 이유와 막힌 경로를 남깁니다." }
          ]
        },

        // ─────────────────────────────────────────────────
        // C22-2: 5분 룰·4차원 자산화 분석·deprecated 정책
        // ─────────────────────────────────────────────────
        {
          id: "c22-2",
          title: "5분 룰 · 4차원 분석 · deprecated 정책",
          duration: "20분",
          objective: "§K의 실천 도구인 5분 룰, 4차원 자산화 분석, deprecated 표시 정책을 적용할 수 있다.",
          sourceSection: "#concept/_docs/rules.md §K + evolution/learningeng/agents.md",
          content: [
            {
              heading: "5분 룰 — 즉시 기록 원칙",
              html: "<p>경험 발생 후 <strong>5분 이내</strong>에 최소 형태로 기록해야 합니다. 기억이 생생할 때의 기록이 가장 풍부한 자산입니다.</p><ul style='color:#cbd5e1;font-size:0.875rem;padding-left:1.2rem;'><li>오류 발생 즉시 → 오류 메시지·발생 조건·재현 여부 기록</li><li>해결 즉시 → 해결 방법·핵심 인사이트 기록</li><li>포기 즉시 → 포기 이유·막힌 경로 기록</li><li>단 1줄이라도 즉시 기록 → 나중에 보완 가능</li></ul>"
            },
            {
              heading: "4차원 자산화 분석",
              html: "<p>경험을 4개 차원에서 분석하여 다양한 관점의 지식을 추출합니다.</p><table><tr><th>차원</th><th>분석 질문</th><th>추출 지식</th></tr><tr><td>표준 개발</td><td>기술적으로 어떻게 구현했나?</td><td>코드 패턴·API 사용법</td></tr><tr><td>기획</td><td>왜 이 접근법을 선택했나?</td><td>의사결정 근거·대안 비교</td></tr><tr><td>설계</td><td>구조적으로 어떻게 설계했나?</td><td>아키텍처 패턴·제약 조건</td></tr><tr><td>도메인</td><td>이 도메인 특수 요인은?</td><td>비즈니스 로직·도메인 규칙</td></tr></table>"
            },
            {
              heading: "deprecated 표시 정책",
              html: "<p>구식이 된 지식도 <strong>삭제하지 않고</strong> deprecated 표시 후 보존합니다.</p><table><tr><th>상황</th><th>처리 방법</th><th>이유</th></tr><tr><td>더 나은 방법 발견</td><td>기존 항목에 <code>(deprecated since YYYY)</code> 표시</td><td>과거에 왜 그 방법을 썼는지 맥락 보존</td></tr><tr><td>환경 변화로 무효화</td><td>deprecated 표시 + 새 방법 링크 추가</td><td>마이그레이션 경로 명확화</td></tr><tr><td>실험적 시도 실패</td><td>attempt 상태 유지 + 실패 사유 기록</td><td>'이 방향은 막혔다'는 지도 제공</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "5분 룰 (FiveMinuteRule)", definition: "경험 발생 후 5분 이내 최소 형태로 기록하는 §K 원칙. 단 1줄이라도 즉시 기록하고 나중에 보완하는 방식" },
            { term: "4차원 자산화 분석 (FourDimensionAnalysis)", definition: "경험을 표준 개발·기획·설계·도메인 4가지 관점에서 분석하여 다각도 지식을 추출하는 §K 방법론" },
            { term: "deprecated 표시 정책 (DeprecatedPolicy)", definition: "§K 삭제 금지 원칙의 실천 방법. 구식 지식은 삭제 대신 '(deprecated since YYYY)' 표시 후 보존" },
            { term: "KnowledgeAssetPolicy", definition: "§K 전체 정책의 영문 식별자. 모든 경험을 지식 자산으로 변환하는 AKC v4 핵심 정책" }
          ],
          quiz: [
            { q: "§K '5분 룰'의 핵심 의미는?", options: ["5분 동안 코드를 검토한다", "경험 발생 후 5분 이내에 최소 형태로 기록한다", "5분마다 sync_state를 저장한다", "5분 이상 막히면 사람에게 보고한다"], answer: 1, explanation: "5분 룰은 '기억이 생생할 때 즉시 기록'하는 원칙입니다. 단 1줄이라도 5분 이내에 기록하고 나중에 보완합니다." },
            { q: "4차원 자산화 분석의 4가지 차원이 아닌 것은?", options: ["표준 개발", "기획", "테스트", "도메인"], answer: 2, explanation: "4차원은 표준 개발·기획·설계·도메인입니다. '테스트'는 4차원에 포함되지 않습니다." },
            { q: "§K deprecated 표시 정책에서 구식 지식을 처리하는 올바른 방법은?", options: ["즉시 파일 삭제", "내용을 비워 두기", "(deprecated since YYYY) 표시 후 보존", "다른 파일로 이동 후 원본 삭제"], answer: 2, explanation: "§K 삭제 금지 원칙에 따라 구식 지식도 삭제하지 않고 'deprecated since YYYY' 표시 후 보존합니다." },
            { q: "§K에서 '포기도 자산이다'라는 원칙이 적용되는 Lifecycle 단계는?", options: ["experience", "attempt", "verified", "canonical"], answer: 1, explanation: "attempt 단계에 포기·실패 기록이 저장됩니다. 포기 이유와 막힌 경로를 남겨 미래 에이전트에게 '이 방향은 막혔다'는 정보를 제공합니다." }
          ]
        }

      ] // end m22 classes
    }

  ]; // end part6

  if (window.CURRICULUM && window.CURRICULUM.modules) {
    window.CURRICULUM.modules.push(...part6);
  }
})();
