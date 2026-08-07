import { Bot, Code, Lightbulb, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Integration & Automation",
    desc: "Embed intelligent agents and automated workflows into your existing operations. From document processing to customer support, we deploy AI that works inside your business — not beside it.",
    tags: ["LLM Agents", "RPA", "Workflow Design"],
    testId: "service-ai-integration",
  },
  {
    icon: Code,
    title: "Custom Software & Analytics",
    desc: "Bespoke platforms, data pipelines, and analytics dashboards built around your KPIs. Turn scattered business data into decisions with software engineered for your exact needs.",
    tags: ["Data Engineering", "Dashboards", "APIs"],
    testId: "service-custom-software",
  },
  {
    icon: Lightbulb,
    title: "Strategic Tech Consulting",
    desc: "Roadmaps for AI adoption, vendor selection, and digital transformation. We help leadership teams invest in the right technology at the right time — with clear ROI milestones.",
    tags: ["AI Strategy", "Audits", "Enablement"],
    testId: "service-consulting",
  },
];

export const Services = () => {
  return (
    <section id="services" data-testid="services-section" className="border-b border-slate-800/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">// Core Services</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">
            What we build for you
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article
              key={service.testId}
              data-testid={service.testId}
              style={{ animationDelay: `${i * 120}ms` }}
              className="animate-fade-up group flex flex-col rounded-sm border border-slate-800/80 bg-slate-950 p-8 transition-colors hover:border-cyan-500/30 hover:bg-slate-900 lg:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-slate-800/80 bg-slate-900 text-cyan-400 transition-colors group-hover:border-cyan-500/50">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-xl font-medium text-slate-100">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-slate-800/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                data-testid={`${service.testId}-cta`}
                className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Discuss This Service
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
