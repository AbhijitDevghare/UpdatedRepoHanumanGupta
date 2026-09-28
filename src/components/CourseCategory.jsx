import CourseCard from "./CourseCard";

export default function CourseCategory({ category, courses }) {
  return (
    <section
      className="scroll-mt-28"
      id={category.slug}
    >
      {/* Category heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
          {category.category}
        </h2>

        {category.description && (
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {category.description}
          </p>
        )}
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}