import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Cloud,
  GraduationCap,
  Network,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HanumanGupta from "../assets/trainer/HanumanGupta.png";
import TrainingHero from "../assets/training/college-training-1.png";

/* =========================================================
   FOUNDER DATA
========================================================= */

const founder = {
  name: "Hanuman Gupta",
  designation: "Founder & Technical Trainer",
  image: HanumanGupta,
  linkedin:
    "https://www.linkedin.com/in/hanuman-pd-gupta-578350249/",
};


/* =========================================================
   CAREER HISTORY
========================================================= */

const career = [
  {
    year: "2019 – Present",
    role: "Freelance Trainer – VMware & Cloud Computing",
    company: "Self-Employed",
    location: "Noida, Uttar Pradesh",
    description:
      "Conducting VMware professional training for corporate and student batches along with training in cloud computing, AWS, Azure, Nutanix, CCNA and Windows Server.",
  },

  {
    year: "2015 – 2019",
    role: "VMware Consultant",
    company: "HCL Technologies",
    location: "Noida, Uttar Pradesh",
    description:
      "Worked with VMware infrastructure, vCenter, ESXi, Nutanix infrastructure, VBlock environments, infrastructure upgrades, patching and data-center operations.",
  },

  {
    year: "2014 – 2015",
    role: "Training Manager",
    company: "Huawei Technologies",
    location: "Gurugram, Haryana",
    description:
      "Delivered training in cloud computing, routing and switching, storage, servers, Wi-Fi and Huawei technologies while supporting enterprise infrastructure and training programs.",
  },

  {
    year: "2011 – 2014",
    role: "IMS Trainer",
    company: "Pearson Education India Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    description:
      "Delivered training through VSAT on Windows Server, CCNA and Cloud Computing. Also supported student examinations, reporting and trainer development.",
  },

  {
    year: "2008 – 2010",
    role: "System Officer",
    company: "UPTEC Computer Consultancy Ltd.",
    location: "Greater Lucknow Area",
    description:
      "Conducted classroom training in MCITP, CCNA and A+. Worked with domain controllers, LAN and switches, proxy servers and internet bandwidth management.",
  },
];


/* =========================================================
   TECHNOLOGY AREAS
========================================================= */

const technologyAreas = [
  {
    icon: Server,
    title: "VMware & Virtualization",
    items: [
      "vCenter",
      "ESXi",
      "VBlock",
      "VMware Infrastructure",
    ],
  },

  {
    icon: Cloud,
    title: "Cloud Computing",
    items: [
      "Amazon AWS",
      "Microsoft Azure",
      "Cloud Infrastructure",
    ],
  },

  {
    icon: Network,
    title: "Networking",
    items: [
      "CCNA",
      "Routing & Switching",
      "Enterprise Networking",
    ],
  },

  {
    icon: BriefcaseBusiness,
    title: "Enterprise Infrastructure",
    items: [
      "Nutanix",
      "Servers",
      "Storage",
      "Data Centers",
    ],
  },
];


/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    title: "Nutanix Certified Professional",
    issuer: "Nutanix",
  },

  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    note: "Issued May 2022",
  },
];


/* =========================================================
   EDUCATION
========================================================= */

