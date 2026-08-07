import { FileText, ScanText, BarChart3, Mic, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    icon: FileText,
    title: "Enterprise Knowledge Base Assistant",
    desc: "A retrieval-augmented assistant that lets employees query internal policies, contracts, and reports in plain language. Cuts information lookup from hours to seconds across large organizations.",
    tags: ["NLP", "RAG"],
    testId: "project-knowledge-base",
  },
  {
    icon: ScanText,
    title: "Automated Invoice & Document Parser",
    desc: "Computer vision pipeline that extracts line items, totals, and vendor data from scanned invoices and forms. Eliminates manual data entry and feeds clean records straight into accounting systems.",
    tags: ["OCR", "Vision"],
    testId: "project-invoice-parser",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics Dashboard",
    desc: "Machine learning models that forecast demand, revenue, and inventory trends from historical business data. Leadership gets forward-looking insight instead of rear-view reporting.",
    tags: ["Machine Learning", "Data"],
    testId: "project-predictive-analytics",
  },
  {
    icon: Mic,
    title: "Nepali Speech & Language Integration",
    desc: "Speech-to-text and language tooling tuned for Nepali and mixed-language audio. Powers voice-enabled customer service, transcription, and accessible digital experiences for local users.",
    tags: ["Speech-to-Text", "Localization"],
    testId: "project-nepali-speech",
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

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={project.testId}
              data-testid={project.testId}
              style={{ animationDelay: `${i * 120}ms` }}
              className="animate-fade-up group flex flex-col rounded-sm border border-slate-800/80 bg-slate-950 p-8 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 text-cyan-400 transition-colors group-hover:border-cyan-500/50">
                  <project.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-medium text-slate-100">{project.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
