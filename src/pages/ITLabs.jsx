import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cloud,
  Layers3,
  Monitor,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import LabWorkspaceImage from "../assets/ITLabs/hero1.png";

/* =========================================================
   VIRTUAL ENVIRONMENT DATA
========================================================= */

const labs = [
  {
    name: "Windows Environment",
    icon: Monitor,
    description:
      "Get a ready-to-use Windows virtual machine with the access you need to install software, configure systems, test applications and experiment freely.",
    features: [
      "Windows OS",
      "Remote Access",
      "Login Credentials",
      "Software Installation",
      "System Configuration",
    ],
  },
  {
    name: "Linux Environment",
    icon: Terminal,
    description:
      "Work inside a dedicated Linux virtual machine where you can install packages, configure services, run scripts and build your own working environment.",
    features: [
      "Linux OS",
      "Remote Access",
      "Login Credentials",
      "Package Installation",
      "Service Configuration",
    ],
  },
  {
    name: "Networking Environment",
    icon: Network,
    description:
      "Use a dedicated environment for networking tools, configurations, troubleshooting and technical experimentation without affecting your local machine.",
    features: [
      "Networking Tools",
      "Remote Access",
      "Configuration Access",
      "Troubleshooting",
      "Technical Testing",
    ],
  },
  {
    name: "DevOps Environment",
    icon: Layers3,
    description:
      "A separate workspace for installing and working with DevOps tools, containers, automation platforms and infrastructure technologies.",
    features: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "DevOps Tools",
    ],
  },
  {
    name: "Cloud Environment",
    icon: Cloud,
    description:
      "A remote environment for working with cloud tools, command-line utilities, infrastructure configurations and deployment workflows.",
    features: [
      "Cloud CLI Tools",
      "Remote Access",
      "Infrastructure Tools",
      "Deployment Testing",
      "Configuration",
    ],
  },
];

/* =========================================================
   HOW THE VM CAN BE USED
========================================================= */

const activities = [
  {
    number: "01",
    title: "Connect",
    text: "Receive access to your virtual machine and connect remotely from your own computer.",
  },
  {
    number: "02",
    title: "Install",
    text: "Install the software, packages, tools and utilities required for your work or learning.",
  },
  {
    number: "03",
    title: "Configure",
    text: "Configure systems, services, applications and technical environments according to your requirements.",
  },
  {
    number: "04",
    title: "Experiment",
    text: "Test configurations, troubleshoot problems and experiment without making changes to your personal or company machine.",
  },
];

/* =========================================================
   CUSTOM ENVIRONMENT INCLUDES
========================================================= */

const customLabIncludes = [
  "Custom operating systems",
  "Windows and Linux systems",
  "Multiple virtual machines",
  "Networking environments",
  "Active Directory and DNS",
  "Docker and Kubernetes",
  "Cloud and DevOps tools",
  "Specific software versions",
];

