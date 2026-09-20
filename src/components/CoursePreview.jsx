import {
  Award,
  Building2,
  GraduationCap,
  Laptop,
} from "lucide-react";

export default function CoursePreview() {
  const highlights = [
    {
      icon: Award,
      value: "12+",
      label: "Years Experience",
    },
    {
      icon: Building2,
      value: "Corporate",
      label: "Training",
    },
    {
      icon: GraduationCap,
      value: "College",
      label: "Training",
    },
    {
      icon: Laptop,
      value: "Virtual",
      label: "IT Labs",
    },
  ];

  return (
    <section className="bg-brand-navy border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-4
                  py-5
                  sm:py-6
                  transition-colors
                  duration-300
                  hover:bg-white/[0.04]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-cyan-300
                    transition-all
                    duration-300
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/10
                  "
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold text-white">
                    {item.value}
                  </div>

                  <div className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-400">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}