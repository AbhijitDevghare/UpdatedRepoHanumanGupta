import { ListChecks } from "lucide-react";

export default function Prerequisites({ prerequisites }) {
  return <section className="rounded-xl border border-slate-200 bg-slate-50 p-6"><div className="flex items-center gap-3"><ListChecks className="text-brand-blue" size={21} /><h2 className="text-xl font-extrabold text-brand-navy">Prerequisites</h2></div><ul className="mt-4 space-y-2 text-sm text-slate-600">{prerequisites.map((item) => <li key={item}>• {item}</li>)}</ul></section>;
}
