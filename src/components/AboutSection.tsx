import { ArrowRight } from "lucide-react";

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "Java", "PHP"] },
  { category: "Frontend", items: ["React", "Angular", "HTML/CSS"] },
  { category: "Backend", items: ["Django", "Spring Boot", "PostgreSQL"] },
  { category: "Data & Tools", items: ["Power BI", "ETL", "Git", "Jira"] },
  { category: "Design & Analysis", items: ["Figma", "UML", "BPMN", "Enterprise Architect"] },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-5 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-8 lg:mb-12">
          03/ ABOUT ME
        </p>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-6">
          <p
            className="text-[1.35rem] font-semibold leading-snug italic text-dark"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            "Curious, committed, and passionate about the digital world."
          </p>
          <p className="text-sm text-dark/60 leading-relaxed">
            Engineering student at INSEA (Rabat, Morocco), specializing in data and software engineering. Hands-on experience in full-stack applications, ETL pipelines, and data dashboards. President of the Forum Geni Entreprises Club and Python instructor at Coding Giants.
          </p>
          <div className="flex flex-wrap gap-2">
            {["French", "English", "Arabic"].map((lang) => (
              <span key={lang} className="text-xs font-semibold px-3 py-1.5 bg-surface rounded-full border border-gray-200">
                {lang}
              </span>
            ))}
          </div>

          {/* Skills card — compact on mobile */}
          <div className="bg-dark rounded-2xl p-5 text-white">
            <p className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-1">Technical Stack</p>
            <h3 className="text-lg font-extrabold mb-5" style={{ fontFamily: "var(--font-syne)" }}>Skills Overview</h3>
            <div className="flex flex-col gap-4">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1.5">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-xs font-medium px-2.5 py-1 bg-white/10 rounded-full text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#expertise"
            className="inline-flex items-center gap-2 border border-dark text-dark text-sm font-bold px-4 py-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-dark hover:text-white transition-all duration-200 w-fit touch-target"
          >
            View My Skills <ArrowRight size={16} />
          </a>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-snug italic text-dark mb-8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              "Curious, committed, and passionate about the digital world — I aim to contribute
              to projects with high social or technological impact."
            </p>
            <p className="text-sm text-dark/60 leading-relaxed mb-8 max-w-md">
              Engineering student at INSEA (Rabat, Morocco), specializing in data and software
              engineering. I have hands-on experience building full-stack applications, ETL
              pipelines, and data dashboards. I also served as President of the Forum Geni
              Entreprises Club and taught Python at Coding Giants.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["French", "English", "Arabic"].map((lang) => (
                <span key={lang} className="text-xs font-semibold px-3 py-1.5 bg-surface rounded-full border border-gray-200">
                  {lang}
                </span>
              ))}
            </div>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 border border-dark text-dark text-sm font-bold px-4 py-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-dark hover:text-white transition-all duration-200 touch-target"
            >
              View My Skills <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-dark rounded-3xl p-8 text-white">
            <p className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-2">Technical Stack</p>
            <h3 className="text-2xl font-extrabold mb-8" style={{ fontFamily: "var(--font-syne)" }}>Skills Overview</h3>
            <div className="flex flex-col gap-5">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="text-xs font-medium px-3 py-1.5 bg-white/10 rounded-full text-white/80 hover:bg-lime hover:text-dark transition-all cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-lime" style={{ fontFamily: "var(--font-syne)" }}>INSEA</p>
                <p className="text-xs text-white/40 mt-1">Engineering School</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-lime" style={{ fontFamily: "var(--font-syne)" }}>2026</p>
                <p className="text-xs text-white/40 mt-1">Maroclear Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
