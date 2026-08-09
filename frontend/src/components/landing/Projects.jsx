import { ArrowRight } from "lucide-react";

const shot = (url, version) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url${version ? `&v=${version}` : ""}`;

const PROJECTS = [
  {
    title: "G&G Auto Enterprises",
    desc: "A second-hand bike marketplace with a customer storefront and an internal system for tracking inventory and stock movements in real time.",
    tags: ["JavaScript", "E-Commerce"],
    screenshot: shot("https://www.hamroauto.com.np", 1),
    testId: "project-gg-auto",
  },
  {
    title: "Gokarna Hillside",
    desc: "A hospitality website showcasing rooms, amenities, and booking information for a hillside property.",
    tags: ["Hospitality", "Web"],
    screenshot: shot("https://slateblue-monkey-364615.hostingersite.com/", 2),
    testId: "project-gokarna-hillside",
  },
  {
    title: "Five Finger Futsal",
    desc: "A booking and information site for a local futsal venue, built with Next.js.",
    tags: ["TypeScript", "Sports Booking"],
    screenshot: shot("https://five-finger-futsal.vercel.app"),
    testId: "project-five-finger-futsal",
  },
  {
    title: "Attendance Nepal",
    desc: "An attendance, payroll, and biometric device management console for organizations.",
    tags: ["Attendance", "Payroll"],
    screenshot: shot("https://attendancenepal.vercel.app", 1),
    testId: "project-attendance-nepal",
  },
  {
    title: "All In One Abroad",
    desc: "An e-commerce store selling travel luggage and cooking essentials for students and professionals heading abroad.",
    tags: ["E-Commerce", "Retail"],
    screenshot: shot("https://darksalmon-porcupine-104945.hostingersite.com/", 1),
    testId: "project-all-in-one-abroad",
  },
  {
    title: "Ace Money Exchange",
    desc: "An NRB-licensed currency exchange site in Thamel with a live rate converter for 30+ currencies.",
    tags: ["FinTech", "Currency Exchange"],
    screenshot: shot("https://acemoneyexchange.com.np/", 1),
    testId: "project-ace-money-exchange",
  },
];

export const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="border-b border-slate-800/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">// Case Studies</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">
            Featured Work &amp; Projects
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real-world AI applications we design and deploy for enterprises.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <article
              key={project.testId}
              data-testid={project.testId}
              style={{ animationDelay: `${i * 120}ms` }}
              className="animate-fade-up group flex flex-col overflow-hidden rounded-sm border border-slate-800/80 bg-slate-950 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900"
            >
              <div className="aspect-video w-full overflow-hidden border-b border-slate-800/80 bg-slate-900">
                <img
                  src={project.screenshot}
                  alt={`${project.title} landing page screenshot`}
                  data-testid={`${project.testId}-screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-heading text-xl font-medium text-slate-100">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  data-testid={`${project.testId}-inquire-link`}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-400"
                >
                  Inquire About Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
