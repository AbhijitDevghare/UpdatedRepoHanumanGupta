import { useState } from "react";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
        : category === "Learning Paths")
  );

  const featured = blogs[0];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="relative overflow-hidden border-b border-blue-100 bg-white"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(37, 99, 235, 0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(37, 99, 235, 0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
          }}
        >

          {/* Soft overlay */}

          <div className="absolute inset-0 bg-white/20" />

          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

            <div className="mx-auto max-w-4xl text-center">

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Technical ideas for
                <span className="block text-blue-700">
                  practical learning.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Short, focused notes on virtual labs, technology learning
                paths, and the systems behind modern IT work.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            FEATURED ARTICLE
        ================================================= */}

        <section className="border-b border-slate-200 bg-white py-14 sm:py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-brand-navy shadow-xl lg:grid-cols-2">

              {/* FEATURED IMAGE */}

              <div className="relative min-h-72">

                <img
                  src={internalVisuals.blogs[0]}
                  alt="Technical learning on a laptop"
                  className="h-full w-full object-cover opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-transparent to-transparent" />

              </div>

              {/* FEATURED CONTENT */}

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
                  className="mt-7 inline-flex items-center self-start text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  Read featured article

                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            RECENT ARTICLES
        ================================================= */}

        <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-wrap items-center justify-between gap-4">

              <div>

                <h2 className="text-3xl font-extrabold text-brand-navy">
                  Recent articles
                </h2>

              </div>

              {/* CATEGORY FILTER */}

              <div className="flex flex-wrap gap-2">

                {categories.map((item) => (

                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`
                      rounded-lg px-4 py-2 text-sm font-semibold
                      transition-colors
                      ${
                        category === item
                          ? "bg-brand-navy text-white"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-brand-blue hover:text-brand-blue"
                      }
                    `}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

            {/* BLOG CARDS */}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

              {filteredBlogs.map((blog, index) => (

                <article
                  key={blog.slug}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >

                  {/* IMAGE */}

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
                      {index === 0
                        ? "VIRTUAL LABS"
                        : "LEARNING PATHS"}
                    </span>

                  </div>

                  {/* CONTENT */}

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
                      className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-blue-800"
                    >
                      Read article

                      <ArrowRight
                        size={15}
                        className="ml-1"
                      />
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            TOPIC AREAS
        ================================================= */}

        <section className="bg-white py-14 sm:py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 text-brand-blue">

                <Layers3 size={20} />

              </div>

              <h2 className="text-2xl font-extrabold text-brand-navy">
                Follow the technology threads
              </h2>

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
                  <BookOpen
                    size={15}
                    className="mr-2 inline text-brand-blue"
                  />

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