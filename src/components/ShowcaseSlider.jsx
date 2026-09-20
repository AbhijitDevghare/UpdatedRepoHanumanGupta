import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  [
    "Understand Technology. Don't Just Memorize It.",
    "Clear explanations connect the idea on the screen to the systems it powers in the real world.",
    "photo-1524178232363-1fb2b075b655",
  ],
  [
    "From Concept to Practical Learning.",
    "Move from a clear mental model to deliberate technical practice.",
    "photo-1516321318423-f06f85e504b3",
  ],
  [
    "Practice in Ready-to-Use Virtual Environments.",
    "Access virtual environments for focused configuration and troubleshooting work.",
    "photo-1558494949-ef010cbdcc31",
  ],
  [
    "Configure. Troubleshoot. Solve.",
    "Build the reasoning habits that make technical work dependable.",
    "photo-1518770660439-4636190af475",
  ],
  [
    "Learn Across Modern IT Technologies.",
    "Cloud, virtualization, networking, operating systems, programming, data, and AI.",
    "photo-1556761175-b413da4baf72",
  ],
  [
    "Training Built Around Your Requirements.",
    "Learning paths shaped around audience, skill level, technical needs, and objectives.",
    "photo-1521737711867-e3b97375b902",
  ],
  [
    "12+ Years of Technical Training Experience.",
    "A practical learning approach refined across enterprise and academic environments.",
    "photo-1551836022-d5d88e9218df",
  ],
];
const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`;

export default function ShowcaseSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(
      () => setCurrent((value) => (value + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [paused]);
  const move = (amount) =>
    setCurrent((current + amount + slides.length) % slides.length);
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
            {slides.map(([title, description, photo], index) => (
              <div
                key={title}
                className={`showcase-slide absolute inset-0 transition-all duration-700 ease-in-out ${index === current ? "active opacity-100 z-10" : "opacity-0 translate-x-full z-0"}`}
              >
                <img
                  src={image(photo)}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent" />
                <div className="showcase-copy absolute inset-y-0 left-0 flex items-end p-6 pb-14 sm:p-10 sm:pb-16 text-white">
                  <div className="max-w-2xl">
                    <span className="text-xs font-mono uppercase tracking-[.24em] text-cyan-300">
                      {String(index + 1).padStart(2, "0")} / NEXUSTECH ACADEMY
                    </span>
                    <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                      {title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => move(-1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-navy/80 hover:bg-brand-blue text-white flex items-center justify-center z-20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => move(1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-navy/80 hover:bg-brand-blue text-white flex items-center justify-center z-20"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {slides.map(([title], index) => (
              <button
                key={title}
                onClick={() => setCurrent(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${index === current ? "w-7 bg-white" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
