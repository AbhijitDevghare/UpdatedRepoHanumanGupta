import { CheckCircle2 } from "lucide-react";

export default function CourseHighlights({ highlights }) {
  return <section><span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">Course focus</span><h2 className="mt-2 text-2xl font-extrabold text-brand-navy">Course Highlights</h2><div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{highlights.map((highlight) => <div key={highlight} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"><CheckCircle2 size={18} className="shrink-0 text-brand-blue" />{highlight}</div>)}</div></section>;
}
