import type { SolutionPoint } from "./types";

export interface PersonalExperience {
  period: string;
  title: string;
  role: string;
  oneLiner: string;
  points: SolutionPoint[];
  outcome: string;
  stack: string[];
}

/** 개인 AI 업무 환경 — 프로젝트 카드가 아니라 홈 교육 아래 별도 블록으로 렌더한다. */
export const hermes: PersonalExperience = {
  period: "2026.07 ~ 현재",
  title: "HERMES",
  role: "개인 프로젝트 · 설계·구축·운영 단독",
  oneLiner: "대화로 정한 관심사·규칙을 기억해 뉴스·채용·학습 업무를 자동화하는 개인 AI 업무 환경",
  points: [
    {
      label: "AI 판단 오류를 규칙으로 보정",
      detail:
        "관심사·우선순위와 어긋날 때마다 대화 피드백을 메모리·Skill에 반영하고, 반복 오판은 Hook 규칙으로 전환했다.",
    },
    {
      label: "스크립트와 AI의 역할 분리",
      detail:
        "규칙이 명확한 수집은 스크립트로 실행하고 요약·선별만 AI에 맡겼다. 원본 검증이 실패하면 Notion 쓰기를 멈추고 원인을 기록한다.",
    },
  ],
  outcome:
    "최근 30일간 684건 중 630건을 완료해 92.1%를 처리했고, Cron 자동화 10개를 VPS에서 상시 운영하며, 그중 3개는 LLM 없이 스크립트로 실행한다.",
  stack: ["Hermes Agent", "Linux VPS", "Discord", "MCP", "Notion", "Obsidian", "GitHub", "Cron", "Python", "Hook"],
};
