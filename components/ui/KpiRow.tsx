import type { ProjectKpi } from "@/content/types";

export function KpiRow({ kpis }: { kpis: ProjectKpi[] }) {
  return (
    <div className="reveal grid grid-cols-1 gap-3 sm:grid-cols-3">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="card p-5">
          <p className="text-2xl font-bold text-blue">{kpi.value}</p>
          <p className="mt-1.5 text-sm font-bold text-text">{kpi.label}</p>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] text-muted">{kpi.sub}</p>
        </div>
      ))}
    </div>
  );
}
