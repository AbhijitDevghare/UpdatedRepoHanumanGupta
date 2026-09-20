import { Users } from "lucide-react";

export default function TargetAudience({ audience }) {
  return <section><div className="flex items-center gap-3"><Users className="text-brand-blue" size={22} /><h2 className="text-2xl font-extrabold text-brand-navy">Who Is This Course For?</h2></div><div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">{audience.map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 shadow-sm">{item}</div>)}</div></section>;
}
