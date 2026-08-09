import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import attendanceNepalDashboard from "@/assets/projects/attendance-nepal-dashboard.png";

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
    screenshot: attendanceNepalDashboard,
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

const ROTATE_FACTOR = 66;
const MAX_ROTATE = 62;

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const tweenNodes = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const setTweenNodes = useCallback((api) => {
    tweenNodes.current = api.slideNodes().map((slideNode) => slideNode.querySelector(".coverflow-item"));
  }, []);

  const tweenCoverflow = useCallback((api) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const node = tweenNodes.current[slideIndex];
        if (!node) return;

        const rotateY = clamp(diffToTarget * -ROTATE_FACTOR, -MAX_ROTATE, MAX_ROTATE);
        const scale = clamp(1 - Math.abs(diffToTarget) * 0.34, 0.66, 1);
        const translateZ = -Math.abs(diffToTarget) * 160;
        const translateX = diffToTarget * -78;
        const opacity = clamp(1 - Math.abs(diffToTarget) * 0.4, 0.55, 1);

        node.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        node.style.opacity = String(opacity);
        node.style.zIndex = String(1000 - Math.round(Math.abs(diffToTarget) * 100));
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenCoverflow(emblaApi);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onReInit = () => {
      setTweenNodes(emblaApi);
      tweenCoverflow(emblaApi);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    emblaApi.on("scroll", tweenCoverflow);
    emblaApi.on("slideFocus", tweenCoverflow);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
      emblaApi.off("scroll", tweenCoverflow);
      emblaApi.off("slideFocus", tweenCoverflow);
    };
  }, [emblaApi, setTweenNodes, tweenCoverflow]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const active = PROJECTS[selectedIndex] ?? PROJECTS[0];

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

        <div className="relative mt-16">
          <div
            className="overflow-hidden"
            style={{
              perspective: "1800px",
              maskImage: "linear-gradient(to bottom, black 62%, transparent 92%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 92%)",
            }}
            ref={emblaRef}
          >
            <div className="flex touch-pan-y items-start pt-10">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.testId}
                  className="min-w-0 flex-[0_0_58%] px-1.5 sm:flex-[0_0_42%] md:flex-[0_0_30%] lg:flex-[0_0_23%]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="coverflow-item"
                    style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(i)}
                      data-testid={project.testId}
                      aria-label={`Show ${project.title}`}
                      aria-current={i === selectedIndex}
                      className="group block aspect-video w-full overflow-hidden rounded-sm border border-slate-800/80 bg-slate-900 shadow-2xl shadow-black/60 outline-none focus-visible:border-cyan-500/60"
                    >
                      <img
                        src={project.screenshot}
                        alt={`${project.title} landing page screenshot`}
                        data-testid={`${project.testId}-screenshot`}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full select-none object-cover object-top"
                      />
                    </button>
                    <div
                      aria-hidden="true"
                      className="mt-[2px] aspect-video w-full overflow-hidden rounded-sm opacity-45"
                      style={{
                        transform: "scaleY(-1)",
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 75%)",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 75%)",
                      }}
                    >
                      <img
                        src={project.screenshot}
                        alt=""
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full select-none object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous project"
            data-testid="projects-prev-btn"
            className="absolute left-0 top-[34%] z-[1001] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/80 text-slate-300 backdrop-blur transition-colors hover:border-cyan-500/40 hover:text-cyan-400 sm:left-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next project"
            data-testid="projects-next-btn"
            className="absolute right-0 top-[34%] z-[1001] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/80 text-slate-300 backdrop-blur transition-colors hover:border-cyan-500/40 hover:text-cyan-400 sm:right-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div key={active.testId} className="animate-fade-up mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-heading text-xl font-medium text-slate-100">{active.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{active.desc}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {active.tags.map((tag) => (
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
            data-testid={`${active.testId}-inquire-link`}
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-400"
          >
            Inquire About Solution
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {PROJECTS.map((project, i) => (
            <button
              key={project.testId}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${project.title}`}
              data-testid={`${project.testId}-dot`}
              className={`h-1.5 rounded-full transition-all ${
                i === selectedIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
