import { Link } from "react-router-dom";
export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-3xl p-10 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 tech-grid-dense opacity-15" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex px-3 py-1 rounded bg-slate-800 text-cyan-400 font-mono text-xs">
              START YOUR ACCELERATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-6">
              Let&apos;s Build Your Technical Learning Journey
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-5">
              Choose the right technology path, practice in virtual
              environments, and build skills that translate into real IT work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link
                to="/courses"
                className="px-8 py-4 rounded-xl text-brand-navy bg-white hover:bg-slate-100 font-bold text-sm"
              >
                Explore Courses →
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl text-white bg-brand-blue hover:bg-cyan-500 font-bold text-sm"
              >
                Request Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
