import { Sparkles, MapPin, Cpu, Workflow, ArrowRight } from "lucide-react";

const STATS = [
  { icon: MapPin, title: "Nepal-First Focus", label: "Built for local enterprise realities", testId: "stat-nepal-first" },
  { icon: Cpu, title: "Enterprise AI Stack", label: "Production-grade models & infra", testId: "stat-ai-stack" },
  { icon: Workflow, title: "Tailored Local Workflows", label: "Automation shaped to your process", testId: "stat-workflows" },
];

export const Hero = () => {
  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden border-b border-slate-800/80">
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjBuZXR3b3JrJTIwYmx1ZSUyMGN5YW58ZW58MHx8fHwxNzg2MTA4MzMxfDA&ixlib=rb-4.1.0&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 pb-0 pt-24 lg:px-10 lg:pt-32">
        <div className="animate-fade-up mx-auto flex max-w-4xl flex-col items-center text-center">
          <span
            data-testid="hero-badge"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Leading AI Solutions Firm
          </span>

          <h1
            data-testid="hero-headline"
            className="font-heading text-4xl font-medium tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
          >
            Transforming Nepalese Enterprises with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Applied AI
            </span>
          </h1>

          <p data-testid="hero-subtitle" className="mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
            Custom AI models, process automation, and intelligent tech strategies built for business growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              data-testid="hero-explore-projects-btn"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-heading text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              data-testid="hero-get-in-touch-btn"
              className="inline-flex items-center justify-center rounded-sm border border-slate-700 bg-transparent px-8 py-3.5 font-heading text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-900"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div
          data-testid="hero-stat-bar"
          className="mt-20 grid grid-cols-1 divide-y divide-slate-800/80 border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {STATS.map((stat) => (
            <div key={stat.testId} data-testid={stat.testId} className="flex items-start gap-4 p-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-800/80 bg-slate-900 text-cyan-400">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-base font-medium text-slate-100">{stat.title}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
