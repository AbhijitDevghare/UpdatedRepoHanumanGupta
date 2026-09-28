import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CorporateHero from "../assets/corporate-training/hero.png";

import DXC from "../assets/companies/dxc.jpeg";
import Capgemini from "../assets/companies/capegemini.jpeg";
import HCLTech from "../assets/companies/hcltecg.png";
import KPMG from "../assets/companies/kpmg.png";
import BTGroup from "../assets/companies/btgroup.png";
import TechMahindra from "../assets/companies/techmahindra.jpeg";
import Persistent from "../assets/companies/persistent.avif";
import LTIMindtree from "../assets/companies/LTIMindtree.png";
import Wipro from "../assets/companies/Wipro.jpeg";
import Giesecke from "../assets/companies/Giesecke+Devrient.png";

/* =========================================================
   TRAINING AREAS
========================================================= */

const trainingAreas = [
  {
    title: "Networking",
    icon: Network,
    description:
      "Routing, switching, VLANs, network security and troubleshooting.",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Cloud infrastructure, networking, services and deployment concepts.",
  },
  {
    title: "VMware & Virtualization",
    icon: Server,
    description:
      "Virtual machines, ESXi, vCenter and virtualization infrastructure.",
  },
  {
    title: "Linux",
    icon: Terminal,
    description:
      "Linux administration, services, permissions and networking.",
  },
  {
    title: "Windows Server",
    icon: Server,
    description:
      "Windows Server, Active Directory, DNS, DHCP and PowerShell.",
  },
  {
    title: "Automation & Scripting",
    icon: Code2,
    description:
      "PowerShell, scripting and automation for everyday IT operations.",
  },
  {
    title: "Programming",
    icon: Code2,
    description:
      "Programming fundamentals and development concepts for technical teams.",
  },
  {
    title: "Database Technologies",
    icon: Database,
    description:
      "Database concepts, administration and practical technical workflows.",
  },
  {
    title: "AI & Emerging Technologies",
    icon: Layers3,
    description:
      "Modern technologies and emerging tools relevant to today's IT teams.",
  },
];

/* =========================================================
   TRAINING OPTIONS
========================================================= */

const trainingOptions = [
  {
    title: "Instructor-led Training",
    description:
      "Structured sessions delivered by experienced technical trainers.",
  },
  {
    title: "Hands-on Workshops",
    description:
      "Practical exercises and technical scenarios designed around real work.",
  },
  {
    title: "Customized Programs",
    description:
      "Training adapted to your technologies, teams and learning objectives.",
  },
];

/* =========================================================
   TRAINING PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Identify your team's technology stack, roles and learning objectives.",
  },
  {
    number: "02",
    title: "Customize",
    text: "Build the training structure around your requirements.",
  },
  {
    number: "03",
    title: "Train",
    text: "Deliver instructor-led sessions with practical technical exercises.",
  },
  {
    number: "04",
    title: "Apply",
    text: "Help teams connect the learning with real workplace scenarios.",
  },
];

/* =========================================================
   ORGANIZATIONS
========================================================= */

const organizations = [
  {
    name: "DXC Technology",
    image: DXC,
  },
  {
    name: "Capgemini",
    image: Capgemini,
  },
  {
    name: "HCLTech",
    image: HCLTech,
  },
  {
    name: "KPMG",
    image: KPMG,
  },
  {
    name: "BT Group",
    image: BTGroup,
  },
  {
    name: "Tech Mahindra",
    image: TechMahindra,
  },
  {
    name: "Persistent Systems",
    image: Persistent,
  },
  {
    name: "LTIMindtree",
    image: LTIMindtree,
  },
  {
    name: "Wipro",
    image: Wipro,
  },
  {
    name: "Giesecke+Devrient",
    image: Giesecke,
  },
];

/* =========================================================
   COMPANY CARD
========================================================= */

