import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cloud,
  Layers3,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero1 from "../assets/labs/hero1.png";

/* =========================================================
   LAB DATA
========================================================= */

const labs = [
  {
    name: "Networking",
    icon: Network,
    topics: ["CCNA / CCNP", "VLANs", "Routing", "OSPF", "EIGRP", "ACL", "NAT"],
  },
  {
    name: "Linux",
    icon: Terminal,
    topics: [
      "Linux CLI",
      "File Management",
      "Users & Permissions",
      "Services",
      "Networking",
      "Troubleshooting",
    ],
  },
  {
    name: "Windows Server",
    icon: Server,
    topics: [
      "Active Directory",
      "DNS",
      "DHCP",
      "Group Policy",
      "PowerShell",
      "Server Administration",
    ],
  },
  {
    name: "VMware",
    icon: Layers3,
    topics: [
      "vSphere",
      "ESXi",
      "vCenter",
      "Virtual Machines",
      "Networking",
      "Troubleshooting",
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    topics: [
      "AWS",
      "Azure",
      "VPC",
      "Virtual Networks",
      "IAM",
      "Cloud Infrastructure",
    ],
  },
];

/* =========================================================
   LAB CARD
========================================================= */

function LabCard({ lab }) {
  const Icon = lab.icon;

  return (
    <article className="group border-b border-blue-100 p-6 transition hover:bg-blue-50/30">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={21} />
        </div>

        <h3 className="text-lg font-bold text-slate-950">
          {lab.name}
        </h3>

      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">

        {lab.topics.map((topic) => (
          <span
            key={topic}
            className="text-sm text-slate-600"
          >
            {topic}
          </span>
        ))}

      </div>

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

        <section className="border-b border-blue-100 bg-white">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

              {/* TEXT */}

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Virtual IT Labs
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Train. Practice.
                  <span className="block text-blue-700">
                    Build confidence.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Give employees a safe environment to configure, test and
                  troubleshoot real IT technologies before working on
                  production systems.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Use virtual labs alongside instructor-led training for
                  employee upskilling, onboarding and technical practice.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/contact?type=lab-access"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
                  >
                    Request Lab Access
                    <ArrowRight size={17} className="ml-2" />
                  </Link>

                  <Link
                    to="/contact?type=custom-lab"
                    className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    Build a Custom Lab
                  </Link>

                </div>

              </div>

              {/* ONLY IMAGE */}

              <div className="overflow-hidden rounded-2xl border border-blue-100 shadow-xl">

                <img
                  src={Hero1}
                  alt="Virtual IT lab environment"
                  className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[450px]"
                />

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY COMPANIES NEED IT
        ================================================= */}

        <section className="border-b border-blue-100 bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Why Virtual Labs
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Let employees practice before production
                </h2>

              </div>

              <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

                <p>
                  Classroom training explains the technology. A lab lets
                  employees actually configure it, make mistakes and
                  troubleshoot problems without affecting production systems.
                </p>

                <p>
                  Companies can use the same environment for onboarding,
                  upskilling, technology adoption, certification preparation
                  and hands-on technical workshops.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            HOW COMPANIES USE IT
        ================================================= */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="mb-10">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                For Organizations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                One lab, multiple training needs
              </h2>

            </div>

            <div className="grid border-y border-blue-100 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Onboarding",
                  text: "Help new employees gain practical experience with your technology stack.",
                },
                {
                  title: "Upskilling",
                  text: "Give existing IT teams hands-on practice with new technologies.",
                },
                {
                  title: "Troubleshooting",
                  text: "Create real technical problems and let employees learn how to solve them.",
                },
                {
                  title: "New Technology",
                  text: "Let teams practice new platforms before using them in production.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-6
                    ${index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""}
                    ${index === 2 ? "lg:border-l" : ""}
                  `}
                >

                  <div className="flex items-start gap-3">

                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>

                      <h3 className="font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            LAB ENVIRONMENTS
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Lab Environments
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Practice the technologies your team works with
              </h2>

            </div>

            <div className="mt-10 grid border-t border-blue-100 md:grid-cols-2 lg:grid-cols-3">

              {labs.map((lab, index) => (
                <div
                  key={lab.name}
                  className={`
                    ${index % 2 !== 0 ? "md:border-l" : ""}
                    ${index >= 3 ? "lg:border-t" : ""}
                    ${index !== 0 && index !== 3 ? "border-blue-100" : ""}
                  `}
                >
                  <LabCard lab={lab} />
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            CUSTOM CORPORATE LAB
        ================================================= */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Custom Corporate Labs
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Train around your environment
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Build a lab around the technologies, operating systems,
                  network topology and exercises your employees actually
                  need to practice.
                </p>

                <Link
                  to="/contact?type=custom-lab"
                  className="mt-7 inline-flex items-center rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
                >
                  Discuss Your Requirements
                  <ArrowRight size={17} className="ml-2" />
                </Link>

              </div>

              <div className="border-y border-blue-100">

                {[
                  "Custom network topologies",
                  "Windows and Linux systems",
                  "Multiple virtual machines",
                  "Active Directory and DNS",
                  "Routing and switching scenarios",
                  "Cloud and hybrid environments",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-blue-100 py-4 last:border-b-0"
                  >

                    <Check
                      size={17}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="text-sm text-slate-600">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-navy">

            <div className="px-6 py-12 sm:px-12 sm:py-14">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Corporate Lab Training
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Give your team a place to practice.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Tell us what your employees need to learn and we can
                help you plan the right lab environment.
              </p>

              <Link
                to="/contact?type=corporate-training"
                className="mt-7 inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-blue-50"
              >
                Talk to Us
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