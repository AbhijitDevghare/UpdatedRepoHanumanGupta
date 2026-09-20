import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Image,
  Layers3,
  Network,
  Server,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { colleges } from "../data/colleges";
import { internalVisuals } from "../data/internalVisuals";
import { trainingExperience } from "../data/trainingExperience";

const methodology = [
  [
    "01",
    "Understand",
    "Build a strong foundation in technology concepts and terminology.",
  ],
  [
    "02",
    "Demonstrate",
    "Learn through instructor-led demonstrations and real-world examples.",
  ],
  [
    "03",
    "Practice",
    "Apply knowledge through hands-on labs, exercises, and guided activities.",
  ],
  [
    "04",
    "Troubleshoot",
    "Work through practical scenarios to develop problem-solving skills.",
  ],
  [
    "05",
    "Assess",
    "Evaluate learning through quizzes, assignments, practical tasks, or assessments.",
  ],
  [
    "06",
    "Apply",
    "Connect learning to workplace environments, projects, and career goals.",
  ],
];
const collegePrograms = [
  [GraduationCap, "Industrial Training Programs"],
  [BookOpen, "Semester-Based Technical Training"],
  [Code2, "Final-Year Project Support"],
  [Network, "Placement-Oriented IT Training"],
  [Users, "Faculty Development Programs"],
  [Cloud, "Hands-on Cloud & Infrastructure Labs"],
  [Wrench, "Customized Technical Workshops"],
  [Layers3, "Pre-Placement Technical Skill Development"],
];
const technologyAreas = [
  [Cloud, "Cloud Computing", "Core cloud concepts and service workflows."],
  [
    Layers3,
    "VMware & Virtualization",
    "Virtual infrastructure and platform concepts.",
  ],
  [Network, "Networking", "Infrastructure, connectivity, and troubleshooting."],
  [Server, "Windows", "Server administration and core services."],
  [Terminal, "Linux", "Systems, commands, services, and administration."],
  [Code2, "Programming", "Programming foundations and technical automation."],
  [Database, "Databases", "Relational data and database workflows."],
  [
    Bot,
    "AI & Emerging Technologies",
    "Foundations of modern AI and data workflows.",
  ],
];

