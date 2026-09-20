import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allCourses } from "../data/courses";

export default function RelatedCourses({ course }) {
  const related = course.relatedCourses.map((slug) => allCourses.find((item) => item.slug === slug)).filter(Boolean).slice(0, 4);
  if (!related.length) return null;
  return <section><div className="flex items-end justify-between gap-4"><div><span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">Continue learning</span><h2 className="mt-2 text-3xl font-extrabold text-brand-navy">Related Courses</h2></div></div><div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <Link key={item.slug} to={`/courses/${item.categorySlug}/${item.slug}`} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-md"><span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-blue">{item.category}</span><h3 className="mt-3 font-bold text-brand-navy">{item.name}</h3><span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue">View course <ArrowRight size={15} className="ml-1 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></section>;
}
