import { Search } from "lucide-react";

export default function CourseSearch({ value, onChange }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Search courses</span>
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search courses..."
        className="w-full rounded-lg border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-brand-navy shadow-sm placeholder:text-slate-400 focus:border-brand-blue focus:ring-brand-blue"
      />
    </label>
  );
}