function OrganizationAccordion({ organizations }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {organizations.map((organization, index) => {
        const isOpen = open === index;
        return (
          <div
            key={organization.name}
            className={`overflow-hidden rounded-xl border bg-white transition-colors ${isOpen ? "border-brand-blue/50" : "border-slate-200"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Building2 size={19} />
                </span>
                <span>
                  <span className="block font-bold text-brand-navy">
                    {organization.name}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    Company-wise training details
                  </span>
                </span>
              </span>
              <ChevronDown
                size={19}
                className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-blue" : "text-slate-400"}`}
              />
            </button>
            {isOpen && (
              <div className="grid grid-cols-1 gap-3 border-t border-slate-100 px-5 pb-5 pt-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Training Engagement
                  </span>
                  <p className="mt-2 text-slate-600">Details coming soon</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Technology / Program
                  </span>
                  <p className="mt-2 text-slate-600">Details coming soon</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Audience / Format
                  </span>
                  <p className="mt-2 text-slate-600">Details coming soon</p>
                </div>
                <div className="rounded-lg border border-dashed border-slate-300 p-4 text-slate-500 sm:col-span-2 lg:col-span-3">
                  <Image size={17} className="mb-2 text-brand-blue" />
                  Photos and additional details can be added here.
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CollegeCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {colleges.map((college) => (
        <article
          key={college.name}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <GraduationCap className="text-brand-blue" size={24} />
          <h3 className="mt-5 text-lg font-bold text-brand-navy">
            {college.name}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
            <span className="rounded bg-slate-50 p-3 text-slate-500">
              Training Program
              <br />
              <strong className="text-slate-700">Details coming soon</strong>
            </span>
            <span className="rounded bg-slate-50 p-3 text-slate-500">
              Technology
              <br />
              <strong className="text-slate-700">Details coming soon</strong>
            </span>
            <span className="rounded bg-slate-50 p-3 text-slate-500">
              Batch / Year
              <br />
              <strong className="text-slate-700">Details coming soon</strong>
            </span>
            <span className="rounded bg-slate-50 p-3 text-slate-500">
              Training Photos
              <br />
              <strong className="text-slate-700">To be added</strong>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function TrainingExperience() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-brand-navy py-16 text-white lg:py-24">
          <div className="absolute inset-0 tech-grid-dense opacity-20" />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded bg-cyan-950 px-3 py-1 text-xs font-mono text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                PROVEN TRAINING EXPERIENCE
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Training Experience
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                12+ Years of Technical Training Experience Across Organizations
                and Educational Institutions
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
                Our training experience includes delivering technical learning
                programs for professionals associated with leading IT services,
                consulting, telecommunications, and technology organizations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#organizations"
                  className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold hover:bg-cyan-500"
                >
                  Explore Training Experience{" "}
                  <ArrowDown size={16} className="ml-2" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl">
                <div className="font-mono text-xs text-cyan-300">
                  TRAINING JOURNEY // CONCEPT → PRACTICE → APPLICATION
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3 text-center text-xs font-mono">
                  <div className="rounded-lg border border-blue-400/30 bg-blue-400/10 p-5 text-blue-200">
                    CONCEPTS
                  </div>
                  <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-200">
                    DEMONSTRATION
                  </div>
                  <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-200">
                    PRACTICE
                  </div>
                  <div className="rounded-lg border border-violet-400/30 bg-violet-400/10 p-5 text-violet-200">
                    APPLICATION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  EXPERIENCE INTRODUCTION
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
                  Experience Across Real IT Environments
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">
                  The trainer has worked with and delivered technical training
                  for professionals associated with leading organizations. This
                  exposure helps align technical training with practical
                  workplace expectations and industry requirements.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex items-center gap-3">
                  <Network className="text-brand-blue" />
                  <span className="font-mono text-xs font-bold uppercase text-slate-500">
                    Technical exposure
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {trainingExperience.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-200 bg-slate-50 py-20"
          id="organizations"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  ORGANIZATIONS
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
                  Organizations We Have Trained
                </h2>
                <p className="mt-3 text-slate-600">
                  Organization names are shown as a reference to training
                  experience.
                </p>
              </div>
              <span className="text-xs text-slate-500">
                {trainingExperience.organizations.length} organizations listed
              </span>
            </div>
            <OrganizationAccordion
              organizations={trainingExperience.organizations}
            />
            <p className="mt-6 text-center text-xs text-slate-500">
              Organization names and logos are displayed for training-experience
              reference only and do not imply partnership or endorsement.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                TRAINING IN ACTION
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
                Training in Action
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Temporary visual references are used below until verified
                training photographs are added.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {internalVisuals.trainingExperience.map((photo) => (
                <div
                  key={photo.label}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded bg-brand-navy/75 px-3 py-1 text-xs font-mono text-cyan-200">
                      TEMPORARY PLACEHOLDER
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-navy">{photo.label}</h3>
                    <p className="mt-2 text-xs text-slate-500">
                      Replace with approved organization, program, location,
                      year, and technology details.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                TRAINING JOURNEY
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
                Training Journey
              </h2>
              <p className="mt-3 text-slate-600">
                Timeline entries can be added when verified years and engagement
                details are available.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <ArrowRight className="mx-auto text-brand-blue" />
              <p className="mt-4 text-sm text-slate-500">
                Training timeline details coming soon.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                COLLEGE EXPERIENCE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
                College Training Experience
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Bridging the Gap Between Academics and Industry
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                College programs can support internships, industrial training,
                professional IT careers, theoretical concepts, practical
                demonstrations, lab exercises, assessments, and real-world
                scenarios.
              </p>
            </div>
            <CollegeCards />
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                PROGRAM FORMATS
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
                College Training Programs
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {collegePrograms.map(([Icon, title]) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <Icon size={21} className="mb-4 text-brand-blue" />
                  {title}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                METHODOLOGY
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
                How We Approach Technical Training
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {methodology.map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="font-mono text-xs font-bold text-brand-blue">
                    {number}
                  </span>
                  <h3 className="mt-4 font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  TECHNOLOGY COVERAGE
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
                  Technology Areas Covered
                </h2>
              </div>
              <Link
                to="/courses"
                className="text-sm font-semibold text-brand-blue"
              >
                Explore Courses →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {technologyAreas.map(([Icon, name, description]) => (
                <div
                  key={name}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <Icon size={21} className="text-brand-blue" />
                  <h3 className="mt-4 text-sm font-bold text-brand-navy">
                    {name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-xl sm:p-12">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                    EXPERIENCE + PRACTICAL LEARNING
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold">
                    Industry Exposure. Practical Learning.
                  </h2>
                  <p className="mt-3 text-slate-300">
                    Concepts → Demonstrations → Hands-on Practice →
                    Troubleshooting → Application
                  </p>
                </div>
                <Wrench className="hidden text-cyan-300 lg:block" size={44} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-10 text-center text-white shadow-2xl sm:p-14">
              <div className="absolute inset-0 tech-grid-dense opacity-15" />
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Looking for Technical Training?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Whether you are an organization looking to develop technical
                  capabilities or an institution seeking industry-oriented
                  training, let&apos;s discuss your requirements.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/corporate-training"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-slate-100"
                  >
                    Corporate Training
                  </Link>
                  <Link
                    to="/college-training"
                    className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300"
                  >
                    College Training
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-500"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
