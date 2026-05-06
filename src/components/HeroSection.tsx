"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";

const services = [
  "Full-Stack Development",
  "Data Engineering",
  "Business Analysis & Modeling",
  "Figma & UI Design",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-20 lg:pt-24 overflow-hidden bg-white"
    >
      {/* Faint background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[18vw] font-extrabold tracking-tight text-gray-100 whitespace-nowrap"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          CODE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mt-8 mb-6">
          01/ INTRODUCTION
        </p>

        {/* Main heading */}
        <h1
          className="text-[clamp(2.8rem,9vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight uppercase"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          SOFTWARE &amp; DATA
          <br />
          <span className="inline-flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] rounded-full bg-lime text-dark text-[0.6em] font-black shrink-0">
              ✳
            </span>
            ENGINEER
          </span>
        </h1>

        {/* Sub-row */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-base text-dark/60 italic font-light leading-relaxed max-w-xs mb-8">
              Building robust applications and transforming data into impactful digital solutions.
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 group">
                  <span className="w-2 h-2 rounded-full bg-dark group-hover:bg-lime transition-colors shrink-0" />
                  <span className="text-sm font-medium tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="border border-gray-100 rounded-2xl p-8 bg-white/80 backdrop-blur-sm">
            <p className="text-xs font-bold tracking-[0.2em] text-dark/40 uppercase mb-2">
              Engineering Student @ INSEA
            </p>
            <h2
              className="text-xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Building Digital
              <br />
              Solutions
            </h2>
            <p className="text-sm text-dark/60 leading-relaxed mb-6">
              Specialized in data engineering and software development. Passionate about
              building impactful projects — from full-stack web apps to data pipelines and
              interactive dashboards.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-lime text-dark text-sm font-bold px-5 py-3 rounded-full hover:bg-dark hover:text-white transition-all duration-200"
            >
              View My Projects <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-10 flex justify-center">
        <a
          href="#marquee"
          className="flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-dark/50 hover:text-dark transition-colors group"
        >
          <span>Scroll Down</span>
          <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">
            <ArrowDownRight size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}
