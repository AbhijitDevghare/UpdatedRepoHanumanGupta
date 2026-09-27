import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cloud,
  Code2,
  GraduationCap,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AmrapaliCollege from "../assets/colleges/image.png";
import PSITCollege from "../assets/colleges/PSIT.jpeg";
import MPCECollege from "../assets/colleges/MP.jpeg";
import BBSCollege from "../assets/colleges/BabaBhagSinghEngineeringCollege.jpg";

/* NEW HERO IMAGE */
import CollegeHeroImage from "../assets/colleges/hero.png";

/* =========================================================
   COLLEGES
========================================================= */

const colleges = [
  {
    name: "Amrapali Institute of Technology",
    image: AmrapaliCollege,
  },
  {
    name: "PSIT Kanpur",
    image: PSITCollege,
  },
  {
    name: "Maharana Pratap Engineering College",
    image: MPCECollege,
  },
  {
    name: "Baba Bhag Singh Engineering College",
    image: BBSCollege,
  },
];

/* =========================================================
   TRAINING AREAS
========================================================= */

const trainingAreas = [
  {
    title: "Networking",
    icon: Network,
    description:
      "Routing, switching, VLANs and troubleshooting.",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Cloud infrastructure, networking and practical environments.",
  },
  {
    title: "VMware & Virtualization",
    icon: Server,
    description:
      "Virtual machines, ESXi and virtualization infrastructure.",
  },
  {
    title: "Linux",
    icon: Terminal,
    description:
      "Commands, administration, services and networking.",
  },
  {
    title: "Windows Server",
    icon: Server,
    description:
      "AD, DNS, DHCP, PowerShell and server administration.",
  },
  {
    title: "Programming",
    icon: Code2,
    description:
      "Programming fundamentals and development concepts.",
  },
];

/* =========================================================
   LEARNING STEPS
========================================================= */

const learningSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Build a strong foundation in the technology.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Work through configurations and technical exercises.",
  },
  {
    number: "03",
    title: "Troubleshoot",
    text: "Learn how to identify and solve technical issues.",
  },
  {
    number: "04",
    title: "Apply",
    text: "Connect your learning with real-world scenarios.",
  },
];

/* =========================================================
   BUTTON STYLES
========================================================= */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const buttonBase = `
  inline-flex
  items-center
  justify-center
  rounded-lg
  px-6
  py-3
  text-sm
  font-semibold
  transition
  ${focusRing}
`;

const buttonStyles = {
  solidNavy: `
    ${buttonBase}
    bg-brand-navy
    text-white
    shadow-[0_8px_25px_rgba(15,23,42,0.12)]
    hover:-translate-y-0.5
    hover:bg-brand-blue
  `,
  outlineBlue: `
    ${buttonBase}
    border
    border-blue-200
    bg-white/90
    text-brand-blue
    hover:-translate-y-0.5
    hover:bg-blue-50
  `,
};

/* =========================================================
   COLLEGE SLIDER
========================================================= */

function CollegeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(
      (current) => (current + 1) % colleges.length
    );
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + colleges.length) % colleges.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % colleges.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

        <div className="mb-7 flex items-end justify-between gap-5">

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Our college training experience
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Practical technology training delivered for students
              across educational institutions.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous college"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition
                hover:border-blue-200
                hover:bg-blue-50
              "
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next college"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition
                hover:border-blue-200
                hover:bg-blue-50
              "
            >
              <ArrowRight size={17} />
            </button>

          </div>
        </div>

        <div
          className="
            overflow-hidden
            rounded-3xl
            border border-blue-100
            bg-white
            shadow-[0_15px_50px_rgba(15,23,42,0.07)]
          "
        >
          <div className="grid min-h-[360px] md:grid-cols-[1.1fr_0.9fr]">

            {/* IMAGE */}

            <div className="relative h-[260px] overflow-hidden bg-slate-100 md:h-[360px]">

              {colleges.map((college, index) => (
                <img
                  key={college.name}
                  src={college.image}
                  alt={college.name}
                  className={`
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    ${
                      index === activeIndex
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }
                  `}
                />
              ))}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/50
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-5 left-5 right-5 md:hidden">
                <p className="text-lg font-bold text-white">
                  {colleges[activeIndex].name}
                </p>
              </div>

            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10">

              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-blue-50
                  text-brand-blue
                "
              >
                <GraduationCap size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                {colleges[activeIndex].name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Technical training focused on practical learning,
                demonstrations, configurations and hands-on experience.
              </p>

              <div className="mt-6 flex items-center gap-3">

                <div
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-blue-50
                    text-brand-blue
                  "
                >
                  <Check size={15} />
                </div>

                <span className="text-sm font-medium text-slate-700">
                  Practical technology training
                </span>

              </div>

              {/* DESKTOP DOTS */}

              <div className="mt-8 hidden items-center gap-2 sm:flex">

                {colleges.map((college, index) => (
                  <button
                    key={college.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
                      h-2 rounded-full
                      transition-all duration-300
                      ${
                        index === activeIndex
                          ? "w-8 bg-brand-blue"
                          : "w-2 bg-slate-300"
                      }
                    `}
                  />
                ))}

              </div>

              {/* MOBILE CONTROLS */}

              <div className="mt-7 flex items-center justify-between sm:hidden">

                <div className="flex items-center gap-2">

                  {colleges.map((college, index) => (
                    <button
                      key={college.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`
                        h-2 rounded-full
                        transition-all duration-300
                        ${
                          index === activeIndex
                            ? "w-7 bg-brand-blue"
                            : "w-2 bg-slate-300"
                        }
                      `}
                    />
                  ))}

                </div>

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous college"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                    "
                  >
                    <ArrowLeft size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next college"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                    "
                  >
                    <ArrowRight size={15} />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

function CollegeTraining() {
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

          {/* BACKGROUND GLOW */}

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

          {/* SAME WIDTH AS NAVBAR / OTHER PAGES */}

          <div className="relative mx-auto w-full max-w-[1250px] px-5 sm:px-8">

            {/* HERO CONTENT */}

            <div
              className="
                grid
                items-center
                gap-0
                lg:min-h-[535px]
                lg:grid-cols-[0.88fr_1.12fr]
              "
            >

              {/* LEFT REAL HTML CONTENT */}

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
                  Build practical
                  <span className="block text-brand-blue">
                    technical skills.
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
                  Give students hands-on experience with networking,
                  cloud, virtualization, Linux, Windows Server and
                  modern IT technologies.
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
                  Instructor-led training combined with practical
                  demonstrations, technical exercises and real-world
                  IT scenarios.
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

                  <Link
                    to="/contact?type=college-training"
                    className={buttonStyles.solidNavy}
                  >
                    Discuss College Training
                    <ArrowRight
                      size={17}
                      className="ml-2"
                    />
                  </Link>

                  <a
                    href="#training-areas"
                    className={buttonStyles.outlineBlue}
                  >
                    Explore Training
                  </a>

                </div>

              </div>

              {/* RIGHT HERO IMAGE */}

              <div
                className="
                  relative
                  hidden
                  min-h-[480px]
                  lg:block
                "
              >

                <img
                  src={CollegeHeroImage}
                  alt="Students receiving hands-on technical IT training"
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

                {/* IMAGE → TEXT FADE */}

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

                {/* BOTTOM FADE */}

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

              {/* MOBILE HERO IMAGE */}

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
                  src={CollegeHeroImage}
                  alt="Students receiving hands-on technical IT training"
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
                    <GraduationCap size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Student-focused
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Training designed around practical learning
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
                      Technical skills
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Networking, cloud, servers and development
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
                    <Server size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Hands-on learning
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Configurations, labs and practical exercises
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            COLLEGE SLIDER
        ================================================= */}

        <CollegeSlider />

        {/* =================================================
            TRAINING AREAS
        ================================================= */}

        <section
          id="training-areas"
          className="bg-white py-14 sm:py-18"
        >
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

            <div className="max-w-2xl">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology students can learn.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Focused technical training across core infrastructure
                and development technologies.
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
            LEARNING PROCESS
        ================================================= */}

        <section className="bg-slate-50 py-14 sm:py-18">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

            <div className="max-w-2xl">

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Learn by doing.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                A simple approach that connects technical concepts
                with practical work.
              </p>

            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">

              {learningSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="
                    relative
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                  "
                >

                  <span className="text-sm font-bold text-brand-blue">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>

                  {index < learningSteps.length - 1 && (
                    <div
                      className="
                        absolute
                        right-[-13px]
                        top-1/2
                        z-10
                        hidden
                        h-6
                        w-6
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        md:flex
                      "
                    >
                      <ArrowRight
                        size={13}
                        className="text-slate-400"
                      />
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="bg-brand-navy">

          <div className="mx-auto max-w-[1250px] px-5 py-12 sm:px-8 sm:py-14">

            <div
              className="
                flex
                flex-col
                items-start
                justify-between
                gap-6
                lg:flex-row
                lg:items-center
              "
            >

              <div className="max-w-2xl">

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Looking for technical training for your college?
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                  Discuss your students, technology requirements and
                  training format with us.
                </p>

              </div>

              <Link
                to="/contact?type=college-training"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-lg
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-brand-navy
                  transition
                  hover:-translate-y-0.5
                  hover:bg-blue-50
                "
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default CollegeTraining;