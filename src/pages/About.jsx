import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      // Hero animation
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".about-eyebrow", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".about-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.3"
        )
        .from(
          ".about-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".about-hero-card",
          {
            scale: 0.8,
            opacity: 0,
            rotate: 4,
            duration: 1,
          },
          "-=0.5"
        );

      // Hero product floating
      gsap.to(".about-product", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero glow
      gsap.to(".about-glow", {
        scale: 1.25,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Story section
      gsap.from(".story-content", {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-visual", {
        x: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats
      gsap.from(".about-stat", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Values
      gsap.from(".value-card", {
        y: 70,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Technology
      gsap.from(".technology-item", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".technology-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Mission
      gsap.from(".mission-content", {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // CTA
      gsap.from(".about-cta", {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-cta-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: mainRef,
    }
  );

  return (
    <main
      ref={mainRef}
      className="overflow-hidden bg-[#f7f9fc] text-slate-900"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#06111f] px-6 pb-24 pt-32 text-white md:px-12 lg:px-20">
        {/* Background glow */}
        <div className="about-glow absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="about-eyebrow mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                ABOUT AIRFLOW
              </p>

              <h1 className="about-title text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                We believe
                <br />
                <span className="text-cyan-400">air matters.</span>
              </h1>

              <p className="about-description mt-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                AirFlow is building a new generation of intelligent air
                purification systems that combine advanced filtration,
                smart technology, and beautiful design.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/shop"
                  className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-white"
                >
                  Explore Products
                  <i className="ri-arrow-right-line ml-2" />
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Talk to Us
                </a>
              </div>
            </div>

            {/* Product visual */}
            <div className="about-hero-card relative mx-auto flex h-[500px] w-full max-w-[520px] items-center justify-center rounded-[3rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]" />

              <div className="absolute bottom-10 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />

              <img
                src="/images/HeroImage.png"
                alt="AEROX Air Purifier"
                className="about-product relative z-10 h-[390px] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  AIRFLOW
                </p>

                <p className="mt-1 font-semibold">
                  Pure air. Smarter living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}

      <section className="story-section px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="story-content">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Technology designed
              <br />
              <span className="text-slate-400">
                around your air.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                We started with a simple question: why shouldn't an air
                purifier be as intelligent as the devices we use every
                day?
              </p>

              <p>
                AirFlow brings together advanced filtration,
                environmental sensors, connected technology and
                thoughtful industrial design to create a completely
                different air purification experience.
              </p>

              <p>
                From the air entering the system to the clean air
                returning to your room, every part of AEROX is engineered
                with efficiency, performance and everyday comfort in mind.
              </p>
            </div>
          </div>

          <div className="story-visual relative">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#07111f] p-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-[100px]" />

              <div className="relative z-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
                  <i className="ri-wind-line text-4xl text-cyan-400" />

                  <h3 className="mt-8 text-xl font-bold text-white">
                    Clean Air
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Advanced filtration engineered to capture
                    microscopic airborne particles.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
                  <i className="ri-cpu-line text-4xl text-cyan-400" />

                  <h3 className="mt-8 text-xl font-bold text-white">
                    Smart Technology
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Intelligent sensors continuously monitor your
                    indoor environment.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
                  <i className="ri-volume-mute-line text-4xl text-cyan-400" />

                  <h3 className="mt-8 text-xl font-bold text-white">
                    Whisper Quiet
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Powerful purification without disrupting your
                    everyday life.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
                  <i className="ri-leaf-line text-4xl text-cyan-400" />

                  <h3 className="mt-8 text-xl font-bold text-white">
                    Efficient
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Designed to deliver powerful purification while
                    using energy intelligently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

   
   <section className="relative overflow-hidden bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  {/* Background */}
  <div className="pointer-events-none absolute inset-0">

    {/* Soft cyan glow */}
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

    {/* Fine grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(#0f172a 1px, transparent 1px),
          linear-gradient(90deg, #0f172a 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl">

    {/* ========================================= */}
    {/* HEADER */}
    {/* ========================================= */}

    <div className="mb-14 flex flex-col items-center text-center">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">

        <span className="relative flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-cyan-500" />
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Engineered Performance
        </span>

      </div>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
        Technology you can
        <span className="block bg-gradient-to-r from-slate-500 via-slate-800 to-cyan-500 bg-clip-text text-transparent">
          feel in every breath.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Every detail is engineered to deliver cleaner air, intelligent
        performance, and effortless comfort throughout your home.
      </p>

    </div>


    {/* ========================================= */}
    {/* STATS */}
    {/* ========================================= */}

    <div className="relative">

      {/* Center airflow glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl lg:block" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* ================================= */}
        {/* CARD 01 */}
        {/* ================================= */}

        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_70px_rgba(6,182,212,0.12)]">

          {/* Number */}
          <span className="absolute right-6 top-5 text-xs font-medium text-slate-300">
            01
          </span>

          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            <i className="ri-filter-3-line text-xl" />
          </div>

          <div className="mt-12">

            <div className="flex items-end gap-1">

              <span className="text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl">
                99.9
              </span>

              <span className="mb-1 text-3xl font-semibold text-cyan-500">
                %
              </span>

            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Particle Filtration
            </p>

            <div className="mt-7 h-px w-full bg-slate-100">
              <div className="h-px w-[92%] bg-gradient-to-r from-cyan-500 to-transparent" />
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Advanced filtration technology for cleaner indoor air.
            </p>

          </div>
        </div>


        {/* ================================= */}
        {/* CARD 02 */}
        {/* ================================= */}

        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_70px_rgba(6,182,212,0.12)]">

          <span className="absolute right-6 top-5 text-xs font-medium text-slate-300">
            02
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            <i className="ri-windy-line text-xl" />
          </div>

          <div className="mt-12">

            <div className="flex items-end gap-1">

              <span className="text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl">
                360
              </span>

              <span className="mb-1 text-3xl font-semibold text-cyan-500">
                °
              </span>

            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Air Intake
            </p>

            {/* Airflow */}
            <div className="mt-7 flex h-6 items-center gap-1">

              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span className="h-px w-7 bg-cyan-200" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="h-px w-10 bg-cyan-300" />
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="h-px w-7 bg-cyan-200" />
              <span className="h-1 w-1 rounded-full bg-cyan-400" />

            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Designed to draw air efficiently from every direction.
            </p>

          </div>
        </div>


        {/* ================================= */}
        {/* CARD 03 */}
        {/* ================================= */}

        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_70px_rgba(6,182,212,0.12)]">

          <span className="absolute right-6 top-5 text-xs font-medium text-slate-300">
            03
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            <i className="ri-shield-check-line text-xl" />
          </div>

          <div className="mt-12">

            <div className="flex items-end">

              <span className="text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl">
                H14
              </span>

            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              HEPA Technology
            </p>

            {/* Badge */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">

              <i className="ri-check-line text-sm text-cyan-500" />

              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Advanced Filter
              </span>

            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              High-efficiency filtration engineered for modern homes.
            </p>

          </div>
        </div>


        {/* ================================= */}
        {/* CARD 04 */}
        {/* ================================= */}

        <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_70px_rgba(6,182,212,0.12)]">

          <span className="absolute right-6 top-5 text-xs font-medium text-slate-300">
            04
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            <i className="ri-pulse-line text-xl" />
          </div>

          <div className="mt-12">

            <div className="flex items-end gap-1">

              <span className="text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl">
                24
              </span>

              <span className="mb-1 text-3xl font-semibold text-cyan-500">
                /7
              </span>

            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Smart Monitoring
            </p>

            {/* Status */}
            <div className="mt-7 flex items-center gap-2">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />

              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600">
                Monitoring Active
              </span>

            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Intelligent sensing continuously tracks your air quality.
            </p>

          </div>
        </div>

      </div>
    </div>


    {/* ========================================= */}
    {/* BOTTOM LINE */}
    {/* ========================================= */}

    <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">

      <div className="flex items-center gap-3">

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
          <i className="ri-sparkling-2-line text-sm" />
        </span>

        <span className="text-xs font-medium text-slate-500">
          Precision engineered for modern living
        </span>

      </div>

      <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <span>Clean</span>
        <span className="h-1 w-1 rounded-full bg-cyan-400" />
        <span>Smart</span>
        <span className="h-1 w-1 rounded-full bg-cyan-400" />
        <span>Quiet</span>
      </div>

    </div>

  </div>
</section>

    
      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="technology-section bg-[#07111f] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                OUR TECHNOLOGY
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Intelligence
                <br />
                inside every layer.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-400 md:text-lg">
                AEROX combines physical filtration with intelligent
                sensing to create an air purification system that
                responds to your environment.
              </p>
            </div>

            <div className="space-y-4">

  {/* ===================== 01 ===================== */}
  <div className="technology-item group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-7">

    {/* Background number */}
    <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[130px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-cyan-400/[0.05]">
      01
    </span>

    {/* Glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative flex gap-5 sm:gap-6">

      {/* Number / Icon */}
      <div className="flex shrink-0 flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <i className="ri-windy-line text-2xl" />
        </div>

        <div className="mt-3 text-[9px] font-bold tracking-[0.2em] text-slate-600">
          01
        </div>

      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-3">

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Airflow
          </span>

          <span className="h-px w-8 bg-cyan-400/30" />

          <span className="text-[9px] uppercase tracking-widest text-slate-600">
            360° System
          </span>

        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
          360° Air Intake
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Air enters from multiple directions for efficient room
          circulation and consistent purification.
        </p>

        {/* Bottom technical detail */}
        <div className="mt-5 flex items-center gap-3">

          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span className="h-1 w-6 rounded-full bg-cyan-400/30" />
            <span className="h-1 w-3 rounded-full bg-cyan-400/10" />
          </div>

          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Continuous airflow
          </span>

        </div>

      </div>

      {/* Arrow */}
      <div className="hidden shrink-0 self-center sm:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-600 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
          <i className="ri-arrow-right-up-line" />
        </div>
      </div>

    </div>
  </div>


  {/* ===================== 02 ===================== */}
  <div className="technology-item group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-7">

    <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[130px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-cyan-400/[0.05]">
      02
    </span>

    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative flex gap-5 sm:gap-6">

      <div className="flex shrink-0 flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <i className="ri-filter-3-line text-2xl" />
        </div>

        <div className="mt-3 text-[9px] font-bold tracking-[0.2em] text-slate-600">
          02
        </div>

      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-3">

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Filtration
          </span>

          <span className="h-px w-8 bg-cyan-400/30" />

          <span className="text-[9px] uppercase tracking-widest text-slate-600">
            H14 HEPA
          </span>

        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
          HEPA H14 Filtration
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          High-efficiency filtration helps capture microscopic airborne
          particles and impurities.
        </p>

        <div className="mt-5 flex items-center gap-3">

          <div className="flex gap-1">
            <span className="h-1 w-8 rounded-full bg-cyan-400" />
            <span className="h-1 w-5 rounded-full bg-cyan-400/40" />
            <span className="h-1 w-3 rounded-full bg-cyan-400/15" />
          </div>

          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Multi-stage filtration
          </span>

        </div>

      </div>

      <div className="hidden shrink-0 self-center sm:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-600 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
          <i className="ri-arrow-right-up-line" />
        </div>
      </div>

    </div>
  </div>


  {/* ===================== 03 ===================== */}
  <div className="technology-item group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-7">

    <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[130px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-cyan-400/[0.05]">
      03
    </span>

    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative flex gap-5 sm:gap-6">

      <div className="flex shrink-0 flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <i className="ri-radar-line text-2xl" />
        </div>

        <div className="mt-3 text-[9px] font-bold tracking-[0.2em] text-slate-600">
          03
        </div>

      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-3">

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Intelligence
          </span>

          <span className="h-px w-8 bg-cyan-400/30" />

          <span className="text-[9px] uppercase tracking-widest text-slate-600">
            Real-time
          </span>

        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
          Smart Air Monitoring
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Built-in sensors monitor indoor conditions and help
          automatically adjust purification.
        </p>

        <div className="mt-5 flex items-center gap-3">

          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-widest text-emerald-400">
              Active
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
            Adaptive sensing
          </span>

        </div>

      </div>

      <div className="hidden shrink-0 self-center sm:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-600 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
          <i className="ri-arrow-right-up-line" />
        </div>
      </div>

    </div>
  </div>


  {/* ===================== 04 ===================== */}
  <div className="technology-item group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-7">

    <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[130px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-cyan-400/[0.05]">
      04
    </span>

    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative flex gap-5 sm:gap-6">

      <div className="flex shrink-0 flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <i className="ri-volume-mute-line text-2xl" />
        </div>

        <div className="mt-3 text-[9px] font-bold tracking-[0.2em] text-slate-600">
          04
        </div>

      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-3">

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            Acoustics
          </span>

          <span className="h-px w-8 bg-cyan-400/30" />

          <span className="text-[9px] uppercase tracking-widest text-slate-600">
            Low Noise
          </span>

        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
          Silent Mode
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Designed to maintain comfortable air quality while minimizing
          operating noise.
        </p>

        <div className="mt-5 flex items-end gap-1">

          <span className="h-2 w-1 rounded-full bg-cyan-400/30" />
          <span className="h-4 w-1 rounded-full bg-cyan-400/50" />
          <span className="h-3 w-1 rounded-full bg-cyan-400/40" />
          <span className="h-5 w-1 rounded-full bg-cyan-400/70" />
          <span className="h-2 w-1 rounded-full bg-cyan-400/30" />
          <span className="h-3 w-1 rounded-full bg-cyan-400/40" />

          <span className="ml-3 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Quiet operation
          </span>

        </div>

      </div>

      <div className="hidden shrink-0 self-center sm:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-600 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
          <i className="ri-arrow-right-up-line" />
        </div>
      </div>

    </div>
  </div>

</div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="mission-section px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mission-content mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
            OUR MISSION
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-7xl">
            Make clean air
            <br />
            <span className="text-slate-400">
              part of everyday life.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500">
            We imagine a future where every home can understand its
            environment and intelligently respond to it. AirFlow exists
            to make that future simple, beautiful and accessible.
          </p>

          <div className="mt-10">
            <div className="mx-auto h-1 w-24 rounded-full bg-cyan-400" />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="about-cta-section px-5 pb-20 md:px-10 lg:px-20 lg:pb-32">
        <div className="about-cta relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#06111f] px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              EXPERIENCE AEROX
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Ready to breathe
              <br />
              <span className="text-cyan-400">
                something better?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
              Discover the next generation of intelligent air
              purification.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/shop"
                className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-white"
              >
                Shop AEROX
                <i className="ri-arrow-right-line ml-2" />
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;