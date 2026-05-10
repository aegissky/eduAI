// AKC v4 교육 플랫폼 — 버전 업데이트 이력 데이터
// 새 이력 추가 시 배열 맨 앞에 추가 (최신 순 정렬)

window.CHANGELOG = [
  {
    version: "1.6.0",
    date: "2026-03-29",
    tag: "content",
    title: "SAI 개념 보강 + 스킬 참조·기술 확보 용어 추가",
    summary: [
      "SAI 정의를 '명세 주도형 AI 오케스트레이션'으로 재정립",
      "도메인 SAI화·SAI 탐색·SAI 학습 인계 설명 보강",
      "KB(Global SkillNet) 설명에 23개 스킬 구성 명시",
      "스킬 참조 우선순위 3단계 용어 추가 (SkillReferencePriority)",
      "기술 확보 게이트 용어 8개 추가 (TechAcquisitionGate, TG-SKILL 등)"
    ],
    details: `## SAI 개념 전면 보강

### 변경된 용어

| 용어 | 변경 전 | 변경 후 |
|------|---------|---------|
| SAI | 시맨틱 AI 인덱스 | **명세 주도형 AI 오케스트레이션** — 시스템 명세가 에이전트 구동 기반 |
| 도메인 SAI화 | SAI 형식 변환 | SKILL.md + knowhow + error antibody 구조화 지식 변환 |
| SAI 탐색 | 성공 사례 탐색 | 맥락 기반(도메인·기술스택·제약조건) 관련 스킬·노하우 탐색 |
| SAI 학습 인계 | 학습 전달 | 5단계 성숙도 분류 + canonical 승격 과정 포함 |
| KB | SAI화 저장 | 23개 스킬 + 노하우 + 오류 항체 구성 명시 |

### 신규 추가 용어 (8개)

\`\`\`
Skill Reference Priority  — 스킬 참조 3단계 폴백
Tech Acquisition Gate     — 기술 확보 게이트 (Cognitive Zone)
TG-SKILL                  — 기술 부족
TG-AUTH                   — 권한 부족
TG-ENV                    — 환경 불일치
TG-COMPAT                 — 호환성 문제
TG-DOMAIN                 — 도메인 전문지식 부족
Tech Coverage Matrix      — 기술 커버리지 매트릭스
\`\`\`

### 근거
- guide/rule_info/skill-reference-priority-policy.md (2026-03-28)
- guide/rule_info/tech-acquisition-gate-policy.md (2026-03-28)
- 사람 SAI화 정의 제공 (2026-03-29)`
  },
  {
    version: "1.5.0",
    date: "2026-03-28",
    tag: "policy",
    title: "요구사항 검증 정책 + EADM + policy-history 용어 추가",
    summary: [
      "RequirementsValidation 용어 추가 (§R-1~§R-7)",
      "EADM(엔터프라이즈 아키텍트 마스터) 용어 추가",
      "policy-history.md 용어 추가",
      "HumanVision 용어 추가"
    ],
    details: `## 헌법 개정 반영

### 신규 용어

| 용어 | 설명 |
|------|------|
| RequirementsValidation | 5차원 완성도 게이트 → 8섹션 시방서 → 4게이트 검증 |
| EADM | Enterprise Architecture & Development Master 스킬 |
| policy-history.md | /concept-init 실행 시 정책 반영 이력 추적 |
| HumanVision | 헌법 개정 필수 참조 문서 (사람의 사상·방향성) |

### 근거
- 지침동기화 2026-03-28 (1차)`
  },
  {
    version: "1.4.0",
    date: "2026-03-27",
    tag: "policy",
    title: "AKC v4 인지 루프 + 개발 착수 게이트 헌법 반영",
    summary: [
      "Cognitive Zone 에이전트 워크플로우 정책 반영",
      "개발 착수 게이트 4단계 정책 반영 (GATE 0~3)",
      "Decision agents.md 안전 게이트에 개발 착수 검사 추가"
    ],
    details: `## 지침동기화 2026-03-27 반영

### 헌법 변경 내용
- \`cognitive/perception/agents.md\` — 동작 워크플로우 9단계 확정
- \`cognitive/worldmodel/agents.md\` — 동작 워크플로우 8단계 확정
- \`cognitive/planner/agents.md\` — 동작 워크플로우 12단계 확정
- \`cognitive/decision/agents.md\` — GATE 0~3 개발 착수 게이트 추가
- \`rules_프로젝트관리.md\` — §10 개발 착수 게이트 신설

### 근거
- guide/rule_info/agentic-ai-architecture.md
- guide/rule_info/dev-phase-gate-policy.md`
  },
  {
    version: "1.3.0",
    date: "2026-03-26",
    tag: "content",
    title: "경험 자산화 §K + 스킬 오류 해결 정책 반영",
    summary: [
      "경험 자산화 정책(§K) 용어 추가 — StatusLifecycle, KnowledgeAssetPolicy",
      "Reflection·LearningEng·Evolution 에이전트 설명 §K 반영",
      "스킬 오류 해결 4단계 정책 반영",
      "ERR-ID(오류 추적 ID) 용어 추가"
    ],
    details: `## 지침동기화 2026-03-26 반영

### 경험 자산화 (§K) 신규 용어

| 용어 | 설명 |
|------|------|
| KnowledgeAssetPolicy | '모든 경험은 자산이다' 철학 |
| StatusLifecycle | experience → attempt → draft → verified → canonical |
| ERR-ID | QA 미달 시 오류 고유 식별자 |

### 에이전트 설명 보강
- Reflection: attempt 수집, Plan A/B/C 방향 전환, '포기한 이유도 자산'
- LearningEng: 5단계 Status Lifecycle, 5분 룰, 4차원 자산화 분석
- Evolution: EvolutionProposal에 4차원 자산화 분석 의무

### 근거
- guide/rule_info/knowhow-asset-philosophy.md
- guide/rule_info/skill-error-resolution-policy.md`
  },
  {
    version: "1.2.0",
    date: "2026-03-24",
    tag: "structure",
    title: "#Global SkillNet 스킬 구조 반영",
    summary: [
      "CommonSkill·RoleSkill·TrashSkill 용어 추가",
      "A~G 7섹션 23개 스킬 구조 교육 콘텐츠 반영",
      "SkillNet Policy 관련 용어 추가"
    ],
    details: `## #Global SkillNet 도서관 인덱싱 반영

### 스킬 구조 용어

| 용어 | 설명 |
|------|------|
| CommonSkill | 전체 에이전트 공유 기반 스킬 (00,01,09,19,21번) |
| RoleSkill | 역할 특화 에이전트 전용 스킬 |
| TrashSkill | 성능 저하 스킬 임시 보관 (98_trash_skills/) |

### 근거
- #Global SkillNet SKILL_POLICY.md
- 11차 백업 (2026-03-24)`
  },
  {
    version: "1.1.0",
    date: "2026-03-22",
    tag: "content",
    title: "AKC v4 Cognitive·Learning Zone 에이전트 용어 대량 추가",
    summary: [
      "Perception·WorldModel·Planner·Decision 에이전트 용어 추가",
      "Reflection·LearningEng·Evolution 에이전트 용어 추가",
      "AKC v4 데이터 구조 8종 추가 (PerceptionPayload, WorldState 등)",
      "인지 파이프라인 관계 11종 추가",
      "Asset Box(StyleBox, InfraBox) 용어 추가"
    ],
    details: `## AKC v4 전면 반영

### CognitiveZone 에이전트 (4종)
- Perception (Observe) — 외부 관측·데이터 수집
- WorldModel (Understand) — 세계 모델 구축·불확실성 스코어
- Planner (Plan) — 전략 선택·태스크 분해·ExecutionPlan
- Decision (Decide) — RBET 프레임·APPROVE/REJECT/PAUSE

### LearningZone 에이전트 (3종)
- Reflection (Verify→Reflect) — 품질 검증·근본 원인 분석
- LearningEng (Learn) — 지식 성숙도 관리·canonical 승격
- Evolution (Improve) — 헌법 개정안·워크플로 진화

### 데이터 구조 (8종)
PerceptionPayload, WorldState, ExecutionPlan, ActionDirective,
ReflectionReport, KnowledgeSummary, EvolutionProposal,
constitutionRegistry, loopGuard

### 근거
- #concept/_docs/ AKC v4 헌법 전면 구축
- 10차 백업 (2026-03-22)`
  },
  {
    version: "1.0.0",
    date: "2026-03-21",
    tag: "release",
    title: "교육 플랫폼 최초 릴리즈",
    summary: [
      "AKC v4 교육 플랫폼 index.html + edu-app.js 구축",
      "10개 모듈 · 32개 클래스 · 약 7시간 15분 교육 과정",
      "대시보드 + 수업 뷰 + 용어집 패널 + 퀴즈 시스템",
      "vocab-data.js 초기 용어 등록",
      "Supabase 진행률 동기화 연동"
    ],
    details: `## 최초 릴리즈

### 핵심 기능
- **대시보드**: 모듈별 진행률·퀴즈 점수·마스터리 매트릭스
- **수업 뷰**: 클래스별 이론·실습·핵심 용어·퀴즈
- **용어집 패널**: 영한 용어 사전 (카테고리별 분류)
- **진행률 관리**: localStorage + Supabase 동기화

### 교육 모듈 구성
M01~M10: 시스템 개요 → 인지 루프 → 실행 에이전트 → 자기 진화 → 종합 실습

### 기술 스택
- Tailwind CSS (CDN)
- Vanilla JS (SPA)
- Supabase (진행률 동기화)

### 근거
- AKC v4 헌법 기반 교육 커리큘럼 설계`
  }
];

// 태그별 색상·라벨
window.CHANGELOG_TAGS = {
  release:   { label: "릴리즈",    color: "#06B6D4", bg: "rgba(6,182,212,0.15)" },
  content:   { label: "콘텐츠",    color: "#A78BFA", bg: "rgba(167,139,250,0.15)" },
  policy:    { label: "정책 반영",  color: "#34D399", bg: "rgba(52,211,153,0.15)" },
  structure: { label: "구조 변경",  color: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
  fix:       { label: "버그 수정",  color: "#F87171", bg: "rgba(248,113,113,0.15)" },
};
