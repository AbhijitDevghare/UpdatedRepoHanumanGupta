import { ArrowLeft, CalendarDays, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { blogs } from "../data/blogs";
import { internalVisuals } from "../data/internalVisuals";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);
  const image =
    internalVisuals.blogs[
      blogs.findIndex((item) => item.slug === slug) %
        internalVisuals.blogs.length
    ] || internalVisuals.blogs[0];

  return (
    <>
      <Navbar />
      <main>
        {blog ? (
          <>
            <section className="border-b border-slate-200 bg-brand-navy py-16 text-white lg:py-20">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Link
                  to="/blogs"
                  className="inline-flex items-center text-sm font-semibold text-cyan-200"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to articles
                </Link>
                <span className="mt-8 block text-xs font-mono uppercase tracking-wider text-cyan-300">
                  TECHNICAL NOTE
                </span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {blog.title}
                </h1>
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                  <CalendarDays size={15} />
                  {blog.date}
                </div>
              </div>
            </section>
            <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src={image}
                  alt={blog.title}
                  className="aspect-[16/7] w-full object-cover"
                />
              </div>
              <div className="mx-auto max-w-3xl py-10">
                <p className="text-xl leading-relaxed text-slate-600">
                  {blog.excerpt}
                </p>
                <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-relaxed text-slate-500">
                  This article is a prepared editorial space. Detailed
                  academy-authored content can be added here later.
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                  <Link
                    to="/blogs"
                    className="text-sm font-semibold text-brand-blue"
                  >
                    More articles →
                  </Link>
                  <span className="text-xs text-slate-400">
                    <Share2 size={14} className="mr-1 inline" />
                    Technical learning note
                  </span>
                </div>
              </div>
            </article>
          </>
        ) : (
          <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-brand-navy">
              Article not found
            </h1>
            <Link
              to="/blogs"
              className="mt-6 inline-flex rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Browse articles
            </Link>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
