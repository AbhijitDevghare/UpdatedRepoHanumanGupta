import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Monitor, Wrench } from "lucide-react";

import LabImage from "../assets/homeImages/ITLabs.png";

export default function ITLabsPreview() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img
              src={LabImage}
              alt="Virtual IT lab environment for hands-on technical practice"
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

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
              Learn by{" "}
              <span className="text-brand-blue">
                doing.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Practice your technical skills in virtual lab environments
              designed for real-world IT training. Configure systems,
              troubleshoot issues, and gain practical experience.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <FlaskConical size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Hands-on practice
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Work with practical IT scenarios instead of only
                    learning theory.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Monitor size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Real technology environments
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Practice across networking, Linux, Windows Server,
                    VMware, and cloud technologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Wrench size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    Configure & troubleshoot
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Build confidence by configuring systems and solving
                    common technical problems.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/it-labs"
                className="
                  inline-flex items-center gap-2 rounded-lg
                  bg-brand-navy px-5 py-3 text-sm font-semibold
                  text-white transition
                  hover:bg-brand-blue
                "
              >
                Explore IT Labs
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}