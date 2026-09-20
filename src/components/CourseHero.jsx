import { ArrowRight, BookOpen, Clock3, Download, Laptop, Signal } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseHero({ course }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-brand-navy py-16 text-white lg:py-20">
      <div className="absolute inset-0 tech-grid-dense opacity-20" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-300">{course.category}</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{course.name} Training</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{course.fullDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {course.curriculumPdf ? <a href={course.curriculumPdf} download className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-slate-100"><Download size={16} className="mr-2" />Download Curriculum</a> : <span className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300"><Download size={16} className="mr-2" />Curriculum PDF coming soon</span>}
            <Link to={`/contact?course=${encodeURIComponent(course.name)}`} className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-500">Enquire Now <ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
            <div className="relative aspect-[16/10]">
              <img src={course.image} alt={course.imageAlt} className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-md border border-cyan-300/30 bg-brand-navy/80 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-cyan-200">{course.category} / curriculum</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-800 sm:grid-cols-4">
              {[[BookOpen, "Level", course.level], [Clock3, "Duration", course.duration], [Laptop, "Learning", course.learningMode], [Signal, "Practice", "Virtual labs"]].map(([Icon, label, value]) => <div key={label} className="bg-slate-950 p-4"><Icon size={16} className="text-cyan-300" /><span className="mt-2 block text-[10px] font-mono uppercase text-slate-500">{label}</span><span className="mt-1 block text-xs font-semibold text-slate-200">{value}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
