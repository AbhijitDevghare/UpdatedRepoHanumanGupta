import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-navy border-b border-slate-800 text-xs text-slate-300 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <span className="flex items-center gap-1.5 text-cyan-400 font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Enterprise IT &amp; Academic Technical Training Lab
        </span>
        <div className="flex items-center gap-5 font-mono">
          <span className="hidden md:inline text-slate-400">
            12+ Years Technical Training Experience
          </span>
          <span className="flex items-center gap-1">
            <Mail size={14} className="text-cyan-400" />
            training@nexustech.edu
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Phone size={14} className="text-cyan-400" />
            +1 (800) 550-LABS
          </span>
        </div>
      </div>
    </div>
  );
}
