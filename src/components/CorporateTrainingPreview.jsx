import { Link } from "react-router-dom";
import { ArrowRight, Building2, Settings2 } from "lucide-react";

import CorporateTraining1 from "../assets/corporate-training/corporate-training-1.png";

export default function CorporateTrainingPreview() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img
              src={CorporateTraining1}
              alt="Corporate professionals participating in technical training"
              className="
                h-[280px] w-full object-cover
                transition-transform duration-500
                hover:scale-105
                sm:h-[360px]
                lg:h-[390px]
              "
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Corporate Training
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
              Develop skills that{" "}
              <span className="text-brand-blue">
                drive your team forward.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Practical technical training designed around your
              organization’s requirements, technology environment,
              and learning objectives.
            </p>

            {/* Training Benefits */}
            <div className="mt-7 space-y-4">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Building2 size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Built around your organization
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Training can be aligned with your team’s roles,
                    requirements, and technology environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Settings2 size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Practical and technology-focused
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Hands-on learning focused on technologies and
                    real-world IT scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/corporate-training"
                className="
                  inline-flex items-center gap-2
                  rounded-lg bg-brand-navy
                  px-5 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-brand-blue
                "
              >
                Explore Corporate Training
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}