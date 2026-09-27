import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sliderImage1 from "../assets/sliderImages/sliderImage1.png";
import sliderImage2 from "../assets/sliderImages/sliderImage2.avif";
import sliderImage3 from "../assets/sliderImages/sliderImage3.avif";
import sliderImage4 from "../assets/sliderImages/sliderImage4.avif";
import sliderImage5 from "../assets/sliderImages/sliderImage5.jpeg";
import sliderImage6 from "../assets/sliderImages/sliderImage6.png";
import sliderImage7 from "../assets/sliderImages/sliderImage7.png";

const slides = [
  [
    "Understand Technology. Don't Just Memorize It.",
    "Clear explanations connect the idea on the screen to the systems it powers in the real world.",
    sliderImage1,
  ],
  [
    "From Concept to Practical Learning.",
    "Move from a clear mental model to deliberate technical practice.",
    sliderImage2,
  ],
  [
    "Practice in Ready-to-Use Virtual Environments.",
    "Access virtual environments for focused configuration and troubleshooting work.",
    sliderImage3,
  ],
  [
    "Configure. Troubleshoot. Solve.",
    "Build the reasoning habits that make technical work dependable.",
    sliderImage4,
  ],
  [
    "Learn Across Modern IT Technologies.",
    "Cloud, virtualization, networking, operating systems, programming, data, and AI.",
    sliderImage5,
  ],
  [
    "Training Built Around Your Requirements.",
    "Learning paths shaped around audience, skill level, technical needs, and objectives.",
    sliderImage6,
  ],
  [
    "12+ Years of Technical Training Experience.",
    "A practical learning approach refined across enterprise and academic environments.",
    sliderImage7,
  ],
];

export default function ShowcaseSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  const move = (amount) => {
    setCurrent(
      (current + amount + slides.length) % slides.length
    );
  };

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            relative
            rounded-2xl
            overflow-hidden
            shadow-xl
            border
            border-slate-200
            bg-slate-950
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Slides */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">

            {slides.map(([title, description, photo], index) => (
              <div
                key={title}
                className={`
                  absolute
                  inset-0
                  transition-all
                  duration-700
                  ease-in-out
                  ${
                    index === current
                      ? "opacity-100 translate-x-0 z-10"
                      : "opacity-0 translate-x-full z-0"
                  }
                `}
              >

                {/* Image */}
                <img
                  src={photo}
                  alt={title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* Dark gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-slate-950/90
                    via-slate-950/50
                    to-transparent
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-end
                    p-6
                    pb-14
                    sm:p-10
                    sm:pb-16
                    text-white
                  "
                >
                  <div className="max-w-2xl">

                    <h2
                      className="
                        text-2xl
                        sm:text-4xl
                        lg:text-[2.6rem]
                        font-extrabold
                        tracking-tight
                        leading-tight
                      "
                    >
                      {title}
                    </h2>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-slate-200
                      "
                    >
                      {description}
                    </p>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Previous Button */}
          <button
            onClick={() => move(-1)}
            aria-label="Previous slide"
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-brand-navy/80
              backdrop-blur-sm
              hover:bg-brand-blue
              text-white
              flex
              items-center
              justify-center
              z-20
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
            "
          >
            <ChevronLeft size={21} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => move(1)}
            aria-label="Next slide"
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-brand-navy/80
              backdrop-blur-sm
              hover:bg-brand-blue
              text-white
              flex
              items-center
              justify-center
              z-20
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
            "
          >
            <ChevronRight size={21} />
          </button>

          {/* Slide Indicators */}
          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              flex
              items-center
              gap-2
              z-20
            "
          >
            {slides.map(([title], index) => (
              <button
                key={title}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === current
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}