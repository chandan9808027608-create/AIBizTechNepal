import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.062103433604!2d85.3668313!3d27.7115453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bcc14bfb59b%3A0x500de41f6c5d5f9d!2sEverest%20Petrol%20Station!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp";

const inputClass =
  "w-full rounded-sm border border-slate-800/80 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors";

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error("Contact form is not configured yet. Please email us directly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${form.name} via AI Biztech Nepal website`,
          from_name: "AI Biztech Nepal Website",
          name: form.name,
          email: form.email,
          message: form.brief,
        }),
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry received. Our team will reach out to you shortly.");
        setForm({ name: "", email: "", brief: "" });
      } else {
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="border-b border-slate-800/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">// Contact</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">
            Let&apos;s build your AI roadmap
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-testid="contact-details">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-800/80 bg-slate-900 text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-base font-medium text-slate-100">AI Biztech Nepal</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Near Everest Petrol Station, Chabahil, Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-800/80 bg-slate-900 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-base font-medium text-slate-100">Email</p>
                  <a
                    href="mailto:hello@aibiztech.com.np"
                    data-testid="contact-email-link"
                    className="mt-1 block text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    hello@aibiztech.com.np
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-800/80 bg-slate-900 text-cyan-400">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-base font-medium text-slate-100">Phone</p>
                  <a
                    href="tel:+9779800000000"
                    data-testid="contact-phone-link"
                    className="mt-1 block text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    +977-98-0000-0000
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="AI Biztech Nepal office location map"
                data-testid="contact-map-iframe"
                className="map-dark rounded-xl border border-slate-800 shadow-lg"
              ></iframe>
            </div>
          </div>

          <form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="rounded-sm border border-slate-800/80 bg-slate-950 p-8 lg:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Send an inquiry</p>
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  data-testid="contact-email-input"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-brief" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
                  Project Brief
                </label>
                <textarea
                  id="contact-brief"
                  data-testid="contact-brief-input"
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.brief}
                  onChange={(e) => setForm({ ...form, brief: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-heading text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
