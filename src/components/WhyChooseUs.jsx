import { Award, FlaskConical, Users } from "lucide-react";

const points = [
  {
    icon: FlaskConical,
    title: "Hands-on Labs",
    text: "Practice networking, Linux, VMware, Windows and cloud technologies in practical environments.",
  },
  {
    icon: Users,
    title: "For Students & Teams",
    text: "Training designed for college students, working professionals and corporate teams.",
  },
  {
    icon: Award,
    title: "12+ Years Experience",
    text: "Technical training experience across networking, infrastructure, systems and cloud technologies.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Why Train With Us
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Learn. Practice. Build Real Skills.
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
            Training focused on practical IT knowledge that can be applied
            beyond the classroom.
          </p>
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-3 border-y border-slate-200">

          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className={`
                  group px-6 py-8 sm:px-8
                  ${index !== 0 ? "border-t md:border-t-0 md:border-l border-slate-200" : ""}
                `}
              >
                <div className="flex items-center gap-4">
                  
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-blue transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-brand-navy">
                    {point.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {point.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}