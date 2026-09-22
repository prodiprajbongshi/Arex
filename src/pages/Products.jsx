import {   useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Products = () => {
  const mainRef = useRef(null);

  const heroRef = useRef(null);
  const productHeroRef = useRef(null);
  const heroContentRef = useRef(null);

  const showcaseRef = useRef(null);
  const showcaseProductRef = useRef(null);

  const technologyRef = useRef(null);
  const technologyCardsRef = useRef([]);

  const purificationRef = useRef(null);
  const filterRef = useRef(null);
  const dirtyAirRef = useRef(null);
  const cleanAirRef = useRef(null);
  const particlesRef = useRef([]);

  const featuresRef = useRef(null);
  const featureCardsRef = useRef([]);

  const specsRef = useRef(null);
  const specItemsRef = useRef([]);

  const ctaRef = useRef(null);

  const addTechnologyCard = (el) => {
    if (
      el &&
      !technologyCardsRef.current.includes(el)
    ) {
      technologyCardsRef.current.push(el);
    }
  };

  const addFeatureCard = (el) => {
    if (
      el &&
      !featureCardsRef.current.includes(el)
    ) {
      featureCardsRef.current.push(el);
    }
  };

  const addSpecItem = (el) => {
    if (
      el &&
      !specItemsRef.current.includes(el)
    ) {
      specItemsRef.current.push(el);
    }
  };

  const addParticle = (el) => {
    if (
      el &&
      !particlesRef.current.includes(el)
    ) {
      particlesRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      /*
      ================================================================
      HERO INTRO
      ================================================================
      */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".product-eyebrow", {
          y: 30,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".product-title-line",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".product-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".product-actions",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          productHeroRef.current,
          {
            scale: 0.7,
            opacity: 0,
            y: 100,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        );

      /*
      ================================================================
      HERO FLOATING ANIMATION
      ================================================================
      */

      gsap.to(productHeroRef.current, {
        y: -18,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ================================================================
      HERO SCROLL
      ================================================================
      */

      gsap.to(productHeroRef.current, {
        y: 500,
        x: 250,
        scale: 0.65,
        rotate: 8,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to(heroContentRef.current, {
        y: -150,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "70% top",
          scrub: 1,
        },
      });

      /*
      ================================================================
      HERO GLOW
      ================================================================
      */

      gsap.to(".hero-glow-one", {
        x: 120,
        y: 80,
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -100,
        y: -60,
        scale: 1.3,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ================================================================
      SHOWCASE
      ================================================================
      */

      gsap.from(showcaseProductRef.current, {
        scale: 0.7,
        opacity: 0,
        rotation: -10,
        duration: 1.2,

        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 70%",
          toggleActions:
            "play none none reverse",
        },
      });

      gsap.from(
        showcaseRef.current.querySelectorAll(
          ".showcase-item"
        ),
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,

          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 70%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ================================================================
      TECHNOLOGY
      ================================================================
      */

      gsap.from(technologyCardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.92,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: technologyRef.current,
          start: "top 75%",
          toggleActions:
            "play none none reverse",
        },
      });

      /*
      ================================================================
      PURIFICATION SECTION
      ================================================================
      */

      gsap.from(filterRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: purificationRef.current,
          start: "top 70%",
          toggleActions:
            "play none none reverse",
        },
      });

      gsap.from(dirtyAirRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: purificationRef.current,
          start: "top 65%",
          toggleActions:
            "play none none reverse",
        },
      });

      gsap.from(cleanAirRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: purificationRef.current,
          start: "top 65%",
          toggleActions:
            "play none none reverse",
        },
      });

      /*
      ================================================================
      AIR PARTICLES
      ================================================================
      */

      particlesRef.current.forEach(
        (particle, index) => {
          gsap.to(particle, {
            x: 500,
            opacity: 0,
            duration: 2.5 + index * 0.15,
            repeat: -1,
            delay: index * 0.25,
            ease: "power1.inOut",
          });
        }
      );

      /*
      ================================================================
      FEATURES
      ================================================================
      */

      gsap.from(featureCardsRef.current, {
        y: 100,
        opacity: 0,
        rotateX: 20,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
          toggleActions:
            "play none none reverse",
        },
      });

      /*
      ================================================================
      SPECS
      ================================================================
      */

      gsap.from(specItemsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,

        scrollTrigger: {
          trigger: specsRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      /*
      ================================================================
      CTA
      ================================================================
      */

      gsap.from(ctaRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1,

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    },
    {
      scope: mainRef,
    }
  );

  return (
    <main
      ref={mainRef}
      className="overflow-hidden bg-[#f5f7f8] text-slate-950"
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-slate-950"
      >
        {/* Background */}

        <div
          className="
            hero-glow-one
            absolute
            -left-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-400/20
            blur-[140px]
          "
        />

        <div
          className="
            hero-glow-two
            absolute
            -bottom-40
            -right-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/20
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-6
            py-24
            lg:px-8
          "
        >
          <div
            ref={heroContentRef}
            className="
              relative
              z-20
              w-full
              lg:w-1/2
            "
          >
            <p
              className="
                product-eyebrow
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              AirFlow AEROX
            </p>

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              <span className="product-title-line block">
                Pure air.
              </span>

              <span
                className="
                  product-title-line
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-blue-300
                  bg-clip-text
                  text-transparent
                "
              >
                Smarter living.
              </span>
            </h1>

            <p
              className="
                product-description
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              Experience intelligent air purification
              designed for modern living. AEROX combines
              advanced filtration, smart monitoring, and
              whisper-quiet performance.
            </p>

            <div
              className="
                product-actions
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <button
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  font-medium
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Buy AEROX

                <i
                  className="
                    ri-arrow-right-up-line
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-4
                  font-medium
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Explore technology
              </button>
            </div>

            {/* Rating */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
                text-sm
                text-slate-400
              "
            >
              <div className="flex text-cyan-300">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-fill" />
              </div>

              <span>
                4.9 / 5 · 2,400+ reviews
              </span>
            </div>
          </div>

          {/* Product */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-5%]
              top-1/2
              z-10
              hidden
              -translate-y-1/2
              lg:block
            "
          >
            <div
              ref={productHeroRef}
              className="relative"
            >
              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-cyan-300/20
                  blur-[100px]
                "
              />

              <img
                src="/images/HeroImage.png"
                alt="AirFlow AEROX Air Purifier"
                className="
                  relative
                  z-10
                  w-[620px]
                  max-w-none
                  drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]
                "
              />
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-20
            w-full
            rounded-t-[50%]
            bg-[#f5f7f8]
          "
        />
      </section>

      {/* =========================================================
          SHOWCASE
      ========================================================= */}

      <section
        ref={showcaseRef}
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-24
          lg:px-8
          lg:py-36
        "
      >
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <div>
            <p className="showcase-item text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Designed for modern homes
            </p>

            <h2
              className="
                showcase-item
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                sm:text-6xl
              "
            >
              Powerful inside.
              <span className="block text-slate-400">
                Beautiful outside.
              </span>
            </h2>

            <p
              className="
                showcase-item
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              AEROX was engineered to disappear into
              your living space while delivering powerful
              purification exactly where you need it.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="showcase-item rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-semibold">
                  99.99%
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Particle filtration
                </p>
              </div>

              <div className="showcase-item rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-semibold">
                  360°
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Air intake
                </p>
              </div>

            </div>
          </div>

          <div className="relative flex justify-center">

            <div
              ref={showcaseProductRef}
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  h-80
                  w-80
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              <img
                src="/images/HeroImage.png"
                alt="AEROX"
                className="
                  relative
                  z-10
                  w-[380px]
                  drop-shadow-[0_35px_50px_rgba(15,23,42,0.2)]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section
        ref={technologyRef}
        className="
          bg-slate-950
          px-6
          py-24
          lg:px-8
          lg:py-36
        "
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Technology
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-6xl
              "
            >
              Engineering cleaner air
              <span className="block text-slate-500">
                from every direction.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-16
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            <div
              ref={addTechnologyCard}
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-2xl
                  text-cyan-300
                "
              >
                <i className="ri-filter-3-line" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                HEPA H14
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Advanced multi-layer filtration captures
                microscopic particles and airborne
                pollutants.
              </p>
            </div>

            <div
              ref={addTechnologyCard}
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-2xl
                  text-cyan-300
                "
              >
                <i className="ri-windy-line" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                360° Air Intake
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Draws polluted air from every direction
                for faster and more consistent
                purification.
              </p>
            </div>

            <div
              ref={addTechnologyCard}
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-2xl
                  text-cyan-300
                "
              >
                <i className="ri-moon-line" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                Silent Mode
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Ultra-quiet operation lets you sleep,
                work, and relax without distraction.
              </p>
            </div>

            <div
              ref={addTechnologyCard}
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-2xl
                  text-cyan-300
                "
              >
                <i className="ri-radar-line" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                Smart Monitoring
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Real-time air quality monitoring
                automatically adjusts purification.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PURIFICATION
      ========================================================= */}

      <section
        ref={purificationRef}
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          py-24
          lg:px-8
          lg:py-36
        "
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Air purification
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                sm:text-6xl
              "
            >
              Watch the air
              <span className="block text-slate-400">
                become cleaner.
              </span>
            </h2>
          </div>

          <div
            className="
              relative
              mx-auto
              mt-20
              flex
              max-w-5xl
              items-center
              justify-between
              gap-8
            "
          >

            {/* Dirty Air */}

            <div
              ref={dirtyAirRef}
              className="relative z-20 hidden text-center md:block"
            >
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-3xl
                "
              >
                <i className="ri-cloud-windy-line text-slate-500" />
              </div>

              <p className="mt-4 font-semibold">
                Polluted air
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Dust · Smoke · Pollen
              </p>
            </div>

            {/* Filter */}

            <div
              ref={filterRef}
              className="
                relative
                z-20
                flex
                h-72
                w-52
                shrink-0
                items-center
                justify-center
                rounded-[2.5rem]
                border
                border-slate-200
                bg-slate-50
                shadow-2xl
              "
            >
              <div
                className="
                  h-56
                  w-28
                  rounded-3xl
                  border-4
                  border-slate-300
                  bg-white
                  shadow-inner
                "
              >
                <div className="flex h-full flex-col justify-evenly px-5">
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                  <span className="h-1 rounded-full bg-slate-300" />
                </div>
              </div>

              <span
                className="
                  absolute
                  -bottom-10
                  rounded-full
                  bg-slate-950
                  px-5
                  py-2
                  text-xs
                  font-medium
                  text-white
                "
              >
                HEPA H14
              </span>
            </div>

            {/* Clean Air */}

            <div
              ref={cleanAirRef}
              className="relative z-20 hidden text-center md:block"
            >
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-50
                  text-3xl
                  text-cyan-500
                "
              >
                <i className="ri-leaf-line" />
              </div>

              <p className="mt-4 font-semibold">
                Clean air
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Fresh · Pure · Balanced
              </p>
            </div>

            {/* Airflow Line */}

            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-1/2
                h-[2px]
                -translate-y-1/2
                bg-gradient-to-r
                from-slate-200
                via-cyan-300
                to-cyan-100
              "
            />

            {/* Particles */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({
                length: 10,
              }).map((_, index) => (
                <span
                  key={index}
                  ref={addParticle}
                  className="
                    absolute
                    left-[8%]
                    top-1/2
                    h-2
                    w-2
                    rounded-full
                    bg-slate-400
                  "
                  style={{
                    top: `${35 + (index % 5) * 8}%`,
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section
        ref={featuresRef}
        className="
          bg-[#f5f7f8]
          px-6
          py-24
          lg:px-8
          lg:py-36
        "
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Smart features
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                sm:text-6xl
              "
            >
              More than a purifier.
              <span className="block text-slate-400">
                Your air companion.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
            "
          >

            <div
              ref={addFeatureCard}
              className="
                min-h-[320px]
                rounded-[2rem]
                bg-white
                p-8
                shadow-sm
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-950
                  text-xl
                  text-cyan-300
                "
              >
                <i className="ri-smartphone-line" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Control from anywhere
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-500">
                Monitor your air quality and control
                purification directly from your phone.
              </p>

              <div className="mt-8 flex gap-2">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs">
                  iOS
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs">
                  Android
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs">
                  Wi-Fi
                </span>
              </div>
            </div>

            <div
              ref={addFeatureCard}
              className="
                min-h-[320px]
                rounded-[2rem]
                bg-slate-950
                p-8
                text-white
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-xl
                  text-cyan-300
                "
              >
                <i className="ri-mic-line" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Voice control
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-400">
                Connect AEROX with your smart home and
                control purification with simple voice
                commands.
              </p>

              <div className="mt-8 flex gap-2">
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
                  Alexa
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
                  Google Home
                </span>
              </div>
            </div>

            <div
              ref={addFeatureCard}
              className="
                min-h-[320px]
                rounded-[2rem]
                bg-white
                p-8
                shadow-sm
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-950
                  text-xl
                  text-cyan-300
                "
              >
                <i className="ri-sun-foggy-line" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Automatic air sensing
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-500">
                Intelligent sensors continuously monitor
                your environment and automatically adjust
                purification power.
              </p>
            </div>

            <div
              ref={addFeatureCard}
              className="
                min-h-[320px]
                rounded-[2rem]
                bg-white
                p-8
                shadow-sm
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-950
                  text-xl
                  text-cyan-300
                "
              >
                <i className="ri-volume-mute-line" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Whisper quiet
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-500">
                Designed for bedrooms, offices, and living
                spaces with minimal operating noise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SPECS
      ========================================================= */}

      <section
        ref={specsRef}
        className="
          bg-white
          px-6
          py-24
          lg:px-8
          lg:py-32
        "
      >
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Specifications
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-tight
                sm:text-5xl
              "
            >
              Built to perform.
            </h2>
          </div>

          <div className="mt-16 divide-y divide-slate-200">

            <div
              ref={addSpecItem}
              className="
                flex
                items-center
                justify-between
                py-7
              "
            >
              <span className="text-slate-500">
                Recommended room size
              </span>

              <span className="font-semibold">
                Up to 1,000 sq ft
              </span>
            </div>

            <div
              ref={addSpecItem}
              className="
                flex
                items-center
                justify-between
                py-7
              "
            >
              <span className="text-slate-500">
                Filter
              </span>

              <span className="font-semibold">
                HEPA H14 + Carbon
              </span>
            </div>

            <div
              ref={addSpecItem}
              className="
                flex
                items-center
                justify-between
                py-7
              "
            >
              <span className="text-slate-500">
                Air intake
              </span>

              <span className="font-semibold">
                360°
              </span>
            </div>

            <div
              ref={addSpecItem}
              className="
                flex
                items-center
                justify-between
                py-7
              "
            >
              <span className="text-slate-500">
                Connectivity
              </span>

              <span className="font-semibold">
                Wi-Fi
              </span>
            </div>

            <div
              ref={addSpecItem}
              className="
                flex
                items-center
                justify-between
                py-7
              "
            >
              <span className="text-slate-500">
                Voice assistants
              </span>

              <span className="font-semibold">
                Alexa / Google Home
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        ref={ctaRef}
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-24
          lg:px-8
          lg:pb-36
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            bg-slate-950
            px-8
            py-20
            text-center
            sm:px-12
            lg:px-20
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-96
              w-96
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/20
              blur-[120px]
            "
          />

          <div className="relative z-10">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              Ready for cleaner air?
            </p>

            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-6xl
              "
            >
              Bring intelligent air
              <span className="block text-slate-500">
                into your home.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                leading-7
                text-slate-400
              "
            >
              AEROX combines powerful purification with
              intelligent technology to create a cleaner,
              healthier-feeling space.
            </p>

            <div className="mt-10">

              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-medium
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Buy AEROX

                <i
                  className="
                    ri-arrow-right-up-line
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

 