import { useMemo, useState } from "react";
import {
  ChevronDown,
  SearchX,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import CourseCategory from "../components/CourseCategory";
import CourseSearch from "../components/CourseSearch";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import TopBar from "../components/TopBar";

export default function Courses() {
  const { category: routeCategory } = useParams();
  const navigate = useNavigate();

  const initialCategory =
    routeCategory &&
    courses.some((item) => item.slug === routeCategory)
      ? routeCategory
      : courses[0]?.slug || "all";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    /*
     * Search across all courses
     */
    if (query) {
      return courses
        .map((category) => ({
          ...category,

          courses: category.courses.filter((course) =>
            `${course.name} ${
              category.category
            } ${course.shortDescription || ""}`
              .toLowerCase()
              .includes(query)
          ),
        }))
        .filter(
          (category) =>
            category.courses.length > 0
        );
    }

    /*
     * Show only selected category
     */
    return courses
      .filter(
        (category) =>
          category.slug === selectedCategory
      )
      .map((category) => ({
        ...category,
        courses: category.courses,
      }));
  }, [search, selectedCategory]);

  const handleCategoryChange = (slug) => {
    setSearch("");
    setSelectedCategory(slug);

    if (slug === "all") {
      navigate("/courses");
    } else {
      navigate(`/courses/${slug}`);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    
      <Navbar />

      <main className="bg-slate-50">

        {/* =====================================================
            SEARCH
        ===================================================== */}
        <section className="border-b border-slate-200 bg-white">
          <div
            className="
              mx-auto
              max-w-7xl
              px-4
              py-6
              sm:px-6
              lg:px-8
            "
          >
            <div className="mx-auto max-w-4xl">
              <CourseSearch
                value={search}
                onChange={setSearch}
              />
            </div>
          </div>
        </section>


        {/* =====================================================
            CATEGORY NAVIGATION
        ===================================================== */}
        <section
          className="
            sticky
            top-0
            z-30
            border-b
            border-slate-200
            bg-white/95
            backdrop-blur-md
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-4
              sm:px-6
              lg:px-8
            "
          >

            {/* Desktop */}
            <div
              className="
                hidden
                flex-wrap
                items-center
                gap-1
                py-2.5
                md:flex
              "
            >
              {courses.map((courseCategory) => {
                const active =
                  selectedCategory ===
                    courseCategory.slug &&
                  !search;

                return (
                  <button
                    key={courseCategory.slug}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        courseCategory.slug
                      )
                    }
                    className={`
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      whitespace-nowrap
                      transition-all
                      duration-200
                      ${
                        active
                          ? "bg-brand-blue text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-brand-navy"
                      }
                    `}
                  >
                    {courseCategory.category}
                  </button>
                );
              })}
            </div>


            {/* Mobile */}
            <div className="py-2.5 md:hidden">
              <div className="relative">

                <ChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  value={selectedCategory}
                  onChange={(event) =>
                    handleCategoryChange(
                      event.target.value
                    )
                  }
                  className="
                    w-full
                    appearance-none
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    py-2.5
                    pl-4
                    pr-10
                    text-sm
                    font-semibold
                    text-brand-navy
                    outline-none
                    focus:border-brand-blue
                    focus:ring-2
                    focus:ring-brand-blue/20
                  "
                >
                  {courses.map((courseCategory) => (
                    <option
                      key={courseCategory.slug}
                      value={courseCategory.slug}
                    >
                      {courseCategory.category}
                    </option>
                  ))}
                </select>

              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            COURSE CONTENT
        ===================================================== */}
        <section className="py-8 pb-16">
          <div
            className="
              mx-auto
              max-w-7xl
              px-4
              sm:px-6
              lg:px-8
            "
          >

            {/* Search result heading */}
            {search && (
              <div className="mb-7">
                <h1
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-brand-navy
                    sm:text-3xl
                  "
                >
                  Search results
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Results for "{search}"
                </p>
              </div>
            )}


            {/* =================================================
                COURSE CATEGORIES
            ================================================= */}
            {filteredCategories.length > 0 ? (
              <div className="space-y-10">

                {filteredCategories.map(
                  (courseCategory) => (
                    <CourseCategory
                      key={courseCategory.slug}
                      category={courseCategory}
                      courses={courseCategory.courses}
                    />
                  )
                )}

              </div>
            ) : (

              /* Empty state */
              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-white
                  px-6
                  py-20
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                  "
                >
                  <SearchX
                    size={27}
                    className="text-slate-400"
                  />
                </div>

                <h2
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-brand-navy
                  "
                >
                  No courses found
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Try another course name or technology.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");

                    handleCategoryChange(
                      courses[0]?.slug || "all"
                    );
                  }}
                  className="
                    mt-6
                    rounded-lg
                    bg-brand-blue
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Browse Courses
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}