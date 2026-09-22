import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Network } from "lucide-react";

import CoursesMegaMenu from "./CoursesMegaMenu";

const links = [
  ["/it-labs", "IT Labs"],
  ["/corporate-training", "Corporate Training"],
  ["/college-training", "College Training"],
  ["/about", "About Us"],
  ["/blogs", "Blogs"],
  ["/contact", "Contact Us"],
];

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

const navClass = ({ isActive }) =>
  `
    relative
    px-3.5
    py-2
    text-sm
    font-medium
    transition-colors
    duration-200
    ${
      isActive
        ? "text-brand-blue"
        : "text-slate-700 hover:text-brand-blue"
    }
  `;

/* =========================================================
   MOBILE NAV LINK
========================================================= */

const mobileNavClass = ({ isActive }) =>
  `
    block
    rounded-lg
    px-3
    py-2.5
    text-sm
    font-medium
    transition-colors
    duration-200
    ${
      isActive
        ? "bg-slate-50 text-brand-blue"
        : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
    }
  `;


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  /* ---------------------------------------------------------
     Toggle mobile menu
  --------------------------------------------------------- */

  const toggleMobileMenu = () => {
    setOpen((prev) => !prev);

    if (open) {
      setMobileCoursesOpen(false);
    }
  };


  /* ---------------------------------------------------------
     Close everything
  --------------------------------------------------------- */

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileCoursesOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}

        <div className="flex h-20 items-center justify-between">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-brand-navy
                text-white
                shadow-sm
                transition-colors
                duration-200
                group-hover:bg-brand-blue
              "
            >
              <Network
                className="text-cyan-400"
                size={23}
                strokeWidth={1.8}
              />
            </div>


            <div>

              <span
                className="
                  block
                  text-xl
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-brand-navy
                "
              >
                NexusTech<span className="text-brand-blue">.</span>
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Technical IT Institute &amp; Labs
              </span>

            </div>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center xl:flex">

            {/* Home */}

            <NavLink
              to="/"
              end
              className={navClass}
            >
              {({ isActive }) => (
                <span className="relative">

                  Home

                  {isActive && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-0.5
                        w-full
                        rounded-full
                        bg-brand-blue
                      "
                    />
                  )}

                </span>
              )}
            </NavLink>


            {/* Courses */}

            <CoursesMegaMenu />


            {/* Other links */}

            {links.map(([to, label]) => (

              <NavLink
                key={to}
                to={to}
                className={navClass}
              >
                {({ isActive }) => (
                  <span className="relative">

                    {label}

                    {isActive && (
                      <span
                        className="
                          absolute
                          -bottom-2
                          left-0
                          h-0.5
                          w-full
                          rounded-full
                          bg-brand-blue
                        "
                      />
                    )}

                  </span>
                )}
              </NavLink>

            ))}

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-3">

            {/* Request Training */}

            <Link
              to="/contact"
              className="
                hidden
                items-center
                rounded-lg
                bg-brand-navy
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-colors
                duration-200
                hover:bg-brand-blue
                sm:inline-flex
              "
            >
              Request Training

              <span className="ml-2">
                →
              </span>
            </Link>


            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                rounded-lg
                p-2
                text-brand-navy
                transition
                hover:bg-slate-100
                xl:hidden
              "
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
            >
              {open ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        {open && (

          <nav
            className="
              border-t
              border-slate-100
              py-4
              xl:hidden
            "
          >

            <div className="space-y-1">

              {/* Home */}

              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Home
              </NavLink>


              {/* Courses */}

              <div className="rounded-lg">

                <CoursesMegaMenu
                  mobile
                  mobileOpen={mobileCoursesOpen}
                  onMobileToggle={() =>
                    setMobileCoursesOpen((prev) => !prev)
                  }
                  onNavigate={closeMobileMenu}
                />

              </div>


              {/* Other links */}

              {links.map(([to, label]) => (

                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMobileMenu}
                  className={mobileNavClass}
                >
                  {label}
                </NavLink>

              ))}

            </div>


            {/* Mobile Request Training */}

            <div className="mt-4 border-t border-slate-100 pt-4 sm:hidden">

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-navy
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-brand-blue
                "
              >
                Request Training

                <span className="ml-2">
                  →
                </span>
              </Link>

            </div>

          </nav>

        )}

      </div>

    </header>
  );
}