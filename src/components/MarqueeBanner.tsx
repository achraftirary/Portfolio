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
    <div id="marquee" className="border-y border-gray-200 py-3 overflow-hidden bg-white">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
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
