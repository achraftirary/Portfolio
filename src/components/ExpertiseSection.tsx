const services = [
  {
    num: "01",
    title: "Software Engineering",
    desc: "End-to-end web applications from interactive React/Angular frontends to robust Django and Spring Boot backends. Built MaroclearAnalytics and InseApp from scratch.",
    tags: ["React", "Angular", "Django", "Spring Boot", "PostgreSQL", "PHP"],
    bg: "#f5f5f2",
  },
  {
    num: "02",
    title: "Data Engineering",
    desc: "Automated ETL pipelines for Excel processing, data warehouse construction, interactive Power BI dashboards, and sentiment analysis on large datasets.",
    tags: ["Python", "Power BI", "ETL", "SQL", "Data Warehousing", "Pandas"],
    bg: "#0a0a0a",
    dark: true,
  },
  {
    num: "03",
    title: "Business Analysis & Design",
    desc: "I excel at spotting business problems others miss — translating complex real-world processes into clear UML or BPMN models, then proposing the most adapted solution. From requirements gathering to architecture proposal, I bridge the gap between business needs and technical delivery. I also bring strong Figma skills to prototype and validate those solutions visually before a single line of code is written.",
    tags: ["UML", "BPMN", "Figma", "2TUP", "Enterprise Architect", "Jira/Scrum"],
    bg: "#f5f5f2",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          04/ MY EXPERTISE
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight uppercase"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            INNOVATION
            <br />
            THROUGH
            <br />
            EXPERIENCE
          </h2>
          <p className="text-sm text-dark/60 leading-relaxed max-w-xs lg:text-right">
            From building financial analytics platforms to teaching the next generation of
            developers — I deliver with a keen eye for detail and a passion for impact.
          </p>
        </div>

        <div className="flex flex-col gap-8" id="portfolio">
          {services.map(({ num, title, desc, tags, bg, dark }) => (
            <div
              key={num}
              className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0"
              style={{ background: bg }}
            >
              {/* Visual accent — hidden on mobile */}
              <div
                className={`hidden lg:flex lg:aspect-auto lg:min-h-64 items-center justify-center m-6 rounded-2xl ${
                  dark ? "bg-white/5" : "bg-black/5"
                }`}
              >
                <span
                  className="text-[5rem] font-extrabold opacity-10 select-none"
                  style={{ fontFamily: "var(--font-syne)", color: dark ? "#fff" : "#0a0a0a" }}
                >
                  {num}
                </span>
              </div>

              {/* Content */}
              <div className={`p-6 lg:p-8 flex flex-col justify-between ${dark ? "text-white" : "text-dark"}`}>
                <div>
                  <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${dark ? "text-lime" : "text-dark/40"}`}>
                    {num}
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl font-extrabold mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-white/60" : "text-dark/60"}`}>
                    {desc}
                  </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
