import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

export default function CourseCategory({ category, courses }) {
  return (
    <section className="scroll-mt-28" id={category.slug}>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
            Technology Path
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-navy">
            {category.category}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {category.description}
          </p>
        </div>
        <Link
          to={`/courses/${category.slug}`}
          className="text-sm font-semibold text-brand-blue hover:text-brand-darkblue"
        >
          View category →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
