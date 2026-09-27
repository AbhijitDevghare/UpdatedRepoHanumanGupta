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
  Users,
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
        flex h-28 items-center justify-center
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-md
      "
    >
      <img
        src={company.image}
        alt={company.name}
        className="max-h-12 max-w-[150px] object-contain"
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

          <div className="relative mx-auto w-full max-w-[1250px] px-5 sm:px-8">

            {/* HERO CONTENT */}

            <div
              className="
                grid
                items-center
                gap-2
                py-5
                sm:py-7
                lg:min-h-[535px]
                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-0
                lg:py-0
              "
            >

              {/* LEFT CONTENT */}

              <div
                className="
                  relative
                  z-20
                  max-w-[600px]
                  py-8
                  text-center
                  lg:py-10
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
                  Build stronger
                  <span className="block text-brand-blue">
                    technical teams.
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
                  Practical instructor-led training designed to
                  help organizations build stronger technical
                  capabilities across modern IT technologies.
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
                  Train, upskill and reskill your teams with
                  technology-focused programs built around
                  real workplace requirements.
                </p>

                {/* BUTTONS */}

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
                  <Link
                    to="/contact?type=corporate-training"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-lg
                      bg-brand-navy
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_8px_25px_rgba(15,23,42,0.12)]
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-brand-blue
                    "
                  >
                    Request Training

                    <ArrowRight
                      size={17}
                      className="ml-2"
                    />
                  </Link>

                  <Link
                    to="/courses"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-blue-200
                      bg-white/80
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-brand-blue
                      backdrop-blur-sm
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-blue-50
                    "
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}

              <div
                className="
                  relative
                  hidden
                  h-full
                  min-h-[480px]
                  lg:block
                "
              >
                <img
                  src={CorporateHero}
                  alt="Corporate IT training and professional technology learning environment"
                  className="
                    absolute
                    inset-y-0
                    right-[-20px]
                    h-full
                    w-[calc(100%+20px)]
                    object-cover
                    object-center
                  "
                />

                {/* Left fade */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-1/3
                    bg-gradient-to-r
                    from-white
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
                  h-[250px]
                  overflow-hidden
                  sm:h-[320px]
                  lg:hidden
                "
              >
                <img
                  src={CorporateHero}
                  alt="Corporate IT training and professional technology learning environment"
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
                FEATURE STRIP
            ================================================= */}

            <div
              className="
                relative
                z-30
                mb-5
                overflow-hidden
                rounded-2xl
                border
                border-blue-100
                bg-white/95
                shadow-[0_10px_35px_rgba(15,23,42,0.07)]
                backdrop-blur-md
                sm:mb-7
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">

                {/* FEATURE 1 */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-blue-100
                    px-5
                    py-4
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Users size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Team-focused
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Training built around your workforce
                    </p>
                  </div>
                </div>

                {/* FEATURE 2 */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-blue-100
                    px-5
                    py-4
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Network size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Modern technologies
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Infrastructure, cloud, networking and development
                    </p>
                  </div>
                </div>

                {/* FEATURE 3 */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Check size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Practical learning
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Hands-on exercises and real scenarios
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            TRAINING OFFER
        ================================================= */}

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Training designed around your teams.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Choose the format that fits your organization's
                technology, people and learning requirements.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {trainingOptions.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    <Check size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            TECHNOLOGY AREAS
        ================================================= */}

        <section
          id="training-areas"
          className="bg-slate-50 py-14 sm:py-18"
        >
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology areas.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Build capabilities across the technologies used by
                modern IT teams.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="
                      group
                      flex
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-lg
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-brand-blue
                        transition
                        group-hover:bg-brand-blue
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
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
            CUSTOMIZED TRAINING
        ================================================= */}

        <section className="bg-white py-14 sm:py-18">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  A training program built around your requirements.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Training can be structured around your team's
                  technology stack, roles, skill levels and objectives.
                </p>

                <Link
                  to="/contact?type=corporate-training"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    rounded-lg
                    bg-brand-navy
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-brand-blue
                  "
                >
                  Discuss Your Requirements
                  <ArrowRight size={17} className="ml-2" />
                </Link>
              </div>

              <div className="grid border-y border-blue-100 sm:grid-cols-2">
                {process.map((step, index) => (
                  <div
                    key={step.number}
                    className={`
                      p-6
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
                    <span className="text-sm font-bold text-brand-blue">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            ORGANIZATIONS
        ================================================= */}

        <section className="bg-slate-50 py-14 sm:py-18">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Organizations we've trained with.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Training experience across technology, consulting,
                telecommunications and enterprise organizations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
            FINAL CTA
        ================================================= */}

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-brand-navy">

            <div className="px-6 py-10 sm:px-10 sm:py-12">

              <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Ready to train your technical teams?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                    Tell us about your team, technologies and training
                    requirements.
                  </p>
                </div>

                <Link
                  to="/contact?type=corporate-training"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    rounded-lg
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-brand-navy
                    transition
                    hover:bg-blue-50
                  "
                >
                  Request Training
                  <ArrowRight size={17} className="ml-2" />
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