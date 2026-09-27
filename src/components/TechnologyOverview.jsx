import {
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { technologyPreviews } from "../data/technologyPreviews";

const icons = {
  bot: Bot,
  cloud: Cloud,
  code: Code2,
  database: Database,
  network: Network,
  server: Server,
  terminal: Terminal,
};

export default function TechnologyOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const technologyNavRef = useRef(null);

  const activeTechnology = technologyPreviews[activeIndex];

  const scrollTechnologyNav = (direction) => {
    if (!technologyNavRef.current) return;

    technologyNavRef.current.scrollBy({
      left: direction * 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Explore the Technology Landscape
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A concise overview of the technology paths available across modern
            IT infrastructure and development.
          </p>
        </div>

        {/* TECHNOLOGY SLIDER */}
        <div className="relative mt-9">

          {/* LEFT ARROW */}
          <button
            onClick={() => scrollTechnologyNav(-1)}
            aria-label="Previous technologies"
            className="
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-md
              transition-all
              duration-200
              hover:border-brand-blue
              hover:bg-brand-blue
              hover:text-white
            "
          >
            <ChevronLeft size={19} />
          </button>

          {/* TECHNOLOGY BUTTONS */}
          <div
            ref={technologyNavRef}
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              px-12
              scrollbar-hide
              scroll-smooth
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {technologyPreviews.map((technology, index) => {
              const Icon = icons[technology.icon] || Server;
              const isActive = index === activeIndex;

              return (
                <button
                  key={technology.slug}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    whitespace-nowrap
                    rounded-lg
                    border
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "border-brand-navy bg-brand-navy text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue hover:text-brand-blue"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                  />

                  <span>{technology.category}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollTechnologyNav(1)}
            aria-label="Next technologies"
            className="
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-md
              transition-all
              duration-200
              hover:border-brand-blue
              hover:bg-brand-blue
              hover:text-white
            "
          >
            <ChevronRight size={19} />
          </button>

        </div>

        {/* STATIC TECHNOLOGY CARD */}
        <div className="mx-auto mt-10 max-w-3xl">

          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-white
              shadow-[0_6px_25px_rgba(15,23,42,0.07)]
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">

              {/* IMAGE */}
              <div className="h-[210px] sm:h-[250px]">
                <img
                  src={activeTechnology.image}
                  alt={activeTechnology.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-6 sm:p-7">

                <h3 className="text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                  {activeTechnology.category}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {activeTechnology.description}
                </p>

                <Link
                  to="/courses"
                  className="
                    group
                    mt-5
                    inline-flex
                    w-fit
                    items-center
                    rounded-lg
                    bg-brand-navy
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-brand-blue
                  "
                >
                  Explore Courses

                  <ArrowUpRight
                    size={16}
                    className="
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>

              </div>
            </div>
          </div>

        </div>

        {/* VIEW ALL COURSES */}
        <div className="mt-8 flex justify-center">

          <Link
            to="/courses"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-brand-navy
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-brand-blue
              hover:-translate-y-0.5
            "
          >
            View All Courses

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}