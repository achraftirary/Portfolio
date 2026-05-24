const footerCols = [
  {
    title: "Expertise",
    links: [
      { label: "Microservices", href: "#expertise" },
      { label: "Docker & Delivery", href: "#expertise" },
      { label: "Software Architecture", href: "#expertise" },
      { label: "Documentation", href: "#expertise" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "MaroclearAnalytics", href: "#projects" },
      { label: "One Step — RAM", href: "#projects" },
      { label: "L-Atelier Digital", href: "#projects" },
      { label: "Atlas Gym APP", href: "#projects" },
      { label: "O2 SleepApnea APP", href: "#projects" },
      { label: "PCHE — In Progress", href: "#projects" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "INSEA Engineering", href: "#experience" },
      { label: "CPGE — Mohammed V", href: "#experience" },
      { label: "Coursera — Git/GitHub", href: "#" },
      { label: "Google — Data", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Contact", href: "#contact" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/achraf-tirary",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/achraftirary",
        external: true,
      },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/achraf-tirary",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/achraftirary",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:achraftiraryperso00@gmail.com",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-10 lg:pt-16 pb-8 px-5 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 lg:pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-widest uppercase block mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              ACHRAF<span className="text-lime">.</span>
            </a>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs mb-1">
              Software Engineering Student at INSEA, Casablanca, Morocco.
            </p>
            <p className="text-xs text-white/30 mb-6">+212 6 78 62 41 27</p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-lime hover:border-lime hover:text-dark transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={"external" in l && l.external ? "_blank" : undefined}
                      rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex items-center justify-center text-xs text-white/30">
          <p>© 2026 Achraf Tirary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
