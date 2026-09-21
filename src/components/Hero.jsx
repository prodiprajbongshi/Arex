import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const HeroRef = useRef(null);
  const HeroImageWrapper = useRef(null);
  const HeroImage = useRef(null);

  const HeroContent = useRef(null);
  const HeroLabel = useRef(null);
  const HeroTitle = useRef(null);
  const HeroDescription = useRef(null);
  const HeroButton = useRef(null);
  const HeroSpec = useRef(null);
  const HeroGlow = useRef(null);
  const HeroOverlay = useRef(null);

  // SECOND SECTION REF
  // ================================================
  const SectionRef = useRef(null);
  const SectionLabel = useRef(null);
  const SectionTitle = useRef(null);
  const SectionDescription = useRef(null);
  const SectionFeatures = useRef([]);
  const SectionButton = useRef(null);

  useGSAP(
    () => {
 const mm = gsap.matchMedia();





      // ========================================
      // HERO INTRO ANIMATION
      // ========================================

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        HeroImageWrapper.current,
        {
          opacity: 0,
          x: -150,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
        },
      )

        // Glow
        .fromTo(
          HeroGlow.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          "-=1",
        )

        // Label
        .fromTo(
          HeroLabel.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.8",
        )

        // Heading
        .fromTo(
          HeroTitle.current,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.5",
        )

        // Description
        .fromTo(
          HeroDescription.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6",
        )

        // Button
        .fromTo(
          HeroButton.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5",
        )

        // Specification
        .fromTo(
          HeroSpec.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scurb: 1,
          },
          "-=0.4",
        );

      // ========================================
      // PRODUCT FLOATING ANIMATION
      // ========================================

      gsap.to(HeroImage.current, {
        y: -12,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ========================================
      // GLOW ANIMATION
      // ========================================

      gsap.to(HeroGlow.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ========================================
      // BACKGROUND OVERLAY
      // ========================================

      gsap.to(HeroOverlay.current, {
        opacity: 0.35,

        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
        },
      });

    mm.add(
    {
      desktop: "(min-width: 1024px)",
      smallScreen: "(max-width: 1024px)",
    },
    (context) => {
      const { desktop } = context.conditions;

      gsap.fromTo(
        HeroImageWrapper.current,
        {
          x: 0,
          y: 0,
          scale: 1,
        },
        {
          x: desktop ? 1100 : 700,
          y: desktop ? 970 : 750,

          ease: "none",

          scrollTrigger: {
            trigger: HeroRef.current,
            start: "top top",
            end: "+=700",
            scrub: 1.2,
          },
        }
      );
    }
  );



      

      // ========================================
      // CONTENT SCROLL ANIMATION
      // ========================================

      gsap.to(HeroContent.current, {
        x: 80,
        opacity: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: HeroRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      });
       return () => mm.revert();
    },
    {
      scope: HeroRef,
    },
  );

  // ========================================
  //   SECOND SECTION ANIMATION
  // =========================================
  useGSAP(
    () => {
      // ========================================
      // SECTION TEXT ANIMATION
      // ========================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: SectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      // Label
      tl.fromTo(
        SectionLabel.current,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrub: 1,
        },
      )

        // Heading
        .fromTo(
          SectionTitle.current,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrub: 1,
          },
          "-=0.4",
        )

        // Description
        .fromTo(
          SectionDescription.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrub: 1,
          },
          "-=0.5",
        )

        // Features
        .fromTo(
          SectionFeatures.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrub: 1,
          },
          "-=0.4",
        )

        // Button
        .fromTo(
          SectionButton.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrub: 1,
          },
          "-=0.2",
        );
    },
    {
      scope: SectionRef,
    },
  );

  return (
    <main className="overflow-x-hidden">
      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section
        ref={HeroRef}
        className="
          relative
          z-10
          h-screen
          overflow-visible
          bg-[#6b7280]
        "
      >
        {/* ========================================
            DARK OVERLAY
        ======================================== */}

        <div
          ref={HeroOverlay}
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-black
            opacity-0
          "
        />

        {/* ========================================
            PRODUCT GLOW
        ======================================== */}

        <div
          ref={HeroGlow}
          className="
            pointer-events-none
            absolute
            bottom-[5%]
            left-[8%]
            z-0
            h-[450px]
            w-[400px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        {/* ========================================
            HERO IMAGE
        ======================================== */}

        <div
          ref={HeroImageWrapper}
          className="absolute bottom-30 md:bottom-10 left-10        z-20 w-[70%]  md:w-[40%] lg:w-[24%]"
        >
          <img
            ref={HeroImage}
            src="./images/HeroImage.png"
            className="block w-full"
            alt="Airfilter"
          />
        </div>

        {/* ==================================== 
          MOBILE HERO SECTION CONTENT 
          ======================================== */}
        <div className="md:hidden">
          {/* ========================================
              TITLE
          ======================================== */}
          <h1
            ref={HeroTitle}
            className="
              text-6xl
              text-white
              md:text-7xl
              font-bold
              leading-none
              tracking-tight
              pt-32
              md:pt-0
              ms-6
              sm:text-8xl
              lg:text-9xl
            "
          >
            Air Purifiers
          </h1>

          {/* ========================================
              BUTTON
          ======================================== */}
          <div className="pt-136 md:pt-20 ms-6">
            <div className="mt-3 flex items-center gap-4">
              <span className="text-3xl font-semibold text-white">99.985%</span>

              <span
                className="
                max-w-[140px]
                text-xs
                leading-4
                text-white/50
              "
              >
                Particle filtration efficiency
              </span>
            </div>

            <button
              ref={HeroButton}
              className="
              group
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              mt-4
              font-semibold
              tracking-wide
              text-black
              transition-all
              duration-500
              hover:bg-black
              hover:text-white
            "
            >
              <span>Learn More</span>

              <span
                className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-black
              "
              >
                <i
                  className="
                  ri-arrow-right-line
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                />
              </span>
            </button>
          </div>
        </div>

        {/* ========================================
            HERO CONTENT
        ======================================== */}

        <div
          ref={HeroContent}
          className="
            absolute
            right-0
            top-1/2
            z-1
            w-[75%]
            -translate-y-1/2
            pl-44
            pr-10
            text-white
            lg:pl-64
            hidden
          md:block
          "
        >
          {/* ========================================
              LABEL
          ======================================== */}

          <div ref={HeroLabel} className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              Dreo Air Care
            </span>
          </div>

          {/* ========================================
              TITLE
          ======================================== */}

          <h1
            ref={HeroTitle}
            className="
              mb-6
              text-7xl
              font-bold
              leading-none
              tracking-tight
              sm:text-8xl
              lg:text-9xl
            "
          >
            Air Purifiers
          </h1>

          {/* ========================================
              DESCRIPTION
          ======================================== */}

          <p
            ref={HeroDescription}
            className="
              mb-8
              max-w-xl
              text-base
              font-light
              leading-7
              tracking-wide
              text-white/65
              lg:text-lg
            "
          >
            Dreo Air Purifiers for Home Large Room, H13 True HEPA Filter Removes
            Up to 99.985% of Particles Dust Smoke Pollen Pet Hair, PM2.5
            Monitor, Auto Mode, Smart WiFi Voice Control, Works with
            Alexa/Google.
          </p>

          {/* ========================================
              BUTTON
          ======================================== */}

          <button
            ref={HeroButton}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              tracking-wide
              text-black
              transition-all
              duration-500
              hover:bg-black
              hover:text-white
            "
          >
            <span>Learn More</span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <i
                className="
                  ri-arrow-right-line
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </button>
        </div>

        {/* ========================================
            PRODUCT SPECIFICATION
        ======================================== */}

        <div
          ref={HeroSpec}
          className="
            absolute
            bottom-10
            left-10
            z-30
            hidden
            md:block
          "
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Pure Air Technology
          </p>

          <div className="mt-3 flex items-center gap-4">
            <span className="text-3xl font-semibold text-white">99.985%</span>

            <span
              className="
                max-w-[140px]
                text-xs
                leading-4
                text-white/50
              "
            >
              Particle filtration efficiency
            </span>
          </div>
        </div>

        {/* ========================================
            SCROLL INDICATOR
        ======================================== */}

        <div
          className="
            absolute
            bottom-10
            right-10
            z-30
            hidden
            items-center
            gap-3
            text-white/40
            md:flex
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll
          </span>

          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* ========================================
          SECOND SECTION
      ======================================== */}

      <section
        ref={SectionRef}
        className="
    relative
    z-0
    min-h-screen
    overflow-hidden
    bg-[#f3f4f6]
    px-6
    py-20
    text-black
    lg:px-16
  "
      >
        {/* ========================================
      BACKGROUND GLOW
  ======================================== */}

        <div
          className="
      pointer-events-none
      absolute
      right-[10%]
      top-1/2
      h-[500px]
      w-[500px]
      -translate-y-1/2
      rounded-full
      bg-gray-300/60
      blur-[120px]
    "
        />

        {/* ========================================
      MAIN CONTENT
  ======================================== */}

        <div
          className="
      relative
      z-10
      mx-auto
      flex
      min-h-[calc(100vh-10rem)]
      max-w-7xl
      flex-col
      items-center
      justify-start
      gap-12
      lg:flex-row
      lg:gap-20
    "
        >
          {/* ========================================
        LEFT CONTENT
    ======================================== */}

          <div className="w-full lg:w-[40%]">
            {/* Label */}

            <div ref={SectionLabel} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-black/30" />

              <span
                className="
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-black/50
          "
              >
                Next Generation Air Care
              </span>
            </div>

            {/* Heading */}

            <h2
              ref={SectionTitle}
              className="
          text-5xl
          font-bold
          leading-[0.95]
          tracking-tight
          sm:text-6xl
          lg:text-7xl
        "
            >
              Clean Air.
              <br />
              Better Living.
            </h2>

            {/* Description */}

            <p
              ref={SectionDescription}
              className="
          mt-7
          max-w-lg
          text-base
          leading-7
          text-black/55
          lg:text-lg
        "
            >
              Experience cleaner and fresher air with advanced filtration
              technology designed to create a healthier and more comfortable
              environment for your home.
            </p>

            {/* ========================================
          FEATURES
      ======================================== */}

            <div
              className="
          mt-10
          grid
          max-w-lg
          grid-cols-2
          gap-x-8
          gap-y-6
        "
            >
              {/* Feature 1 */}

              <div
                ref={(el) => (SectionFeatures.current[0] = el)}
                className="border-l border-black/20 pl-4"
              >
                <h3 className="text-2xl font-semibold">99.985%</h3>

                <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                  Filtration
                </p>
              </div>

              {/* Feature 2 */}

              <div
                ref={(el) => (SectionFeatures.current[1] = el)}
                className="border-l border-black/20 pl-4"
              >
                <h3 className="text-2xl font-semibold">H13</h3>

                <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                  True HEPA
                </p>
              </div>

              {/* Feature 3 */}

              <div
                ref={(el) => (SectionFeatures.current[2] = el)}
                className="border-l border-black/20 pl-4"
              >
                <h3 className="text-2xl font-semibold">24/7</h3>

                <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                  Smart Monitoring
                </p>
              </div>

              {/* Feature 4 */}

              <div
                ref={(el) => (SectionFeatures.current[3] = el)}
                className="border-l border-black/20 pl-4"
              >
                <h3 className="text-2xl font-semibold">WiFi</h3>

                <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                  Smart Control
                </p>
              </div>
            </div>

            {/* ========================================
          BUTTON
      ======================================== */}

            <button
              ref={SectionButton}
              className="
          group
          mt-10
          flex
          cursor-pointer
          items-center
          gap-4
          rounded-full
          bg-black
          px-7
          py-4
          text-sm
          font-semibold
          tracking-wide
          text-white
          transition-all
          duration-500
          hover:bg-gray-800
        "
            >
              <span>Explore Product</span>

              <span
                className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              >
                <i className="ri-arrow-right-line text-lg" />
              </span>
            </button>
          </div>
        </div>

        {/* ========================================
      BOTTOM DECORATION
  ======================================== */}

        <div
          className="
      absolute
      bottom-8
      left-6
      right-6
      flex
      items-center
      justify-between
      border-t
      border-black/10
      pt-4
      lg:left-16
      lg:right-16
    "
        >
          <span
            className="
        text-[10px]
        font-medium
        uppercase
        tracking-[0.3em]
        text-black/30
      "
          >
            Designed for cleaner living
          </span>

       
        </div>
      </section>
    </main>
  );
}

export default App;
