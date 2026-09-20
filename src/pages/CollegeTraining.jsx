import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Code2,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   COLLEGE TRAINING EXPERIENCE
   ========================================================= */

const colleges = [
  "Amrapali Institute of Technology",
  "PSIT Kanpur",
  "Maharana Pratap Engineering College",
  "Baba Bhag Singh Engineering College",
];

/* =========================================================
   TRAINING AREAS
   ========================================================= */

const trainingAreas = [
  {
    title: "Networking",
    icon: Network,
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
  },
  {
    title: "VMware & Virtualization",
    icon: Server,
  },
  {
    title: "Linux",
    icon: Terminal,
  },
  {
    title: "Windows Server",
    icon: Server,
  },
  {
    title: "Programming & Development",
    icon: Code2,
  },
];

/* =========================================================
   TRAINING FORMATS
   ========================================================= */

const formats = [
  "Industrial Training",
  "Technical Workshops",
  "College Training Programs",
  "Hands-on Lab Sessions",
];

/* =========================================================
   COLLEGE CARD
   ========================================================= */

function CollegeCard({ name }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
          </svg>
        </div>

        <p className="text-sm font-semibold leading-relaxed text-slate-800">
          {name}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function CollegeTraining() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="border-b border-slate-200 py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              College Training
            </span>

            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Practical IT Training for College Students
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Industry-focused technical training that helps students build
              practical skills alongside their academic learning.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Courses
                <ArrowRight size={16} className="ml-2" />
              </Link>

              <Link
                to="/contact?type=college-training"
                className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
              >
                Partner With Us
              </Link>
            </div>

          </div>
        </section>


        {/* =================================================
            COLLEGE EXPERIENCE
        ================================================= */}

        <section className="border-b border-slate-200 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Training Experience
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                College Training Experience
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
                Technical training programs delivered for students across
                engineering and technology institutions.
              </p>

            </div>


            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">

              {colleges.map((college) => (
                <CollegeCard
                  key={college}
                  name={college}
                />
              ))}

            </div>

          </div>
        </section>


        {/* =================================================
            TRAINING AREAS
        ================================================= */}

        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                What Students Learn
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Core Technology Areas
              </h2>

            </div>


            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">

              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-semibold text-slate-800">
                      {area.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>
        </section>


        {/* =================================================
            TRAINING FORMATS
        ================================================= */}

        <section className="border-b border-slate-200 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-10 md:grid-cols-2">

              <div>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Programs
                </span>

                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Training Designed Around Students
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Programs can be structured according to the institution,
                  student level, technology requirements, and available
                  training duration.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-3">

                {formats.map((format) => (
                  <div
                    key={format}
                    className="rounded-xl bg-slate-50 p-4 text-sm font-semibold text-slate-800"
                  >
                    {format}
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

            <div className="rounded-2xl bg-brand-navy px-6 py-12 text-center sm:px-12">

              <h2 className="text-3xl font-bold text-white">
                Looking for Technical Training for Your College?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
                Discuss your student training requirements, technology areas,
                and preferred program format.
              </p>

              <Link
                to="/contact?type=college-training"
                className="mt-7 inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
              >
                Contact Us
                <ArrowRight size={16} className="ml-2" />
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}