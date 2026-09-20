import { Link } from "react-router-dom";

import LabImage from "../assets/labs/networking.png";

export default function ITLabsPreview() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={LabImage}
                alt="Virtual IT lab environment for hands-on technical practice"
                className="
                  w-full
                  h-[300px]
                  sm:h-[380px]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Small floating label */}
            <div className="
              absolute
              bottom-4
              left-4
              rounded-lg
              bg-white/95
              backdrop-blur-sm
              border
              border-slate-200
              px-4
              py-2
              shadow-sm
            ">
              <p className="text-xs font-semibold text-brand-navy">
                Hands-on IT Practice
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Virtual IT Labs
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3">
              Practice What You Learn
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              Get access to practical virtual environments where you can
              configure, troubleshoot, and experiment with real IT
              technologies.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Networking",
                "Linux",
                "Windows Server",
                "VMware",
                "Cloud",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/it-labs"
              className="
                inline-flex
                items-center
                mt-8
                rounded-lg
                bg-brand-navy
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-brand-blue
              "
            >
              Explore IT Labs
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}