function CompanyCard({ company }) {
  return (
    <div
      className="
        flex h-24 items-center justify-center
        rounded-lg
        border border-slate-200
        bg-white
        px-5
        transition-all duration-200
        hover:border-slate-300
        hover:shadow-sm
      "
    >
      <img
        src={company.image}
        alt={company.name}
        className="
          max-h-11
          max-w-[150px]
          object-contain
        "
      />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function CorporateTraining() {
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
              right-[-200px] top-[-140px]
              h-[600px] w-[750px]
              rounded-full
              bg-blue-100/30
              blur-3xl
            "
          />

          <div
            className="
              relative mx-auto
              max-w-7xl
              px-5 sm:px-8
            "
          >
            <div
              className="
                grid items-center
                lg:min-h-[480px]
                lg:grid-cols-[0.9fr_1.1fr]
              "
            >
              {/* HERO CONTENT */}

              <div
                className="
                  relative z-10
                  max-w-xl
                  py-10
                  text-center
                  lg:py-12
                  lg:text-left
                "
              >
                <h1
                  className="
                    text-4xl font-bold
                    leading-tight tracking-tight
                    text-slate-950
                    sm:text-5xl
                    lg:text-[54px]
                  "
                >
                  Build stronger
                  <span className="block text-brand-blue">
                    technical teams.
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
                  Practical instructor-led training designed to
                  help organizations build technical capabilities
                  across modern IT technologies.
                </p>

                <div
                  className="
                    mt-6 flex flex-col
                    justify-center gap-3
                    sm:flex-row
                    lg:justify-start
                  "
                >
                  <Link
                    to="/contact?type=corporate-training"
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
                    Request Training
                    <ArrowRight
                      size={16}
                      className="ml-2"
                    />
                  </Link>

                  <Link
                    to="/courses"
                    className="
                      inline-flex items-center
                      justify-center
                      rounded-lg
                      border border-blue-200
                      bg-white
                      px-5 py-3
                      text-sm font-semibold
                      text-brand-blue
                      transition
                      hover:bg-blue-50
                    "
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>

              {/* HERO IMAGE */}

              <div
                className="
                  relative
                  h-[280px]
                  overflow-hidden
                  sm:h-[340px]
                  lg:h-[420px]
                "
              >
                <img
                  src={CorporateHero}
                  alt="Corporate IT training and professional technology learning environment"
                  className="
                    h-full w-full
                    object-cover object-center
                    lg:absolute lg:inset-0
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-r
                    from-white
                    via-white/20
                    to-transparent
                    lg:from-white
                    lg:via-white/35
                    lg:to-transparent
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0
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
            ORGANIZATIONS
        ================================================= */}

        <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            <div className="text-center">
              <h2
                className="
                  text-3xl font-bold
                  tracking-tight text-slate-950
                  sm:text-4xl
                "
              >
                Organizations we've trained with.
              </h2>

              <p
                className="
                  mx-auto mt-3
                  max-w-2xl
                  text-sm leading-6
                  text-slate-600
                  sm:text-base
                "
              >
                Training experience across technology, consulting,
                telecommunications and enterprise organizations.
              </p>
            </div>

            <div
              className="
                mx-auto mt-9
                grid max-w-6xl
                grid-cols-2 gap-3
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
              "
            >
              {organizations.map((company) => (
                <CompanyCard
                  key={company.name}
                  company={company}
                />
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            TRAINING AREAS
        ================================================= */}

        <section
          id="training-areas"
          className="bg-white py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            <div className="max-w-2xl">
              <h2
                className="
                  text-3xl font-bold
                  tracking-tight text-slate-950
                  sm:text-4xl
                "
              >
                Technologies your teams can learn.
              </h2>

              <p
                className="
                  mt-3
                  text-sm leading-6
                  text-slate-600
                  sm:text-base
                "
              >
                Build capabilities across the technologies
                used by modern IT teams.
              </p>
            </div>

            <div
              className="
                mt-7
                grid gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="
                      group flex gap-4
                      rounded-xl
                      border border-slate-200
                      bg-white p-5
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-blue-50
                        text-brand-blue
                        transition
                        group-hover:bg-brand-blue
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-sm font-bold
                          text-slate-950
                        "
                      >
                        {area.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-sm leading-6
                          text-slate-600
                        "
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            TRAINING APPROACH
        ================================================= */}

        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="
                  text-3xl font-bold
                  tracking-tight text-slate-950
                  sm:text-4xl
                "
              >
                Training designed around your teams.
              </h2>

              <p
                className="
                  mt-3 text-sm leading-6
                  text-slate-600 sm:text-base
                "
              >
                Choose a format that fits your organization's
                technology, people and learning requirements.
              </p>
            </div>

            <div
              className="
                mx-auto mt-8
                grid max-w-5xl gap-4
                md:grid-cols-3
              "
            >
              {trainingOptions.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-white p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
                  "
                >
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Check size={19} />
                  </div>

                  <h3
                    className="
                      mt-4 text-base font-bold
                      text-slate-950
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm leading-6
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            CUSTOM TRAINING
        ================================================= */}

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">

            <div
              className="
                grid items-center gap-10
                lg:grid-cols-[0.8fr_1.2fr]
              "
            >
              {/* LEFT */}

              <div>
                <h2
                  className="
                    text-3xl font-bold
                    tracking-tight text-slate-950
                    sm:text-4xl
                  "
                >
                  Training built around your requirements.
                </h2>

                <p
                  className="
                    mt-4
                    text-sm leading-7
                    text-slate-600
                    sm:text-base
                  "
                >
                  Training can be structured around your team's
                  technology stack, roles, skill levels and
                  learning objectives.
                </p>

                <Link
                  to="/contact?type=corporate-training"
                  className="
                    mt-6 inline-flex
                    items-center
                    rounded-lg
                    bg-brand-navy
                    px-5 py-3
                    text-sm font-semibold
                    text-white
                    transition
                    hover:bg-brand-blue
                  "
                >
                  Discuss Your Requirements
                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />
                </Link>
              </div>

              {/* PROCESS */}

              <div
                className="
                  grid
                  border-y border-blue-100
                  sm:grid-cols-2
                "
              >
                {process.map((step, index) => (
                  <div
                    key={step.number}
                    className={`
                      p-5 sm:p-6
                      ${
                        index % 2 !== 0
                          ? "sm:border-l sm:border-blue-100"
                          : ""
                      }
                      ${
                        index >= 2
                          ? "border-t border-blue-100"
                          : ""
                      }
                    `}
                  >
                    <span
                      className="
                        text-sm font-bold
                        text-brand-blue
                      "
                    >
                      {step.number}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-base font-bold
                        text-slate-950
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm leading-6
                        text-slate-600
                      "
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="px-5 py-12 sm:px-8 sm:py-14">
          <div
            className="
              mx-auto max-w-6xl
              overflow-hidden
              rounded-2xl
              bg-brand-navy
            "
          >
            <div
              className="
                flex flex-col
                items-start justify-between
                gap-6
                px-6 py-9
                sm:px-10 sm:py-10
                lg:flex-row
                lg:items-center
              "
            >
              <div className="max-w-2xl">
                <h2
                  className="
                    text-2xl font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  Ready to train your technical teams?
                </h2>

                <p
                  className="
                    mt-2
                    text-sm leading-6
                    text-blue-100
                    sm:text-base
                  "
                >
                  Tell us about your team, technologies and
                  training requirements.
                </p>
              </div>

              <Link
                to="/contact?type=corporate-training"
                className="
                  inline-flex shrink-0
                  items-center
                  rounded-lg
                  bg-white
                  px-5 py-3
                  text-sm font-semibold
                  text-brand-navy
                  transition
                  hover:bg-blue-50
                "
              >
                Request Training
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