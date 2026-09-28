import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";

import CollegeTraining1 from "../assets/training/college-training-1.png";

export default function CollegeTrainingPreview() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={CollegeTraining1}
              alt="College students participating in technical IT training"
              className="
                h-[280px]
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
                sm:h-[360px]
                lg:h-[390px]
              "
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              For Colleges & Students
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
              Bridge the gap between{" "}
              <span className="text-brand-blue">
                academics and industry.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Give students practical exposure to the technologies
              and skills used in modern IT environments through
              structured technical training.
            </p>

            {/* Key points */}
            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <BookOpen size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Industry-ready skills
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Training focused on relevant IT technologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <FlaskConical size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Hands-on practice
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Practical sessions built around real-world scenarios.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-7">
              <Link
                to="/college-training"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-brand-navy
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-brand-blue
                "
              >
                Explore College Training
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}