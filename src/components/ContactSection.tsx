"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

// 1. Go to https://web3forms.com
// 2. Enter your email (achraftiraryperso00@gmail.com) — they email you a key instantly, no signup
// 3. Replace YOUR_ACCESS_KEY below with the key they send you
const WEB3FORMS_KEY = "2c55af41-3c76-4bc4-8859-646622019418";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setAgreed(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-5 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left */}
          <div className="min-w-0 overflow-hidden">
            <p className="text-sm text-dark/50 italic mb-1">Let&apos;s</p>
            <h2
              className="text-[clamp(2.5rem,9vw,6rem)] font-extrabold leading-none uppercase text-dark"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              GET IN
              <br />
              TOUCH
            </h2>
            <p className="mt-4 lg:mt-6 text-sm text-dark/60 leading-relaxed max-w-xs">
              Have a project, an opportunity, or just want to connect? I&apos;ll get back to
              you within 24 hours.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "Email", value: "achraftiraryperso00@gmail.com" },
                { label: "Phone", value: "+212 6 61 31 74 64" },
                { label: "Location", value: "Rabat, Morocco" },
                { label: "LinkedIn", value: "achraf-tirary" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3 text-sm">
                  <span className="text-dark/40 w-20 shrink-0 pt-0.5">{label}</span>
                  <span className="font-medium break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          {status === "success" ? (
            <div className="bg-white rounded-3xl p-10 shadow-sm flex flex-col items-center justify-center text-center gap-4 min-h-64">
              <div className="w-14 h-14 rounded-full bg-lime flex items-center justify-center">
                <CheckCircle size={28} className="text-dark" />
              </div>
              <h3
                className="text-xl font-extrabold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Message Sent!
              </h3>
              <p className="text-sm text-dark/60 max-w-xs">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-bold text-dark/40 hover:text-dark transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col gap-5 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-dark transition-colors bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-dark transition-colors bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Project / Collaboration"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-dark transition-colors bg-transparent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-dark transition-colors bg-transparent resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border-2 shrink-0 transition-all ${
                    agreed ? "bg-lime border-lime" : "border-gray-300"
                  }`}
                >
                  {agreed && (
                    <svg viewBox="0 0 10 8" className="w-3 h-3" fill="none">
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="#0a0a0a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-dark/60 leading-relaxed">
                  I agree to be contacted regarding my message.
                </span>
              </label>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-red-500 bg-red-50 px-4 py-3 rounded-xl">
                  <AlertCircle size={14} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={!agreed || status === "loading"}
                className="flex items-center justify-center gap-2 bg-dark text-white font-bold text-sm px-6 py-4 rounded-full hover:bg-lime hover:text-dark transition-all duration-200 mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
