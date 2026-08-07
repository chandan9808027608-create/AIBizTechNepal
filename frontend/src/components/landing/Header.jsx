import { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about", testId: "nav-link-about" },
  { label: "Services", href: "#services", testId: "nav-link-services" },
  { label: "Projects", href: "#projects", testId: "nav-link-projects" },
  { label: "Contact", href: "#contact", testId: "nav-link-contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" data-testid="logo-link" className="flex items-center gap-3">
          <span className="animate-pulse-glow flex h-9 w-9 items-center justify-center rounded-sm border border-cyan-500/50 bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950">
            <Cpu className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-heading text-lg font-medium tracking-tight text-slate-100">
            AI Biztech <span className="text-cyan-400">Nepal</span>
          </span>
        </a>

        <nav data-testid="desktop-nav" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={link.testId}
              className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="header-contact-cta"
            className="hidden rounded-sm bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-heading text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Contact Us
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="rounded-sm border border-slate-800/80 p-2 text-slate-300 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          data-testid="mobile-nav"
          className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-${link.testId}`}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="mobile-header-contact-cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-center font-heading text-sm font-medium text-slate-950"
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
