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
      <div className="absolute inset-y-0 left-0 flex items-center animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="px-4 text-[10px] font-bold tracking-[0.2em] text-dark uppercase md:px-6 md:text-xs md:tracking-[0.25em]">
              {item}
            </span>
            <span className="text-lime text-sm font-black md:text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
