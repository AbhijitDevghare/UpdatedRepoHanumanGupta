export default function TrustBar() {
  return (
    <section className="bg-brand-surface border-b border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mr-2">
          Technical training across modern IT:
        </span>
        {[
          "Cloud",
          "VMware",
          "Networking",
          "Windows Server",
          "Linux",
          "Programming",
          "Database",
          "AI",
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
