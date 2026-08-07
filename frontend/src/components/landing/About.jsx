import { ShieldCheck, Zap, Layers } from "lucide-react";

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Enterprise data handled under strict security and compliance standards.", testId: "highlight-secure" },
  { icon: Zap, title: "High Efficiency", desc: "Automation pipelines that cut operational cost and manual effort.", testId: "highlight-efficiency" },
  { icon: Layers, title: "Scalable Architecture", desc: "Systems engineered to grow from pilot to nationwide deployment.", testId: "highlight-scalable" },
];

export const About = () => {
  return (
    <section id="about" data-testid="about-section" className="border-b border-slate-800/80 scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">// About Us</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">
            Enterprise-grade AI, engineered for Nepal
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400">
            AI Biztech Nepal exists to close the gap between global AI innovation and the everyday realities of
            Nepalese business. We introduce enterprise-grade artificial intelligence to organizations across
            Nepal — from banks and logistics firms to manufacturers and public institutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Our team designs, builds, and deploys applied AI systems that respect local language, local
            infrastructure, and local workflows — so technology adoption translates directly into measurable
            business growth.
          </p>
        </div>

        <div className="rounded-sm border border-slate-800/80 bg-slate-950 p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Why teams choose us</p>
          <div className="mt-8 flex flex-col gap-8">
            {HIGHLIGHTS.map((item) => (
              <div key={item.testId} data-testid={item.testId} className="flex items-start gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-medium text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
