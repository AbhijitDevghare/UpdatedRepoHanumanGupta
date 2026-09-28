import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Cloud,
  FlaskConical,
  Layers3,
  Monitor,
  Network,
  Settings,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import LabWorkspaceImage from "../assets/ITLabs/hero1.png";
import TopBar from "../components/TopBar";

/* =========================================================
   LAB DATA
========================================================= */

const labs = [
  {
    name: "Windows Environment",
    icon: Monitor,
    description:
      "A ready-to-use Windows VM for software installation, system configuration and technical practice.",
    features: [
      "Windows OS",
      "Remote Access",
      "Software Installation",
      "System Configuration",
    ],
  },
  {
    name: "Linux Environment",
    icon: Terminal,
    description:
      "A dedicated Linux VM for packages, services, scripts and hands-on technical work.",
    features: [
      "Linux OS",
      "Remote Access",
      "Package Installation",
      "Service Configuration",
    ],
  },
  {
    name: "Networking Environment",
    icon: Network,
    description:
      "A separate environment for networking tools, configurations, troubleshooting and testing.",
    features: [
      "Networking Tools",
      "Remote Access",
      "Configuration",
      "Troubleshooting",
    ],
  },
  {
    name: "DevOps Environment",
    icon: Layers3,
    description:
      "A workspace for containers, automation and infrastructure technologies.",
    features: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
    ],
  },
  {
    name: "Cloud Environment",
    icon: Cloud,
    description:
      "A remote environment for cloud tools, infrastructure and deployment practice.",
    features: [
      "Cloud CLI Tools",
      "Infrastructure Tools",
      "Deployment Testing",
      "Configuration",
    ],
  },
];

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
   BUTTONS
========================================================= */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const buttonBase = `inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${focusRing}`;

const buttonStyles = {
  solidNavy: `${buttonBase} bg-brand-navy text-white hover:bg-brand-blue`,
  outlineBlue: `${buttonBase} border border-blue-200 bg-white text-brand-blue hover:border-brand-blue hover:bg-blue-50`,
  solidWhite: `${buttonBase} bg-white text-brand-navy hover:bg-blue-50`,
};

/* =========================================================
   CTA
========================================================= */

function CTALink({ to, variant, children }) {
  return (
    <Link to={to} className={buttonStyles[variant]}>
      {children}

      <ArrowRight
        size={16}
        className="ml-2"
        aria-hidden="true"
      />
    </Link>
  );
}

/* =========================================================
   LAB CARD
========================================================= */