/* =========================================================
   SHARED STYLES
========================================================= */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const buttonBase = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${focusRing}`;

const buttonStyles = {
  solidNavy: `${buttonBase} bg-brand-navy text-white hover:bg-brand-blue`,
  outlineBlue: `${buttonBase} border border-blue-200 bg-white text-brand-blue hover:border-brand-blue hover:bg-blue-50`,
  solidWhite: `${buttonBase} bg-white text-brand-navy hover:bg-blue-50`,
  outlineWhite: `${buttonBase} border border-blue-300 text-white hover:bg-brand-blue`,
};

/* =========================================================
   CTA LINK
========================================================= */

function CTALink({ to, variant, children }) {
  return (
    <Link to={to} className={buttonStyles[variant]}>
      {children}

      <ArrowRight
        size={17}
        className="ml-2"
        aria-hidden="true"
      />
    </Link>
  );
}

/* =========================================================
   VIRTUAL MACHINE CARD
========================================================= */

function LabCard({ lab, featured = false }) {
  const Icon = lab.icon;

  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl border border-slate-200
        bg-white transition-all duration-300
        hover:-translate-y-1
        hover:border-brand-blue/30
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
        ${featured ? "md:row-span-2" : ""}
      `}
    >
      <div className="h-1 w-full bg-gradient-to-r from-brand-navy via-brand-blue to-blue-300" />

      <div className={`${featured ? "p-7 sm:p-8" : "p-6"}`}>

        <div className="flex items-start gap-4">
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl bg-blue-50 text-brand-blue
              transition-all duration-300
              group-hover:bg-brand-blue group-hover:text-white
            "
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>
        </div>

        <div className="mt-6">
          <h3
            className={`
              font-bold tracking-tight text-slate-950
              ${featured ? "text-2xl sm:text-3xl" : "text-xl"}
            `}
          >
            {lab.name}
          </h3>
        </div>

        <p
          className={`
            mt-4 text-sm leading-7 text-slate-600
            ${featured ? "max-w-xl" : ""}
          `}
        >
          {lab.description}
        </p>

        <div className="mt-6">
          <div className="space-y-2">
            {lab.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2.5 text-sm text-slate-600"
              >
                <span
                  className="
                    flex h-5 w-5 shrink-0 items-center justify-center
                    rounded-full bg-blue-50 text-brand-blue
                  "
                >
                  <Check size={12} strokeWidth={2.5} />
                </span>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 border-t border-slate-100 pt-5">
          <Link
            to="/contact?type=lab-access"
            className={`
              inline-flex items-center text-sm font-semibold
              text-brand-blue transition-colors
              hover:text-brand-navy
              ${focusRing}
            `}
          >
            Get VM Access

            <ArrowRight
              size={16}
              className="
                ml-2 transition-transform duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute -right-10 -top-10
          h-24 w-24 rounded-full
          bg-blue-50/70
          transition-transform duration-500
          group-hover:scale-150
        "
      />
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ITLabs() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative
            overflow-hidden
            border-b border-blue-100
            bg-white
            bg-[linear-gradient(to_right,rgba(59,130,246,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.055)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        >
          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[-100px]
              h-[650px]
              w-[850px]
              rounded-full
              bg-blue-100/30
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-180px]
              left-[-180px]
              h-[450px]
              w-[600px]
              rounded-full
              bg-blue-50/60
              blur-3xl
            "
          />

          {/* Same width as main page content */}

          <div className="relative mx-auto w-full max-w-[1250px] px-5 sm:px-8">

            {/* HERO */}

            <div
              className="
                grid
                items-center
                gap-0
                lg:min-h-[535px]
                lg:grid-cols-[0.88fr_1.12fr]
              "
            >

              {/* LEFT CONTENT */}

              <div
                className="
                  relative
                  z-20
                  max-w-[600px]
                  py-10
                  text-center
                  lg:py-12
                  lg:text-left
                "
              >
                <h1
                  className="
                    text-4xl
                    font-bold
                    leading-[1.05]
                    tracking-tight
                    text-slate-950
                    sm:text-5xl
                    lg:text-[58px]
                    xl:text-[62px]
                  "
                >
                  Your own

                  <span className="block text-brand-blue">
                    virtual workspace.
                  </span>
                </h1>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-slate-600
                    sm:text-lg
                    lg:mx-0
                  "
                >
                  Get access to a ready-to-use virtual machine where you
                  can install software, configure systems, test tools and
                  experiment without changing your personal or company
                  computer.
                </p>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-lg
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-base
                    lg:mx-0
                  "
                >
                  Useful for students, learners, trainers and working
                  professionals who need a separate environment for
                  technical work and experimentation.
                </p>

                {/* REAL CLICKABLE BUTTONS */}

                <div
                  className="
                    mt-6
                    flex
                    flex-col
                    justify-center
                    gap-3
                    sm:flex-row
                    lg:justify-start
                  "
                >
                  <CTALink
                    to="/contact?type=lab-access"
                    variant="solidNavy"
                  >
                    Get VM Access
                  </CTALink>

                  <Link
                    to="/contact?type=custom-lab"
                    className={buttonStyles.outlineBlue}
                  >
                    Build a Custom Environment
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}

              <div
                className="
                  relative
                  hidden
                  min-h-[480px]
                  lg:block
                "
              >
                <img
                  src={LabWorkspaceImage}
                  alt="Virtual IT workspace with Linux, Windows, networking, DevOps and cloud environments"
                  className="
                    absolute
                    inset-y-0
                    right-[-25px]
                    h-full
                    w-[calc(100%+25px)]
                    object-cover
                    object-center
                  "
                />

                {/* Image → content fade */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-10
                    w-2/5
                    bg-gradient-to-r
                    from-white
                    via-white/75
                    to-transparent
                  "
                />

                {/* Bottom fade */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    h-28
                    bg-gradient-to-t
                    from-white
                    to-transparent
                  "
                />
              </div>

              {/* MOBILE IMAGE */}

              <div
                className="
                  relative
                  mt-2
                  h-[260px]
                  overflow-hidden
                  sm:h-[330px]
                  lg:hidden
                "
              >
                <img
                  src={LabWorkspaceImage}
                  alt="Virtual IT workspace with Linux, Windows, networking, DevOps and cloud environments"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-white
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>

            {/* =================================================
                HERO FEATURE STRIP
            ================================================= */}

            <div
              className="
                relative
                z-30
                mb-6
                overflow-hidden
                rounded-2xl
                border
                border-blue-100
                bg-white/95
                shadow-[0_10px_35px_rgba(15,23,42,0.07)]
                backdrop-blur-md
                sm:mb-8
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">

                {/* FEATURE 1 */}

                <div
                  className="
                    flex items-center gap-4
                    border-b border-blue-100
                    px-5 py-4
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Monitor size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Dedicated VM
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your own technical workspace
                    </p>
                  </div>
                </div>

                {/* FEATURE 2 */}

                <div
                  className="
                    flex items-center gap-4
                    border-b border-blue-100
                    px-5 py-4
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Remote Access
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Connect from your own computer
                    </p>
                  </div>
                </div>

                {/* FEATURE 3 */}

                <div
                  className="
                    flex items-center gap-4
                    px-5 py-4
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Terminal size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Install & Configure
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Use the tools you need
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            WHAT IS AN IT LAB?
        ================================================= */}

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-8">

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A separate machine for your technical work.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">

              <p>
                Instead of installing everything on your own computer,
                you can work inside a separate virtual machine that you
                can access remotely.
              </p>

              <p>
                Once you receive access, you can install the software
                and tools you need, configure the environment, test
                different setups and experiment with your own
                configurations.
              </p>

              <p>
                This is particularly useful for working professionals
                who may not be allowed to install or modify software
                on company laptops, while also being useful for
                students, trainers and anyone who needs an additional
                technical workspace.
              </p>

            </div>

          </div>
        </section>

        {/* =================================================
            WORKSPACE VISUAL
        ================================================= */}

        <section className="bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div
              className="
                overflow-hidden
                rounded-3xl
                border border-blue-100
                bg-slate-50
                shadow-[0_12px_40px_rgba(15,23,42,0.06)]
              "
            >
              <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">

                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">

                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Work on a machine built for your technical needs.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Connect to your remote environment, install the
                    tools you need and work with Windows, Linux,
                    networking, DevOps or cloud technologies from one
                    separate workspace.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {[
                      "Remote VM access",
                      "Install your own tools",
                      "Separate workspace",
                      "Configure & experiment",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex items-center gap-2.5
                          text-sm font-medium text-slate-700
                        "
                      >
                        <span
                          className="
                            flex h-5 w-5 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-blue-50
                            text-brand-blue
                          "
                        >
                          <Check
                            size={12}
                            strokeWidth={2.5}
                          />
                        </span>

                        {item}
                      </div>
                    ))}

                  </div>

                </div>

                <div
                  className="
                    relative min-h-[280px]
                    overflow-hidden
                    border-t border-blue-100
                    bg-blue-50
                    lg:min-h-[360px]
                    lg:border-l lg:border-t-0
                  "
                >
                  <img
                    src={LabWorkspaceImage}
                    alt="Virtual IT workspace"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            VIRTUAL MACHINES
        ================================================= */}

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            <div
              className="
                flex flex-col justify-between gap-8
                md:flex-row md:items-end
              "
            >

              <div className="max-w-3xl">

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  A workspace you can
                  <span className="text-brand-blue">
                    {" "}
                    actually use.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Get a dedicated virtual environment with remote
                  access and login credentials. Install, configure
                  and test the tools you need without affecting your
                  local or company machine.
                </p>

              </div>

              <div
                className="
                  flex shrink-0 items-center gap-4
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-5 py-4
                  shadow-sm
                "
              >
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-lg bg-blue-50 text-brand-blue
                  "
                >
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Remote VM Access
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Your own technical workspace
                  </p>
                </div>
              </div>

            </div>

            {/* VM GRID */}

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              <LabCard
                lab={labs[0]}
                featured
              />

              {labs.slice(1).map((lab) => (
                <LabCard
                  key={lab.name}
                  lab={lab}
                />
              ))}

            </div>

            {/* COMMON ACCESS STRIP */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-white">

              <div
                className="
                  grid divide-y divide-blue-100
                  sm:grid-cols-2
                  sm:divide-x sm:divide-y-0
                  lg:grid-cols-4
                "
              >

                <div className="flex items-center gap-3 px-5 py-5">
                  <Check
                    size={17}
                    className="shrink-0 text-brand-blue"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Remote VM access
                  </span>
                </div>

                <div className="flex items-center gap-3 px-5 py-5">
                  <Check
                    size={17}
                    className="shrink-0 text-brand-blue"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Login credentials
                  </span>
                </div>

                <div className="flex items-center gap-3 px-5 py-5">
                  <Check
                    size={17}
                    className="shrink-0 text-brand-blue"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Install your tools
                  </span>
                </div>

                <div className="flex items-center gap-3 px-5 py-5">
                  <Check
                    size={17}
                    className="shrink-0 text-brand-blue"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Separate workspace
                  </span>
                </div>

              </div>
            </div>

            {/* PROFESSIONAL CALLOUT */}

            <div className="mt-6 rounded-2xl border border-slate-200 bg-brand-navy p-6 sm:p-7">

              <div
                className="
                  flex flex-col gap-5
                  lg:flex-row lg:items-center
                  lg:justify-between
                "
              >

                <div className="max-w-3xl">

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Don't install everything on your company laptop.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-blue-100">
                    Use a separate remote machine when your
                    organization's policies restrict software
                    installation, system changes or technical
                    experimentation on your work device.
                  </p>

                </div>

                <Link
                  to="/contact?type=lab-access"
                  className={`
                    inline-flex shrink-0 items-center justify-center
                    rounded-lg bg-white px-5 py-3
                    text-sm font-semibold text-brand-navy
                    transition hover:bg-blue-50
                    ${focusRing}
                  `}
                >
                  Get VM Access

                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </Link>

              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            HOW THE VM CAN BE USED
        ================================================= */}

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">

            <div className="text-center">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your environment. Your workflow.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Use the virtual machine like a separate computer
                dedicated to your technical requirements.
              </p>

            </div>

            <ol className="mt-10 grid border-t border-blue-100 md:grid-cols-2">

              {activities.map((item, index) => (
                <li
                  key={item.title}
                  className={`
                    flex gap-5
                    border-b border-blue-100
                    py-7
                    ${
                      index % 2 !== 0
                        ? "md:border-l md:pl-8"
                        : "md:pr-8"
                    }
                  `}
                >
                  <span
                    className="text-sm font-bold text-brand-blue"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>

                  </div>
                </li>
              ))}

            </ol>

          </div>
        </section>

        {/* =================================================
            CUSTOM ENVIRONMENT
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">

              <div>

                <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                  Need a specific setup?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  If you need a particular operating system,
                  software stack, number of machines or technical
                  configuration, a custom environment can be planned
                  around your requirements.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Tell us what you need to install, configure or
                  test and we can discuss the appropriate virtual
                  environment.
                </p>

                <div className="mt-7">
                  <CTALink
                    to="/contact?type=custom-lab"
                    variant="solidNavy"
                  >
                    Discuss Your Environment
                  </CTALink>
                </div>

              </div>

              <div className="border-y border-blue-100">

                <div className="border-b border-blue-100 py-5">
                  <h3 className="text-lg font-bold text-slate-950">
                    A custom environment can include
                  </h3>
                </div>

                <ul className="grid sm:grid-cols-2">

                  {customLabIncludes.map((item) => (
                    <li
                      key={item}
                      className="
                        flex items-center gap-3
                        border-b border-blue-100
                        py-4 sm:px-4
                      "
                    >
                      <Check
                        size={16}
                        className="shrink-0 text-brand-blue"
                      />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">

          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-navy">

            <div className="px-6 py-12 sm:px-12 sm:py-14">

              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Need a machine for your technical work?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get access to a separate virtual environment where
                you can install, configure and test the software and
                tools you need.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <CTALink
                  to="/contact?type=lab-access"
                  variant="solidWhite"
                >
                  Get VM Access
                </CTALink>

                <Link
                  to="/contact?type=custom-lab"
                  className={buttonStyles.outlineWhite}
                >
                  Ask About Custom Environments
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