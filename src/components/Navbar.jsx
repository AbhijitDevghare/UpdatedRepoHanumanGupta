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
const navClass = ({ isActive }) =>
  `px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? "text-brand-blue border-b-2 border-brand-blue" : "text-slate-700 hover:text-brand-blue"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen((isOpen) => {
      if (isOpen) {
        setMobileCoursesOpen(false);
        return false;
      }

      setMobileCoursesOpen(false);
      return true;
    });
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileCoursesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white shadow-md group-hover:bg-brand-blue">
              <Network className="text-cyan-400" size={23} />
            </div>
            <div>
              <span className="text-xl font-extrabold text-brand-navy tracking-tight block leading-none">
                NexusTech<span className="text-brand-blue">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-semibold mt-1 block">
                Technical IT Institute &amp; Labs
              </span>
            </div>
          </Link>
          <nav className="hidden xl:flex items-center space-x-1">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <CoursesMegaMenu />
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={navClass}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-brand-navy hover:bg-brand-blue shadow-sm"
            >
              Request Training <span className="ml-2">→</span>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 text-brand-navy"
              aria-label="Toggle navigation"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="xl:hidden border-t border-slate-100 py-4 space-y-3">
            <NavLink
              onClick={closeMobileMenu}
              to="/"
              end
              className="block px-3 py-2 font-semibold"
            >
              Home
            </NavLink>
            <CoursesMegaMenu
              mobile
              mobileOpen={mobileCoursesOpen}
              onMobileToggle={() => setMobileCoursesOpen((isOpen) => !isOpen)}
              onNavigate={closeMobileMenu}
            />
            {links.map(([to, label]) => (
              <NavLink
                onClick={closeMobileMenu}
                key={to}
                to={to}
                className="block px-3 py-2 font-medium text-slate-700"
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
