import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    number: "01",
    icon: "ri-filter-3-line",
    title: "Advanced HEPA Filtration",
    subtitle: "Capture what you can't see",
    description:
      "Our multi-stage filtration system is engineered to capture fine airborne particles, dust, pollen, smoke and other unwanted pollutants.",
    stat: "99.99%",
    statLabel: "Particle filtration",
  },
  {
    number: "02",
    icon: "ri-windy-line",
    title: "360° Air Intake",
    subtitle: "Air from every direction",
    description:
      "A full-circle intake design continuously draws air from around the purifier, creating efficient and consistent airflow throughout your room.",
    stat: "360°",
    statLabel: "Air intake",
  },
  {
    number: "03",
    icon: "ri-radar-line",
    title: "Smart Air Monitoring",
    subtitle: "Know your air in real time",
    description:
      "Intelligent sensors continuously monitor indoor air quality and automatically adjust purification performance when conditions change.",
    stat: "24/7",
    statLabel: "Air monitoring",
  },
  {
    number: "04",
    icon: "ri-volume-mute-line",
    title: "Whisper Quiet",
    subtitle: "Power without the noise",
    description:
      "Engineered for peaceful spaces, our quiet motor technology delivers powerful purification while keeping operating noise to a minimum.",
    stat: "24 dB",
    statLabel: "Quiet operation",
  },
];

