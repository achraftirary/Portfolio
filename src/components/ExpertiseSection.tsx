const services = [
  {
    num: "01",
    title: "Software Engineering",
    desc: "End-to-end business applications from React/Vite frontends to resilient Spring Boot services. I design clean APIs, modular backends, and delivery-ready systems with documentation and maintainability in mind.",
    tags: ["Java 21", "Spring Boot 3", "Hexagonal Architecture", "React", "TypeScript", "Docker"],
    bg: "#f5f5f2",
  },
  {
    num: "02",
    title: "Microservices & Integration",
    desc: "Distributed systems built with microservices, event-driven messaging, and resilient integrations. For the Royal Air Maroc project, this means automated check-in workflows, retries, outbox-based messaging, and reliable passenger processing.",
    tags: ["Microservices", "RabbitMQ", "Transactional Outbox", "Amadeus API", "REST API", "Oracle"],
    bg: "#0a0a0a",
    dark: true,
  },
  {
    num: "03",
    title: "DevOps, Quality & Delivery",
    desc: "I care about code quality, documentation, and stable delivery. I use Docker, Git, testing, and clear technical writing to keep systems understandable, maintainable, and production-ready.",
    tags: ["Docker", "Testing", "CI/CD", "Git", "Documentation", "DevOps"],
    bg: "#f5f5f2",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 lg:py-24 px-5 lg:px-12 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          04/ MY EXPERTISE
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 mb-10 lg:mb-16">
          <h2
            className="text-[clamp(1.75rem,8vw,2.5rem)] font-extrabold leading-[0.9] uppercase tracking-tight lg:text-[clamp(1.8rem,6vw,2.5rem)]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="block">ARCHITECTURE</span>
            <span className="block">THROUGH</span>
            <span className="block">PRACTICE</span>
          </h2>
          <p className="text-sm text-dark/60 leading-relaxed max-w-xs lg:text-right">
            From designing clean backend services to shipping production-ready systems — I
            deliver with a keen eye for detail, maintainability, and long-term impact.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8" id="portfolio">
          {services.map(({ num, title, desc, tags, bg, dark }) => (
            <div
              key={num}
              className="rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ background: bg }}
            >
              {/* Mobile: simple card */}
              <div className={`lg:hidden p-4 flex flex-col gap-4 ${dark ? "text-white" : "text-dark"}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded ${dark ? "bg-lime text-dark" : "bg-dark text-lime"}`}>
                    {num}
                  </span>
                  <h3 className="text-lg font-extrabold" style={{ fontFamily: "var(--font-syne)" }}>
                    {title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-dark/60"}`}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                        dark ? "border-white/20 text-white/70" : "border-black/20 text-dark/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: side-by-side */}
                <div className="hidden lg:grid grid-cols-2 gap-0">
                <div className={`aspect-auto min-h-64 flex items-center justify-center m-6 rounded-2xl ${dark ? "bg-white/5" : "bg-black/5"}`}>
                  <span
                    className="text-[5rem] font-extrabold opacity-10 select-none"
                    style={{ fontFamily: "var(--font-syne)", color: dark ? "#fff" : "#0a0a0a" }}
                  >
                    {num}
                  </span>
                </div>
                <div className={`p-8 flex flex-col justify-between ${dark ? "text-white" : "text-dark"}`}>
                  <div>
                    <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${dark ? "text-lime" : "text-dark/40"}`}>{num}</p>
                    <h3 className="text-2xl lg:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                      {title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-white/60" : "text-dark/60"}`}>{desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default ${
                          dark
                            ? "border-white/20 text-white/70 hover:bg-lime hover:text-dark hover:border-lime"
                            : "border-black/20 text-dark/70 hover:bg-dark hover:text-white hover:border-dark"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
