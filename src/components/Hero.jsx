import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Building2 } from "lucide-react";
import HeroImage from "../assets/HeroImage.png";

const originalHeroImage = HeroImage;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-16 tech-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            {/* <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-darkblue text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              12+ Years of Technical Training Experience
            </span> */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Industry-Relevant Training.
              <br />
              <span className="text-brand-blue">Real-World Skills.</span>
              <br />
              Future-Ready Professionals.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Industry-focused technical training for corporates, colleges, and
              aspiring IT professionals.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/courses"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg text-white bg-brand-navy hover:bg-brand-blue shadow-md"
              >
                Explore Courses <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/it-labs"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg text-brand-navy bg-white border border-slate-300 hover:bg-slate-50"
              >
                <Boxes size={16} className="mr-2" />
                Explore IT Labs
              </Link>
              <Link
                to="/corporate-training"
                className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-darkblue"
              >
                <Building2 size={16} className="mr-1" />
                Request Corporate Training <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-blue/20 via-cyan-500/10 to-transparent rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              <div className="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <img
                  src={originalHeroImage}
                  alt="Professional IT Classroom Facility"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
