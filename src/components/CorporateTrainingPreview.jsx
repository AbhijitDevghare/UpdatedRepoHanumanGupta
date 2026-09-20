import { Link } from "react-router-dom";

import CorporateTraining1 from "../assets/corporate-training/corporate-training-1.png";

export default function CorporateTrainingPreview() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Enterprise Workforce
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Corporate Training
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Practical technical training designed around organizational
            requirements and real-world technology environments.
          </p>
        </div>

        {/* Single Corporate Training Image */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <img
              src={CorporateTraining1}
              alt="Corporate professionals participating in technical training"
              className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-white">
                Professional Technical Training
              </p>

              <p className="text-sm text-white/90 mt-1">
                Upskilling teams with practical, industry-focused learning
              </p>
            </div>

          </div>
        </div>

        {/* Supporting line */}
        <div className="mt-7 text-center">
          <p className="text-sm text-slate-500">
            Upskilling • Reskilling • Customized Training
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link
            to="/corporate-training"
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
            Explore Corporate Training
            <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}