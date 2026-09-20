import { Check } from "lucide-react";

export default function LearningOutcomes({ outcomes }) {
  return <section><span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">Learning outcomes</span><h2 className="mt-2 text-3xl font-extrabold text-brand-navy">What You Will Learn</h2><div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"><Check size={18} className="mt-0.5 shrink-0 text-brand-blue" />{outcome}</div>)}</div></section>;
}
