import {
  ArrowRight,
  Building2,
  Check,
  Cloud,
  GraduationCap,
  Laptop,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HanumanGupta from "../assets/trainer/HanumanGupta.png";

/* =========================================================
   WHAT WE DO
========================================================= */

const services = [
  {
    icon: GraduationCap,
    title: "College Training",
    description:
      "Industry-oriented technical programs that connect academic learning with practical IT skills.",
    link: "/college-training",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description:
      "Technical training designed around organizational requirements, teams and technology environments.",
    link: "/corporate-training",
  },
  {
    icon: Laptop,
    title: "Virtual IT Labs",
    description:
      "Hands-on environments where learners can configure, test and troubleshoot real technology scenarios.",
    link: "/it-labs",
  },
];

/* =========================================================
   TECHNOLOGY AREAS
========================================================= */

const technologyAreas = [
  {
    icon: Network,
    title: "Networking",
    description:
      "Routing, switching, VLANs, troubleshooting and enterprise networking concepts.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Cloud infrastructure, networking, services and administration across modern platforms.",
  },
  {
    icon: Server,
    title: "VMware & Virtualization",
    description:
      "Virtual machines, ESXi, vCenter and enterprise virtualization environments.",
  },
  {
    icon: Terminal,
    title: "Linux",
    description:
      "Linux administration, command line, permissions, services, networking and troubleshooting.",
  },
  {
    icon: Server,
    title: "Windows Server",
    description:
      "Server administration, Active Directory, DNS, DHCP, Group Policy and PowerShell.",
  },
  {
    icon: Laptop,
    title: "DevOps & Automation",
    description:
      "Modern infrastructure workflows, automation and tools used in contemporary IT environments.",
  },
];

/* =========================================================
   LEARNING APPROACH
========================================================= */

const learningSteps = [
  {
    number: "01",
    title: "Learn",
    text:
      "Understand the concepts, technologies and fundamentals before working with the environment.",
  },
  {
    number: "02",
    title: "Practice",
    text:
      "Apply concepts through demonstrations, configurations and hands-on technical exercises.",
  },
  {
    number: "03",
    title: "Troubleshoot",
    text:
      "Work through configuration problems and understand how systems behave when something goes wrong.",
  },
  {
    number: "04",
    title: "Apply",
    text:
      "Connect technical knowledge with real-world infrastructure and professional IT environments.",
  },
];

/* =========================================================
   WHO WE TRAIN
========================================================= */

const audiences = [
  {
    title: "Students",
    text:
      "Build practical technical skills alongside academic learning and prepare for projects, internships and certifications.",
  },
  {
    title: "IT Professionals",
    text:
      "Strengthen existing infrastructure skills or expand into new technologies and technical areas.",
  },
  {
    title: "Organizations",
    text:
      "Upskill and reskill technical teams through focused and customized training programs.",
  },
];

/* =========================================================
   FOUNDER EXPERIENCE
========================================================= */

const founderExperience = [
  {
    title: "Enterprise Infrastructure",
    text:
      "Professional experience with VMware infrastructure, ESXi, vCenter, Nutanix, VBlock, servers, storage and data-center environments.",
  },
  {
    title: "Cloud Computing",
    text:
      "Experience and training across cloud computing, Amazon AWS, Microsoft Azure and cloud infrastructure.",
  },
  {
    title: "Networking",
    text:
      "Technical training covering CCNA, routing, switching and enterprise networking environments.",
  },
  {
    title: "Technical Training",
    text:
      "Training experience across students, professionals, engineering institutions and corporate environments.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="relative overflow-hidden border-b border-blue-100 bg-white"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(37, 99, 235, 0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(37, 99, 235, 0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
          }}
        >

          {/* Soft overlay */}

          <div className="absolute inset-0 bg-white/20" />

          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

            {/* HERO CONTENT */}

            <div className="mx-auto max-w-4xl text-center">

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Technical training built
                <span className="block text-blue-700">
                  around practical learning.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                NexusTech is a technical IT training institute focused on
                practical learning across networking, systems, virtualization,
                cloud computing and modern IT infrastructure.
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
                We work with college students, IT professionals and
                organizations through technical courses, instructor-led
                training and hands-on virtual lab environments.
              </p>

            </div>

            {/* INFORMATION STRIP */}

            <div className="mx-auto mt-8 grid max-w-6xl border-t border-blue-100/80 pt-5 text-center sm:grid-cols-2 lg:grid-cols-4">

              <div className="border-b border-blue-100 py-4 sm:border-r sm:px-6 lg:border-b-0">
                <p className="text-sm font-semibold text-slate-950">
                  Technical Training
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Industry-focused learning
                </p>
              </div>

              <div className="border-b border-blue-100 py-4 sm:px-6 lg:border-r lg:border-b-0">
                <p className="text-sm font-semibold text-slate-950">
                  Practical Labs
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Learn by doing
                </p>
              </div>

              <div className="border-b border-blue-100 py-4 sm:border-r sm:px-6 lg:border-b-0">
                <p className="text-sm font-semibold text-slate-950">
                  Corporate Programs
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Customized training
                </p>
              </div>

              <div className="py-4 sm:px-6">
                <p className="text-sm font-semibold text-slate-950">
                  College Programs
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Student-focused training
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHAT WE DO
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Training, labs and practical IT learning
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                NexusTech provides different learning environments depending
                on the learner or organization's requirements.
              </p>

            </div>

            <div className="mt-12 grid border-y border-blue-100 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    to={service.link}
                    className={`
                      group p-7 transition-all duration-300
                      hover:bg-blue-50/40
                      ${
                        index !== 0
                          ? "border-t border-blue-100 lg:border-l lg:border-t-0"
                          : ""
                      }
                    `}
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-semibold text-blue-600">
                      Learn more

                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                  </Link>
                );
              })}

            </div>

          </div>

        </section>

        {/* =================================================
            TECHNOLOGY AREAS
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  What we teach
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  Our training focuses on technologies used across
                  networking, systems, virtualization, cloud and enterprise
                  IT environments.
                </p>

                <Link
                  to="/courses"
                  className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Browse courses

                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </Link>

              </div>

              <div className="grid border-t border-blue-100 sm:grid-cols-2 sm:border-t-0">

                {technologyAreas.map((area, index) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className={`
                        group border-b border-blue-100 p-6
                        ${
                          index % 2 !== 0
                            ? "sm:border-l"
                            : ""
                        }
                      `}
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                          />
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

          </div>

        </section>

        {/* =================================================
            HOW WE TEACH
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From theory to practical skills
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                The goal is not simply to explain a technology, but to help
                learners understand how to work with it.
              </p>

            </div>

            <div className="mt-12 grid border-y border-blue-100 md:grid-cols-2 lg:grid-cols-4">

              {learningSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    p-7
                    ${
                      index !== 0
                        ? "border-t border-blue-100 md:border-l md:border-t-0"
                        : ""
                    }
                    ${
                      index === 2
                        ? "lg:border-l"
                        : ""
                    }
                  `}
                >

                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            IT LABS
        ================================================= */}

        <section className="bg-brand-navy py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Practice what you learn
                </h2>

                <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                  Our virtual IT labs provide practical environments where
                  learners can configure systems, test different setups,
                  experiment and troubleshoot technical problems.
                </p>

                <p className="mt-4 text-sm leading-7 text-blue-200 sm:text-base">
                  Labs can be used alongside courses, workshops, individual
                  practice and organization-specific training.
                </p>

                <Link
                  to="/it-labs"
                  className="mt-7 inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-blue-50"
                >
                  Explore IT Labs

                  <ArrowRight
                    size={17}
                    className="ml-2"
                  />
                </Link>

              </div>

              <div className="grid sm:grid-cols-2">

                {[
                  "Networking",
                  "Linux",
                  "Windows Server",
                  "VMware",
                  "Cloud",
                  "Troubleshooting",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`
                      flex items-center gap-3 border-b border-white/10 py-5
                      ${
                        index % 2 !== 0
                          ? "sm:border-l sm:pl-6"
                          : "sm:pr-6"
                      }
                    `}
                  >

                    <Check
                      size={17}
                      className="shrink-0 text-blue-300"
                    />

                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHO WE TRAIN
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Training for different IT needs
              </h2>

            </div>

            <div className="mt-12 grid border-y border-blue-100 md:grid-cols-3">

              {audiences.map((audience, index) => (
                <div
                  key={audience.title}
                  className={`
                    p-7
                    ${
                      index !== 0
                        ? "border-t border-blue-100 md:border-l md:border-t-0"
                        : ""
                    }
                  `}
                >

                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {audience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {audience.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            FOUNDER & TRAINER
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-start gap-12 lg:grid-cols-[300px_1fr]">

              {/* FOUNDER IMAGE */}

              <div>

                <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">

                  <img
                    src={HanumanGupta}
                    alt="Hanuman Gupta - Founder and Technical Trainer"
                    className="h-[370px] w-full object-cover"
                    loading="lazy"
                  />

                </div>

                <div className="mt-5">

                  <h3 className="text-xl font-bold text-slate-950">
                    Hanuman Gupta
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    Founder & Technical Trainer
                  </p>

                </div>

              </div>

              {/* FOUNDER CONTENT */}

              <div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Training shaped by

                  <span className="block text-blue-700">
                    real industry experience
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Hanuman Gupta is the founder and technical trainer behind
                  NexusTech. His professional background combines enterprise
                  infrastructure experience with technical training across
                  VMware, cloud computing, networking and systems.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  His experience includes working with enterprise
                  infrastructure and delivering technical training for
                  students, professionals and corporate environments.
                </p>

                {/* EXPERIENCE */}

                <div className="mt-9 grid border-y border-blue-100 sm:grid-cols-2">

                  {founderExperience.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        p-5
                        ${
                          index > 1
                            ? "border-t border-blue-100"
                            : ""
                        }
                        ${
                          index % 2 !== 0
                            ? "sm:border-l"
                            : ""
                        }
                      `}
                    >

                      <h3 className="text-sm font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>

                {/* TRAINING TECHNOLOGIES */}

                <div className="mt-9 border-t border-blue-100 pt-7">

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">

                    {[
                      "VMware",
                      "AWS",
                      "Azure",
                      "Nutanix",
                      "CCNA",
                      "Windows Server",
                      "Cloud Computing",
                      "Routing & Switching",
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* CERTIFICATIONS */}

                <div className="mt-7 border-t border-blue-100 pt-7">

                  <div className="mt-4 flex flex-wrap gap-3">

                    <span className="rounded-lg border border-blue-100 px-4 py-2.5 text-sm font-medium text-slate-700">
                      Nutanix Certified Professional
                    </span>

                    <span className="rounded-lg border border-blue-100 px-4 py-2.5 text-sm font-medium text-slate-700">
                      Microsoft Certified: Azure Administrator Associate
                    </span>

                  </div>

                </div>

                <a
                  href="https://www.linkedin.com/in/hanuman-pd-gupta-578350249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  View Professional Profile

                  <ArrowRight
                    size={15}
                    className="ml-2"
                  />
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-brand-navy">

            <div className="px-6 py-14 sm:px-12 sm:py-16">

              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Practical learning for modern IT.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Explore our courses, practical labs and training programs
                built around real IT technologies.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-blue-50"
                >
                  Explore Courses

                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Contact Us

                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}