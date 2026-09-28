import {
  ArrowRight,
  Award,
  Cloud,
  Network,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HanumanGupta from "../assets/trainer/HanumanGupta.png";

/* =========================================================
   EXPERIENCE AREAS
========================================================= */

const experienceAreas = [
  {
    icon: Server,
    title: "Enterprise Infrastructure",
  },
  {
    icon: Network,
    title: "Networking",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
  },
];

/* =========================================================
   TRAINER EXPERIENCE
========================================================= */

const trainerExperience = [
  {
    period: "2011 – 2014",
    company: "Pearson Education India Pvt Ltd",
    role: "IMS Trainer",
    description:
      "Technical training and learning support across IT technologies.",
  },
  {
    period: "2014 – 2015",
    company: "Huawei Technologies",
    role: "Training Manager",
    description:
      "Delivered training on cloud computing, routing & switching, storage, switches, routers and Wi-Fi technologies.",
  },
  {
    period: "2015 – 2019",
    company: "HCL Technologies",
    role: "VMware Consultant",
    description:
      "Worked with VMware infrastructure and cloud computing environments, including vCenter and ESXi technologies.",
  },
  {
    period: "2019 – Present",
    company: "Self-Employed",
    role: "Freelance Trainer – VMware & Cloud Computing",
    description:
      "Conducting VMware professional training for corporate and student batches along with Windows Server and infrastructure training.",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative overflow-hidden
            border-b border-blue-100
            bg-white
            bg-[linear-gradient(to_right,rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.045)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        >
          <div
            className="
              pointer-events-none absolute
              right-[-180px] top-[-140px]
              h-[550px] w-[650px]
              rounded-full
              bg-blue-100/30
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

            <div
              className="
                grid items-center
                lg:min-h-[470px]
                lg:grid-cols-[0.95fr_1.05fr]
              "
            >

              {/* LEFT */}

              <div
                className="
                  relative z-10
                  max-w-xl
                  py-12
                  text-center
                  lg:py-14
                  lg:text-left
                "
              >
                <h1
                  className="
                    text-4xl font-bold
                    leading-tight tracking-tight
                    text-brand-navy
                    sm:text-5xl
                    lg:text-[54px]
                  "
                >
                  Technology is better
                  <span className="block text-brand-blue">
                    when you understand it.
                  </span>
                </h1>

                <p
                  className="
                    mx-auto mt-5
                    max-w-lg
                    text-base leading-7
                    text-slate-600
                    lg:mx-0
                  "
                >
                  NexusTech brings together technical knowledge,
                  industry experience and practical learning to help
                  students, colleges and IT teams build relevant
                  technical skills.
                </p>

                <div
                  className="
                    mt-6
                    flex flex-col
                    justify-center gap-3
                    sm:flex-row
                    lg:justify-start
                  "
                >
                  <Link
                    to="/courses"
                    className="
                      inline-flex items-center
                      justify-center
                      rounded-lg
                      bg-brand-navy
                      px-5 py-3
                      text-sm font-semibold
                      text-white
                      transition
                      hover:bg-brand-blue
                    "
                  >
                    Explore Courses
                    <ArrowRight
                      size={16}
                      className="ml-2"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="
                      inline-flex items-center
                      justify-center
                      rounded-lg
                      border border-slate-300
                      bg-white
                      px-5 py-3
                      text-sm font-semibold
                      text-slate-700
                      transition
                      hover:border-blue-300
                      hover:text-brand-blue
                    "
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  relative hidden
                  min-h-[400px]
                  lg:flex
                  lg:items-center
                  lg:justify-end
                "
              >
                <div className="relative h-[350px] w-[430px]">

                  {/* CONNECTION LINES */}

                  <div
                    className="
                      absolute left-[105px] top-[175px]
                      h-px w-[105px]
                      bg-blue-200
                    "
                  />

                  <div
                    className="
                      absolute right-[105px] top-[115px]
                      h-px w-[90px]
                      rotate-[25deg]
                      bg-blue-200
                    "
                  />

                  <div
                    className="
                      absolute bottom-[95px] right-[105px]
                      h-px w-[90px]
                      -rotate-[25deg]
                      bg-blue-200
                    "
                  />

                  {/* CENTER */}

                  <div
                    className="
                      absolute left-1/2 top-1/2
                      flex h-32 w-32
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center justify-center
                      rounded-full
                      bg-brand-navy
                      shadow-[0_20px_55px_rgba(15,23,42,0.16)]
                    "
                  >
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white">
                        N
                      </div>

                      <div
                        className="
                          mt-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.25em]
                          text-blue-200
                        "
                      >
                        NexusTech
                      </div>
                    </div>
                  </div>

                  {/* NETWORK */}

                  <div
                    className="
                      absolute left-3 top-[135px]
                      flex h-20 w-20
                      items-center justify-center
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      shadow-[0_10px_30px_rgba(15,23,42,0.07)]
                    "
                  >
                    <Network
                      size={29}
                      className="text-brand-blue"
                    />
                  </div>

                  {/* CLOUD */}

                  <div
                    className="
                      absolute right-5 top-[45px]
                      flex h-20 w-20
                      items-center justify-center
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      shadow-[0_10px_30px_rgba(15,23,42,0.07)]
                    "
                  >
                    <Cloud
                      size={29}
                      className="text-brand-blue"
                    />
                  </div>

                  {/* SERVER */}

                  <div
                    className="
                      absolute bottom-[30px] right-[38px]
                      flex h-20 w-20
                      items-center justify-center
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      shadow-[0_10px_30px_rgba(15,23,42,0.07)]
                    "
                  >
                    <Server
                      size={29}
                      className="text-brand-blue"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            ABOUT NEXUSTECH
        ================================================= */}

        <section className="border-b border-slate-200 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                  About NexusTech
                </h2>
              </div>

              <div className="max-w-3xl">

                <p className="text-base leading-7 text-slate-600">
                  NexusTech focuses on practical technical training
                  across modern IT infrastructure and related
                  technologies. Our approach connects technical
                  concepts with practical environments so learners
                  can understand how technologies are actually used.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  We work with colleges, students and organizations,
                  providing training that can be structured around
                  specific technologies, learning objectives and
                  practical requirements.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  {experienceAreas.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="
                          rounded-xl
                          border border-slate-200
                          bg-slate-50
                          p-4
                        "
                      >
                        <Icon
                          size={20}
                          className="text-brand-blue"
                        />

                        <p className="mt-3 text-sm font-semibold leading-5 text-slate-800">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            TRAINER
        ================================================= */}

        <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">

              {/* PHOTO */}

              <div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={HanumanGupta}
                    alt="HP Gupta - Founder and Technical Trainer"
                    className="
                      h-[270px]
                      w-full
                      object-cover
                      object-top
                    "
                    loading="lazy"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-brand-navy">
                    HP Gupta
                  </h3>

                  <p className="mt-1 text-sm font-medium text-brand-blue">
                    Founder & Technical Trainer
                  </p>
                </div>

              </div>

              {/* CONTENT */}

              <div>

                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Experience across
                  <span className="text-brand-blue">
                    {" "}industry and training.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  HP Gupta has experience across VMware, cloud
                  computing, networking, enterprise infrastructure
                  and technical training, with a career spanning
                  both industry and professional education.
                </p>

                {/* EXPERIENCE TIMELINE */}

                <div className="mt-7 space-y-0">

                  {trainerExperience.map((item, index) => (
                    <div
                      key={`${item.company}-${item.role}`}
                      className="
                        relative
                        grid grid-cols-[92px_1fr]
                        gap-4
                        pb-6
                        last:pb-0
                      "
                    >

                      {/* LINE */}

                      {index !== trainerExperience.length - 1 && (
                        <div
                          className="
                            absolute
                            left-[4px]
                            top-[22px]
                            h-[calc(100%-2px)]
                            w-px
                            bg-slate-200
                          "
                        />
                      )}

                      {/* DOT / YEAR */}

                      <div className="relative">

                        <div
                          className="
                            relative z-10
                            flex h-2.5 w-2.5
                            translate-y-1
                            rounded-full
                            bg-brand-blue
                          "
                        />

                        <p className="mt-2 text-xs font-semibold text-slate-500">
                          {item.period}
                        </p>

                      </div>

                      {/* DETAILS */}

                      <div>

                        <h3 className="text-base font-bold text-brand-navy">
                          {item.role}
                        </h3>

                        <p className="mt-0.5 text-sm font-medium text-brand-blue">
                          {item.company}
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

                {/* CREDENTIALS */}

                <div className="mt-7 flex flex-wrap gap-3">

                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-4 py-2.5
                      text-sm font-medium
                      text-slate-700
                    "
                  >
                    <Award
                      size={16}
                      className="text-brand-blue"
                    />
                    Nutanix Certified Professional
                  </div>

                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-4 py-2.5
                      text-sm font-medium
                      text-slate-700
                    "
                  >
                    <Award
                      size={16}
                      className="text-brand-blue"
                    />
                    Azure Administrator Associate
                  </div>

                </div>

                <a
                  href="https://www.linkedin.com/in/hp-gupta-11076961/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center
                    text-sm font-semibold
                    text-brand-blue
                    transition
                    hover:text-blue-800
                  "
                >
                  View LinkedIn Profile
                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            COLLEGES / ORGANIZATIONS
        ================================================= */}

        <section className="border-b border-slate-200 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="grid gap-4 md:grid-cols-2">

              {/* COLLEGES */}

              <div
                className="
                  rounded-xl
                  border border-slate-200
                  bg-white
                  p-6
                "
              >
                <h2 className="text-xl font-bold text-brand-navy">
                  For Colleges
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical technical programs designed to help
                  students gain exposure to industry-relevant
                  technologies and hands-on learning.
                </p>

                <Link
                  to="/college-training"
                  className="
                    mt-5 inline-flex items-center
                    text-sm font-semibold
                    text-brand-blue
                  "
                >
                  College Training
                  <ArrowRight
                    size={15}
                    className="ml-2"
                  />
                </Link>
              </div>

              {/* ORGANIZATIONS */}

              <div
                className="
                  rounded-xl
                  border border-slate-200
                  bg-white
                  p-6
                "
              >
                <h2 className="text-xl font-bold text-brand-navy">
                  For Organizations
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Technical training that can be structured around
                  your team's technologies, roles and learning
                  requirements.
                </p>

                <Link
                  to="/corporate-training"
                  className="
                    mt-5 inline-flex items-center
                    text-sm font-semibold
                    text-brand-blue
                  "
                >
                  Corporate Training
                  <ArrowRight
                    size={15}
                    className="ml-2"
                  />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="bg-brand-navy">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Let's discuss your training requirements.
                </h2>

                <p className="mt-1.5 text-sm text-blue-100">
                  Courses, college programs and corporate training.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                  inline-flex shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-white
                  px-5 py-3
                  text-sm font-semibold
                  text-brand-navy
                  transition
                  hover:bg-blue-50
                "
              >
                Contact Us
                <ArrowRight
                  size={16}
                  className="ml-2"
                />
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}