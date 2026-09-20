import { Link } from "react-router-dom";

import CollegeTraining1 from "../assets/training/college-training-1.png";

export default function CollegeTrainingPreview() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Higher Education
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            College Training
          </h2>

          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Practical IT training that connects classroom learning with
            real-world skills.
          </p>
        </div>

        {/* Single Training Image */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={CollegeTraining1}
              alt="College students participating in technical IT training"
              className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-white">
                Practical & Hands-on Technical Training
              </p>
              <p className="text-sm text-white/90 mt-1">
                Industry-focused learning for college students
              </p>
            </div>
          </div>
        </div>

        {/* Supporting line */}
        <div className="mt-7 text-center">
          <p className="text-sm text-slate-500">
            Industry-focused • Practical • Hands-on
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            to="/college-training"
            className="
              inline-flex items-center
              rounded-lg
              bg-brand-navy
              px-6 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-brand-blue
            "
          >
            Explore College Training
            <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}