import { Cpu, Linkedin, Twitter, Github } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "#about", testId: "footer-link-about" },
  { label: "Services", href: "#services", testId: "footer-link-services" },
  { label: "Projects", href: "#projects", testId: "footer-link-projects" },
  { label: "Contact", href: "#contact", testId: "footer-link-contact" },
];

const SOCIALS = [
  { icon: Linkedin, href: "#", label: "LinkedIn", testId: "social-linkedin" },
  { icon: Twitter, href: "#", label: "Twitter", testId: "social-twitter" },
  { icon: Github, href: "#", label: "GitHub", testId: "social-github" },
];

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-cyan-500/50 bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950">
            <Cpu className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <p data-testid="footer-copyright" className="text-sm text-slate-500">
            © 2026 AI Biztech Nepal. All rights reserved.
          </p>
        </div>

        <nav data-testid="footer-nav" className="flex flex-wrap items-center justify-center gap-6">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={link.testId}
              className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.testId}
              href={social.href}
              aria-label={social.label}
              data-testid={social.testId}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-slate-800/80 text-slate-500 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
