import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { technologyPreviews } from "../data/technologyPreviews";

const icons = {
  "Cloud Computing": Cloud,
  "VMware & Virtualization": Server,
  "Windows Server": Server,
  Linux: Terminal,
  Networking: Network,
  "Programming & Development": Code2,
  "Database Technologies": Database,
  "AI & Emerging Technologies": Bot,
};

export default function CourseCard({ course }) {
  const Icon = icons[course.category] || Code2;

  const technology = technologyPreviews.find(
    (preview) => preview.slug === course.categorySlug
  );

  return (
    <Link
      to={`/courses/${course.categorySlug}/${course.slug}`}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-brand-navy">

        <img
          src={technology?.image}
          alt={
            technology?.alt ||
            `${course.category} technology`
          }
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
          loading="lazy"
        />

        {/* Image overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-brand-navy/85
          via-brand-navy/20
          to-transparent
        " />

        {/* Category */}
        <div className="
          absolute
          bottom-4
          left-4
          right-4
          flex
          items-end
          justify-between
          gap-3
        ">
          <span className="
            max-w-[75%]
            text-sm
            font-semibold
            text-white
            leading-tight
          ">
            {course.category}
          </span>

          <span className="
            shrink-0
            rounded-full
            border
            border-white/30
            bg-white/10
            px-2.5
            py-1
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-white/90
            backdrop-blur-md
          ">
            Course
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Icon + course type */}
        <div className="flex items-center justify-between gap-4">

          <div className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-cyan-50
            text-brand-blue
            transition-all
            duration-300
            group-hover:bg-brand-blue
            group-hover:text-white
          ">
            <Icon size={20} strokeWidth={1.8} />
          </div>

          <span className="
            text-[11px]
            font-medium
            uppercase
            tracking-wide
            text-slate-400
          ">
            Technical Training
          </span>

        </div>

        {/* Title */}
        <h3 className="
          mt-5
          text-lg
          font-bold
          leading-snug
          text-brand-navy
          transition-colors
          duration-200
          group-hover:text-brand-blue
        ">
          {course.name}
        </h3>

        {/* Description */}
        <p className="
          mt-2
          line-clamp-2
          text-sm
          leading-6
          text-slate-600
        ">
          {course.shortDescription}
        </p>

        {/* Bottom action */}
        <div className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
        ">
          <span className="
            text-sm
            font-semibold
            text-brand-blue
          ">
            View Course
          </span>

          <span className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-slate-100
            text-brand-navy
            transition-all
            duration-300
            group-hover:bg-brand-blue
            group-hover:text-white
          ">
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </span>
        </div>

      </div>
    </Link>
  );
}