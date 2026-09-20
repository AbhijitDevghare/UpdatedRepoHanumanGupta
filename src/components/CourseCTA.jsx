import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCTA({ course }) {
  return <section className="rounded-2xl bg-brand-navy p-8 text-center text-white shadow-xl sm:p-12"><h2 className="text-3xl font-extrabold">Ready to Start Learning?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">Talk with the academy about the {course.name} learning path, delivery format, and next steps.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to={`/contact?course=${encodeURIComponent(course.name)}`} className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-slate-100">Enquire About This Course <ArrowRight size={16} className="ml-2" /></Link><Link to="/contact" className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-500">Contact Us</Link></div></section>;
}
