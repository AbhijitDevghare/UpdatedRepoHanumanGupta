import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageLayout({
  eyebrow = "NEXUSTECH ACADEMY",
  title,
  description,
  children,
}) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="py-20 bg-slate-50 tech-grid border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono font-bold text-brand-blue">
              {eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy mt-3 max-w-4xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              {description}
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
        <div className="text-center pb-20">
          <Link
            to="/contact"
            className="inline-flex px-6 py-3 rounded-lg bg-brand-navy text-white font-semibold hover:bg-brand-blue"
          >
            Start a conversation →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
