import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Layers3,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   LAB IMAGES
   ========================================================= */

import NetworkingLab from "../assets/labs/networking.png";
import LinuxLab from "../assets/labs/linux.png";
import WindowsLab from "../assets/labs/windowsserver.png";
import VMwareLab from "../assets/labs/vmware.png";
import CloudLab from "../assets/labs/cloud.png";


/* =========================================================
   LAB TECHNOLOGIES
   ========================================================= */

const labs = [
  {
    name: "Networking",
    icon: Network,
    image: NetworkingLab,
    description:
      "Practice routing, switching, VLANs and network troubleshooting.",
    topics: ["Routing", "Switching", "VLANs", "Subnetting"],
  },

  {
    name: "Linux",
    icon: Terminal,
    image: LinuxLab,
    description:
      "Work with Linux systems, commands, services and administration.",
    topics: ["CLI", "Services", "Permissions", "Administration"],
  },

  {
    name: "Windows Server",
    icon: Server,
    image: WindowsLab,
    description:
      "Practice Active Directory, DNS, DHCP and Windows administration.",
    topics: ["AD", "DNS", "DHCP", "PowerShell"],
  },

  {
    name: "VMware",
    icon: Layers3,
    image: VMwareLab,
    description:
      "Work with virtual machines and enterprise virtualization.",
    topics: ["ESXi", "vCenter", "VMs", "Virtualization"],
  },

  {
    name: "Cloud",
    icon: Cloud,
    image: CloudLab,
    description:
      "Explore cloud infrastructure, networking and deployment.",
    topics: ["AWS", "Azure", "Networking", "Infrastructure"],
  },
];


/* =========================================================
   WHAT WE PROVIDE
   ========================================================= */

const labFeatures = [
  {
    title: "Dedicated Lab Environments",
    icon: Server,
  },
  {
    title: "Networking & Infrastructure",
    icon: Network,
  },
  {
    title: "Cloud & Virtualization",
    icon: Cloud,
  },
  {
    title: "Configuration & Troubleshooting",
    icon: Terminal,
  },
  {
    title: "Remote Hands-on Practice",
    icon: Layers3,
  },
];


/* =========================================================
   PRACTICAL AREAS
   ========================================================= */

const practiceAreas = [
  {
    title: "Network Configuration",
    icon: Network,
  },
  {
    title: "Server Administration",
    icon: Server,
  },
  {
    title: "Virtualization",
    icon: Layers3,
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
  },
];


/* =========================================================
   LAB CARD
   ========================================================= */

function LabCard({ lab }) {
  const Icon = lab.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={lab.image}
          alt={`${lab.name} training lab`}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Technology Icon */}

        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-brand-blue shadow-md">
          <Icon size={20} />
        </div>

      </div>


      {/* Content */}

      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-900">
          {lab.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {lab.description}
        </p>


        {/* Topics */}

        <div className="mt-4 flex flex-wrap gap-2">

          {lab.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
            >
              {topic}
            </span>
          ))}

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ITLabs() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="border-b border-slate-200 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                IT Labs
              </span>

              <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Learn by Doing
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                Practice real infrastructure technologies through
                hands-on virtual lab environments.
              </p>

              <div className="mt-7">

                <Link
                  to="/contact?type=lab-access"
                  className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Enquire About Labs
                  <ArrowRight size={16} className="ml-2" />
                </Link>

              </div>

            </div>


            {/* =================================================
                WHAT WE PROVIDE
            ================================================= */}

            <div className="mx-auto mt-14 max-w-5xl">

              <div className="mb-6 text-center">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  What We Provide
                </span>

              </div>


              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

                {labFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
                    >

                      <Icon
                        size={22}
                        className="mx-auto text-brand-blue"
                      />

                      <p className="mt-3 text-sm font-semibold leading-snug text-slate-800">
                        {feature.title}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            LAB ENVIRONMENTS
        ================================================= */}

        <section className="py-16">
          <div
            id="labs"
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          >

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Lab Environments
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Choose Your Technology
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
                Practice, configure and troubleshoot across core
                infrastructure technologies.
              </p>

            </div>


            {/* =================================================
                LAB CARDS
            ================================================= */}

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
            PRACTICAL AREAS
        ================================================= */}

        <section className="border-y border-slate-200 bg-slate-50 py-16">

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Practical Training
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                What You Can Practice
              </h2>

            </div>


            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">

              {practiceAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:shadow-md"
                  >

                    <Icon
                      size={22}
                      className="mx-auto text-brand-blue"
                    />

                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      {area.title}
                    </p>

                  </div>
                );
              })}

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
                Ready to Practice?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
                Get access to practical lab environments for your
                technology training.
              </p>

              <Link
                to="/contact?type=lab-access"
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