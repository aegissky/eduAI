// PART 3 — M10~M11 (6 classes). Loaded after edu-data-p2.js.
// P3_VERSION: 2026-03-18
// AUTO-GENERATED version — use sync-trigger.js --p2-check to verify
const P3_VERSION = "2026-03-18";
// 참조 헌법: #concept/_docs/tool-agent/agents.md
//           #concept/_docs/infra-agent/agents.md
//           #concept/_docs/asset/manager_assent.md
//           #concept/_docs/asset/style/manager_design.md
//           #concept/_docs/asset/infra/manager_*.md
(function () {
  const part3 = [

    // ─── M10 실행 에이전트 확장 — ToolAgent · InfraAgent ──────────────
    {
      id: "m10", title: "실행 에이전트 확장", icon: "🔧", classes: [

        // ── c10-1 ToolAgent 헌법 ──────────────────────────────────────
        {
          id: "c10-1", title: "Tool Agent 헌법", duration: "15분",
          objective: "Tool Agent의 6가지 도구 유형, 선택 기준 4단계, 재시도·Fallback 정책을 이해한다",
          sourceSection: "§tool-1",
          content: [
            {
              heading: "Tool Agent 위치 및 역할",
              html: "<p>Tool Agent는 <strong>AgentZone</strong> 소속으로 FE/BE/DB가 직접 외부 API를 호출하지 않도록 외부 도구 실행을 전담합니다. Decision의 ActionDirective → sync_state.json → Tool Agent → AgentTeam 합류 순으로 흐릅니다.</p>"
            },
            {
              heading: "도구 유형 6종",
              html: "<table><tr><th>도구 유형</th><th>설명</th><th>주요 제약</th></tr><tr><td>API 호출</td><td>외부 REST / GraphQL 엔드포인트</td><td>인증 토큰 환경 변수 필수, Rate Limit 준수</td></tr><tr><td>코드 실행</td><td>스크립트 / 쿼리 자동화</td><td>샌드박스 환경 내 실행 필수</td></tr><tr><td>검색</td><td>외부 데이터·문서 검색</td><td>신뢰도 70% 이상 결과만 사용</td></tr><tr><td>파일 처리</td><td>파일 읽기·변환·저장</td><td>프로젝트 경계 밖 파일 접근 금지</td></tr><tr><td>브라우저 자동화</td><td>Playwright / 스크래핑</td><td>robots.txt 준수, 개인정보 수집 금지</td></tr><tr><td>메시지 발송</td><td>이메일·Slack·알림</td><td>Lead 명시적 승인 후 실행</td></tr></table>"
            },
            {
              heading: "도구 선택 기준 (우선순위)",
              html: "<table><tr><th>순위</th><th>기준</th><th>설명</th></tr><tr><td>1</td><td>신뢰도</td><td>공식 API > 비공식 엔드포인트 > 스크래핑</td></tr><tr><td>2</td><td>비용</td><td>무료 할당량 우선, 유료 API는 Lead 확인 필요</td></tr><tr><td>3</td><td>속도</td><td>타임아웃(30초) 이내 응답 가능 여부</td></tr><tr><td>4</td><td>안정성</td><td>최근 7일 uptime ≥ 99% 권장</td></tr></table>"
            },
            {
              heading: "재시도 & Fallback 정책",
              html: "<table><tr><th>도구 유형</th><th>최대 재시도</th><th>타임아웃</th></tr><tr><td>API 호출</td><td>2회</td><td>30초</td></tr><tr><td>코드 실행</td><td>1회</td><td>60초</td></tr><tr><td>검색</td><td>3회</td><td>15초</td></tr><tr><td>브라우저 자동화</td><td>2회</td><td>120초</td></tr><tr><td>파일 처리</td><td>1회</td><td>30초</td></tr></table><p>재시도 2회 초과 시 AgentTeam 에스컬레이션 (오류코드·Fallback 목록·권장 대안 포함).</p>"
            },
            {
              heading: "산출물 규격",
              html: "<pre>## Tool 실행 결과 — {task_id}\n- 도구명: [호출 도구 / API 엔드포인트]\n- 실행 시각: YYYY-MM-DD HH:mm\n- 소요 시간: {ms}ms\n\n### 입력 파라미터\n[요청 파라미터 요약 (민감정보 마스킹)]\n\n### 응답 결과 / 상태\n[성공 / 실패 + Fallback·에스컬레이션 여부]</pre>"
            }
          ],
          keyTerms: [
            { term: "Tool Agent", definition: "외부 API·코드 실행·검색 등 6종 도구를 전담 실행하는 AgentZone 에이전트. FE/BE/DB 대신 외부 호출을 맡는다" },
            { term: "Fallback 전략", definition: "도구 호출 실패 시 대체 엔드포인트·캐시 데이터를 활용하는 1회 복구 시도. 실패 시 AgentTeam 에스컬레이션" },
            { term: "샌드박스 환경", definition: "외부 영향을 격리하기 위해 코드 실행을 제한된 환경 내에서만 허용하는 보안 정책" },
            { term: "Rate Limit", definition: "API 서버가 허용하는 단위 시간당 최대 요청 횟수. 초과 시 즉시 중단 후 Lead 보고 의무" }
          ],
          quiz: [
            { q: "Tool Agent가 도구를 선택할 때 1순위 기준은?", options: ["비용", "속도", "신뢰도", "안정성"], answer: 2, explanation: "공식 API > 비공식 엔드포인트 > 스크래핑 순으로 신뢰도가 1순위 기준입니다." },
            { q: "브라우저 자동화 도구의 타임아웃 기준은?", options: ["15초", "30초", "60초", "120초"], answer: 3, explanation: "브라우저 자동화(Playwright)는 최대 타임아웃 120초, 재시도 2회까지 허용합니다." },
            { q: "Tool Agent가 재시도 2회 초과 실패 시 에스컬레이션 대상은?", options: ["Lead Planner 직접", "QA Reviewer", "AgentTeam", "Archivist"], answer: 2, explanation: "재시도 2회 초과 시 오류코드·시도한 Fallback 목록·권장 대안을 포함해 AgentTeam에 에스컬레이션합니다." },
            { q: "메시지 발송(이메일·Slack) 실행 조건은?", options: ["항상 자율 실행", "QA 통과 후 자동 실행", "Lead 명시적 승인 후 실행", "AgentTeam 합의 후 실행"], answer: 2, explanation: "메시지 발송은 외부 영향이 크므로 Lead의 명시적 승인이 있어야만 실행할 수 있습니다." }
          ]
        },

        // ── c10-2 InfraAgent 헌법 ────────────────────────────────────
        {
          id: "c10-2", title: "Infra Agent 헌법", duration: "15분",
          objective: "Infra Agent의 담당 영역 5종, CI/CD 파이프라인 단계, 즉시 자동 롤백 정책을 이해한다",
          sourceSection: "§infra-1",
          content: [
            {
              heading: "Infra Agent 위치 및 권한",
              html: "<p>Infra Agent는 <strong>AgentZone</strong> 소속으로 FE/BE/DB가 직접 환경 설정을 변경하지 않도록 인프라 환경 구성을 전담합니다. <strong>프로덕션 배포는 Lead 승인 후에만 실행</strong>합니다.</p>"
            },
            {
              heading: "담당 영역 5종",
              html: "<table><tr><th>영역</th><th>설명</th><th>핵심 제약</th></tr><tr><td>환경 구성</td><td>Docker / Docker Compose / 서버 설정</td><td>rules.md §0 프로젝트 레벨 기준</td></tr><tr><td>CI/CD</td><td>빌드 파이프라인 / 자동화 테스트 연동</td><td>배포 전 QA 통과 확인 필수</td></tr><tr><td>배포</td><td>스테이징 / 프로덕션 배포 실행</td><td>Lead 승인 후 프로덕션 배포</td></tr><tr><td>모니터링 설정</td><td>로그 수집 / 알림 설정</td><td>history.md와 연동</td></tr><tr><td>보안 설정</td><td>방화벽 / 네트워크 / 시크릿 관리</td><td>시크릿은 환경 변수 / Secret Manager만 허용</td></tr></table>"
            },
            {
              heading: "CI/CD 파이프라인 단계",
              html: "<pre>소스 변경 감지\n  → 빌드 (Docker 이미지)\n  → 단위 테스트 실행\n  → 이미지 레지스트리 푸시\n  → 스테이징 배포\n  → QA 자동 검증 (smoke test)\n  → [Lead 승인]\n  → 프로덕션 배포</pre><table><tr><th>실패 단계</th><th>처리 방법</th></tr><tr><td>빌드 실패</td><td>FE/BE/DB 담당자에 오류 전달, 파이프라인 중단</td></tr><tr><td>단위 테스트 실패</td><td>해당 에이전트에 task_err.md 발행</td></tr><tr><td>QA smoke test 실패</td><td>스테이징 롤백 + Lead 보고</td></tr><tr><td>프로덕션 배포 실패</td><td>즉시 자동 롤백 + Lead 에스컬레이션</td></tr></table>"
            },
            {
              heading: "롤백 정책 (즉시 자동)",
              html: "<pre>배포 실패 감지\n  ↓\n① 이전 버전 이미지로 즉시 복원\n② 롤백 완료 확인 (헬스체크)\n③ 오류 로그 + 롤백 사유 history.md 기록\n④ AgentTeam 에스컬레이션 (Lead 포함)\n⑤ Lead가 원인 분석 후 재배포 여부 결정</pre>"
            }
          ],
          keyTerms: [
            { term: "Infra Agent", definition: "서버 환경 구성·CI/CD 파이프라인·배포 자동화를 전담하는 AgentZone 에이전트" },
            { term: "CI/CD", definition: "소스 변경 감지부터 프로덕션 배포까지 자동화된 파이프라인. 빌드→테스트→스테이징→QA→승인→프로덕션 순서" },
            { term: "즉시 자동 롤백", definition: "프로덕션 배포 실패 또는 헬스체크 실패 시 이전 버전 이미지로 즉시 복원하는 자동 복구 정책" },
            { term: "smoke test", definition: "스테이징 배포 후 핵심 기능이 동작하는지 빠르게 확인하는 자동화 검증. 실패 시 프로덕션 배포 차단" }
          ],
          quiz: [
            { q: "프로덕션 배포 실행의 필수 조건은?", options: ["QA 통과만으로 가능", "AgentTeam 합의 후 자동 실행", "Lead 승인 수신 후 실행", "스테이징 성공 후 자동 실행"], answer: 2, explanation: "프로덕션 배포는 스테이징 QA 통과 후 반드시 Lead 승인을 받아야 실행됩니다." },
            { q: "CI/CD 파이프라인에서 스테이징 배포 직후 수행되는 단계는?", options: ["Lead 승인", "이미지 레지스트리 푸시", "QA 자동 검증 (smoke test)", "프로덕션 배포"], answer: 2, explanation: "스테이징 배포 → QA 자동 검증(smoke test) → Lead 승인 → 프로덕션 배포 순서입니다." },
            { q: "배포 실패 감지 시 Infra Agent의 첫 번째 행동은?", options: ["Lead Planner 즉시 보고", "이전 버전 이미지로 즉시 복원", "AgentTeam 에스컬레이션", "단위 테스트 재실행"], answer: 1, explanation: "배포 실패 즉시 ① 이전 버전으로 복원 → ② 헬스체크 → ③ 로그 기록 → ④ 에스컬레이션 순입니다." },
            { q: "Infra Agent가 사용하는 로그 포맷 접두사는?", options: ["[TOOL]", "[DEPLOY]", "[INFRA]", "[CI]"], answer: 2, explanation: "history.md에 [INFRA] 접두사로 환경 구성 시작·배포 완료·롤백 실행을 기록합니다." }
          ]
        },

        // ── c10-3 ToolAgent·InfraAgent 보안 정책 ────────────────────
        {
          id: "c10-3", title: "실행 에이전트 보안 정책", duration: "10분",
          objective: "ToolAgent·InfraAgent 공통 보안 정책(시크릿 관리·최소 권한·에스컬레이션 조건)을 이해한다",
          sourceSection: "§tool-2·infra-2",
          content: [
            {
              heading: "공통 보안 원칙 (rules.md §3 상속)",
              html: "<table><tr><th>항목</th><th>ToolAgent</th><th>InfraAgent</th></tr><tr><td>시크릿 관리</td><td>환경 변수 / Secret Manager. 코드 하드코딩 절대 금지</td><td>Docker 이미지·레포 키 하드코딩 절대 금지</td></tr><tr><td>최소 권한</td><td>API 스코프는 태스크에 필요한 최소 권한만 요청</td><td>서비스 간 통신 최소 권한, 불필요한 포트 노출 금지</td></tr><tr><td>입력 검증</td><td>외부 API 응답 데이터 반드시 유효성 검사 (신뢰 불가)</td><td>배포 전 컨테이너 이미지 취약점 스캔(Trivy 등)</td></tr><tr><td>개인정보</td><td>전송 데이터에 개인정보 포함 여부 확인 후 마스킹</td><td>스테이징 데이터는 익명화된 복사본 사용</td></tr></table>"
            },
            {
              heading: "에스컬레이션 조건 비교",
              html: "<table><tr><th>조건</th><th>에스컬레이션 대상</th><th>에이전트</th></tr><tr><td>재시도 2회 초과 후 최종 실패</td><td>AgentTeam (Lead 포함)</td><td>ToolAgent</td></tr><tr><td>API Rate Limit 초과</td><td>Lead Planner (즉시 중단)</td><td>ToolAgent</td></tr><tr><td>응답 데이터에 개인정보 감지</td><td>Lead Planner (즉시 중단 + 보고)</td><td>ToolAgent</td></tr><tr><td>유료 API 비용 10달러/일 초과</td><td>Lead Planner + 사람(Human)</td><td>ToolAgent</td></tr><tr><td>환경 구성 실패 2회 이상</td><td>Lead Planner</td><td>InfraAgent</td></tr><tr><td>프로덕션 롤백 발생</td><td>Lead Planner + 사람(Human)</td><td>InfraAgent</td></tr><tr><td>보안 취약점 발견</td><td>Lead Planner (즉시 배포 차단)</td><td>InfraAgent</td></tr><tr><td>디스크·메모리 80%↑ 초과</td><td>Lead Planner</td><td>InfraAgent</td></tr></table>"
            }
          ],
          keyTerms: [
            { term: "Secret Manager", definition: "시크릿(비밀키·토큰·패스워드)을 코드와 분리하여 안전하게 저장·제공하는 보안 인프라. AWS Secrets Manager, Vault 등" },
            { term: "최소 권한 원칙", definition: "에이전트·서비스가 태스크 수행에 필요한 최소한의 권한만 요청하는 보안 설계 원칙" },
            { term: "Trivy", definition: "컨테이너 이미지의 OS·라이브러리 취약점을 스캔하는 오픈소스 보안 도구. 배포 전 필수 실행" },
            { term: "개인정보 마스킹", definition: "ToolAgent가 외부 전송 데이터에 개인정보가 포함될 경우 마스킹 처리 후 전송하는 보안 의무" }
          ],
          quiz: [
            { q: "ToolAgent에서 유료 API 비용이 10달러/일 초과 시 에스컬레이션 대상은?", options: ["AgentTeam만", "Lead Planner만", "QA Reviewer", "Lead Planner + 사람(Human)"], answer: 3, explanation: "비용 임계값 초과는 Lead Planner와 Human 모두에게 보고해야 하는 에스컬레이션 조건입니다." },
            { q: "InfraAgent가 배포 전 컨테이너 이미지에 수행해야 하는 작업은?", options: ["성능 벤치마크", "취약점 스캔 (Trivy 등)", "코드 리뷰 요청", "Lead 승인 재확인"], answer: 1, explanation: "배포 전 Trivy 등의 도구로 컨테이너 이미지 취약점을 스캔하는 것이 보안 정책입니다." },
            { q: "ToolAgent에서 외부 API 응답 데이터에 개인정보가 감지된 경우 처리는?", options: ["데이터 그대로 사용", "Lead Planner 즉시 보고 후 중단", "AgentTeam에만 알림", "QA Reviewer 검토 요청"], answer: 1, explanation: "외부 API 응답에 개인정보 감지 시 Lead Planner에 즉시 중단 + 보고해야 합니다. 개인정보 포함 데이터는 마스킹 없이 사용 금지입니다." },
            { q: "InfraAgent와 ToolAgent 공통으로 금지된 보안 위반은?", options: ["환경 변수 사용", "Secret Manager 활용", "시크릿 코드 하드코딩", "Trivy 스캔 실행"], answer: 2, explanation: "비밀키·토큰·패스워드를 코드에 직접 하드코딩하는 것은 ToolAgent·InfraAgent 모두에서 절대 금지된 보안 위반입니다." }
          ]
        }
      ]
    },

    // ─── M11 AssetBox — 자산 관리 시스템 ──────────────────────────────
    {
      id: "m11", title: "AssetBox — 자산 관리 시스템", icon: "🗂️", classes: [

        // ── c11-1 AssetBox 통합 관리 ──────────────────────────────────
        {
          id: "c11-1", title: "AssetBox 구조와 접근 정책", duration: "10분",
          objective: "AssetBox의 역할·구조·자산 변경 금지 원칙·Lead Planner 조회 정책을 이해한다",
          sourceSection: "§asset-1",
          content: [
            {
              heading: "AssetBox란?",
              html: "<p>에이전트 실행 흐름과 <strong>비연결된 독립 자산 창고</strong>입니다. 프로젝트가 실행 중일 때도 자산 파일은 수정하지 않으며, Lead Planner가 프로젝트 시작 시 읽기 전용으로만 참조합니다.</p>"
            },
            {
              heading: "AssetBox 폴더 구조",
              html: "<pre>AssetBox/\n├── manager_assent.md          ← 통합 관리자 (본 파일)\n├── style/\n│   └── manager_design.md      ← 디자인 타입·반응형 레이아웃 관리\n└── infra/\n    ├── manager_baremetal_web_was_db.md   ← Bare Metal 3계층\n    ├── manager_firewall.md               ← 방화벽 정책\n    ├── manager_kubervm.md                ← Kubernetes VM\n    ├── manager_docker.md                 ← Docker 컨테이너\n    └── manager_vm.md                     ← 가상머신</pre>"
            },
            {
              heading: "자산 등록 정책 & 접근 권한",
              html: "<table><tr><th>자산 유형</th><th>등록 주체</th><th>버전 관리</th><th>접근 권한</th></tr><tr><td>디자인 레이아웃</td><td>FE Dev / Human</td><td>type01~typeN 폴더 단위</td><td>FE Dev, QA, Lead</td></tr><tr><td>Bare Metal</td><td>InfraAgent / Human</td><td>변경 이력 infra_log에 기록</td><td>InfraAgent, Lead</td></tr><tr><td>방화벽 정책</td><td>InfraAgent / Human</td><td>정책 버전 명시 필수</td><td>InfraAgent, Lead(읽기)</td></tr><tr><td>Kubernetes VM</td><td>InfraAgent</td><td>Helm chart 버전 연동</td><td>InfraAgent</td></tr><tr><td>Docker</td><td>InfraAgent</td><td>image tag 버전 고정</td><td>InfraAgent, BE Dev</td></tr><tr><td>가상머신</td><td>InfraAgent / Human</td><td>스냅샷 기준 버전 관리</td><td>InfraAgent</td></tr></table>"
            },
            {
              heading: "자산 변경 금지 원칙",
              html: "<pre>AssetBox 내 파일은 프로젝트 실행 중 수정 금지.\n변경이 필요한 경우:\n  ① Human이 변경 내용 결정\n  ② manager_assent.md에 변경 이력 기록\n  ③ 해당 manager_*.md 파일 업데이트\n  ④ 영향받는 프로젝트에 변경 사항 전파</pre>"
            }
          ],
          keyTerms: [
            { term: "AssetBox", definition: "에이전트 실행 흐름과 분리된 독립 자산 창고. StyleBox(디자인)·InfraBox(인프라) 포함. 실행 중 수정 금지" },
            { term: "manager_assent.md", definition: "AssetBox 전체 자산의 등록·버전·접근 정책을 통합 관리하는 마스터 파일" },
            { term: "읽기 전용 참조", definition: "Lead Planner가 프로젝트 개시 시 자산 박스를 조회만 하고 수정하지 않는 정책" },
            { term: "StyleBox", definition: "AssetBox 내 디자인 자산 전용 영역. manager_design.md가 디자인 타입·반응형 정책을 관리" },
            { term: "InfraBox", definition: "AssetBox 내 인프라 자산 전용 영역. 5종 관리자 파일(baremetal/firewall/kubervm/docker/vm) 보유" }
          ],
          quiz: [
            { q: "AssetBox 자산 파일을 수정하려면 누가 결정해야 하나요?", options: ["Lead Planner", "InfraAgent", "Human", "QA Reviewer"], answer: 2, explanation: "AssetBox 내 파일은 프로젝트 실행 중 수정 금지. 변경은 Human이 결정하고 manager_assent.md에 이력을 기록합니다." },
            { q: "Lead Planner가 AssetBox를 참조하는 시점은?", options: ["QA 검증 완료 후", "프로젝트 개시(부트스트랩) 시", "Evolution 제안 승인 후", "세션 종료 전"], answer: 1, explanation: "Lead Planner는 rules.md §4 부트스트랩 시 AssetBox를 읽기 전용으로 조회해 사용 가능한 자산 목록을 확인합니다." },
            { q: "AssetBox 자산 변경 시 반드시 기록해야 하는 파일은?", options: ["sync_state.json", "history.md", "manager_assent.md", "CLAUDE.md"], answer: 2, explanation: "AssetBox 변경 시 ① Human이 결정 → ② manager_assent.md에 변경 이력 기록 → ③ 해당 manager_*.md 업데이트 → ④ 영향 프로젝트에 전파 순서로 처리합니다." },
            { q: "Docker 이미지 접근 권한이 있는 에이전트 조합은?", options: ["FE Dev, QA, Lead", "InfraAgent, Lead", "InfraAgent, BE Dev", "QA Reviewer, InfraAgent"], answer: 2, explanation: "Docker 자산은 InfraAgent와 BE Dev만 접근 가능합니다. FE Dev는 디자인 레이아웃 자산에만 접근합니다." }
          ]
        },

        // ── c11-2 StyleBox — 디자인 타입 & 반응형 ─────────────────────
        {
          id: "c11-2", title: "StyleBox — 디자인 타입 & 반응형 4종", duration: "15분",
          objective: "StyleBox의 디자인 타입 레지스트리와 반응형 변형 4종의 기준값·CSS 전략을 이해한다",
          sourceSection: "§asset-2",
          content: [
            {
              heading: "디자인 타입 레지스트리",
              html: "<table><tr><th>타입 ID</th><th>폴더 경로</th><th>설명</th><th>상태</th></tr><tr><td>type01</td><td>com_desigin-type/type01/</td><td>기본 엔터프라이즈 레이아웃</td><td>✅ 활성</td></tr><tr><td>type02</td><td>com_desigin-type/type02/</td><td>대시보드 중심 레이아웃</td><td>🔲 예정</td></tr><tr><td>type03</td><td>com_desigin-type/type03/</td><td>랜딩페이지 레이아웃</td><td>🔲 예정</td></tr></table><p>신규 타입 추가 시 <strong>반드시 manager_design.md §1 레지스트리에 등록 후 사용</strong>합니다.</p>"
            },
            {
              heading: "반응형 변형 4종 기준",
              html: "<table><tr><th>변형</th><th>기준 해상도</th><th>그리드</th><th>내비게이션</th></tr><tr><td>PC형</td><td>1920×1080 / 1440×900</td><td>12 column</td><td>상단 수평 GNB</td></tr><tr><td>모바일형</td><td>375×812 / 414×896</td><td>4 column</td><td>하단 탭바 또는 햄버거</td></tr><tr><td>태블릿PC형</td><td>768×1024 / 1024×1366</td><td>8 column</td><td>상단 GNB 또는 사이드</td></tr><tr><td>통합 반응형</td><td>~767 / 768~1023 / 1024~</td><td>자동 전환</td><td>Mobile-First 전략</td></tr></table>"
            },
            {
              heading: "통합 반응형 CSS 전략",
              html: "<table><tr><th>항목</th><th>기준값</th></tr><tr><td>Breakpoint</td><td>모바일: ~767px / 태블릿: 768~1023px / PC: 1024px~</td></tr><tr><td>CSS 전략</td><td>Mobile-First (min-width 기준 확장)</td></tr><tr><td>레이아웃</td><td>Flexbox / CSS Grid 자동 전환</td></tr><tr><td>이미지</td><td>srcset 기반 반응형</td></tr></table>"
            },
            {
              heading: "type01 폴더 구성",
              html: "<pre>com_desigin-type/type01/\n├── web_layout/\n│   ├── pc/           ← PC형 레이아웃\n│   ├── mobile/       ← 모바일형 레이아웃\n│   ├── tablet/       ← 태블릿PC형 레이아웃\n│   └── responsive/   ← 통합 반응형\n├── styles/\n│   ├── colors.css    ← 색상 팔레트\n│   ├── typography.css← 폰트 시스템\n│   └── components.css← 공통 컴포넌트\n└── README.md</pre>"
            }
          ],
          keyTerms: [
            { term: "StyleBox", definition: "AssetBox 내 디자인 자산 전용 영역. manager_design.md가 디자인 타입·반응형 정책을 관리" },
            { term: "Mobile-First", definition: "모바일 화면을 기본으로 CSS를 작성하고 min-width 미디어 쿼리로 큰 화면을 확장하는 CSS 전략" },
            { term: "12 column 그리드", definition: "PC 레이아웃의 기본 격자 시스템. 콘텐츠를 12개 열로 나눠 유연한 배치 가능" },
            { term: "design_type", definition: "FE Dev가 태스크 수신 시 Lead Planner가 지정한 디자인 타입 ID. ex) type01" }
          ],
          quiz: [
            { q: "통합 반응형의 CSS 작성 전략은?", options: ["Desktop-First (max-width 기준)", "Mobile-First (min-width 기준)", "Tablet-First (768px 기준)", "각 해상도별 별도 파일"], answer: 1, explanation: "통합 반응형은 Mobile-First 전략으로 모바일 기본 스타일을 작성하고 min-width로 큰 화면을 확장합니다." },
            { q: "태블릿PC형의 기준 그리드 컬럼 수는?", options: ["4 column", "8 column", "10 column", "12 column"], answer: 1, explanation: "PC형 12컬럼, 태블릿PC형 8컬럼, 모바일형 4컬럼이 기준입니다." },
            { q: "새로운 디자인 타입 추가 시 반드시 먼저 해야 할 것은?", options: ["com_desigin-type 폴더 생성", "FE Dev에 태스크 배분", "manager_design.md §1 레지스트리에 등록", "Lead 승인 요청"], answer: 2, explanation: "신규 type 추가 시 manager_design.md §1 타입 레지스트리에 먼저 등록 후 사용해야 합니다." },
            { q: "모바일형 기준 해상도와 그리드 컬럼 수는?", options: ["1920×1080 / 12 column", "768×1024 / 8 column", "375×812 / 4 column", "1024×1366 / 10 column"], answer: 2, explanation: "모바일형 기준 해상도는 375×812 / 414×896이며, 그리드는 4 column입니다." }
          ]
        },

        // ── c11-3 InfraBox — 인프라 자산 5종 ─────────────────────────
        {
          id: "c11-3", title: "InfraBox — 인프라 자산 5종 관리자", duration: "15분",
          objective: "InfraBox의 5종 인프라 관리자 파일 역할과 방화벽 Default Deny 원칙, Docker 이미지 태그 정책을 이해한다",
          sourceSection: "§asset-3",
          content: [
            {
              heading: "InfraBox 5종 관리자",
              html: "<table><tr><th>관리자 파일</th><th>역할</th><th>핵심 정책</th></tr><tr><td>manager_baremetal_web_was_db.md</td><td>물리 서버 Web/WAS/DB 3계층 구성</td><td>레벨별 서버 수·HA 구성·OS 표준·백업 정책</td></tr><tr><td>manager_firewall.md</td><td>네트워크 방화벽 정책</td><td>Default Deny · DMZ/WAS/DB 존 분리</td></tr><tr><td>manager_kubervm.md</td><td>Kubernetes 클러스터 VM 구성</td><td>레벨별 노드 수·이미지 태그 고정·Helm Chart</td></tr><tr><td>manager_docker.md</td><td>Docker 이미지·컨테이너 정책</td><td>latest 태그 금지·Privileged 금지·레지스트리 정책</td></tr><tr><td>manager_vm.md</td><td>하이퍼바이저 기반 VM 관리</td><td>골든 이미지·스냅샷 최대 3개·VM 생명주기</td></tr></table>"
            },
            {
              heading: "방화벽 Default Deny 원칙",
              html: "<p><strong>Default Deny</strong>: 명시적으로 허용된 것만 통과, 나머지는 전부 차단하는 보안 원칙(화이트리스트 방식).</p><table><tr><th>존(Zone)</th><th>역할</th><th>허용 대상</th></tr><tr><td>DMZ</td><td>인터넷 ↔ 내부 완충 구간</td><td>외부에 노출되어야 하는 웹 서버</td></tr><tr><td>WAS 존</td><td>비즈니스 로직 처리</td><td>DMZ에서만 접근 허용</td></tr><tr><td>DB 존</td><td>데이터 저장</td><td>WAS 존에서만 접근 허용</td></tr></table>"
            },
            {
              heading: "Docker 핵심 금지 정책",
              html: "<ul><li>❌ <code>latest</code> 태그 사용 금지 → 반드시 명시적 버전 태그 사용 (예: <code>nginx:1.25.3</code>)</li><li>❌ <code>--privileged</code> 옵션 금지 → 컨테이너가 호스트 전체 권한을 갖는 것 차단</li><li>❌ 베이스 이미지 무검증 사용 금지 → Trivy 취약점 스캔 후 사용</li></ul>"
            },
            {
              heading: "VM 골든 이미지 & 스냅샷 정책",
              html: "<p><strong>골든 이미지</strong>: 새 서버(VM)를 만들 때 기준이 되는 표준 설정 스냅샷. 이 이미지로 복제해 동일한 서버를 빠르게 프로비저닝합니다.</p><p><strong>스냅샷 최대 3개</strong> 유지 — 초과 시 가장 오래된 스냅샷 자동 삭제. 스냅샷 이전 반드시 history.md에 기록.</p>"
            }
          ],
          keyTerms: [
            { term: "InfraBox", definition: "AssetBox 내 인프라 자산 전용 영역. Bare Metal·방화벽·Kubernetes·Docker·VM 5종 관리자 포함" },
            { term: "Default Deny", definition: "방화벽 정책에서 명시적으로 허용된 것만 통과시키고 나머지는 전부 차단하는 보안 원칙" },
            { term: "DMZ", definition: "인터넷과 내부 네트워크 사이의 완충 구간. 웹 서버를 여기에 배치해 내부망을 보호" },
            { term: "latest 태그 금지", definition: "Docker 이미지에서 latest 태그 사용을 금지하는 정책. 명시적 버전 태그로 재현성·안정성 보장" },
            { term: "골든 이미지", definition: "새 VM을 복제할 때 기준이 되는 표준 OS·소프트웨어 설정 스냅샷. 빠르고 일관된 서버 프로비저닝 가능" }
          ],
          quiz: [
            { q: "방화벽 Default Deny 원칙의 의미는?", options: ["모든 트래픽을 허용하고 위험한 것만 차단", "명시적으로 허용된 것만 통과, 나머지 전부 차단", "내부 트래픽은 무조건 허용", "관리자 IP는 모든 포트 허용"], answer: 1, explanation: "Default Deny는 화이트리스트 방식으로 명시적으로 허용된 트래픽만 통과시키고 나머지는 전부 차단합니다." },
            { q: "Docker 이미지 태그에서 금지된 태그는?", options: ["v1.0.0", "nginx:1.25.3", "latest", "stable-2026"], answer: 2, explanation: "latest 태그는 어떤 버전인지 특정할 수 없어 재현성이 깨집니다. 반드시 명시적 버전 태그를 사용해야 합니다." },
            { q: "VM 스냅샷은 최대 몇 개까지 유지하나요?", options: ["1개", "2개", "3개", "5개"], answer: 2, explanation: "VM 스냅샷은 최대 3개 유지. 초과 시 가장 오래된 스냅샷이 자동 삭제됩니다." },
            { q: "DB 존에 접근이 허용된 곳은?", options: ["인터넷(전체)", "DMZ 존", "WAS 존", "외부 모니터링"], answer: 2, explanation: "DB 존은 WAS 존에서만 접근 허용. DMZ → WAS → DB 순으로 계층 분리된 방화벽 구조입니다." }
          ]
        }
      ]
    }
  ];

  if (window.CURRICULUM && window.CURRICULUM.modules) {
    window.CURRICULUM.modules.push(...part3);
  }
})();
