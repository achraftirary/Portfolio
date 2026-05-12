const items = [
  "PYTHON",
  "REACT",
  "DJANGO",
  "ANGULAR",
  "SPRING BOOT",
  "POSTGRESQL",
  "POWER BI",
  "JAVASCRIPT",
  "JAVA",
  "DATA ENGINEERING",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div id="marquee" className="relative h-12 border-y border-gray-200 overflow-hidden bg-white">
      <div className="md:hidden h-full flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 text-center">
        {items.map((item) => (
          <span key={item} className="text-[11px] font-bold tracking-[0.18em] text-dark uppercase">
            {item}
          </span>
        ))}
      </div>

      <div className="hidden md:flex absolute inset-y-0 left-0 items-center animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-xs font-bold tracking-[0.25em] text-dark px-6 uppercase">
              {item}
            </span>
            <span className="text-lime text-lg font-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
