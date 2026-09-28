import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { courses } from "../data/courses";

export default function CoursesMegaMenu({
  mobile = false,
  mobileOpen = false,
  onMobileToggle,
  onNavigate,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  // courses already contains categories and their courses
  const categories = courses;

  /*
   * ---------------------------------------------------------
   * MOBILE VERSION
   * ---------------------------------------------------------
   */

  if (mobile) {
    return (
      <div className="w-full">

        {/* Main Courses Button */}
        <button
          type="button"
          onClick={onMobileToggle}
          aria-expanded={mobileOpen}
          className="
            flex w-full items-center justify-between
            rounded-lg px-3 py-3
            text-sm font-semibold
            text-brand-navy
            transition-colors
            hover:bg-slate-50
          "
        >
          <span>Courses</span>

          <ChevronDown
            size={17}
            className={`transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mobile Categories */}
        {mobileOpen && (
          <div className="mt-1 ml-3 border-l border-slate-200 pl-3">

            {categories.map((category) => {
              const isOpen = openCategory === category.slug;

              return (
                <div key={category.slug} className="mb-1">

                  {/* Category Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCategory(
                        isOpen ? null : category.slug
                      )
                    }
                    aria-expanded={isOpen}
                    className="
                      flex w-full items-center justify-between
                      rounded-lg px-3 py-2.5
                      text-sm text-slate-700
                      transition-colors
                      hover:bg-slate-50
                      hover:text-brand-blue
                    "
                  >
                    <span>{category.category}</span>

                    <ChevronRight
                      size={15}
                      className={`transition-transform duration-200 ${
                        isOpen
                          ? "rotate-90 text-brand-blue"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Courses */}
                  {isOpen && (
                    <div className="ml-3 border-l border-slate-100 pl-3">

                      {category.courses.map((course) => (
                        <Link
                          key={course.slug}
                          to={`/courses/${course.slug}`}
                          onClick={onNavigate}
                          className="
                            block rounded-lg
                            px-3 py-2
                            text-sm text-slate-500
                            transition-colors
                            hover:bg-blue-50
                            hover:text-brand-blue
                          "
                        >
                          {course.name}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>
              );
            })}

            {/* View All */}
            <Link
              to="/courses"
              onClick={onNavigate}
              className="
                mt-2 flex items-center gap-2
                rounded-lg px-3 py-2.5
                text-sm font-semibold
                text-brand-blue
                transition-colors
                hover:bg-blue-50
              "
            >
              View All Courses
              <ArrowRight size={15} />
            </Link>

          </div>
        )}
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * DESKTOP VERSION
   * ---------------------------------------------------------
   */

  return (
    <div className="group relative">

      {/* Main Courses Button */}
      <button
        type="button"
        aria-haspopup="true"
        className="
          flex items-center gap-1
          px-3.5 py-2
          text-sm font-medium
          text-slate-700
          transition-colors
          hover:text-brand-blue
        "
      >
        Courses

        <ChevronDown
          size={15}
          className="
            transition-transform duration-200
            group-hover:rotate-180
          "
        />
      </button>

      {/* First Dropdown - Categories */}
      <div
        className="
          invisible absolute left-1/2 top-full z-50
          mt-2 w-64
          -translate-x-1/2 translate-y-1
          rounded-xl
          border border-slate-200
          bg-white
          p-2
          shadow-xl
          opacity-0
          transition-all duration-150
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-within:visible
          group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >

        {/* Categories */}
        {categories.map((category) => (
          <div
            key={category.slug}
            className="group/category relative"
          >

            {/* Category */}
            <div
              className="
                flex items-center justify-between
                rounded-lg
                px-3.5 py-2.5
                text-sm
                text-slate-700
                transition-colors
                hover:bg-slate-50
                hover:text-brand-blue
                cursor-pointer
              "
            >
              <span>{category.category}</span>

              <ChevronRight
                size={15}
                className="
                  text-slate-300
                  transition-colors
                  group-hover/category:text-brand-blue
                "
              />
            </div>

            {/* Second Dropdown - Courses */}
            <div
              className="
                invisible
                absolute
                left-full
                top-0
                ml-1
                w-64
                rounded-xl
                border border-slate-200
                bg-white
                p-2
                shadow-xl
                opacity-0
                translate-x-1
                transition-all
                duration-150
                group-hover/category:visible
                group-hover/category:translate-x-0
                group-hover/category:opacity-100
                group-focus-within/category:visible
                group-focus-within/category:translate-x-0
                group-focus-within/category:opacity-100
              "
            >

              {/* Category Heading */}
              <div className="px-3.5 pb-2 pt-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  {category.category}
                </p>
              </div>

              {/* Courses */}
              {category.courses.map((course) => (
                <Link
                  key={course.slug}
                  to={`/courses/${course.slug}`}
                  onClick={onNavigate}
                  className="
                    flex items-center justify-between
                    rounded-lg
                    px-3.5 py-2.5
                    text-sm
                    text-slate-700
                    transition-colors
                    hover:bg-blue-50
                    hover:text-brand-blue
                  "
                >
                  <span>{course.name}</span>

                  <ChevronRight
                    size={14}
                    className="text-slate-300"
                  />
                </Link>
              ))}

            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="my-1 border-t border-slate-100" />

        {/* View All */}
        <Link
          to="/courses"
          onClick={onNavigate}
          className="
            flex items-center justify-between
            rounded-lg
            px-3.5 py-2.5
            text-sm font-semibold
            text-brand-blue
            transition-colors
            hover:bg-blue-50
          "
        >
          <span>View All Courses</span>

          <ArrowRight size={15} />
        </Link>

      </div>
    </div>
  );
}