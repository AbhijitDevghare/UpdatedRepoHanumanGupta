import { useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { blogs } from "../data/blogs";
import { internalVisuals } from "../data/internalVisuals";

const categories = ["All", "Virtual Labs", "Learning Paths"];

export default function Blogs() {
  const [category, setCategory] = useState("All");
  const filteredBlogs = blogs.filter(
    (blog, index) =>
      category === "All" ||
      (index === 0
        ? category === "Virtual Labs"
        : category === "Learning Paths"),
  );
  const featured = blogs[0];

  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-16 tech-grid lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
              NEXUSTECH NOTES
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
              Technical ideas for practical learning
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Short, focused notes on virtual labs, technology learning paths,
              and the systems behind modern IT work.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-brand-navy shadow-xl lg:grid-cols-2">
              <div className="relative min-h-72">
                <img
                  src={internalVisuals.blogs[0]}
                  alt="Technical learning on a laptop"
                  className="h-full w-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-transparent to-transparent" />
                <span className="absolute left-6 top-6 rounded bg-brand-navy/80 px-3 py-1 text-xs font-mono text-cyan-200">
                  FEATURED NOTE
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 text-white sm:p-10">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                  {featured.date}
                </span>
                <h2 className="mt-3 text-3xl font-extrabold">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {featured.excerpt}
                </p>
                <Link
                  to={`/blogs/${featured.slug}`}
                  className="mt-7 inline-flex items-center self-start text-sm font-semibold text-cyan-200"
                >
                  Read featured article{" "}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  EDITORIAL INDEX
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
                  Recent articles
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${category === item ? "bg-brand-navy text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-brand-blue hover:text-brand-blue"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.slug}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <img
                      src={
                        internalVisuals.blogs[
                          index % internalVisuals.blogs.length
                        ]
                      }
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded bg-brand-navy/80 px-3 py-1 text-xs font-mono text-cyan-200">
                      {index === 0 ? "VIRTUAL LABS" : "LEARNING PATHS"}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <CalendarDays size={14} />
                      {blog.date}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-brand-navy">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {blog.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue"
                    >
                      Read article <ArrowRight size={15} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Layers3 className="text-brand-blue" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  TOPIC AREAS
                </span>
                <h2 className="mt-1 text-2xl font-extrabold text-brand-navy">
                  Follow the technology threads
                </h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Virtual environments",
                "Technical foundations",
                "Troubleshooting",
                "Cloud workflows",
                "Automation",
              ].map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <BookOpen size={15} className="mr-2 inline text-brand-blue" />
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
