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

      <section className="stats-section border-y border-slate-200 bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          <div className="about-stat text-center">
            <p className="text-4xl font-bold tracking-tight md:text-6xl">
              99.9<span className="text-cyan-500">%</span>
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              Particle Filtration
            </p>
          </div>

          <div className="about-stat text-center">
            <p className="text-4xl font-bold tracking-tight md:text-6xl">
              360<span className="text-cyan-500">°</span>
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              Air Intake
            </p>
          </div>

          <div className="about-stat text-center">
            <p className="text-4xl font-bold tracking-tight md:text-6xl">
              H14
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              HEPA Technology
            </p>
          </div>

          <div className="about-stat text-center">
            <p className="text-4xl font-bold tracking-tight md:text-6xl">
              24<span className="text-cyan-500">/</span>7
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              Smart Monitoring
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="values-section px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              WHAT DRIVES US
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Built around better living.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              We focus on the things that matter most when technology
              becomes part of your everyday environment.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="value-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
                <i className="ri-focus-3-line" />
              </div>

              <h3 className="mt-8 text-xl font-bold">
                Purpose
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Every feature exists for a reason: helping people
                experience cleaner and more comfortable indoor air.
              </p>
            </div>

            <div className="value-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
                <i className="ri-lightbulb-flash-line" />
              </div>

              <h3 className="mt-8 text-xl font-bold">
                Innovation
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                We continuously explore better ways to combine
                hardware, software and intelligent sensing.
              </p>
            </div>

            <div className="value-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
                <i className="ri-user-heart-line" />
              </div>

              <h3 className="mt-8 text-xl font-bold">
                People
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Our products are designed around real homes, real
                routines and real people.
              </p>
            </div>

            <div className="value-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
                <i className="ri-earth-line" />
              </div>

              <h3 className="mt-8 text-xl font-bold">
                Responsibility
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                We aim to create efficient products with thoughtful
                materials and long-term usability.
              </p>
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
              <div className="technology-item flex gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="text-3xl font-bold text-cyan-400">
                  01
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    360° Air Intake
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Air enters from multiple directions for efficient
                    room circulation.
                  </p>
                </div>
              </div>

              <div className="technology-item flex gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="text-3xl font-bold text-cyan-400">
                  02
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    HEPA H14 Filtration
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    High-efficiency filtration helps capture
                    microscopic airborne particles.
                  </p>
                </div>
              </div>

              <div className="technology-item flex gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="text-3xl font-bold text-cyan-400">
                  03
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    Smart Air Monitoring
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Built-in sensors monitor indoor conditions and
                    help automatically adjust purification.
                  </p>
                </div>
              </div>

              <div className="technology-item flex gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="text-3xl font-bold text-cyan-400">
                  04
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    Silent Mode
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Designed to maintain comfortable air quality while
                    minimizing operating noise.
                  </p>
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