export const Technology = () => {
  const pageRef = useRef(null);

  const heroRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDescriptionRef = useRef(null);
  const heroStatsRef = useRef(null);

  const introRef = useRef(null);
  const technologyCardsRef = useRef(null);

  const filtrationRef = useRef(null);
  const filtrationContentRef = useRef(null);
  const filtrationVisualRef = useRef(null);
  const filterStagesRef = useRef(null);

  const phoneSectionRef = useRef(null);
  const phoneRef = useRef(null);
  const smartContentRef = useRef(null);

  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // =====================================================
      // REDUCED MOTION
      // =====================================================

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // =====================================================
      // HERO ANIMATION
      // =====================================================

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(heroLabelRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          heroTitleRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.35",
        )
        .from(
          heroDescriptionRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55",
        )
        .from(
          heroStatsRef.current.children,
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
          },
          "-=0.35",
        );

      // =====================================================
      // HERO PARALLAX
      // =====================================================

      gsap.to(heroRef.current, {
        yPercent: 15,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =====================================================
      // INTRO
      // =====================================================

      gsap.from(introRef.current.children, {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // =====================================================
      // TECHNOLOGY CARDS
      // =====================================================

      gsap.from(".technology-card", {
        y: 90,
        opacity: 0,
        scale: 0.96,
        stagger: 0.16,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: technologyCardsRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // =====================================================
      // TECHNOLOGY CARD HOVER
      // =====================================================

      const cards = gsap.utils.toArray(".technology-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".technology-icon");
        const glow = card.querySelector(".technology-glow");

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotation: 8,
            scale: 1.08,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(glow, {
            scale: 1.5,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(glow, {
            scale: 1,
            opacity: 0.5,
            duration: 0.4,
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });

      // =====================================================
      // FILTRATION SECTION
      // =====================================================

      gsap.from(filtrationContentRef.current.children, {
        x: -80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: filtrationRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // =====================================================
      // FILTER STAGES
      // =====================================================

      gsap.from(filterStagesRef.current.children, {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: filterStagesRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // =====================================================
      // FILTRATION VISUAL
      // =====================================================

      gsap.from(filtrationVisualRef.current, {
        scale: 0.5,
        opacity: 0,
        rotation: -20,
        duration: 1.4,
        ease: "back.out(1.5)",

        scrollTrigger: {
          trigger: filtrationVisualRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Continuous rotation
      gsap.to(".airflow-ring", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".airflow-ring-slow", {
        rotation: -360,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      // =====================================================
      // FLOATING AIR PARTICLES
      // =====================================================

      gsap.to(".air-particle", {
        y: -25,
        x: 15,
        opacity: 0.3,
        duration: 2.5,
        stagger: 0.3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // =====================================================
      // SMART PHONE SECTION
      // =====================================================

      gsap.from(phoneRef.current, {
        y: 100,
        opacity: 0,
        rotationY: -15,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: phoneSectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(smartContentRef.current.children, {
        x: 70,
        opacity: 0,
        stagger: 0.16,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: phoneSectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Phone floating animation
      gsap.to(phoneRef.current, {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // =====================================================
      // CTA
      // =====================================================

      gsap.from(ctaRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // =====================================================
      // RESPONSIVE PARALLAX
      // =====================================================

      mm.add("(min-width: 1024px)", () => {
        gsap.to(".technology-card", {
          yPercent: -3,
          ease: "none",

          scrollTrigger: {
            trigger: technologyCardsRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // =====================================================
      // CLEANUP
      // =====================================================

      return () => {
        mm.revert();
      };
    },
    {
      scope: pageRef,
    },
  );

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#f5f7f8] text-slate-900"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-slate-950 pt-28"
      >
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-8 lg:pb-36">
          <div className="max-w-4xl">
            <div
              ref={heroLabelRef}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              DREO Technology
            </div>

            <h1
              ref={heroTitleRef}
              className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Air purification
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                reimagined.
              </span>
            </h1>

            <p
              ref={heroDescriptionRef}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Intelligent engineering, advanced filtration and precision airflow
              work together to create a cleaner and more comfortable indoor
              environment.
            </p>

            <div
              ref={heroStatsRef}
              className="mt-12 grid max-w-2xl grid-cols-3 gap-5"
            >
              <div>
                <p className="text-3xl font-semibold text-white">99.99%</p>
                <p className="mt-1 text-xs text-slate-400">Filtration</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">360°</p>
                <p className="mt-1 text-xs text-slate-400">Air intake</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">24 dB</p>
                <p className="mt-1 text-xs text-slate-400">Quiet mode</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-16 w-full rounded-t-[50%] bg-[#f5f7f8]" />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        ref={introRef}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Inside the technology
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Designed around
              <span className="block text-slate-400">the air you breathe.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-500 lg:text-lg">
            Every component has a purpose. From the first moment air enters the
            purifier to the moment clean air returns to your room, our
            technology is designed to make every step more efficient.
          </p>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY CARDS
      ===================================================== */}

      <section
        ref={technologyCardsRef}
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32"
      >
        <div className="space-y-6">
          {technologies.map((technology) => (
            <div
              key={technology.number}
              className="
    technology-card
    group relative isolate overflow-hidden
    rounded-[2rem]
    border border-slate-200/80
    bg-white
    p-6
    shadow-[0_15px_50px_rgba(15,23,42,0.06)]
    transition-all duration-500
    hover:-translate-y-2
    hover:border-cyan-200
    hover:shadow-[0_25px_70px_rgba(8,145,178,0.12)]
    will-change-transform
    sm:p-8
    lg:p-10
  "
            >
              {/* Background gradient */}
              <div
                className="
      pointer-events-none
      absolute inset-0
      bg-[radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.12),transparent_32%)]
      opacity-0
      transition-opacity duration-700
      group-hover:opacity-100
    "
              />

              {/* Large background number */}
              <span
                className="
      pointer-events-none
      absolute
      -right-4
      -top-10
      select-none
      text-[10rem]
      font-black
      leading-none
      tracking-tighter
      text-slate-950/[0.025]
      transition-all duration-700
      group-hover:translate-x-2
      group-hover:text-cyan-950/[0.05]
      sm:text-[12rem]
    "
              >
                {technology.number}
              </span>

              {/* Cyan glow */}
              <div
                className="
      technology-glow
      pointer-events-none
      absolute
      -right-32
      -top-32
      h-80
      w-80
      rounded-full
      bg-cyan-300/30
      opacity-30
      blur-3xl
      transition-all duration-700
      group-hover:scale-125
      group-hover:opacity-60
    "
              />

              {/* Top shine */}
              <div
                className="
      pointer-events-none
      absolute
      inset-x-10
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-cyan-400/50
      to-transparent
      opacity-0
      transition-opacity duration-500
      group-hover:opacity-100
    "
              />

              <div
                className="
      relative z-10
      grid gap-8
      lg:grid-cols-[90px_1fr_230px]
      lg:items-center
    "
              >
                {/* Number */}
                <div className="flex items-start lg:h-full">
                  <div className="flex items-center gap-3">
                    <span
                      className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-slate-200
            bg-slate-50
            text-xs
            font-bold
            text-slate-500
            transition-all duration-500
            group-hover:border-cyan-300
            group-hover:bg-cyan-50
            group-hover:text-cyan-600
          "
                    >
                      {technology.number}
                    </span>

                    <span
                      className="
            hidden h-px w-8
            bg-gradient-to-r
            from-cyan-400
            to-transparent
            opacity-30
            transition-all duration-500
            group-hover:w-12
            group-hover:opacity-100
            lg:block
          "
                    />
                  </div>
                </div>

                {/* Main content */}
                <div>
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="
            technology-icon
            relative flex h-16 w-16 shrink-0
            items-center justify-center
            rounded-2xl
            bg-slate-950
            text-cyan-300
            shadow-[0_10px_30px_rgba(15,23,42,0.18)]
            transition-all duration-500
            group-hover:scale-105
            group-hover:rotate-2
            group-hover:bg-cyan-500
            group-hover:text-white
            will-change-transform
          "
                    >
                      {/* Icon glow */}
                      <div
                        className="
              absolute inset-0
              rounded-2xl
              bg-cyan-400/30
              opacity-0
              blur-xl
              transition-opacity duration-500
              group-hover:opacity-100
            "
                      />

                      <i
                        className={`
              ${technology.icon}
              relative z-10
              text-2xl
              transition-transform duration-500
              group-hover:scale-110
            `}
                      />
                    </div>

                    {/* Title */}
                    <div className="min-w-0">
                      <h3
                        className="
              text-2xl
              font-semibold
              tracking-tight
              text-slate-950
              transition-colors duration-300
              group-hover:text-cyan-700
              sm:text-3xl
            "
                      >
                        {technology.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                          {technology.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="
          mt-6
          max-w-2xl
          text-sm
          leading-7
          text-slate-500
          transition-colors duration-300
          group-hover:text-slate-600
          sm:text-base
        "
                  >
                    {technology.description}
                  </p>

                  {/* Bottom feature indicator */}
                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-1 w-20 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="
              h-full
              w-1/3
              rounded-full
              bg-cyan-400
              transition-all duration-700
              group-hover:w-full
            "
                      />
                    </div>

                    <span
                      className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-slate-400
            transition-colors duration-300
            group-hover:text-cyan-600
          "
                    >
                      Advanced Technology
                    </span>
                  </div>
                </div>

                {/* Stat */}
                <div
                  className="
        relative
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-slate-50/80
        p-6
        transition-all duration-500
        group-hover:border-cyan-200
        group-hover:bg-cyan-50/50
        lg:text-right
      "
                >
                  {/* Stat glow */}
                  <div
                    className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-cyan-300/20
          blur-2xl
          transition-transform duration-700
          group-hover:scale-150
        "
                  />

                  <div className="relative">
                    <div className="flex items-end justify-between lg:block">
                      <p
                        className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-950
              transition-colors duration-300
              group-hover:text-cyan-700
              sm:text-5xl
            "
                      >
                        {technology.stat}
                      </p>

                      <i
                        className="
              ri-arrow-up-right-line
              text-xl
              text-slate-300
              transition-all duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-cyan-500
              lg:hidden
            "
                      />
                    </div>

                    <p
                      className="
            mt-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-slate-400
          "
                    >
                      {technology.statLabel}
                    </p>

                    {/* Stat line */}
                    <div className="mt-5 h-px w-full bg-slate-200">
                      <div
                        className="
              h-full
              w-1/3
              bg-cyan-400
              transition-all duration-700
              group-hover:w-full
            "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div
                className="
      absolute
      bottom-0
      left-0
      h-1
      w-0
      bg-gradient-to-r
      from-cyan-400
      via-sky-400
      to-blue-500
      transition-all duration-700
      group-hover:w-full
    "
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FILTRATION
      ===================================================== */}

      <section
        ref={filtrationRef}
        className="relative overflow-hidden bg-slate-950"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div ref={filtrationContentRef}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Multi-stage filtration
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Clean air,
                <span className="block text-slate-500">layer by layer.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                Our filtration architecture combines multiple stages to
                progressively remove unwanted particles from the air.
              </p>

              <div ref={filterStagesRef} className="mt-10 space-y-4">
                {[
                  ["01", "Pre-filter", "Captures larger particles"],
                  ["02", "HEPA filter", "Filters fine airborne particles"],
                  ["03", "Activated carbon", "Helps reduce unwanted odors"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                      {number}
                    </span>

                    <div>
                      <p className="font-medium text-white">{title}</p>

                      <p className="mt-1 text-xs text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
    group
    relative
    overflow-hidden
    rounded-[2rem]
    border border-slate-200
    bg-slate-950
    shadow-[0_20px_60px_rgba(15,23,42,0.12)]
    transition-all duration-700
    hover:-translate-y-2
    hover:border-cyan-300/60
    hover:shadow-[0_30px_80px_rgba(6,182,212,0.18)]
  "
            >
              <img
                src="./images/sensor.jpg"
                alt="Sensor Image"
                className="
      h-full
      w-full
      object-cover
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-110
      group-hover:rotate-1
    "
              />

              {/* Dark gradient */}
              <div
                className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-t
      from-slate-950/50
      via-transparent
      to-cyan-400/10
      opacity-60
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
              />

              {/* Cyan glow */}
              <div
                className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      h-48
      w-48
      rounded-full
      bg-cyan-400/30
      opacity-0
      blur-3xl
      transition-all
      duration-700
      group-hover:scale-150
      group-hover:opacity-100
    "
              />

              {/* Scan line */}
              <div
                className="
      pointer-events-none
      absolute
      left-0
      top-0
      h-px
      w-full
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-cyan-300
      to-transparent
      opacity-0
      transition-all
      duration-1000
      group-hover:translate-x-full
      group-hover:opacity-100
    "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SMART CONTROL
      ===================================================== */}

      <section
        ref={phoneSectionRef}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Mobile app image  */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-[2rem]
    border border-slate-200
    bg-slate-950
    shadow-[0_20px_60px_rgba(15,23,42,0.10)]
    transition-all
    duration-700
    hover:-translate-y-2
    hover:border-cyan-300/60
    hover:shadow-[0_30px_80px_rgba(6,182,212,0.18)]
  "
          >
            <img
              src="./images/mobileApp.jpg"
              alt="Mobile App"
              className="
      h-full
      w-full
      object-cover
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-110
      group-hover:rotate-1
      group-hover:brightness-110
    "
            />

            {/* Gradient overlay */}
            <div
              className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-t
      from-slate-950/50
      via-transparent
      to-cyan-400/10
      opacity-50
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
            />

            {/* Cyan glow */}
            <div
              className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      h-48
      w-48
      rounded-full
      bg-cyan-400/30
      opacity-0
      blur-3xl
      transition-all
      duration-700
      group-hover:scale-150
      group-hover:opacity-100
    "
            />

            {/* Scanning line */}
            <div
              className="
      pointer-events-none
      absolute
      left-0
      top-0
      h-px
      w-full
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-cyan-300
      to-transparent
      opacity-0
      transition-all
      duration-1000
      group-hover:translate-x-full
      group-hover:opacity-100
    "
            />

            {/* App status indicator */}
            <div
              className="
      absolute
      bottom-4
      left-4
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/10
      bg-slate-950/70
      px-3
      py-1.5
      text-xs
      text-white
      opacity-0
      backdrop-blur-md
      transition-all
      duration-500
      group-hover:translate-y-0
      group-hover:opacity-100
      translate-y-2
    "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              Smart Control
            </div>
          </div>

          {/* Content */}
          <div ref={smartContentRef}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Smart ecosystem
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Your air.
              <span className="block text-slate-400">Your control.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              Monitor your indoor air quality, adjust purification modes and
              stay informed through a connected smart experience.
            </p>

            <div className="mt-10 space-y-6">
              {[
                [
                  "ri-smartphone-line",
                  "Mobile control",
                  "Control your purifier from anywhere using your connected device.",
                ],
                [
                  "ri-notification-3-line",
                  "Smart alerts",
                  "Receive notifications when air quality changes or your filter needs attention.",
                ],
                [
                  "ri-mic-line",
                  "Voice control",
                  "Integrate your purifier into your smart home ecosystem.",
                ],
              ].map(([icon, title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                    <i className={`${icon} text-xl`} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        ref={ctaRef}
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Experience the difference
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology that works
              <span className="block text-slate-500">for your air.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400">
              Explore our collection of intelligent air purifiers engineered for
              modern living.
            </p>

            <a
              href="/shop"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-2xl
              "
            >
              Explore Air Purifiers
              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
