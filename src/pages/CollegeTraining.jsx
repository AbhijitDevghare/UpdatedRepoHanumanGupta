import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   COLLEGE IMAGES
========================================================= */

import AmrapaliCollege from "../assets/colleges/image.png";
import PSITCollege from "../assets/colleges/PSIT.jpeg";
import MPCECollege from "../assets/colleges/MP.jpeg";
import BBSCollege from "../assets/colleges/BabaBhagSinghEngineeringCollege.jpg";

/* =========================================================
   COLLEGES
========================================================= */

const colleges = [
  {
    name: "Amrapali Institute of Technology",
    image: AmrapaliCollege,
  },
  {
    name: "PSIT Kanpur",
    image: PSITCollege,
  },
  {
    name: "Maharana Pratap Engineering College",
    image: MPCECollege,
  },
  {
    name: "Baba Bhag Singh Engineering College",
    image: BBSCollege,
  },
];

/* =========================================================
   TRAINING AREAS
========================================================= */

const trainingAreas = [
  {
    title: "Networking",
    icon: Network,
    description:
      "Networking fundamentals, routing, switching, VLANs and practical troubleshooting.",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Cloud concepts, infrastructure, networking and practical cloud environments.",
  },
  {
    title: "VMware & Virtualization",
    icon: Server,
    description:
      "Virtual machines, ESXi, vCenter and virtualization infrastructure.",
  },
  {
    title: "Linux",
    icon: Terminal,
    description:
      "Linux commands, system administration, permissions, services and networking.",
  },
  {
    title: "Windows Server",
    icon: Server,
    description:
      "Windows Server administration, Active Directory, DNS, DHCP and PowerShell.",
  },
  {
    title: "Programming & Development",
    icon: Code2,
    description:
      "Programming fundamentals and development concepts for practical technical learning.",
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
   LEARNING POINTS
========================================================= */

const learningPoints = [
  {
    number: "01",
    title: "Understand",
    text:
      "Learn the fundamentals and understand how the technology is used in real IT environments.",
  },
  {
    number: "02",
    title: "Practice",
    text:
      "Work through demonstrations, configurations and practical technical exercises.",
  },
  {
    number: "03",
    title: "Troubleshoot",
    text:
      "Understand how to identify configuration problems and approach technical issues.",
  },
  {
    number: "04",
    title: "Apply",
    text:
      "Connect classroom concepts with practical scenarios and real-world technology use.",
  },
];

/* =========================================================
   COLLEGE CARD
========================================================= */

function CollegeCard({ college }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-blue-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

      <div className="relative h-60 overflow-hidden">

        <img
          src={college.image}
          alt={`${college.name} campus`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

      </div>

      <div className="p-6">

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
          College Training
        </p>

        <h3 className="mt-2 text-lg font-bold leading-6 text-slate-950">
          {college.name}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

          <Check
            size={15}
            className="text-blue-600"
            strokeWidth={2}
          />

          <span>Technical Training</span>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CollegeTraining() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="border-b border-blue-100 bg-white">

          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

            <div className="max-w-4xl">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                College Training
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Practical IT training
                <span className="block text-blue-700">
                  for college students.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Industry-focused technical training that helps students
                develop practical IT skills alongside their academic
                learning.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                Programs can be structured around the institution, student
                level, technology requirements and available training
                duration.
              </p>

            </div>

            {/* INFORMATION STRIP */}

            <div className="mt-12 grid border-t border-blue-100 pt-7 sm:grid-cols-2 lg:grid-cols-4">

              <div className="border-b border-blue-100 py-4 sm:border-r sm:px-6 lg:border-b-0">

                <p className="text-sm font-semibold text-slate-950">
                  Technical Training
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Industry-oriented learning
                </p>

              </div>

              <div className="border-b border-blue-100 py-4 sm:px-6 lg:border-r lg:border-b-0">

                <p className="text-sm font-semibold text-slate-950">
                  Practical Sessions
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Learn through application
                </p>

              </div>

              <div className="border-b border-blue-100 py-4 sm:border-r sm:px-6 lg:border-b-0">

                <p className="text-sm font-semibold text-slate-950">
                  Virtual Labs
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Hands-on environments
                </p>

              </div>

              <div className="py-4 sm:px-6">

                <p className="text-sm font-semibold text-slate-950">
                  Workshops
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Focused technical programs
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Practical Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Connecting classroom learning with practical IT
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">

              <p>
                Academic learning gives students the foundation, while
                practical exposure helps them understand how technology
                works in real environments.
              </p>

              <p>
                Our college training programs combine instructor-led
                learning with demonstrations, practical exercises and
                technology-focused sessions.
              </p>

              <p>
                The training can help students build a stronger technical
                foundation for projects, internships, certifications and
                future IT roles.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            TECHNOLOGY AREAS
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              <div className="max-w-3xl">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  What Students Learn
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Core technology areas
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Training can focus on one technology or combine multiple
                  areas depending on the requirements of the institution
                  and students.
                </p>

              </div>

              <div className="hidden h-px flex-1 bg-blue-100 lg:ml-12 lg:block" />

            </div>

            <div className="mt-12 grid border-t border-blue-100 md:grid-cols-2 lg:grid-cols-3">

              {trainingAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className={`
                      group border-b border-blue-100 py-8
                      lg:px-7
                      ${index % 3 !== 0 ? "lg:border-l" : ""}
                      ${index % 2 !== 0 ? "md:border-l" : ""}
                    `}
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 ring-1 ring-inset ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-base font-bold text-slate-950">
                        {area.title}
                      </h3>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =================================================
            PRACTICAL LEARNING
        ================================================= */}

        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Learning Approach
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  More than classroom theory
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Students can move from understanding a technology to
                  applying the concepts through demonstrations, practical
                  exercises and hands-on learning.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Where appropriate, virtual labs can also be included so
                  students can work with technology and practice technical
                  tasks in a controlled environment.
                </p>

                <Link
                  to="/it-labs"
                  className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Explore IT Labs
                  <ArrowRight size={16} className="ml-2" />
                </Link>

              </div>

              <div className="grid border-t border-blue-100 sm:grid-cols-2 sm:border-t-0">

                {learningPoints.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      border-b border-blue-100 py-7
                      sm:px-6
                      ${index % 2 !== 0 ? "sm:border-l" : ""}
                    `}
                  >

                    <div className="flex items-center gap-4">

                      <span className="text-xs font-bold tracking-wider text-blue-600">
                        {item.number}
                      </span>

                      <h3 className="text-sm font-bold text-slate-950">
                        {item.title}
                      </h3>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            COLLEGES
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Training Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Colleges we have trained
                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-slate-600">
                Technical training programs delivered for students across
                engineering and technology institutions.
              </p>

            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {colleges.map((college) => (
                <CollegeCard
                  key={college.name}
                  college={college}
                />
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            TRAINING FORMATS
        ================================================= */}

        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Programs
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Training designed around students
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Programs can be structured according to the institution,
                  student level, technology requirements and available
                  training duration.
                </p>

              </div>

              <div className="border-y border-blue-100">

                {formats.map((format, index) => (
                  <div
                    key={format}
                    className="flex items-center gap-5 border-b border-blue-100 py-5 last:border-b-0"
                  >

                    <span className="w-8 text-xs font-bold text-blue-600">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {format}
                    </span>

                    <ArrowRight
                      size={15}
                      className="ml-auto text-blue-400"
                    />

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="px-4 pb-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-brand-navy">

            <div className="px-6 py-14 sm:px-12 sm:py-16">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                College Training
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Looking for technical training for your college?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Discuss your student training requirements, technology areas
                and preferred program format.
              </p>

              <Link
                to="/contact?type=college-training"
                className="mt-7 inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-blue-50"
              >
                Contact Us
                <ArrowRight size={17} className="ml-2" />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}