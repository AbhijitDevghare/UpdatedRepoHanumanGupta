import { BookOpenText } from "lucide-react";

export default function CourseOverview({ course }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue"><BookOpenText size={20} /></span><h2 className="text-2xl font-extrabold text-brand-navy">About This Course</h2></div><p className="mt-5 max-w-4xl leading-relaxed text-slate-600">{course.fullDescription}</p></section>;
}
