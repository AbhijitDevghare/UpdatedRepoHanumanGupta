import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import Alumini1 from "../assets/alumini/alumini1.jpeg"

// Replace these with real alumni details and photos.
const alumni = [
{
    name: "Abhijit Devghare",
    role: "Network Engineer",
    company: "Persistent Systems",
    course: "CCNA Training",
    image: Alumini1,
    testimonial:
      "The hands-on labs made the learning experience much more practical. I was able to apply what I learned beyond the classroom.",
  },
  {
    name: "Abhijit Devghare",
    role: "Network Engineer",
    company: "Persistent Systems",
    course: "CCNA Training",
    image: "../assets/alumini/alumini1.jpeg",
    testimonial:
      "The hands-on labs made the learning experience much more practical. I was able to apply what I learned beyond the classroom.",
  },
  {
    name: "Abhijit Devghare",
    role: "Network Engineer",
    company: "Persistent Systems",
    course: "CCNA Training",
    image: "../assets/alumini/alumini1.jpeg",
    testimonial:
      "The hands-on labs made the learning experience much more practical. I was able to apply what I learned beyond the classroom.",
  },
];

export default function AlumniSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % alumni.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + alumni.length) % alumni.length);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const person = alumni[current];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Alumni Stories
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            From Training to the Workplace
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
            Hear from learners who have taken their technical training into
            real-world IT environments.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <div className="grid md:grid-cols-[280px_1fr]">

              {/* Alumni Image */}
              <div className="relative h-[280px] md:h-[360px] bg-slate-200">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                <Quote
                  size={42}
                  strokeWidth={1.5}
                  className="text-brand-blue/20 mb-5"
                />

                <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium text-brand-navy">
                  “{person.testimonial}”
                </blockquote>

                <div className="mt-7">

                  <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {person.role}
                  </p>

                  <p className="mt-1 text-sm font-medium text-brand-blue">
                    {person.company}
                  </p>

                  <div className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {person.course}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to alumni ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-brand-blue"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={previousSlide}
                aria-label="Previous alumni"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next alumni"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}