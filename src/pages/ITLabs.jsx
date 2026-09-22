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
    description:
      "Practice networking in a virtual environment where you can configure devices, connect different networks and troubleshoot connectivity problems.",
    topics: [
      "CCNA / CCNP",
      "VLANs",
      "Routing",
      "OSPF",
      "EIGRP",
      "ACL",
      "NAT",
    ],
  },
  {
    name: "Linux",
    icon: Terminal,
    description:
      "Work with Linux systems and practice the commands and administration tasks used in real IT environments.",
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
    description:
      "Practice Windows Server administration and understand how enterprise Windows environments are configured and managed.",
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
    description:
      "Practice virtualization concepts by working with virtual machines, ESXi and vCenter administration scenarios.",
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
    description:
      "Understand cloud infrastructure by practicing common networking, identity, security and deployment scenarios.",
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
   PRACTICAL ACTIVITIES
========================================================= */

const activities = [
  {
    number: "01",
    title: "Configure",
    text:
      "Set up networks, servers, virtual machines and cloud resources according to the required scenario.",
  },
  {
    number: "02",
    title: "Test",
    text:
      "Make configuration changes and observe how systems, services and network communication respond.",
  },
  {
    number: "03",
    title: "Troubleshoot",
    text:
      "Work through connectivity issues, service failures, incorrect configurations and other technical problems.",
  },
  {
    number: "04",
    title: "Experiment",
    text:
      "Try different configurations safely and understand what changes when you modify the environment.",
  },
];

/* =========================================================
   LAB CARD
========================================================= */

function LabCard({ lab }) {
  const Icon = lab.icon;

  return (
    <article className="group border-b border-blue-100 bg-white p-7 transition-all duration-300 hover:bg-blue-50/30">

      <div className="flex items-start gap-5">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-950">
            {lab.name}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {lab.description}
          </p>

        </div>

      </div>

      <div className="mt-6 border-t border-blue-100 pt-5">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500">
          What you can practice
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2">

          {lab.topics.map((topic) => (
            <span
              key={topic}
              className="text-sm font-medium text-slate-600"
            >
              {topic}
            </span>
          ))}

        </div>

      </div>

      <Link
        to="/contact?type=lab-access"
        className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
      >
        Request access
        <ArrowRight size={16} className="ml-1.5" />
      </Link>

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

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Learn by
                  <span className="block text-blue-700">
                    doing.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  IT concepts become easier to understand when you can
                  actually configure them. Our virtual labs give learners
                  a practical environment to build, test, break and
                  troubleshoot IT systems.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Practice networking, Linux, Windows Server, VMware and
                  cloud technologies without depending on physical lab
                  infrastructure.
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
                    className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    Build a Custom Lab
                  </Link>

                </div>

              </div>

              {/* ONLY IMAGE ON PAGE */}

              <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl">

                <img
                  src={Hero1}
                  alt="Virtual IT lab environment"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                />

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHAT IS AN IT LAB?
        ================================================= */}

        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              About the Labs
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A place to practice what you learn
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">

              <p>
                A virtual IT lab is a practical environment where you can
                work with technology without needing to build the complete
                infrastructure yourself. Instead of only reading about
                routing, servers, virtualization or cloud services, you
                can actually configure them and see how they behave.
              </p>

              <p>
                You can create configurations, test different approaches,
                make mistakes and troubleshoot the resulting problems.
                This makes the lab useful for both learning a technology
                for the first time and improving your practical skills.
              </p>

              <p>
                The environments can be used alongside a course, for
                individual practice, for technical workshops or for
                organization-specific training requirements.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            LAB ENVIRONMENTS
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Lab Environments
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Choose the technology you want to practice
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Each environment focuses on practical tasks related to
                the technology. The exact exercises can be aligned with
                your course or training objective.
              </p>

            </div>

            {/* LAB LIST */}

            <div className="mt-12 grid border-t border-blue-100 md:grid-cols-2">

              {labs.map((lab, index) => (
                <div
                  key={lab.name}
                  className={`
                    ${index % 2 !== 0 ? "md:border-l border-blue-100" : ""}
                  `}
                >
                  <LabCard lab={lab} />
                </div>
              ))}

              {/* Extra space for balanced layout */}

              <div className="hidden border-b border-blue-100 md:block" />

            </div>

          </div>

        </section>

        {/* =================================================
            HOW THE LAB CAN BE USED
        ================================================= */}

        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Practical Learning
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What can you actually do in the lab?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                The purpose of the lab is not simply to provide access to
                machines. It gives you a controlled environment where you
                can work through practical technical problems.
              </p>

            </div>

            <div className="mt-12 grid border-t border-blue-100 md:grid-cols-2">

              {activities.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex gap-5 border-b border-blue-100 py-7
                    ${index % 2 !== 0 ? "md:border-l md:pl-8" : "md:pr-8"}
                  `}
                >

                  <span className="text-sm font-bold text-blue-600">
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

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            CUSTOM LAB
        ================================================= */}

        <section className="border-y border-blue-100 bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Custom Labs
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                  Need a specific environment?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Not every training requirement fits into a standard
                  environment. A custom lab can be planned around the
                  technologies, systems and exercises required for your
                  training.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  You can specify the operating systems, number of
                  machines, network topology, software versions,
                  technologies and expected exercises.
                </p>

                <Link
                  to="/contact?type=custom-lab"
                  className="mt-7 inline-flex items-center rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
                >
                  Discuss Your Lab
                  <ArrowRight size={17} className="ml-2" />
                </Link>

              </div>

              {/* CUSTOM LAB DETAILS */}

              <div className="border-y border-blue-100">

                <div className="border-b border-blue-100 py-5">

                  <h3 className="text-lg font-bold text-slate-950">
                    A custom lab can include
                  </h3>

                </div>

                <div className="grid sm:grid-cols-2">

                  {[
                    "Custom network topologies",
                    "Windows and Linux systems",
                    "Multiple virtual machines",
                    "Active Directory and DNS",
                    "Routing and switching scenarios",
                    "Cloud and hybrid environments",
                    "Course-specific exercises",
                    "Specific software versions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-blue-100 py-4 sm:px-4"
                    >

                      <Check
                        size={16}
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

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-navy">

            <div className="px-6 py-14 sm:px-12 sm:py-16">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Virtual IT Labs
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Ready to practice?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Tell us what technology you are learning, what kind of
                environment you need and how you want to use the lab.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact?type=lab-access"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-blue-50"
                >
                  Request Lab Access
                  <ArrowRight size={17} className="ml-2" />
                </Link>

                <Link
                  to="/contact?type=custom-lab"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Ask About Custom Labs
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