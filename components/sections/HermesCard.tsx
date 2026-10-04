import type { PersonalExperience } from "@/content/personal";
import { Tag } from "@/components/ui/Tag";

export function HermesCard({ hermes }: { hermes: PersonalExperience }) {
  return (
    <div className="reveal card p-6 md:p-7" style={{ transitionDelay: "70ms" }}>
      <p className="mb-4 font-[family-name:var(--font-mono)] text-xs font-semibold tracking-[var(--tracking-wide)] text-blue uppercase">
        Personal AI
      </p>
      <p className="mb-1 font-[family-name:var(--font-mono)] text-[10px] font-medium tracking-wide text-muted uppercase">
        {hermes.period}
      </p>
      <p className="text-sm font-bold text-text">
        {hermes.title} <span className="font-medium text-sub">· {hermes.role}</span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-sub">{hermes.oneLiner}</p>
      <ul className="mt-3 space-y-2">
        {hermes.points.map((point) => (
          <li key={point.label} className="flex gap-2.5 text-sm leading-relaxed text-sub">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
            <span>
              <span className="font-semibold text-text">{point.label}</span> — {point.detail}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-sub">{hermes.outcome}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {hermes.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}
