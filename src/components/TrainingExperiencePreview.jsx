import { useEffect, useState } from "react";
import { companies } from "../data/companies";

export default function TrainingExperiencePreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalCompanies = companies.length;

  // Number of visible logos
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible logos when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalCompanies - visibleCount);

  // Keep index valid when screen changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto slide
  useEffect(() => {
    if (isPaused || totalCompanies <= visibleCount) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, totalCompanies, visibleCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Training Experience
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Organizations We've Trained
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            12+ years of technical training experience across leading
            organizations.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous organizations"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-slate-200
              shadow-md
              flex
              items-center
              justify-center
              text-brand-navy
              hover:bg-brand-navy
              hover:text-white
              transition-all
            "
          >
            ←
          </button>

          {/* Viewport */}
          <div className="overflow-hidden mx-12">

            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / visibleCount}%`,
                  }}
                >
                  <div
                    className="
                      h-32
                      sm:h-36
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      flex
                      items-center
                      justify-center
                      px-6
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:border-slate-300
                      hover:shadow-lg
                    "
                  >
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="
                        max-h-16
                        sm:max-h-20
                        max-w-[190px]
                        sm:max-w-[220px]
                        w-auto
                        object-contain
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next organizations"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-slate-200
              shadow-md
              flex
              items-center
              justify-center
              text-brand-navy
              hover:bg-brand-navy
              hover:text-white
              transition-all
            "
          >
            →
          </button>

        </div>

        {/* Slide indicators */}
        {totalCompanies > visibleCount && (
          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "w-6 bg-brand-navy"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }
                `}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}