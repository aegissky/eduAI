// AKC v4 교육 플랫폼 — 영한 용어 사전
// 이 파일만 수정하여 단어 추가/수정 가능
window.VOCAB_DATA = [

  // ══════════════════════════════════════════════════════════════
  // [1] 시스템 생명주기 — 프로젝트가 시작되고 끝나는 흐름
  // ══════════════════════════════════════════════════════════════
  {
    en: "Project Activation",
    ko: "프로젝트 활성화",
    desc: "Start 버튼을 누른 순간처럼, 시스템이 처음 켜지며 Lead Planner가 깨어나 모든 에이전트를 준비시킵니다.",
    cat: "lifecycle"
  },
  {
    en: "Session Start",
    ko: "세션 시작 (프로젝트 개시)",
    desc: "대화나 작업의 첫 출발점입니다. Lead가 활성화되고 rules.md 같은 초기 설정 파일들을 불러옵니다.",
    cat: "lifecycle"
  },
  {
    en: "Session End",
    ko: "세션 종료",
    desc: "모든 작업이 마무리된 상태입니다. Archivist가 이번 세션의 지식을 정리해 저장하고 시스템을 안전하게 닫습니다.",
    cat: "lifecycle"
  },
  {
    en: "Queue Empty Standby",
    ko: "큐 비어있음 → 대기",
    desc: "할 일 목록(태스크 큐)이 비어 있을 때 시스템이 다음 작업을 기다리는 상태로 전환됩니다. 새 작업이 들어오면 즉시 재개됩니다.",
    cat: "lifecycle"
  },
  {
    en: "Asset Finalization",
    ko: "자산화 종료",
    desc: "이번 작업에서 만들어진 모든 결과물이 지식 창고에 저장 완료되어 공식적으로 프로젝트를 닫는 단계입니다.",
    cat: "lifecycle"
  },

  // ══════════════════════════════════════════════════════════════
  // [2] Lead & 계획 — 작업 설계와 배분
  // ══════════════════════════════════════════════════════════════
  {
    en: "SDD Specification",
    ko: "SDD 명세 작성",
    desc: "건축 설계도를 그리듯, Lead가 '무엇을 어떻게 만들 것인지'를 문서(SDD)로 정의합니다. 모든 에이전트가 이 문서를 기준으로 움직입니다.",
    cat: "planning"
  },
  {
    en: "SDD",
    ko: "시스템 설계 문서 (System Design Document)",
    desc: "프로젝트의 청사진입니다. 기능 목록·구조·제약 조건이 담겨 있어 FE·BE·DB 모두 이 문서를 보고 일합니다.",
    cat: "planning"
  },
  {
    en: "Project Level Check",
    ko: "레벨 확인",
    desc: "프로젝트를 시작할 때 '이 프로젝트가 어느 규모인지' 확인하는 단계입니다. starter·dynamic·enterprise 등 레벨에 따라 팀 크기와 검증 강도가 달라집니다.",
    cat: "planning"
  },
  {
    en: "Project Level",
    ko: "프로젝트 레벨",
    desc: "시스템 운영 방식을 결정하는 난이도 설정입니다. starter(소규모) / dynamic(중간) / enterprise(대규모·기본값) 중 선택하며, 팀 구성과 QA 기준이 바뀝니다.",
    cat: "planning"
  },
  {
    en: "Task Ingestion",
    ko: "태스크 인입",
    desc: "Lead나 Decision이 '이 작업을 지금 실행하라'며 작업 지시서를 이벤트 버스(sync_state.json)에 밀어 넣는 행위입니다.",
    cat: "planning"
  },
  {
    en: "Intelligence Retrieval",
    ko: "지능 탐색",
    desc: "과거에 비슷한 프로젝트를 어떻게 했는지 지식 창고(KB)에서 검색하는 행위입니다. 바퀴를 다시 발명하지 않기 위한 단계입니다.",
    cat: "planning"
  },
  {
    en: "DAG",
    ko: "방향 비순환 그래프 (Directed Acyclic Graph)",
    desc: "작업 순서를 화살표로 연결한 지도입니다. 순환(A→B→A)이 없으므로 무한 루프 없이 올바른 순서로 일을 처리할 수 있습니다.",
    cat: "planning"
  },

  // ══════════════════════════════════════════════════════════════
  // [3] 인지 파이프라인 — 보고·이해·계획·결정
  // ══════════════════════════════════════════════════════════════
  {
    en: "Cognitive Activation",
    ko: "인식 요청",
    desc: "Lead가 '지금 상황을 파악해줘'라고 Perception에게 지시하는 신호입니다. 인지 파이프라인의 첫 번째 버튼을 누르는 것과 같습니다.",
    cat: "cognitive"
  },
  {
    en: "Context Modeling",
    ko: "컨텍스트 모델링",
    desc: "Perception이 수집한 데이터를 'WorldModel이 이해할 수 있는 지도'로 변환하는 과정입니다. 현재 상황의 사진을 찍는 것과 같습니다.",
    cat: "cognitive"
  },
  {
    en: "PerceptionPayload",
    ko: "관측 페이로드",
    desc: "Perception이 수집한 데이터를 담은 표준 택배 상자입니다. 데이터 출처, 원본 내용, 품질 상태(깨끗함/부분적/노이즈/실패)가 함께 포함됩니다.",
    cat: "cognitive"
  },
  {
    en: "PerceptionPayload Transfer",
    ko: "페이로드 전달",
    desc: "Perception이 수집한 데이터 상자를 WorldModel에게 전달합니다. 이 상자를 받아야 WorldModel이 세계 지도를 그릴 수 있습니다.",
    cat: "cognitive"
  },
  {
    en: "Goal Planning",
    ko: "목표 계획 수립",
    desc: "WorldModel이 파악한 현재 상황을 바탕으로 Planner가 '무엇을 어떤 순서로 할지' 실행 계획을 세우는 단계입니다.",
    cat: "cognitive"
  },
  {
    en: "WorldState",
    ko: "세계 상태",
    desc: "WorldModel이 만드는 현재 상황의 구조화된 스냅샷입니다. '지금 어떤 요소가 있고, 서로 어떻게 연결되어 있으며, 얼마나 불확실한가'를 숫자로 표현합니다.",
    cat: "cognitive"
  },
  {
    en: "WorldState Handoff",
    ko: "WorldState 전달",
    desc: "WorldModel이 완성한 세계 지도를 Planner에게 넘겨주는 과정입니다. Planner는 이 지도를 보고 최적의 경로를 계획합니다.",
    cat: "cognitive"
  },
  {
    en: "Strategic Decision",
    ko: "실행 결정",
    desc: "Planner가 제출한 여러 계획안 중에서 Decision이 '이 계획으로 진행'을 선택하는 순간입니다. 불이익보다 이익이 크고 위험이 낮은 안을 선택합니다.",
    cat: "cognitive"
  },
  {
    en: "ExecutionPlan",
    ko: "실행 계획",
    desc: "Planner가 작성한 작업 분해 결과물입니다. '무슨 작업을 어떤 순서로, 어떤 에이전트가 실행할지, 실패하면 어떤 대안이 있는지'가 담겨 있습니다.",
    cat: "cognitive"
  },
  {
    en: "ExecutionPlan Submission",
    ko: "계획 제출",
    desc: "Planner가 완성한 실행 계획을 Decision에게 심사받으러 제출하는 단계입니다. 승인받아야 실제 작업이 시작됩니다.",
    cat: "cognitive"
  },
  {
    en: "ActionDirective",
    ko: "행동 지시",
    desc: "Decision이 발행하는 '실행 허가증'입니다. APPROVE(진행)·REJECT(거부)·PAUSE(보류) 중 하나와 함께 위험 점수가 기록됩니다.",
    cat: "cognitive"
  },
  {
    en: "RBET Framework",
    ko: "RBET 프레임",
    desc: "Decision이 계획을 평가하는 4가지 기준입니다. Risk(위험)·Benefit(이익)·Efficiency(효율)·Trust(신뢰도) 점수를 종합해 승인 여부를 결정합니다.",
    cat: "cognitive"
  },
  {
    en: "Execution Delegation",
    ko: "실행 위임",
    desc: "Decision이 승인된 지시서를 FE·BE·DB·ToolAgent 등에게 나눠주어 실제 작업을 시작하게 하는 단계입니다.",
    cat: "cognitive"
  },
  {
    en: "SAI Retrieval",
    ko: "SAI 탐색",
    desc: "Perception이 KB(Global SkillNet)에서 명세화된 과거 지식을 탐색하는 행위입니다. 단순 키워드 검색이 아니라, 현재 요구사항의 맥락(도메인·기술스택·제약조건)을 이해하고 가장 관련성 높은 스킬·노하우·오류 패턴을 찾아 현재 상황 파악에 활용합니다.",
    cat: "cognitive"
  },
  {
    en: "Constraint Reference",
    ko: "제약 참조",
    desc: "WorldModel이 세계 지도를 그릴 때 rules.md의 '해서는 안 되는 것들'을 확인하며 경계를 설정하는 행위입니다.",
    cat: "cognitive"
  },
  {
    en: "Re-observation Request",
    ko: "재관측 요청",
    desc: "WorldModel이 '데이터가 너무 불확실해서 더 정보가 필요해'라고 판단할 때 Perception에게 데이터를 더 수집해달라고 요청합니다. 최대 2회 가능합니다.",
    cat: "cognitive"
  },
  {
    en: "Replan Request",
    ko: "재계획 요청",
    desc: "Decision이 계획을 검토한 후 '이 계획은 위험해서 다시 짜야 해'라고 거부하면, Planner가 수정된 계획을 새로 제출해야 합니다. 최대 3회 가능합니다.",
    cat: "cognitive"
  },

  // ══════════════════════════════════════════════════════════════
  // [4] 실행 에이전트 — FE / BE / DB / Tool / Infra
  // ══════════════════════════════════════════════════════════════
  {
    en: "UI Component Tasking",
    ko: "UI 컴포넌트 개발 배분",
    desc: "이벤트 버스에서 'FE야, 이 화면을 만들어라'는 작업 지시서를 꺼내 FE 에이전트에게 전달합니다.",
    cat: "execution"
  },
  {
    en: "Core Logic Tasking",
    ko: "코어 로직 구현 배분",
    desc: "이벤트 버스에서 'BE야, 이 기능의 처리 로직을 구현해라'는 작업 지시서를 꺼내 BE 에이전트에게 전달합니다.",
    cat: "execution"
  },
  {
    en: "Schema Design Tasking",
    ko: "스키마 설계 배분",
    desc: "이벤트 버스에서 'DB야, 이 데이터를 어떻게 저장할지 구조를 설계해라'는 작업 지시서를 꺼내 DB 에이전트에게 전달합니다.",
    cat: "execution"
  },
  {
    en: "UI Constraint Compliance",
    ko: "제약 준수 (FE)",
    desc: "FE가 화면을 만들 때 rules.md에 정해진 디자인 규칙(색상·레이아웃·접근성 기준 등)을 지키고 있는지 대조하는 행위입니다.",
    cat: "execution"
  },
  {
    en: "Logic Validation",
    ko: "로직 검증 (BE)",
    desc: "BE가 기능을 구현할 때, 해당 기능의 이벤트가 발생하면 처리되는 로직이 SDD에 사전 계획된 비즈니스 규칙과 일치하는지 실시간으로 검증합니다.",
    cat: "execution"
  },
  {
    en: "Schema Specification Reference",
    ko: "명세 참조 (DB)",
    desc: "DB가 테이블을 설계할 때 rules.md에 미리 정의된 데이터 규칙(컬럼 명명 규칙·인덱스 정책·무결성 조건 등)을 참조하는 행위입니다.",
    cat: "execution"
  },
  {
    en: "Schema Dependency Propagation",
    ko: "스키마 의존성 전파",
    desc: "DB에서 테이블 구조가 변경되면, 그 변화를 BE에게 즉시 알려 API나 로직도 맞춰 수정하게 합니다. 한 곳 변경이 연쇄 적용되는 원리입니다.",
    cat: "execution"
  },
  {
    en: "API Interface Provision",
    ko: "API 인터페이스 제공",
    desc: "BE가 만든 기능을 FE가 사용할 수 있도록 '이 주소로 요청하면 이런 데이터를 돌려준다'는 API 명세를 제공합니다.",
    cat: "execution"
  },
  {
    en: "DDL",
    ko: "데이터 정의 언어 (Data Definition Language)",
    desc: "데이터베이스의 테이블·컬럼·인덱스를 생성·수정·삭제하는 SQL 명령어 집합입니다. DB 에이전트가 작성하는 핵심 산출물입니다.",
    cat: "execution"
  },
  {
    en: "DDL Logging",
    ko: "DDL 로깅",
    desc: "DB 에이전트가 수행한 테이블 생성·변경·삭제 이력을 history.md에 시간순으로 기록합니다. 문제 발생 시 원인 추적에 사용됩니다.",
    cat: "execution"
  },

  // ══════════════════════════════════════════════════════════════
  // [5] 협업 & 태스크 제출
  // ══════════════════════════════════════════════════════════════
  {
    en: "Parallel Collaboration",
    ko: "병렬 협업",
    desc: "FE·BE·DB가 각자 작업하면서도 AgentTeam이라는 가상 회의실에서 수시로 결과를 공유해 통합 문제를 미리 방지합니다.",
    cat: "collaboration"
  },
  {
    en: "Logic Synchronization",
    ko: "동기화 (BE ↔ AgentTeam)",
    desc: "BE가 구현 중인 로직 상태를 AgentTeam과 실시간으로 맞춰가며, FE나 DB와 충돌이 생기지 않도록 조율합니다.",
    cat: "collaboration"
  },
  {
    en: "Data Integrity Sync",
    ko: "데이터 무결성 동기화",
    desc: "DB가 설계한 데이터 구조가 AgentTeam이 요구하는 조건과 일치하는지 확인합니다. 데이터가 오염되거나 빠지는 일이 없도록 보장합니다.",
    cat: "collaboration"
  },
  {
    en: "Consensus Completion Report",
    ko: "합의 완료 보고",
    desc: "AgentTeam 내 모든 에이전트가 '우리 작업이 서로 잘 맞는다'고 합의를 마쳤음을 history.md에 공식 기록합니다.",
    cat: "collaboration"
  },
  {
    en: "Package Submission",
    ko: "작업 패키지 제출",
    desc: "FE·BE·DB가 만든 결과물을 한 묶음(패키지)으로 합쳐 QA에게 '검토해 주세요'라고 제출하는 단계입니다.",
    cat: "collaboration"
  },
  {
    en: "Artifact Submission",
    ko: "산출물 제출",
    desc: "FE는 화면(UI), BE는 API, DB는 DDL을 각각의 task_ok.md 파일로 포장해 QA 검수 라인으로 보내는 행위입니다.",
    cat: "collaboration"
  },

  // ══════════════════════════════════════════════════════════════
  // [6] QA & 검증
  // ══════════════════════════════════════════════════════════════
  {
    en: "Trinity Validation",
    ko: "Trinity 검증",
    desc: "QA가 UI(시각)·API(로직)·DB(데이터) 세 가지를 동시에 검사하는 방식입니다. 세 가지가 모두 일관되어야만 최종 통과됩니다.",
    cat: "qa"
  },
  {
    en: "Multi-faceted Validation",
    ko: "다면 검증",
    desc: "QA가 제출된 결과물을 시각적·로직적·데이터적 세 관점에서 동시에 검수하는 방식입니다.",
    cat: "qa"
  },
  {
    en: "Visual Validation",
    ko: "시각 검증 (FE)",
    desc: "QA가 FE가 만든 화면이 SDD 설계서의 UI 기준(레이아웃·색상·동작)을 만족하는지 눈으로 확인하는 검사입니다.",
    cat: "qa"
  },
  {
    en: "Logic Validation (QA)",
    ko: "로직 검증 (BE)",
    desc: "QA가 BE가 구현한 API·비즈니스 로직이 이벤트 발생 시 SDD에 계획된 대로 동작하는지 검증합니다.",
    cat: "qa"
  },
  {
    en: "Data Validation",
    ko: "데이터 검증 (DB)",
    desc: "QA가 DB의 테이블 구조와 데이터 흐름이 명세와 일치하며 무결성이 깨지지 않았는지 확인합니다.",
    cat: "qa"
  },
  {
    en: "QA Policy Reference",
    ko: "QA 정책 참조",
    desc: "QA Reviewer가 '어떤 기준으로 통과/반려를 결정할지' rules.md의 헌법 정책과 검증 가이드라인을 확인하는 행위입니다.",
    cat: "qa"
  },
  {
    en: "QA Skill Retrieval",
    ko: "QA 스킬 탐색",
    desc: "QA가 특정 검증을 수행하기 위해 Global SkillNet에서 '이전에 만들어둔 검증 도구나 방법'을 꺼내 활용하는 행위입니다.",
    cat: "qa"
  },
  {
    en: "QA Result Distribution",
    ko: "QA 결과 배분",
    desc: "QA가 검토를 마친 후 'FE는 이 부분 수정, BE는 이 부분 통과' 식으로 각 에이전트별 결과를 AgentTeam을 통해 전달합니다.",
    cat: "qa"
  },
  {
    en: "Trinity Inconsistency",
    ko: "Trinity 불일치",
    desc: "QA가 FE·BE·DB 결과물 간에 서로 맞지 않는 부분을 발견한 상태입니다. 예: BE API 스펙과 FE 호출 방식이 다른 경우.",
    cat: "qa"
  },
  {
    en: "QA Feedback Delivery",
    ko: "QA 피드백 전달",
    desc: "AgentTeam이 QA 결과를 각 에이전트에게 전달합니다. 통과된 에이전트는 완료 처리, 문제가 있는 에이전트는 재작업 지시를 받습니다.",
    cat: "qa"
  },

  // ══════════════════════════════════════════════════════════════
  // [7] 오류 처리 & 재작업
  // ══════════════════════════════════════════════════════════════
  {
    en: "task_err.md",
    ko: "반려 보고서",
    desc: "QA가 검증에 실패했을 때 발행하는 오류 보고서입니다. 어느 에이전트가 무슨 이유로 반려됐고 무엇을 고쳐야 하는지가 명시됩니다.",
    cat: "error"
  },
  {
    en: "Rework Request",
    ko: "보완 재작업 요청",
    desc: "QA에서 반려된 task_err.md를 AgentTeam이 수신해, 문제 있는 에이전트에게 '이 부분을 다시 만들어라'고 지시하는 단계입니다.",
    cat: "error"
  },
  {
    en: "FE Fix Request",
    ko: "FE 수정 요청",
    desc: "QA가 화면에서 문제를 발견했을 때 task_err.md를 통해 FE에게 '이 UI를 다시 고쳐라'는 피드백을 보내는 행위입니다.",
    cat: "error"
  },
  {
    en: "BE Fix Request",
    ko: "BE 수정 요청",
    desc: "QA가 API나 로직에서 문제를 발견했을 때 task_err.md를 통해 BE에게 '이 기능을 다시 고쳐라'는 피드백을 보내는 행위입니다.",
    cat: "error"
  },
  {
    en: "DB Fix Request",
    ko: "DB 수정 요청",
    desc: "QA가 스키마나 DDL에서 문제를 발견했을 때 task_err.md를 통해 DB에게 '이 구조를 다시 수정해라'는 피드백을 보내는 행위입니다.",
    cat: "error"
  },
  {
    en: "Re-execution Request",
    ko: "재실행 요청",
    desc: "Reflection이 실행 결과를 검증한 후 '이 작업은 실패했으니 다시 실행해야 한다'고 Decision에게 요청하는 재진입 관계입니다. 최대 2회 가능합니다.",
    cat: "error"
  },

  // ══════════════════════════════════════════════════════════════
  // [8] 메모리 & 기록
  // ══════════════════════════════════════════════════════════════
  {
    en: "sync_state.json",
    ko: "이벤트 버스 (실시간 작업 채널)",
    desc: "에이전트들이 '지금 어떤 작업을 누가 하고 있는지'를 실시간으로 공유하는 게시판입니다. 새 작업이 여기에 올라오면 에이전트가 가져가 처리합니다.",
    cat: "memory"
  },
  {
    en: "history.md",
    ko: "작업 CCTV (실시간 로그)",
    desc: "에이전트의 모든 생각과 행동을 시간순으로 기록하는 블랙박스입니다. 문제 발생 시 '언제 무엇이 잘못됐는지' 추적할 수 있습니다.",
    cat: "memory"
  },
  {
    en: "Global SkillNet",
    ko: "전역 스킬 네트워크 (장기 지식 창고)",
    desc: "과거의 성공 사례·도메인 지식·검증된 스킬이 쌓여 있는 장기 기억 저장소입니다. 에이전트들이 필요할 때 꺼내 쓰는 회사 지식 라이브러리와 같습니다.",
    cat: "memory"
  },
  {
    en: "rules.md",
    ko: "시스템 헌법",
    desc: "모든 에이전트가 반드시 따라야 하는 최고 규칙서입니다. '해도 되는 것'과 '절대 하면 안 되는 것'이 명시되어 있으며, 충돌 시 이 파일이 우선합니다.",
    cat: "memory"
  },
  {
    en: "constitutionRegistry",
    ko: "헌법 등록부",
    desc: "헌법 파일들의 변경 여부를 감시하는 관리 대장입니다. 각 파일의 체크섬(지문)을 기록해 두고 파일이 바뀌면 즉시 감지합니다.",
    cat: "memory"
  },
  {
    en: "Hot Memory (STM)",
    ko: "핫 메모리 (단기 기억)",
    desc: "지금 진행 중인 작업과 실시간 상태를 임시로 저장하는 공간입니다. 세션이 끝나면 중요한 내용은 Cold Memory로 옮겨집니다.",
    cat: "memory"
  },
  {
    en: "Cold Memory (LTM)",
    ko: "콜드 메모리 (장기 기억)",
    desc: "헌법·지식 창고처럼 세션이 끝나도 유지되는 영구 저장 공간입니다. 에이전트들의 기반 지식과 정책이 여기에 보관됩니다.",
    cat: "memory"
  },
  {
    en: "Real-time Thought Logging",
    ko: "실시간 사고 기록",
    desc: "에이전트가 작업하는 동안 무슨 생각을 하며 어떤 결정을 내렸는지 history.md에 즉시 기록합니다. 디버깅의 핵심 근거가 됩니다.",
    cat: "memory"
  },
  {
    en: "State Transition Logging",
    ko: "상태 전이 기록",
    desc: "BE 에이전트가 작업 상태가 '대기→진행→완료'로 바뀔 때마다 history.md에 기록합니다. 어디서 막혔는지 파악하는 데 사용됩니다.",
    cat: "memory"
  },
  {
    en: "Next Task Request",
    ko: "다음 태스크 요청",
    desc: "QA를 모두 통과하면 AgentTeam이 sync_state.json에 '이제 다음 작업이 있으면 알려줘'라고 요청하는 신호를 보냅니다.",
    cat: "memory"
  },

  // ══════════════════════════════════════════════════════════════
  // [9] 자기 진화 — 반성·학습·진화
  // ══════════════════════════════════════════════════════════════
  {
    en: "Quality Reflection Trigger",
    ko: "품질 반성 트리거",
    desc: "QA가 검증을 마친 후(통과든 실패든) 결과를 Reflection에게 보내 '이번 작업에서 무엇을 배울 수 있는가'를 분석하게 합니다.",
    cat: "evolution"
  },
  {
    en: "ReflectionReport",
    ko: "반성 보고서",
    desc: "Reflection이 작성하는 이번 작업의 사후 분석 보고서입니다. '무엇이 잘 됐고, 무엇이 왜 실패했으며, 다음엔 어떻게 해야 하는가'가 담겨 있습니다.",
    cat: "evolution"
  },
  {
    en: "Pattern Extraction",
    ko: "패턴 추출",
    desc: "Reflection이 분석한 결과에서 '이 상황에선 항상 이런 문제가 생긴다'는 반복 패턴을 뽑아내 LearningEng에 전달합니다.",
    cat: "evolution"
  },
  {
    en: "LearningRecord Transfer",
    ko: "학습 데이터 전달",
    desc: "Reflection이 추출한 성공·실패 패턴을 정리해 LearningEng에게 '이 데이터로 학습해라'며 전달하는 단계입니다.",
    cat: "evolution"
  },
  {
    en: "KnowledgeSummary",
    ko: "지식 요약",
    desc: "LearningEng이 일정 주기로 작성하는 학습 누적 보고서입니다. '어떤 패턴이 얼마나 검증됐고, 시스템을 어떻게 개선하면 좋은가'가 담겨 있습니다.",
    cat: "evolution"
  },
  {
    en: "KnowledgeSummary Dispatch",
    ko: "지식 요약 전달",
    desc: "LearningEng이 완성한 지식 요약 보고서를 Evolution에게 전달해 '이 내용을 바탕으로 시스템을 개선해라'고 지시합니다.",
    cat: "evolution"
  },
  {
    en: "Strategy Evolution",
    ko: "전략 개선",
    desc: "LearningEng에서 받은 학습 패턴을 기반으로 Evolution이 기존 전략이나 작업 흐름을 더 효율적으로 업그레이드하는 과정입니다.",
    cat: "evolution"
  },
  {
    en: "EvolutionProposal",
    ko: "진화 제안서",
    desc: "Evolution이 Lead에게 제출하는 '시스템 개선 건의서'입니다. 어떤 규칙을 어떻게 바꿀지, 위험도는 어느 수준인지, 영향받는 파일 목록이 포함됩니다.",
    cat: "evolution"
  },
  {
    en: "EvolutionProposal Submission",
    ko: "진화 제안 제출",
    desc: "Evolution이 작성한 헌법 개정 초안을 Lead에게 제출해 사람의 검토와 승인을 받는 절차를 시작합니다.",
    cat: "evolution"
  },
  {
    en: "Architectural Feedback",
    ko: "아키텍처 피드백",
    desc: "Evolution이 시스템 전체 구조 개선 제안을 Lead에게 전달해, 다음 프로젝트부터 더 좋은 방식으로 운영되도록 루프를 완성합니다.",
    cat: "evolution"
  },
  {
    en: "Knowledge Update",
    ko: "지식 업데이트",
    desc: "LearningEng이 새로 학습한 내용을 Global SkillNet(KB)에 추가해, 다음 번에 에이전트들이 더 나은 결정을 내릴 수 있도록 지식을 쌓습니다.",
    cat: "evolution"
  },
  {
    en: "loopGuard",
    ko: "루프 가드",
    desc: "시스템이 같은 작업을 무한 반복하지 못하도록 막는 안전장치입니다. 세션 재진입 10회, LLM 턴 50회, 작업 시간 120분을 초과하면 강제로 사람에게 보고합니다.",
    cat: "evolution"
  },
  {
    en: "5-Why Analysis",
    ko: "5-Why 근본 원인 분석",
    desc: "'왜 실패했는가?'를 최대 5번 반복해서 물어보며 표면적 증상이 아닌 진짜 원인을 찾아내는 분석 기법입니다.",
    cat: "evolution"
  },

  // ══════════════════════════════════════════════════════════════
  // [10] Archivist & 지식 자산화
  // ══════════════════════════════════════════════════════════════
  {
    en: "Final Context Approval",
    ko: "최종 컨텍스트 승인",
    desc: "QA가 모든 검증을 통과시킨 후 '이번 작업 결과를 공식 지식으로 등록해도 된다'고 Archivist에게 허가를 내리는 단계입니다.",
    cat: "archive"
  },
  {
    en: "Semantic Compression",
    ko: "시맨틱 압축",
    desc: "Archivist가 수백 줄의 작업 로그를 '핵심 의미 단위'로 압축하는 과정입니다. 용량은 줄이되 중요한 맥락은 그대로 유지합니다.",
    cat: "archive"
  },
  {
    en: "Domain SAI Indexing",
    ko: "도메인 SAI화",
    desc: "Archivist가 프로젝트에서 축적된 경험·패턴·해결책을 '명세 주도형 AI가 자율적으로 활용할 수 있는 구조화된 지식'으로 변환하여 KB에 등록하는 과정입니다. 변환 결과물: ① SKILL.md(에이전트 행동 명세) ② knowhow(verified/canonical 등급 지식) ③ error antibody(오류 재발 방지 패턴). 이를 통해 다음 프로젝트에서 동일 문제를 구조적으로 예방합니다.",
    cat: "archive"
  },
  {
    en: "SAI",
    ko: "명세 주도형 AI 오케스트레이션 (Specification-driven AI)",
    desc: "단순히 AI에 질문을 던지는 것을 넘어, 시스템의 명세(Spec)가 AI 에이전트의 구동 기반이 되도록 구조화하는 아키텍처 설계 과정입니다. AI가 시스템 상태를 인지하여 스스로 최적화할 수 있게 만드는 것이 핵심입니다. 구체적으로: ① 헌법(rules.md)·SDD·스킬이 에이전트 행동의 명세가 되고 ② sync_state.json이 시스템 상태를 실시간 반영하며 ③ 에이전트가 이 명세와 상태를 읽고 자율적으로 판단·실행합니다.",
    cat: "archive"
  },
  {
    en: "SAI Knowledge Transfer",
    ko: "SAI 학습 인계",
    desc: "Archivist가 명세화·구조화한 지식을 LearningEng에 전달하는 과정입니다. LearningEng은 이를 5단계 성숙도(experience→canonical)로 분류하고, 3개 이상 프로젝트에서 검증된 패턴은 canonical로 승격시켜 전역 표준 지식으로 확정합니다.",
    cat: "archive"
  },

  // ══════════════════════════════════════════════════════════════
  // [11] 자산 박스 — 인프라 & 디자인 자산
  // ══════════════════════════════════════════════════════════════
  {
    en: "AssetBox",
    ko: "자산 박스",
    desc: "실행 흐름과 분리된 '회사 자산 창고'입니다. 디자인 템플릿(StyleBox)과 인프라 설정(InfraBox)이 보관되어 Lead가 프로젝트 시작 시 참조합니다.",
    cat: "asset"
  },
  {
    en: "StyleBox",
    ko: "스타일 박스 (디자인 자산)",
    desc: "UI 레이아웃 템플릿을 보관하는 공간입니다. PC형·모바일형·태블릿형·반응형 4종류의 디자인 타입이 준비되어 있어 FE가 바로 가져다 씁니다.",
    cat: "asset"
  },
  {
    en: "InfraBox",
    ko: "인프라 박스",
    desc: "서버·네트워크·컨테이너 구성 정책을 보관하는 공간입니다. Bare Metal·방화벽·Kubernetes·Docker·VM 5종의 설정 파일이 있습니다.",
    cat: "asset"
  },
  {
    en: "Bare Metal",
    ko: "베어메탈 (물리 서버 직접 구성)",
    desc: "가상화 없이 실제 물리 서버에 Web·WAS·DB를 직접 설치하는 방식입니다. 성능이 가장 좋지만 관리가 복잡합니다.",
    cat: "asset"
  },
  {
    en: "Kubernetes",
    ko: "쿠버네티스 (컨테이너 오케스트레이션)",
    desc: "여러 컨테이너를 자동으로 배포·복구·확장 관리하는 플랫폼입니다. 서비스가 죽으면 자동으로 재시작하고, 트래픽이 늘면 자동으로 늘어납니다.",
    cat: "asset"
  },
  {
    en: "Docker",
    ko: "도커 (컨테이너 실행 환경)",
    desc: "애플리케이션과 실행 환경을 통째로 포장(이미지)해서 어디서든 동일하게 실행되게 하는 기술입니다. '내 컴퓨터에선 되는데' 문제를 해결합니다.",
    cat: "asset"
  },
  {
    en: "Golden Image",
    ko: "골든 이미지 (VM 기준 템플릿)",
    desc: "새 서버(VM)를 만들 때 기준이 되는 표준 설정 스냅샷입니다. 이 이미지로 찍어내면 동일한 설정의 서버를 빠르게 복제할 수 있습니다.",
    cat: "asset"
  },
  {
    en: "Default Deny",
    ko: "기본 차단 원칙",
    desc: "방화벽 정책에서 '명시적으로 허용된 것만 통과, 나머지는 전부 차단'하는 보안 원칙입니다. 화이트리스트 방식이라고도 합니다.",
    cat: "asset"
  },
  {
    en: "DMZ",
    ko: "비무장지대 (네트워크 완충 구간)",
    desc: "인터넷과 내부 네트워크 사이에 위치하는 중립 구간입니다. 웹 서버처럼 외부에 노출되어야 하는 서비스를 여기에 배치해 내부망을 보호합니다.",
    cat: "asset"
  },

  // ══════════════════════════════════════════════════════════════
  // [12] AI 에이전트 핵심 개념 (일반)
  // ══════════════════════════════════════════════════════════════
  {
    en: "Agent",
    ko: "에이전트",
    desc: "목표를 받아 스스로 판단하고 행동하는 AI 프로그램입니다. 사람의 지시 없이도 상황에 맞게 도구를 선택하고 작업을 수행합니다.",
    cat: "core"
  },
  {
    en: "Autonomous",
    ko: "자율적인",
    desc: "사람이 매번 지시하지 않아도 스스로 판단해 행동하는 특성입니다. AKC 시스템의 핵심 목표이기도 합니다.",
    cat: "core"
  },
  {
    en: "Orchestration",
    ko: "오케스트레이션 (에이전트 지휘)",
    desc: "여러 에이전트가 흩어져 일하지 않도록 Lead가 '누가 언제 무엇을 해야 하는지' 조율하는 지휘 체계입니다. 오케스트라 지휘자와 같습니다.",
    cat: "core"
  },
  {
    en: "Perception",
    ko: "인식 / 지각 (입력 수집·분석)",
    desc: "외부 데이터를 수집하고 정리하는 첫 단계입니다. 사람으로 치면 눈과 귀에 해당하며, 원시 데이터를 AI가 이해할 수 있는 형태로 변환합니다.",
    cat: "core"
  },
  {
    en: "World Model",
    ko: "세계 모델 (환경 이해)",
    desc: "AI가 현재 상황을 내부적으로 표현한 지도입니다. '지금 무엇이 있고, 어떻게 연결되어 있으며, 무엇이 불확실한가'를 구조화합니다.",
    cat: "core"
  },
  {
    en: "Planner",
    ko: "계획 수립기",
    desc: "목표를 달성하기 위한 실행 순서를 설계하는 역할입니다. 어떤 작업을 어떤 순서로 누가 해야 하는지 DAG 형태로 설계합니다.",
    cat: "core"
  },
  {
    en: "Decision",
    ko: "의사결정 (최적안 선택)",
    desc: "여러 선택지 중 위험·이익·효율·신뢰도를 종합해 가장 좋은 방안을 고르는 단계입니다. 최종 실행 허가를 내리는 게이트키퍼입니다.",
    cat: "core"
  },
  {
    en: "Reflection",
    ko: "반성 / 성찰 (결과 분석)",
    desc: "작업이 끝난 후 '무엇이 잘 됐고 왜 실패했는가'를 스스로 분석하는 단계입니다. 다음번에 더 잘 하기 위한 학습의 출발점입니다.",
    cat: "core"
  },
  {
    en: "Evolution",
    ko: "진화 (시스템 자기 개선)",
    desc: "학습 결과를 바탕으로 시스템 규칙과 전략을 스스로 업그레이드하는 과정입니다. 사람의 승인을 거쳐 헌법까지 개정할 수 있습니다.",
    cat: "core"
  },
  // ══════════════════════════════════════════════════════════════
  // [스킬 19] tool_agent_connect_skill — 툴·MCP 에이전트 연결
  // ══════════════════════════════════════════════════════════════
  {
    en: "MCP (Model Context Protocol)",
    ko: "MCP — 모델 컨텍스트 프로토콜",
    desc: "AI 에이전트가 외부 툴(파일 시스템, 브라우저, DB 등)에 연결하는 표준 통신 규약입니다. USB처럼 어떤 툴이든 같은 방식으로 꽂아 쓸 수 있게 해줍니다.",
    cat: "skillnet"
  },
  {
    en: "MCP Server",
    ko: "MCP 서버 (툴 제공자)",
    desc: "AI 에이전트에게 기능을 제공하는 소형 서버입니다. 파일 읽기·웹 검색·코드 실행 등 각 역할별 MCP 서버가 독립적으로 동작합니다.",
    cat: "skillnet"
  },
  {
    en: "Tool Routing",
    ko: "툴 라우팅 (도구 선택)",
    desc: "에이전트가 주어진 태스크에 가장 적합한 툴을 자동으로 선택하는 과정입니다. 올바른 툴 선택이 실행 속도와 비용 효율을 결정합니다.",
    cat: "skillnet"
  },

  // ══════════════════════════════════════════════════════════════
  // [스킬 20] infra_config_skill — 인프라·클라우드 설정
  // ══════════════════════════════════════════════════════════════
  {
    en: "Infrastructure as Code",
    ko: "코드형 인프라 (IaC)",
    desc: "서버·네트워크·DB 설정을 코드 파일(Terraform 등)로 관리하는 방법입니다. 코드 한 줄로 동일한 환경을 몇 번이든 복제할 수 있습니다.",
    cat: "skillnet"
  },
  {
    en: "Clean Architecture",
    ko: "클린 아키텍처 (4계층 설계)",
    desc: "시스템을 Domain(핵심 규칙) → Application(업무 흐름) → Infrastructure(외부 연결) → Interface(UI·API) 4층으로 나누는 설계 원칙입니다. 계층을 분리하면 한 부분을 교체해도 나머지가 영향받지 않습니다.",
    cat: "skillnet"
  },
  {
    en: "CI/CD Pipeline",
    ko: "CI/CD 파이프라인 (자동 빌드·배포)",
    desc: "코드를 저장소에 올리는 순간 자동으로 빌드→테스트→배포가 진행되는 자동화 흐름입니다. 사람이 개입하지 않아도 안전하게 서비스가 업데이트됩니다.",
    cat: "skillnet"
  },

  // ══════════════════════════════════════════════════════════════
  // [스킬 21] memory_admin_skill — 메모리·상태 관리
  // ══════════════════════════════════════════════════════════════
  {
    en: "HotZone",
    ko: "핫존 (단기 작업 메모리)",
    desc: "지금 진행 중인 작업 정보가 저장되는 빠른 메모리 영역입니다. sync_state.json과 history.md가 여기 있어 에이전트들이 실시간으로 읽고 씁니다.",
    cat: "memory"
  },
  {
    en: "ColdZone",
    ko: "콜드존 (장기 지식 창고)",
    desc: "완료된 프로젝트의 지식·헌법·패턴이 보관되는 장기 저장소입니다. KB(Knowledge Base)와 rules.md 같은 파일들이 여기 있어 다음 프로젝트에서도 참조됩니다.",
    cat: "memory"
  },
  {
    en: "sync_state_bus",
    ko: "싱크 스테이트 (에이전트 이벤트 버스)",
    desc: "모든 에이전트가 공유하는 실시간 상태 파일입니다. 버스 정류장 안내판처럼, 어떤 에이전트가 무엇을 하고 있는지 한눈에 보여줍니다.",
    cat: "memory"
  },
  {
    en: "Loop Guard",
    ko: "루프 가드 (무한 루프 방지)",
    desc: "AI가 같은 작업을 끝없이 반복하지 않도록 제한하는 안전장치입니다. 재진입 10회·LLM 50턴·120분을 초과하면 자동으로 사람에게 알립니다.",
    cat: "memory"
  },

  // ══════════════════════════════════════════════════════════════
  // [스킬 22] ai_architect_skill — AI 시스템 아키텍트
  // ══════════════════════════════════════════════════════════════
  {
    en: "Root Genome",
    ko: "루트 게놈 (AI 설계 원점)",
    desc: "AI 시스템 전체의 사상·원칙이 담긴 최상위 설계 문서입니다. 모든 에이전트와 스킬은 이 게놈에서 파생되며, 게놈이 바뀌면 시스템 전체가 진화합니다.",
    cat: "skillnet"
  },
  {
    en: "GENOME",
    ko: "게놈 (에이전트 행동 유전자 8개)",
    desc: "AI 에이전트의 핵심 행동 원칙 8가지입니다. G1(자기최적화)·G2(자산화)·G3(비용인식)·G4(인간승인)·G5(전문화)·G6(연결)·G7(검증우선)·G8(함께진화)로 구성됩니다.",
    cat: "skillnet"
  },
  {
    en: "SkillNet",
    ko: "스킬넷 (에이전트 스킬 네트워크)",
    desc: "에이전트가 활용할 수 있는 전문 역량들의 연결망입니다. 초급(00·01·02·19)·중급(03~10·17·18·20)·고급(11~16·21·22) 23개 스킬로 구성됩니다.",
    cat: "skillnet"
  },
  {
    en: "HUMAN_GATE",
    ko: "휴먼 게이트 (사람 승인 필수 관문)",
    desc: "AI가 중요한 결정(헌법 수정, 스킬 삭제 등)을 내리기 전에 반드시 사람의 승인을 받아야 하는 체크포인트입니다. GENOME G4 원칙으로 정의됩니다.",
    cat: "skillnet"
  },

  // ── M19 신규 용어 ──
  {
    en: "SKILL.md",
    ko: "스킬 역할 정의 파일",
    desc: "#Global SkillNet 각 스킬 폴더에 포함되는 역할 정의 파일입니다. 스킬 목적·사용 시점·입력/출력·검증 조건을 명시합니다.",
    cat: "skillnet"
  },
  {
    en: "agent_local.md",
    ko: "스킬 운영 규칙 파일",
    desc: "#Global SkillNet 각 스킬 폴더의 운영 규칙 파일입니다. 에이전트 행동 기준, 제약 사항, 협업 인터페이스를 정의합니다. SKILL.md와 쌍을 이룹니다.",
    cat: "skillnet"
  },
  {
    en: "PDCA",
    ko: "PDCA 사이클 (Plan-Do-Check-Act)",
    desc: "에이전트 작업의 반복 개선 방법론입니다. Plan(계획) → Do(실행) → Check(검증) → Act(개선) 4단계 순환 구조로, 01번 core_planning_skill의 기반 원칙입니다.",
    cat: "skillnet"
  },
  {
    en: "Match Rate",
    ko: "매치 레이트 (기술 정합성 지표)",
    desc: "07번 verify_skill이 측정하는 구현 결과와 요구사항의 기술적 일치율입니다. 90% 기준 미달 시 재작업하며, 08번 QA Reviewer가 최종 판정합니다.",
    cat: "skillnet"
  },

  // ── M20 신규 용어 — GENOME 개별 유전자 ──
  {
    en: "G1:SELF_OPTIMIZE",
    ko: "G1 자기최적화 유전자",
    desc: "GENOME 1번 유전자. 매 작업마다 자신의 수행 방식을 분석하고 최적화하는 원칙입니다. 자기 진화의 출발점입니다.",
    cat: "skillnet"
  },
  {
    en: "G2:ASSETIZE",
    ko: "G2 자산화 유전자",
    desc: "GENOME 2번 유전자. 에이전트 경험에서 반복 가능한 패턴을 추출하여 재사용 가능한 스킬·KB 항목으로 자산화하는 원칙입니다.",
    cat: "skillnet"
  },
  {
    en: "G3:COST_AWARE",
    ko: "G3 비용인식 유전자",
    desc: "GENOME 3번 유전자. 토큰·CPU·메모리 비용을 최소화하는 원칙입니다. 중복 실행 비용이 큰 경우 통합을 선호합니다.",
    cat: "skillnet"
  },
  {
    en: "G5:SPECIALIZE",
    ko: "G5 전문화 유전자",
    desc: "GENOME 5번 유전자. 반복 패턴을 전문화하는 원칙입니다. 각 에이전트별 특화 검증이 필요한 경우 분리 유지를 선택합니다.",
    cat: "skillnet"
  },
  {
    en: "G6:CONNECT",
    ko: "G6 연결 유전자",
    desc: "GENOME 6번 유전자. 현재 스킬의 역량을 초과하는 작업 발생 시 다른 스킬을 호출하여 협업하는 원칙입니다.",
    cat: "skillnet"
  },
  {
    en: "G7:VERIFY_FIRST",
    ko: "G7 검증우선 유전자",
    desc: "GENOME 7번 유전자. 자산 등록 전 Guardian 검증을 통과해야 하는 원칙입니다. 재현 가능성·완전성·비용 효율·안전성 4가지를 검증합니다.",
    cat: "skillnet"
  },
  {
    en: "G8:EVOLVE_TOGETHER",
    ko: "G8 공진화 유전자",
    desc: "GENOME 8번 유전자. 한 스킬의 진화가 연결된 스킬에 전파되어 공진화를 이끄는 원칙입니다.",
    cat: "skillnet"
  },
  {
    en: "Rule 4 Evolution",
    ko: "룰4 진화 규칙 (자산화 출발점)",
    desc: "작업 완료 후 '이번 작업에서 배운 스킬·규칙은 무엇인가?'를 스스로 묻는 자기 진화 규칙입니다. G2:ASSETIZE 자산화의 시작점입니다.",
    cat: "skillnet"
  },
  {
    en: "Guardian 검증",
    ko: "가디언 검증 (자산화 품질 관문)",
    desc: "스킬 자산화 등록 전 통과해야 하는 품질 기준입니다. ① 재현 가능성 ② 완전성 ③ 비용 효율 ④ 안전성 4가지 모두 충족해야 합니다.",
    cat: "skillnet"
  },
  {
    en: "정형화",
    ko: "정형화 (스킬 최적화 → #concept 품질 향상)",
    desc: "스킬 최적화를 통해 #concept 헌법 구조가 일관된 형태로 표준화되는 품질 향상 효과입니다. 스킬 난이도 분류, 중복 통합, 자산화 표준화가 정형화를 이끕니다.",
    cat: "skillnet"
  },
  {
    en: "추적 가능성",
    ko: "추적 가능성 (표준화 달성 조건)",
    desc: "표준화 달성 3조건 중 하나입니다. 모든 스킬 사용 기록이 sync_state.json + history.md에 남아야 하며, 언제든 감사(Audit)가 가능한 상태를 의미합니다.",
    cat: "skillnet"
  },

  {
    en: "Token",
    ko: "토큰 (언어 모델 처리 단위)",
    desc: "AI가 텍스트를 처리하는 최소 단위입니다. 영어는 단어 수준, 한글은 음절 수준으로 분리됩니다. 비용과 처리 속도에 직접 영향을 줍니다.",
    cat: "core"
  },
  {
    en: "Prompt",
    ko: "프롬프트 (AI 지시문)",
    desc: "AI에게 보내는 지시 또는 질문 텍스트입니다. 잘 작성된 프롬프트는 더 정확하고 유용한 결과를 이끌어냅니다.",
    cat: "core"
  },
  {
    en: "Context Window",
    ko: "컨텍스트 윈도우 (처리 가능 범위)",
    desc: "AI가 한 번에 기억하고 처리할 수 있는 텍스트의 최대 양입니다. 이 범위를 넘어가면 앞의 내용을 잊기 시작합니다.",
    cat: "core"
  },

  // ── diagram-data.js glossaryData 동기화 (FE-007) ──────────────────────────
  { en: "Start",         ko: "프로젝트 개시",    cat: "lifecycle",
    desc: "세션의 시작점. Lead Planner가 활성화되며 모든 에이전트가 초기 컨텍스트(rules.md 등)를 로드하는 단계입니다." },
  { en: "End",           ko: "세션 종료",        cat: "lifecycle",
    desc: "모든 작업의 최종 상태. Archivist가 지식 자산화를 완료하고 시스템이 안전하게 현재 세션을 클로징하는 종착지입니다." },
  { en: "Standby",       ko: "작업 대기",        cat: "lifecycle",
    desc: "태스크 큐(sync_state.json)에 다음 작업이 없을 때 진입하는 대기 상태. Lead Planner가 새 태스크를 인입하면 즉시 해제됩니다." },
  { en: "task_ok.md",    ko: "최종 산출물",      cat: "lifecycle",
    desc: "에이전트가 작업을 완료한 후 QA에게 제출하는 최종 결과물 및 요약 보고서." },
  { en: "Lead",          ko: "Lead Planner",    cat: "planning",
    desc: "전체 태스크의 사령탑. 프로젝트 개시 시 SDD 명세를 작성하고, 각 에이전트에게 작업 큐를 배분합니다." },
  { en: "Planning Engine", ko: "플래닝 엔진",   cat: "planning",
    desc: "[v3 → v4 Planner 에이전트로 대체됨] 목표를 DAG 형태의 태스크로 분해하고 에이전트 할당 계획을 수립합니다. Task Planner + Agent Allocator." },
  { en: "Perception Engine", ko: "인식 엔진",   cat: "cognitive",
    desc: "[v3 → v4 Perception 에이전트로 대체됨] 입력 데이터를 분석하여 Intent 파악, Entity 추출, 도메인 분류를 수행하고 Context Model을 생성합니다." },
  { en: "Decision Engine",   ko: "결정 엔진",   cat: "cognitive",
    desc: "[v3 → v4 Decision 에이전트로 대체됨] Utility Function과 Risk Analysis를 기반으로 최적 전략을 선택하고 실행 계획을 Sync에 인입합니다." },
  { en: "WorldModel",    ko: "WorldModel 에이전트", cat: "cognitive",
    desc: "인지 루프 2단계(Understand). PerceptionPayload를 엔티티·관계 그래프로 변환하고 불확실성(uncertainty)을 포함한 WorldState를 생성하는 세계 모델링 에이전트. (AKC v4 신규)" },
  { en: "FE/BE/DB",      ko: "Dev Team",         cat: "execution",
    desc: "실제 구현을 담당하는 에이전트 그룹. UI, 코어 로직, 스키마 설계를 독립적으로 수행하며 상호 동기화합니다." },
  { en: "Tool Agent",    ko: "툴 에이전트",      cat: "execution",
    desc: "API 호출, 코드 실행, 검색 등 외부 도구를 자율적으로 활용하는 실행 에이전트. Tool Selection + Execution 담당. 헌법: _docs/tool-agent/agents.md" },
  { en: "Infra Agent",   ko: "인프라 에이전트",  cat: "execution",
    desc: "서버 환경 구성, CI/CD 파이프라인 설정, 배포 자동화를 담당하는 인프라 전문 에이전트. 헌법: _docs/infra-agent/agents.md" },
  { en: "KB",            ko: "Global SkillNet", cat: "memory",
    desc: "장기 기억(LTM) 저장소. 과거의 성공·실패 경험이 명세 주도형 AI(SAI) 구조로 저장된 시스템의 두뇌입니다. 23개 전문가 스킬(SKILL.md) + 노하우(knowhow) + 오류 항체(error antibody)로 구성. 에이전트는 이 명세를 읽고 자율적으로 최적 행동을 판단합니다." },
  { en: "AgentTeam",     ko: "협업 거점",        cat: "collaboration",
    desc: "FE/BE/DB 에이전트가 개별 작업을 넘어 통합된 하나의 솔루션을 만들기 위해 교차 검증하고 합의하는 가상 작업 공간입니다." },
  { en: "Task Dispatch", ko: "Decision → Sync (태스크 인입)", cat: "collaboration",
    desc: "결정된 실행 계획을 이벤트 버스(sync_state.json)에 인입하는 관계." },
  { en: "Quality Reflection", ko: "QA → Reflection (결과 분석)", cat: "qa",
    desc: "QA 검증 결과(pass/fail)를 Reflection Engine에 전달해 품질 반성 루프를 트리거합니다." },
  { en: "QA",            ko: "QA Reviewer",     cat: "qa",
    desc: "최종 게이트키퍼. rules.md(정책)와 Global SkillNet(승인된 검증 스킬)을 참조하여 FE/BE/DB 산출물의 Trinity 검증을 수행합니다." },
  { en: "Reflection Engine", ko: "리플렉션 엔진", cat: "evolution",
    desc: "[v3 → v4 Reflection 에이전트로 대체됨] QA 결과를 바탕으로 '왜 실패했는가'를 자기 진단하고 더 나은 전략을 제안하는 Meta-Cognition 컴포넌트." },
  { en: "Learning Engine",   ko: "학습 엔진",    cat: "evolution",
    desc: "[v3 → v4 LearningEng 에이전트로 대체됨] Reflection에서 추출된 패턴을 구조화하여 KB에 지식을 축적하고 Evolution Engine에 개선 신호를 전달합니다." },
  { en: "Evolution Engine",  ko: "진화 엔진",    cat: "evolution",
    desc: "[v3 → v4 Evolution 에이전트로 대체됨] 전략 최적화, 워크플로 진화, 신규 스킬 생성을 담당합니다. Lead Planner에 아키텍처 개선 피드백을 전달해 시스템이 스스로 발전합니다." },
  { en: "LearningEng",   ko: "LearningEng 에이전트", cat: "evolution",
    desc: "인지 루프 8단계(Learn). Reflection의 학습 데이터를 Hypothesis→Canonical 4단계 성숙도로 분류해 KB에 축적하고, Evolution 트리거를 평가하는 지식 학습 에이전트. (AKC v4 신규)" },
  { en: "Archivist",     ko: "Archivist",       cat: "archive",
    desc: "지식 관리자. 세션 종료 전 로그를 시맨틱하게 압축하고 Global SkillNet으로 지식을 이관합니다." },
  { en: "manager_assent.md", ko: "자산 통합 관리자", cat: "asset",
    desc: "AssetBox 내 모든 자산(디자인 타입, 인프라 구성)의 등록·버전·접근 정책을 통합 관리하는 파일. Lead Planner가 프로젝트 개시 시 읽기 전용으로 참조한다." },
  { en: "manager_design.md", ko: "디자인 자산 관리자", cat: "asset",
    desc: "type01~typeN 폴더별 UI 디자인 레이아웃·스타일을 관리. 반응형 4종: PC형(1920px) / 모바일형(375px) / 태블릿PC형(768px) / PC형+모바일형(Mobile-First 통합 반응형)." },
  { en: "manager_baremetal_web_was_db.md", ko: "베어메탈 관리자", cat: "asset",
    desc: "물리 서버 기반 Web(Nginx)/WAS(Spring Boot)/DB(PostgreSQL) 3계층 구성 정책. 레벨별 서버 수, HA 구성, OS 표준, 백업 정책 정의." },
  { en: "manager_firewall.md", ko: "방화벽 관리자", cat: "asset",
    desc: "네트워크 방화벽 정책 정의. Default Deny 원칙, DMZ/WAS/DB 존 분리, 허용 포트 정책표. Docker/Kubernetes NetworkPolicy와 연동." },
  { en: "manager_kubervm.md", ko: "Kubernetes VM 관리자", cat: "asset",
    desc: "Kubernetes 클러스터 VM 구성·네임스페이스 구조·배포 정책 정의. 레벨별 노드 수, 이미지 태그 고정, NetworkPolicy, Helm Chart 연동." },
  { en: "manager_docker.md", ko: "Docker 관리자", cat: "asset",
    desc: "Docker 이미지 태그 규칙(latest 금지), 베이스 이미지 표준, Dockerfile 작성 규칙, 레지스트리 정책, 컨테이너 실행 정책(Privileged 금지) 정의." },
  { en: "manager_vm.md", ko: "가상머신 관리자", cat: "asset",
    desc: "하이퍼바이저 기반 VM 템플릿(골든 이미지), 자원 할당 기준, 스냅샷 정책(최대 3개), VM 생명주기 정의. Bare Metal과 연동." },

  // ══════════════════════════════════════════════════════════════
  // [§K] 경험 자산화 — 지식 성숙도 & 자산화 철학 (2026-03-22 추가)
  // ══════════════════════════════════════════════════════════════
  { en: "KnowledgeAssetPolicy", ko: "경험 자산화 정책 (§K)",
    cat: "evolution",
    desc: "'모든 경험은 자산이다' — 성공·실패·미완성 불문하고 발생한 모든 경험을 기록하는 정책. 5단계 Status Lifecycle, 5분 룰 즉시기록, 4차원 자산화 분석, deprecated 표시(삭제 금지), canonical 승격 조건(3개 도메인 검증)으로 구성됩니다." },

  { en: "StatusLifecycle", ko: "5단계 지식 성숙도",
    cat: "evolution",
    desc: "지식이 경험(experience) → 시도(attempt) → 분석(draft) → 검증(verified) → 표준화(canonical) 5단계로 성숙해가는 과정. verified 이상만 자동 적용되며, canonical은 3개 이상 도메인 검증 + 4차원 분석 + boilerplate 반영 조건을 충족해야 합니다." },

  { en: "FiveMinuteRule", ko: "5분 룰 즉시기록",
    cat: "evolution",
    desc: "경험이 발생하면 5분 내에 기록합니다. 기술적 지식이 없어도 가능하며, 증상·발생 조건·재현 여부만 기록하면 experience 단계가 완성됩니다. '완전히 해결된 것만 기록'하는 기존 패러다임에서 '경험 즉시 기록'으로 전환하는 핵심 원칙입니다." },

  { en: "FourDimensionAnalysis", ko: "4차원 자산화 분석",
    cat: "evolution",
    desc: "verified 단계 저장 시 의무 수행하는 심층 분석. 표준 개발(다음에 같은 패턴이 나올 때 예방하려면?) / 표준 기획(초기 명세가 있었다면 오류가 없었을까?) / 표준 설계(어떤 패턴이면 이 문제가 구조적으로 불가능했을까?) / 표준 도메인(전문가라면 처음부터 알고 있었을 지식은?) 4개 관점으로 분해합니다." },

  { en: "DeprecatedPolicy", ko: "deprecated 표시 정책",
    cat: "evolution",
    desc: "시대가 지나 낡아버린 해결책도 삭제하지 않고 '(deprecated since YYYY)' 표시 후 신규 해결책과 공존시키는 정책. 레거시 환경 작업자에게 여전히 유효하고, 기술 변천 과정 자체가 도메인 지식이기 때문입니다." },

  // ── SkillNet Policy (2026-03-22 동기화) ──────────────────────────
  { en: "CommonSkill", ko: "공통 스킬",
    cat: "core",
    desc: "역할·분야에 관계없이 전체 에이전트가 공유하는 기반 스킬. 00(관리), 01(계획), 09(협업), 19(MCP), 21(메모리) 번호가 해당한다." },

  { en: "RoleSkill", ko: "내 업무 스킬",
    cat: "core",
    desc: "특정 역할·업무에 특화된 에이전트 전용 스킬. 역할 에이전트가 주도하여 업그레이드한다. 실제 작업 효과 향상이 확인된 경우에만 업그레이드 허용." },

  { en: "TrashSkill", ko: "쓰레기 스킬 폴더",
    cat: "core",
    desc: "업그레이드 시도 후 성능·작업흐름이 기존보다 저하된 내용을 임시 보관하는 폴더(98_trash_skills/). 2회 재시도 후 사람의 최종 판단으로만 삭제 가능." },

  // ── 2026-03-28 신규 추가 ──────────────────────────────────────────
  { en: "HumanVision", ko: "사람의 사상·방향성",
    cat: "core",
    desc: "헌법 개정 필수 참조 문서(_docs/human_vision.md). §V1~§V5: 사람의 방향성·가치·제약. 헌법 개정 전 반드시 참조 — §V5 원칙에 반하는 방향으로 헌법 개정 불가." },

  { en: "RequirementsValidation", ko: "요구사항 검증 정책",
    cat: "core",
    desc: "rules_요구사항검증정책.md. §R-1: 5차원 완성도 게이트(목적/범위/사용자/비기능/제약) → §R-2: 8섹션 시방서(착수 전 필수) → §R-3: 4게이트 검증(요구사항→설계→구현→인수)." },

  { en: "EADM", ko: "엔터프라이즈 아키텍트 마스터",
    cat: "skillnet",
    desc: "23_eadm_architect_skill. Enterprise Architecture & Development Master — 풀스택 엔터프라이즈 시스템 설계. Hexagonal Architecture, Redis HA, Kafka Pub/Sub, ELK 스택. D_architecture 섹션 v1.0." },

  { en: "policy-history.md", ko: "정책 이력 관리",
    cat: "lifecycle",
    desc: "#concept 최신 정책이 프로젝트에 반영된 이력을 기록하는 파일. /concept-init 실행 시 자동 기록. 갱신일·에이전트명·적용 결과 추적." },

  // ══════════════════════════════════════════════════════════════
  // [추가] 스킬 참조 & 기술 확보 정책 (2026-03-28)
  // ══════════════════════════════════════════════════════════════
  { en: "Skill Reference Priority",
    ko: "스킬 참조 우선순위 (3단계 폴백)",
    cat: "skillnet",
    desc: "에이전트가 스킬을 참조할 때의 3단계 탐색 순서. 1차: 프로젝트 CLAUDE_local.md(프로젝트 내부 스킬) → 2차: #Global SkillNet(전문가 스킬 23개) → 3차: .All_Skills(외부 Anthropic 공식 스킬 18개). 상위 계층에서 없거나 오류 시 다음 계층으로 자동 전환." },

  { en: "Tech Acquisition Gate",
    ko: "기술 확보 게이트",
    cat: "cognitive",
    desc: "개발 시작 전 기술 확보 완료를 강제하는 게이트. Cognitive Zone(Perception→WorldModel→Planner→Decision)이 수행. 기존 자산 + 외부 기술 모두 확보·정리 완료 후에만 태스크 생성 가능. Decision 게이트 품질 검토는 사람이 수행." },

  { en: "TG-SKILL",
    ko: "기술 부족 (기술 갭 유형)",
    cat: "cognitive",
    desc: "기술 갭 5유형 중 하나. 기존 스킬·지식에 해당 기술이 없는 경우. 예: 새로운 프레임워크, 미경험 알고리즘, 신규 API. 사람이 먼저 기술 조사·확보 후 AI가 검토·적용." },

  { en: "TG-AUTH",
    ko: "권한 부족 (기술 갭 유형)",
    cat: "cognitive",
    desc: "기술 갭 5유형 중 하나. 기술은 알지만 접근 권한·인증·라이선스가 없는 경우. 예: 유료 API 키, 사내 시스템 접근 권한, 외부 서비스 계정." },

  { en: "TG-ENV",
    ko: "환경 불일치 (기술 갭 유형)",
    cat: "cognitive",
    desc: "기술 갭 5유형 중 하나. 최초 설계 환경(OS/런타임/인프라)과 맞지 않는 경우. 예: Windows 전용 라이브러리를 Linux에서 사용, GPU 필요 작업을 CPU 환경에서 수행." },

  { en: "TG-COMPAT",
    ko: "호환성 문제 (기술 갭 유형)",
    cat: "cognitive",
    desc: "기술 갭 5유형 중 하나. 기존 기술 스택과 충돌하거나 버전 비호환인 경우. 예: 의존성 충돌, 프레임워크 버전 간 비호환 API." },

  { en: "TG-DOMAIN",
    ko: "도메인 전문지식 부족 (기술 갭 유형)",
    cat: "cognitive",
    desc: "기술 갭 5유형 중 하나. 특정 업종·규제·표준에 대한 전문 지식이 필요한 경우. 예: 금융 규제(PCI DSS), 의료 표준(HIPAA), 법적 요구사항." },

  { en: "Tech Coverage Matrix",
    ko: "기술 커버리지 매트릭스",
    cat: "cognitive",
    desc: "요구사항의 각 항목에 대해 기존 자산으로 해결 가능(COVERED)한지 갭(GAP)인지를 판별한 표. WorldModel이 스킬 3단계 탐색 + knowhow를 대조하여 작성. Planner가 이를 기반으로 기술 확보 계획 수립." },
];

// 카테고리 레이블
window.VOCAB_CATS = {
  lifecycle: { label: "시스템 생명주기",       color: "#94A3B8" },
  planning:  { label: "Lead & 계획",           color: "#A78BFA" },
  cognitive: { label: "인지 파이프라인",        color: "#C084FC" },
  execution: { label: "실행 에이전트",          color: "#60A5FA" },
  collaboration: { label: "협업 & 제출",        color: "#FACC15" },
  qa:        { label: "QA & 검증",             color: "#34D399" },
  error:     { label: "오류 & 재작업",          color: "#F87171" },
  memory:    { label: "메모리 & 기록",          color: "#F59E0B" },
  evolution: { label: "자기 진화",             color: "#F472B6" },
  archive:   { label: "Archivist & 자산화",    color: "#E879F9" },
  asset:     { label: "자산 박스 (인프라·디자인)", color: "#06B6D4" },
  core:      { label: "AI 핵심 개념",          color: "#38BDF8" },
  skillnet:  { label: "스킬넷 & 아키텍처",     color: "#818CF8" },
};
