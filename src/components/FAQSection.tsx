"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What kind of role are you looking for?",
    a: "I’m currently in my end-of-studies internship at Royal Air Maroc and actively looking for a full-time role in software engineering, data engineering, or DevOps — ideally in any of those paths with an AI focus.",
  },
  {
    q: "What makes you a strong candidate?",
    a: "I build production-ready software with Java, Spring Boot, microservices, Docker, RabbitMQ, and clean architectural patterns. My work combines backend engineering, integration design, documentation, and delivery best practices.",
  },
  {
    q: "Which projects should I pay attention to?",
    a: "My most representative work includes the Royal Air Maroc web check-in system, MaroclearAnalytics, L-Atelier Digital, Atlas Gym APP, and O2 SleepApnea APP. They show my ability to ship real business solutions with strong architecture and integration work.",
  },
  {
    q: "Are you available for a job or internship now?",
    a: "Yes. I’m open to full-time opportunities in software engineering, data engineering, or DevOps, especially roles that value clean code, architecture, documentation, and reliable delivery.",
  },
  {
    q: "What languages do you speak?",
    a: "I work comfortably in French, English, and Arabic, which helps me collaborate in international and multilingual teams.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 px-5 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          06/ FAQ
        </p>

        {/* Mobile: heading then accordion */}
        <div className="lg:hidden flex flex-col gap-6">
          <h2
            className="text-[clamp(1.8rem,8vw,3rem)] font-extrabold leading-tight tracking-tight uppercase"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="block">FREQUENTLY</span>
            <span className="block">ASKED</span>
          </h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 text-left"
                >
                  <span className="font-semibold text-dark text-sm leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
                    {q}
                  </span>
                    <span className="shrink-0 w-9 h-9 lg:w-7 lg:h-7 rounded-full border border-gray-200 flex items-center justify-center touch-target">
                      {open === i ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-sm text-dark/60 leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: side-by-side with sticky heading */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-[clamp(2rem,3vw,3.5rem)] font-extrabold leading-tight tracking-tight uppercase"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="block">FREQUENTLY</span>
              <span className="block">ASKED</span>
              <span className="block">QUESTIONS</span>
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="font-semibold text-dark text-sm lg:text-base leading-snug group-hover:text-dark/70 transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                    {q}
                  </span>
                  <span className="shrink-0 w-9 h-9 lg:w-7 lg:h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-dark transition-colors touch-target">
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-sm text-dark/60 leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