const education = {
  degree: "Bachelor of Arts",
  specialization: "Art / Art Studies, General",
  university: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
  period: "2007 – 2010",
};


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="overflow-hidden border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid min-h-[580px] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">

              {/* TEXT */}

              <div className="max-w-xl">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  About the Academy
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Built on
                  <span className="block">
                    real IT experience.
                  </span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                  Practical technical training shaped by years of experience
                  across VMware, cloud computing, networking, infrastructure
                  and enterprise technologies.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href="#founder"
                    className="inline-flex items-center rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
                  >
                    Meet the Founder
                    <ArrowRight size={16} className="ml-2" />
                  </a>

                  <Link
                    to="/courses"
                    className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    Explore Courses
                  </Link>

                </div>

              </div>


              {/* HERO IMAGE */}

              <div className="relative">

                <div className="overflow-hidden rounded-3xl bg-slate-100">

                  <img
                    src={TrainingHero}
                    alt="Students participating in technical IT training"
                    className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[560px]"
                  />

                </div>

                <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-lg sm:bottom-7 sm:left-7">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Technical Training
                  </p>

                  <p className="mt-1 text-sm font-bold text-brand-navy">
                    Learn • Practice • Apply
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="border-b border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Our Story
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
                  From infrastructure
                  <span className="block">
                    to technical training.
                  </span>
                </h2>

              </div>


              <div className="max-w-2xl">

                <p className="text-base leading-8 text-slate-600">
                  The academy is built around practical technical learning
                  across networking, systems, virtualization, cloud
                  computing and enterprise infrastructure.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Our training approach connects concepts with hands-on
                  practice so learners can understand not only what a
                  technology is, but how it is used in real environments.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUNDER
        ===================================================== */}

        <section
          id="founder"
          className="border-b border-slate-200 bg-white"
        >

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="mb-10">

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Founder
              </p>

              <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                Meet Hanuman Gupta
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Founder and technical trainer with professional experience
                spanning infrastructure, VMware, cloud computing, networking
                and technical education.
              </p>

            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200">

              <div className="grid md:grid-cols-[380px_1fr]">

                {/* FOUNDER IMAGE */}

                <div className="h-[400px] bg-slate-100 md:h-full">

                  <img
                    src={founder.image}
                    alt="Hanuman Gupta - Founder and Technical Trainer"
                    className="h-full w-full object-cover"
                  />

                </div>


                {/* FOUNDER INFORMATION */}

                <div className="p-7 sm:p-10 lg:p-12">

                  <p className="text-sm font-semibold text-brand-blue">
                    {founder.designation}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-brand-navy">
                    Hanuman Gupta
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    Hanuman Gupta has worked across technical training and
                    enterprise IT environments, including VMware infrastructure,
                    cloud computing, networking, servers, storage and
                    virtualization.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    His experience includes technical training for students,
                    professionals and corporate environments, as well as
                    hands-on infrastructure roles involving VMware,
                    Nutanix, VBlock and data-center technologies.
                  </p>


                  {/* LINKEDIN */}

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>

                    View LinkedIn Profile

                    <ArrowRight size={15} />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CAREER JOURNEY
        ===================================================== */}

        <section className="border-b border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Career Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                Experience across IT & training
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A career combining enterprise infrastructure experience
                with technical training and education.
              </p>

            </div>


            {/* TIMELINE */}

            <div className="relative mt-12">

              {/* Desktop line */}

              <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-slate-300 md:block" />

              <div className="space-y-8">

                {career.map((item) => (

                  <article
                    key={`${item.year}-${item.company}`}
                    className="relative grid gap-5 md:grid-cols-[170px_1fr] md:gap-8"
                  >

                    {/* DOT */}

                    <div className="hidden md:block">

                      <div className="relative z-10 mt-1 h-6 w-6 rounded-full border-4 border-slate-50 bg-brand-blue" />

                    </div>


                    {/* CONTENT */}

                    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7">

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                            {item.year}
                          </p>

                          <h3 className="mt-2 text-xl font-bold text-brand-navy">
                            {item.role}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-slate-600">
                            {item.company}
                          </p>

                        </div>

                        <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-500">
                          {item.location}
                        </span>

                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNICAL EXPERTISE
        ===================================================== */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Technical Expertise
              </p>

              <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                Technologies behind the training
              </h2>

            </div>


            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {technologyAreas.map((area) => {

                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-brand-blue">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-brand-navy">
                      {area.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {area.items.map((item) => (

                        <span
                          key={item}
                          className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </article>
                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            TRAINING EXPERIENCE
        ===================================================== */}

        <section className="border-b border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  Training Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                  Training across students,
                  professionals and enterprises.
                </h2>

              </div>


              <div>

                <div className="flex flex-wrap gap-3">

                  {[
                    "VMware",
                    "Cloud Computing",
                    "AWS",
                    "Azure",
                    "Nutanix",
                    "Windows Server",
                    "CCNA",
                    "Routing & Switching",
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  Training experience includes VMware professional batches,
                  cloud computing programs, Windows Server, CCNA, AWS,
                  Azure, Nutanix and technology training for engineering
                  students and faculty.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CERTIFICATIONS + EDUCATION
        ===================================================== */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2">

              {/* CERTIFICATIONS */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-brand-blue">
                    <Award size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      Certifications
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-brand-navy">
                      Professional Credentials
                    </h2>

                  </div>

                </div>


                <div className="mt-7 space-y-4">

                  {certifications.map((certification) => (

                    <div
                      key={certification.title}
                      className="border-b border-slate-200 pb-4"
                    >

                      <h3 className="text-base font-semibold text-brand-navy">
                        {certification.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {certification.issuer}
                      </p>

                      {certification.note && (
                        <p className="mt-1 text-xs text-slate-400">
                          {certification.note}
                        </p>
                      )}

                    </div>

                  ))}

                </div>

              </div>


              {/* EDUCATION */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-brand-blue">
                    <GraduationCap size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      Education
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-brand-navy">
                      Academic Background
                    </h2>

                  </div>

                </div>


                <div className="mt-7">

                  <h3 className="text-lg font-semibold text-brand-navy">
                    {education.degree}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {education.specialization}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {education.university}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {education.period}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-brand-navy">

          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Start Learning
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to build practical IT skills?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore our technical courses, practical labs and training
              programs designed around real technologies.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                to="/courses"
                className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
              >
                Explore Courses
                <ArrowRight size={16} className="ml-2" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
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