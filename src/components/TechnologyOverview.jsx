import {
  Bot,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { technologyPreviews } from "../data/technologyPreviews";

const icons = {
  bot: Bot,
  cloud: Cloud,
  code: Code2,
  database: Database,
  network: Network,
  server: Server,
  terminal: Terminal,
};

export default function TechnologyOverview() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-flex rounded-md bg-blue-100 px-3 py-1 text-xs font-mono font-semibold text-brand-darkblue">
            WHAT WE TEACH
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Explore the Technology Landscape
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            A concise overview of the technology paths available across modern
            IT infrastructure and development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technologyPreviews.map((technology) => {
            const Icon = icons[technology.icon];

            return (
              <article
                key={technology.slug}
                className="tech-card group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-navy">
                  <img
                    src={technology.image}
                    alt={technology.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-md border border-white/30 bg-brand-navy/75 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-sm">
                    Technology path
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-brand-blue">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wide text-slate-500">
                      {technology.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {technology.category}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {technology.description}
                  </p>
                  <Link
                    to="/courses"
                    className="mt-5 inline-flex items-center self-start text-sm font-semibold text-brand-blue transition-colors hover:text-brand-darkblue"
                  >
                    Explore Courses
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
