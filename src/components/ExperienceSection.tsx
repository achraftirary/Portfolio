import { FolderOpen, Award, Briefcase, Globe } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: "6+", label: "Projects Built" },
  { icon: Award, value: "5", label: "Certifications" },
  { icon: Briefcase, value: "3", label: "Work Experiences" },
  { icon: Globe, value: "3", label: "Languages Spoken" },
];

const timeline = [
  { year: "2026", event: "Software Engineering Intern — Royal Air Maroc" },
  { year: "2026", event: "Data & Software Engineering Intern — Maroclear" },
  { year: "2023", event: "Software Engineering Intern — Capgemini Engineering" },
  { year: "2023", event: "Part-Time Instructor — Coding Giants" },
  { year: "2023", event: "Engineering at INSEA — Data & Software" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface py-16 lg:py-24 px-5 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          02/ HISTORY
        </p>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <h2
            className="text-[clamp(2.2rem,9vw,3.5rem)] font-extrabold leading-tight uppercase"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            MY JOURNEY
          </h2>

          {/* Stats grid — 2x2 on mobile */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-4 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-dark" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold leading-none" style={{ fontFamily: "var(--font-syne)" }}>
                    {value}
                  </p>
                  <p className="text-xs text-dark/60 mt-1 font-medium">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-3">
            {timeline.map(({ year, event }) => (
              <div key={event} className="flex items-start gap-3">
                <span className="text-xs font-bold text-lime bg-dark px-2 py-0.5 rounded shrink-0 mt-0.5">
                  {year}
                </span>
                <span className="text-sm text-dark/70 leading-snug">{event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-start">
          <div className="min-w-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,3.5vw,4.5rem)] font-extrabold leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              MY<br />JOURNEY
            </h2>
            <p className="text-sm text-dark/60 leading-relaxed max-w-sm">
              Engineering student at INSEA, specializing in software and data engineering.
              From internships at Capgemini and Maroclear to teaching Python at Coding Giants —
              I bring curiosity, commitment, and a passion for high-impact projects.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {timeline.map(({ year, event }) => (
                <div key={event} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-lime bg-dark px-2 py-0.5 rounded shrink-0">
                    {year}
                  </span>
                  <span className="text-sm text-dark/70">{event}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-dark" />
                </div>
                <div>
                  <p className="text-4xl font-extrabold leading-none" style={{ fontFamily: "var(--font-syne)" }}>
                    {value}
                  </p>
                  <p className="text-xs text-dark/60 mt-1 font-medium">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