function LabCard({ lab }) {
  const Icon = lab.icon;

  return (
    <article
      className="
        group overflow-hidden rounded-2xl
        border border-slate-200 bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-brand-blue/30
        hover:shadow-[0_16px_35px_rgba(15,23,42,0.08)]
      "
    >
      <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-blue to-blue-300" />

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center
              justify-center rounded-xl
              bg-blue-50 text-brand-blue
              transition-colors duration-300
              group-hover:bg-brand-blue group-hover:text-white
            "
          >
            <Icon size={21} strokeWidth={1.8} />
          </div>

          <h3 className="text-lg font-bold text-slate-950">
            {lab.name}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {lab.description}
        </p>

        <div className="mt-5 space-y-2">
          {lab.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 text-sm text-slate-600"
            >
              <span
                className="
                  flex h-5 w-5 shrink-0
                  items-center justify-center
                  rounded-full bg-blue-50
                  text-brand-blue
                "
              >
                <Check size={12} strokeWidth={2.5} />
              </span>

              {feature}
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            to="/contact?type=lab-access"
            className={`
              inline-flex items-center
              text-sm font-semibold
              text-brand-blue
              transition-colors
              hover:text-brand-navy
              ${focusRing}
            `}
          >
            Get VM Access
            <ArrowRight
              size={15}
              className="
                ml-2 transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   IT LAB DIAGRAM
========================================================= */

function ITLabDiagram() {
  return (
    <div
      className="
        mx-auto mt-8 max-w-4xl
        rounded-2xl border border-blue-100
        bg-slate-50 p-5
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
        sm:p-7
      "
    >
      {/* TOP FLOW */}
      <div className="flex flex-col items-center">
        <div
          className="
            flex w-full max-w-[220px]
            items-center justify-center gap-3
            rounded-xl border border-slate-200
            bg-white px-5 py-4 shadow-sm
          "
        >
          <Monitor
            size={21}
            className="text-brand-blue"
          />

          <div>
            <p className="text-sm font-bold text-slate-950">
              Your Computer
            </p>

            <p className="text-xs text-slate-500">
              Connect remotely
            </p>
          </div>
        </div>

        <ArrowDown
          size={22}
          className="my-2 text-brand-blue"
        />

        <div
          className="
            flex w-full max-w-[220px]
            items-center justify-center gap-3
            rounded-xl border border-blue-200
            bg-blue-50 px-5 py-4
          "
        >
          <Settings
            size={21}
            className="text-brand-blue"
          />

          <div>
            <p className="text-sm font-bold text-slate-950">
              Remote Access
            </p>

            <p className="text-xs text-slate-500">
              Secure connection
            </p>
          </div>
        </div>

        <ArrowDown
          size={22}
          className="my-2 text-brand-blue"
        />
      </div>

      {/* VIRTUAL LAB */}
      <div
        className="
          rounded-2xl border-2 border-blue-200
          bg-white p-5 sm:p-6
        "
      >
        <div className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
            <FlaskConical size={22} />
          </div>

          <h3 className="mt-3 text-lg font-bold text-slate-950">
            Virtual IT Lab
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Your separate technical workspace
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            {
              name: "Windows",
              icon: Monitor,
            },
            {
              name: "Linux",
              icon: Terminal,
            },
            {
              name: "Networking",
              icon: Network,
            },
            {
              name: "DevOps",
              icon: Layers3,
            },
            {
              name: "Cloud",
              icon: Cloud,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="
                  flex flex-col items-center
                  justify-center rounded-xl
                  border border-slate-200
                  bg-slate-50 px-2 py-3
                "
              >
                <Icon
                  size={19}
                  className="text-brand-blue"
                />

                <span className="mt-1.5 text-xs font-semibold text-slate-700">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            "Install",
            "Configure",
            "Practice",
          ].map((item) => (
            <div
              key={item}
              className="
                flex items-center justify-center
                rounded-lg bg-blue-50
                px-4 py-3
                text-sm font-semibold
                text-brand-blue
              "
            >
              <Check
                size={15}
                className="mr-2"
              />

              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ArrowDown
          size={22}
          className="my-2 text-brand-blue"
        />

        <div
          className="
            rounded-xl border border-slate-200
            bg-white px-6 py-3.5
            text-center shadow-sm
          "
        >
          <p className="text-sm font-bold text-slate-950">
            Learn, Test & Troubleshoot
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Without changing your local machine
          </p>
        </div>
      </div>
    </div>
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
              right-[-220px] top-[-180px]
              h-[550px] w-[700px]
              rounded-full bg-blue-100/30 blur-3xl
            "
          />

          <div
            className="
              relative mx-auto max-w-7xl
              px-5 sm:px-8
            "
          >
            <div
              className="
                grid items-center
                lg:min-h-[455px]
                lg:grid-cols-[0.9fr_1.1fr]
              "
            >
              {/* TEXT */}
              <div
                className="
                  relative z-10
                  max-w-xl
                  py-10
                  text-center
                  lg:py-12 lg:text-left
                "
              >
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.18em]
                    text-brand-blue
                  "
                >
                  Virtual IT Labs
                </p>

                <h1
                  className="
                    mt-3 text-4xl font-bold
                    leading-tight tracking-tight
                    text-slate-950
                    sm:text-5xl
                    lg:text-[52px]
                  "
                >
                  Your own
                  <span className="block text-brand-blue">
                    virtual workspace.
                  </span>
                </h1>

                <p
                  className="
                    mx-auto mt-5 max-w-lg
                    text-base leading-7
                    text-slate-600
                    lg:mx-0
                  "
                >
                  Access a separate virtual machine where you
                  can install, configure and practice with
                  technical tools without changing your personal
                  or company computer.
                </p>

                <div
                  className="
                    mt-6 flex flex-col
                    justify-center gap-3
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
                    Custom Environment
                  </Link>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className="
                  relative h-[280px]
                  overflow-hidden
                  sm:h-[340px]
                  lg:h-[420px]
                "
              >
                <img
                  src={LabWorkspaceImage}
                  alt="Virtual IT lab workspace"
                  className="
                    h-full w-full
                    object-cover object-center
                    lg:absolute lg:inset-0
                  "
                />

                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-r
                    from-white via-white/20
                    to-transparent
                    lg:from-white
                    lg:via-white/40
                    lg:to-transparent
                  "
                />

                <div
                  className="
                    pointer-events-none absolute inset-x-0
                    bottom-0 h-20
                    bg-gradient-to-t
                    from-white to-transparent
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.18em] text-brand-blue
                "
              >
                How it works
              </p>

              <h2
                className="
                  mt-2 text-2xl font-bold
                  tracking-tight text-slate-950
                  sm:text-3xl
                "
              >
                One remote environment. Multiple technologies.
              </h2>

              <p
                className="
                  mx-auto mt-3 max-w-2xl
                  text-sm leading-6 text-slate-600
                "
              >
                Connect remotely, choose your environment,
                configure your tools and start practicing.
              </p>
            </div>

            <ITLabDiagram />
          </div>
        </section>

        {/* =================================================
            AVAILABLE LABS
        ================================================= */}

        <section className="bg-slate-50 py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.18em] text-brand-blue
                "
              >
                Available environments
              </p>

              <h2
                className="
                  mt-2 text-2xl font-bold
                  tracking-tight text-slate-950
                  sm:text-3xl
                "
              >
                Choose the environment you need.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Practice across common IT technologies using
                dedicated virtual environments.
              </p>
            </div>

            <div
              className="
                mt-7 grid gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {labs.map((lab) => (
                <LabCard
                  key={lab.name}
                  lab={lab}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            CUSTOM ENVIRONMENT
        ================================================= */}

        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div
              className="
                overflow-hidden rounded-2xl
                bg-brand-navy
              "
            >
              <div
                className="
                  grid items-center
                  lg:grid-cols-[1fr_1fr]
                "
              >
                {/* LEFT */}
                <div className="p-7 sm:p-9">
                  <p
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.18em] text-blue-200
                    "
                  >
                    Custom labs
                  </p>

                  <h2
                    className="
                      mt-2 text-2xl font-bold
                      tracking-tight text-white
                      sm:text-3xl
                    "
                  >
                    Need a specific setup?
                  </h2>

                  <p
                    className="
                      mt-4 max-w-xl
                      text-sm leading-6
                      text-blue-100
                    "
                  >
                    We can plan a virtual environment around
                    the operating systems, software, machines
                    and technologies you need to install,
                    configure or test.
                  </p>

                  <div className="mt-6">
                    <CTALink
                      to="/contact?type=custom-lab"
                      variant="solidWhite"
                    >
                      Discuss Your Environment
                    </CTALink>
                  </div>
                </div>

                {/* RIGHT */}
                <div
                  className="
                    border-t border-blue-800
                    bg-white/5 p-7
                    lg:border-l lg:border-t-0
                    sm:p-9
                  "
                >
                  <h3 className="text-base font-bold text-white">
                    Custom environment can include
                  </h3>

                  <div
                    className="
                      mt-5 grid
                      grid-cols-1 gap-x-6
                      sm:grid-cols-2
                    "
                  >
                    {customLabIncludes.map((item) => (
                      <div
                        key={item}
                        className="
                          flex items-center gap-2.5
                          border-b border-blue-800
                          py-3
                          text-sm text-blue-100
                        "
                      >
                        <Check
                          size={15}
                          className="
                            shrink-0 text-blue-300
                          "
                        />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SMALL FINAL CTA
        ================================================= */}

        <section className="border-t border-slate-200 bg-slate-50 py-10">
          <div
            className="
              mx-auto flex max-w-5xl
              flex-col items-center
              justify-between gap-5
              px-5 text-center
              sm:px-8
              md:flex-row md:text-left
            "
          >
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Ready to use an IT Lab?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Get access to a separate virtual workspace.
              </p>
            </div>

            <CTALink
              to="/contact?type=lab-access"
              variant="solidNavy"
            >
              Get VM Access
            </CTALink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}