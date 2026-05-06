"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What technologies do you work with?",
    a: "I work across the full stack: Python, JavaScript, Java, and PHP on the backend (Django, Spring Boot); React and Angular on the frontend; PostgreSQL and SQL for databases; and Power BI, Pandas, and ETL tooling for data engineering.",
  },
  {
    q: "Are you available for internships or freelance work?",
    a: "Yes! I'm actively seeking internship opportunities and am open to freelance projects — especially in full-stack development, data engineering, or software architecture. Reach out via the contact form.",
  },
  {
    q: "Can you work on data-heavy or analytical projects?",
    a: "Absolutely. I have hands-on experience building ETL pipelines, data warehouses, and Power BI dashboards. My academic and internship projects have focused heavily on transforming raw data into actionable insights.",
  },
  {
    q: "Do you have experience with agile environments?",
    a: "Yes — during my internship at Capgemini Engineering I was exposed to agile project environments and participated in strategic meetings. I also use Jira/Scrum for project management.",
  },
  {
    q: "What languages do you speak?",
    a: "I'm fluent in French (native), English (professional), and Arabic (native). I can work in international environments and communicate clearly in both technical and non-technical contexts.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-dark/50 uppercase mb-4">
          06/ FAQ
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-[clamp(2rem,2.8vw,3.5rem)] font-extrabold leading-tight tracking-tight uppercase"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span
                    className="font-semibold text-dark text-sm lg:text-base leading-snug group-hover:text-dark/70 transition-colors"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-dark transition-colors">
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
