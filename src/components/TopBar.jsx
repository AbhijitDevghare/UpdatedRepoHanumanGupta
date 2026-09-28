import { Mail, Phone, GraduationCap, Building2, FlaskConical } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-slate-800/80 bg-brand-navy text-xs text-slate-300">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* LEFT — SERVICES */}
        <div className="flex items-center gap-3">

          <a
            href="/college-training"
            className="
              group flex items-center gap-1.5
              whitespace-nowrap
              transition-colors duration-200
              hover:text-white
            "
          >
            <GraduationCap
              size={14}
              className="
                text-blue-300
                transition-colors
                group-hover:text-cyan-300
              "
            />
            <span>College Training</span>
          </a>

          <span className="text-slate-700">|</span>

          <a
            href="/corporate-training"
            className="
              group hidden items-center gap-1.5
              whitespace-nowrap
              transition-colors duration-200
              hover:text-white
              sm:flex
            "
          >
            <Building2
              size={14}
              className="
                text-blue-300
                transition-colors
                group-hover:text-cyan-300
              "
            />
            <span>Corporate Training</span>
          </a>

          <span className="hidden text-slate-700 sm:inline">|</span>

          <a
            href="/it-labs"
            className="
              group hidden items-center gap-1.5
              whitespace-nowrap
              transition-colors duration-200
              hover:text-white
              md:flex
            "
          >
            <FlaskConical
              size={14}
              className="
                text-blue-300
                transition-colors
                group-hover:text-cyan-300
              "
            />
            <span>IT Labs</span>
          </a>

          <span className="hidden text-slate-700 lg:inline">|</span>

          <span
            className="
              hidden items-center gap-1.5
              whitespace-nowrap
              font-medium
              text-cyan-300
              lg:flex
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            12+ Years Training Experience
          </span>

        </div>

        {/* RIGHT — CONTACT */}
        <div className="flex items-center gap-4 sm:gap-5">

          <a
            href="mailto:training@nexustech.edu"
            className="
              group flex items-center gap-1.5
              whitespace-nowrap
              transition-colors duration-200
              hover:text-white
            "
          >
            <Mail
              size={13}
              className="
                text-cyan-400
                transition-colors
                group-hover:text-cyan-300
              "
            />

            <span className="hidden sm:inline">
              training@nexustech.edu
            </span>

            <span className="sm:hidden">
              Email
            </span>
          </a>

          <span className="hidden text-slate-700 sm:inline">
            |
          </span>

          <a
            href="tel:+18005505227"
            className="
              hidden items-center gap-1.5
              whitespace-nowrap
              transition-colors duration-200
              hover:text-white
              sm:flex
            "
          >
            <Phone
              size={13}
              className="
                text-cyan-400
                transition-colors
                group-hover:text-cyan-300
              "
            />

            <span>
              +1 (800) 550-LABS
            </span>
          </a>

        </div>

      </div>
    </div>
  );
}