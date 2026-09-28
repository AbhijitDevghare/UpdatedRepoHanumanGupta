import { Search, X } from "lucide-react";

export default function CourseSearch({ value, onChange }) {
  const clearSearch = () => {
    onChange("");
  };

  return (
    <div className="relative w-full">
      <label className="sr-only" htmlFor="course-search">
        Search courses
      </label>

      {/* Search icon */}
      <Search
        size={19}
        strokeWidth={2}
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-colors
        "
      />

      {/* Input */}
      <input
        id="course-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for courses, technologies, or skills..."
        autoComplete="off"
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          py-3.5
          pl-11
          pr-12
          text-sm
          font-medium
          text-brand-navy
          shadow-sm
          outline-none
          transition-all
          duration-200

          placeholder:text-slate-400
          placeholder:font-normal

          hover:border-slate-300

          focus:border-brand-blue
          focus:ring-4
          focus:ring-brand-blue/10
          focus:shadow-md

          [&::-webkit-search-cancel-button]:hidden
        "
      />

      {/* Clear button */}
      {value && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear search"
          className="
            absolute
            right-3
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-600
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}