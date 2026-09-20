import { useMemo, useState } from "react";
import { ChevronDown, Layers3, SearchX } from "lucide-react";
import { useParams } from "react-router-dom";
import CourseCategory from "../components/CourseCategory";
import CourseSearch from "../components/CourseSearch";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { courses } from "../data/courses";
import { internalVisuals } from "../data/internalVisuals";

export default function Courses() {
  const { category: routeCategory } = useParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    routeCategory || "all",
  );

  const filteredCategories = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return courses
      .filter(
        (courseCategory) =>
          selectedCategory === "all" ||
          courseCategory.slug === selectedCategory,
      )
      .map((courseCategory) => ({
        ...courseCategory,
        courses: courseCategory.courses.filter((course) => {
          if (!normalizedSearch) return true;
          return `${course.name} ${courseCategory.category} ${course.shortDescription}`
            .toLowerCase()
            .includes(normalizedSearch);
        }),
      }))
      .filter((courseCategory) => courseCategory.courses.length > 0);
  }, [search, selectedCategory]);

  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 tech-grid">
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 xl:grid-cols-12 xl:px-8">
            <div className="xl:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                NEXUSTECH ACADEMY / COURSE CATALOG
              </span>
              <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                Technical IT Courses
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Build practical skills across modern IT technologies with
                industry-focused technical training.
              </p>
            </div>
            <div className="xl:col-span-5">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-brand-navy shadow-xl">
                <img
                  src={internalVisuals.courses.hero.src}
                  alt={internalVisuals.courses.hero.alt}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/20 bg-brand-navy/75 p-4 text-xs font-mono text-cyan-200 backdrop-blur-sm">
                  COURSE DISCOVERY // CLOUD · NETWORK · SYSTEMS · CODE
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[minmax(0,1fr)_280px] md:p-5">
              <CourseSearch value={search} onChange={setSearch} />
              <label className="relative block">
                <span className="sr-only">Filter by category</span>
                <Layers3
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full appearance-none rounded-lg border-slate-300 bg-white py-3 pl-11 pr-10 text-sm text-brand-navy shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                >
                  <option value="all">All categories</option>
                  {courses.map((courseCategory) => (
                    <option
                      key={courseCategory.slug}
                      value={courseCategory.slug}
                    >
                      {courseCategory.category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((courseCategory) => (
                <CourseCategory
                  key={courseCategory.slug}
                  category={courseCategory}
                  courses={courseCategory.courses}
                />
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                <SearchX className="mx-auto text-slate-400" size={32} />
                <h2 className="mt-4 text-xl font-bold text-brand-navy">
                  No courses found
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Try a different course name, technology, or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
