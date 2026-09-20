import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-mono font-bold">
                N
              </div>
              <span className="text-xl font-extrabold">NexusTech Academy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Professional technical IT training organization providing
              practical, lab-driven learning for corporates, colleges, IT
              professionals, and engineering students.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              training@nexustech.edu
              <br />
              +1 (800) 550-LABS
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Courses
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="hover:text-white"
                  >
                    {course.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Training &amp; Labs
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/it-labs">IT Labs Overview</Link>
              </li>
              <li>
                <Link to="/corporate-training">Corporate Training</Link>
              </li>
              <li>
                <Link to="/college-training">College Training</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/training-experience">Training Experience</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between text-xs font-mono text-slate-500 gap-4">
          <span>
            © 2025 NexusTech Academy. Industry-Relevant Training. Real-World
            Skills.
          </span>
          <span>12+ Years Experience</span>
        </div>
      </div>
    </footer>
  );
}
