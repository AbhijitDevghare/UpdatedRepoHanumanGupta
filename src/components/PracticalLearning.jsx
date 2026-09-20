import { Laptop, Network, Wrench } from "lucide-react";

export default function PracticalLearning({ course }) {
  return (
    <section className="rounded-2xl bg-brand-navy p-7 text-white shadow-xl sm:p-9">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue">
          <Wrench size={20} />
        </span>
        <h2 className="text-2xl font-extrabold">Practical Learning</h2>
      </div>
      <p className="mt-4 max-w-2xl text-slate-300">
        {course.practicalLearning}. The academy uses virtual and remote IT
        environments for guided practice; this page does not imply physical
        hardware access.
      </p>
      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {course.practical.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/40 p-4 text-sm text-slate-200"
          >
            <Laptop size={17} className="mt-0.5 shrink-0 text-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
