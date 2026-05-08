import { FolderOpen, Award, Briefcase, Globe } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: "6+", label: "Projects Built" },
  { icon: Award, value: "5", label: "Certifications" },
  { icon: Briefcase, value: "3", label: "Work Experiences" },
  { icon: Globe, value: "3", label: "Languages Spoken" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          02/ HISTORY
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="min-w-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,3.5vw,4.5rem)] font-extrabold leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              MY
              <br />
              JOURNEY
            </h2>
            <p className="text-sm text-dark/60 leading-relaxed max-w-sm">
              Engineering student at INSEA, specializing in software and data engineering.
              From internships at Capgemini and Maroclear to teaching Python at Coding Giants —
              I bring curiosity, commitment, and a passion for high-impact projects.
            </p>

            {/* Timeline highlights */}
            <div className="mt-8 flex flex-col gap-4">
              {[
                { year: "2026", event: "Software Engineering Intern(Check-In process) — Royal Air Maroc" },
                { year: "2026", event: "Data and Software engineering Intern — Maroclear, Casablanca" },
                { year: "2023", event: "Software Engineering Intern — Capgemini Engineering" },
                { year: "2023", event: "Part-Time Instructor — Coding Giants" },
                { year: "2023", event: "Engineering at INSEA — Data & Software" },
              ].map(({ year, event }) => (
                <div key={event} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-lime bg-dark px-2 py-0.5 rounded shrink-0">
                    {year}
                  </span>
                  <span className="text-sm text-dark/70">{event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-dark" />
                </div>
                <div>
                  <p
                    className="text-4xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
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
