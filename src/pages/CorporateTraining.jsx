import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Code2,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   COMPANY LOGOS
   Change filenames only if your actual filenames are different
   ========================================================= */

import dxcLogo from "../assets/dxc.jpeg";
import capgeminiLogo from "../assets/capegemini.jpeg";
import hcltechLogo from "../assets/hcltecg.png";
import kpmgLogo from "../assets/kpmg.png";
import btLogo from "../assets/btgroup.png";
import techMahindraLogo from "../assets/techmahindra.jpeg";
import persistentLogo from "../assets/persistent.avif";
import ltimindtreeLogo from "../assets/LTIMindtree.png";
import wiproLogo from "../assets/Wipro.jpeg";
import gdLogo from "../assets/Giesecke+Devrient.png";


/* =========================================================
   ORGANIZATIONS
   ========================================================= */

const organizations = [
  {
    name: "DXC Technology",
    logo: dxcLogo,
  },
  {
    name: "Capgemini",
    logo: capgeminiLogo,
  },
  {
    name: "HCLTech",
    logo: hcltechLogo,
  },
  {
    name: "KPMG",
    logo: kpmgLogo,
  },
  {
    name: "BT Group",
    logo: btLogo,
  },
  {
    name: "Tech Mahindra",
    logo: techMahindraLogo,
  },
  {
    name: "Persistent Systems",
    logo: persistentLogo,
  },
  {
    name: "LTIMindtree",
    logo: ltimindtreeLogo,
  },
  {
    name: "Wipro",
    logo: wiproLogo,
  },
  {
    name: "Giesecke+Devrient",
    logo: gdLogo,
  },
];


/* =========================================================
   TRAINING AREAS
   ========================================================= */

const trainingAreas = [
  {
    title: "Networking",
    icon: Network,
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
  },
  {
    title: "VMware & Virtualization",
    icon: Server,
  },
  {
    title: "Linux",
    icon: Terminal,
  },
  {
    title: "Windows Server",
    icon: Server,
  },
  {
    title: "Automation",
    icon: Code2,
  },
];


/* =========================================================
   COMPANY CARD
   ========================================================= */

function CompanyCard({ organization }) {
  return (
    <div className="group flex h-28 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <img
        src={organization.logo}
        alt={`${organization.name} logo`}
        className="max-h-14 max-w-[170px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function CorporateTraining() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* =================================================
            SIMPLE INTRO
        ================================================= */}

        <section className="border-b border-slate-200 py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Corporate Training
            </span>

            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Technical Training for Modern IT Teams
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Practical, instructor-led training across infrastructure,
              networking, cloud, virtualization, and enterprise technologies.
            </p>

            <div className="mt-7">
              <Link
                to="/contact?type=corporate-training"
                className="inline-flex items-center rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Request Corporate Training
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

          </div>
        </section>


        {/* =================================================
            ORGANIZATIONS
        ================================================= */}

        <section className="border-b border-slate-200 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Training Experience
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Organizations We Have Trained
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
                Training experience across leading IT services,
                consulting, telecommunications, and technology organizations.
              </p>

            </div>


            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

              {organizations.map((organization) => (
                <CompanyCard
                  key={organization.name}
                  organization={organization}
                />
              ))}

            </div>

          </div>
        </section>


        {/* =================================================
            TRAINING AREAS
        ================================================= */}

        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                What We Train
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Core Technology Areas
              </h2>

            </div>


            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">

              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-semibold text-slate-800">
                      {area.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>
        </section>


        {/* =================================================
            CUSTOMIZED TRAINING
        ================================================= */}

        <section className="border-b border-slate-200 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-10 md:grid-cols-2">

              <div>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Customized Programs
                </span>

                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Training Built Around Your Requirements
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Training programs can be customized according to your
                  technology environment, team roles, and learning objectives.
                </p>

              </div>


              <div className="grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-slate-50 p-5 text-center">
                  <div className="text-lg font-bold text-blue-600">
                    01
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Understand
                  </p>
                </div>


                <div className="rounded-xl bg-slate-50 p-5 text-center">
                  <div className="text-lg font-bold text-blue-600">
                    02
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Customize
                  </p>
                </div>


                <div className="rounded-xl bg-slate-50 p-5 text-center">
                  <div className="text-lg font-bold text-blue-600">
                    03
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Deliver
                  </p>
                </div>

              </div>

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
                Planning Training for Your Team?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
                Tell us your requirements and we&apos;ll help structure the
                right training program.
              </p>

              <Link
                to="/contact?type=corporate-training"
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