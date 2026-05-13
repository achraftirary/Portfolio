"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "One Step — Auto Check-In",
    type: "End-of-Studies Internship (PFE) — Feb 2026 – Present",
    company: "Royal Air Maroc · Casablanca",
    desc: "Engineering an end-to-end Online Check-In Platform using Spring Boot 3, React 18, and Oracle with seamless Amadeus Airline API integration. Architecting a highly resilient, event-driven auto check-in pipeline on Apache Kafka with advanced retry logic, dead-letter queuing, exponential backoff, and crash-safe state machine. Implementing a custom transactional email system utilizing React Email and Node.js to automate boarding pass delivery and lifecycle notifications.",
    tags: ["React 18", "Spring Boot 3", "Oracle", "Apache Kafka", "Node.js", "Amadeus API"],
    initials: "RA",
    github: null,
    inProgress: true,
    featured: true,
  },
  {
    num: "02",
    title: "MaroclearAnalytics",
    type: "Internship (PFA) — 2026",
    company: "Maroclear · Casablanca",
    desc: "Internal financial data analysis platform: automated ETL pipeline for Excel processing, interactive React dashboards, PDF/Excel report generation, and a Django/PostgreSQL backend with full role management.",
    tags: ["React", "Django", "PostgreSQL", "ETL", "Power BI"],
    initials: "MA",
    github: null,
    inProgress: false,
  },
  {
    num: "03",
    title: "L-Atelier Digital",
    type: "Full Project — 2026",
    company: "Luxury Interior Design Client",
    desc: "AI-powered B2B web application for managing production workflows and site monitoring in a luxury interior design company. Features multi-project tracking, AI-powered risk analysis, PDF/Excel reporting, one-click email reporting, inventory management, and role-based access control.",
    tags: ["TypeScript", "Next.js", "AI", "REST API", "PostgreSQL"],
    initials: "LA",
    github: "https://github.com/achraftirary/L-Atelier-Digital",
    inProgress: false,
  },
  {
    num: "04",
    title: "Atlas Gym APP",
    type: "Full Project — 2026",
    company: "Personal Project",
    desc: "Centralized digital platform that replaces manual gym tracking. Empowers administrators to oversee daily operations while offering members a self-service portal to manage profiles, book sessions, and track their fitness progress.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    initials: "AG",
    github: "https://github.com/achraftirary/Atlas-Gym-APP",
    inProgress: false,
  },
  {
    num: "05",
    title: "O2 SleepApnea APP",
    type: "Full Project — 2026",
    company: "O2 Medical",
    desc: "Internal web application for O2 Medical to manage equipment rentals, clients, inventory, invoices, alerts, and daily operations — replacing paper-based workflows with a fully digital system.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    initials: "O2",
    github: "https://github.com/achraftirary/O2-SleepApnea-APP",
    inProgress: false,
  },
  {
    num: "06",
    title: "Predictive Codebase Health Engine",
    type: "In Progress — 2026",
    company: "Research Project",
    desc: "Architecting a predictive technical debt and codebase health engine using Abstract Syntax Trees and Graph Neural Networks — helping engineering teams proactively detect and manage code quality issues before they become critical.",
    tags: ["Python", "AST", "Graph Neural Networks", "ML"],
    initials: "PC",
    github: "https://github.com/achraftirary/Predictive-Codebase-Health-Engine-PCHE",
    inProgress: true,
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const p = projects[idx];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          05/ PROJECTS
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="min-w-0 overflow-hidden">
            <h2
              className="text-[clamp(1.8rem,8vw,3rem)] font-extrabold leading-tight uppercase"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="block">FEATURED</span>
              <span className="block">PROJECTS</span>
            </h2>
            <p className="text-sm text-dark/60 leading-relaxed mt-4 max-w-xs">
              6 real-world projects — from internships and client work to personal research.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => setIdx((idx - 1 + projects.length) % projects.length)}
                className="w-10 h-10 rounded-full border border-dark flex items-center justify-center hover:bg-dark hover:text-white transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setIdx((idx + 1) % projects.length)}
                className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-lime hover:text-dark transition-all"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-xs text-dark/40 ml-2">
                {idx + 1} / {projects.length}
              </span>
            </div>

            {/* Dot selectors */}
            <div className="flex gap-2 mt-5 flex-wrap">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                    i === idx
                      ? "bg-dark text-white scale-110"
                      : "bg-white border border-gray-200 text-dark/40 hover:border-dark"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right — project card */}
          <div className={`rounded-3xl p-6 lg:p-10 shadow-sm transition-all duration-300 ${"featured" in p && p.featured ? "bg-dark text-white" : "bg-white"}`}>
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 ${"featured" in p && p.featured ? "bg-lime text-dark" : "bg-dark text-lime"}`}>
                {p.initials}
              </div>
              <div className="flex items-center gap-2">
                {p.inProgress && (
                  <span className="text-[10px] font-bold bg-lime text-dark px-2 py-1 rounded-full uppercase tracking-wider">
                    In Progress
                  </span>
                )}
                <span className={`text-xs font-bold tracking-widest uppercase ${"featured" in p && p.featured ? "text-white/30" : "text-dark/30"}`}>
                  {p.num}
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold text-lime uppercase tracking-wider mb-1">
              {p.type}
            </p>
            <h3
              className={`text-xl font-extrabold mb-1 ${"featured" in p && p.featured ? "text-white" : "text-dark"}`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {p.title}
            </h3>
            <p className={`text-xs mb-4 ${"featured" in p && p.featured ? "text-white/40" : "text-dark/40"}`}>{p.company}</p>
            <p className={`text-sm leading-relaxed mb-6 ${"featured" in p && p.featured ? "text-white/70" : "text-dark/60"}`}>{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${"featured" in p && p.featured ? "bg-white/10 border-white/20 text-white/80" : "bg-surface border-gray-200 text-dark"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${"featured" in p && p.featured ? "text-white/60 hover:text-lime" : "text-dark hover:text-lime"}`}
              >
                <ExternalLink size={14} />
                View on GitHub
              </a>
            ) : (
              <span className={`inline-flex items-center gap-2 text-xs font-medium ${"featured" in p && p.featured ? "text-white/30" : "text-dark/30"}`}>
                <Lock size={13} />
                Private &amp; Confidential
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
