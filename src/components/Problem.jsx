import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Problem = () => {
  const ProblemSectionRef = useRef(null);
  const ProblemLabelRef = useRef(null);
  const ProblemDescriptionRef = useRef(null);
  const ProblemBottomRef = useRef(null);
  const ProblemTitleRef = useRef(null);
  const ProblemTitleLines = useRef([]);

  useGSAP(() => {
    // ========================================
    // SECTION 2 — PROBLEM ANIMATION
    // ========================================

    const problemTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ProblemSectionRef.current,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Label
    problemTimeline.fromTo(
      ProblemLabelRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
    );

    // Large heading
    problemTimeline.fromTo(
      ProblemTitleLines.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.4,
      },
      "-=0.3",
    );

    // Description
    problemTimeline.fromTo(
      ProblemDescriptionRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.6",
    );

    // Bottom information
    problemTimeline.fromTo(
      ProblemBottomRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );
  });

  return (
    <section
      ref={ProblemSectionRef}
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#111315]
        px-5
        py-20
        text-white
        sm:px-8
        sm:py-24
        lg:px-16
      "
    >
      {/* ========================================
      BACKGROUND ELEMENTS
  ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[80px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[100px]
        "
      />

      {/* Decorative Lines */}

      <div
        className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-white/[0.06]
          sm:left-8
          lg:left-16
          lg:bg-white/[0.08]
        "
      />

      <div
        className="
          absolute
          right-5
          top-0
          h-full
          w-px
          bg-white/[0.06]
          sm:right-8
          lg:right-16
          lg:bg-white/[0.08]
        "
      />

      {/* ========================================
      CONTENT
  ======================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* Section Label Row */}

        <div
          ref={ProblemLabelRef}
          className="
            mb-12
            flex
            items-center
            justify-between
            sm:mb-16
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/30 sm:w-10" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
                sm:text-xs
              "
            >
              The Problem
            </span>
          </div>

          
        </div>

        {/* ========================================
        LARGE TEXT
    ======================================== */}

        <div ref={ProblemTitleRef} className="max-w-6xl overflow-hidden">
          <h2
            className="
              text-[clamp(2.8rem,7vw,8.5rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.04em]
              sm:text-[clamp(3rem,7.5vw,8.5rem)]
              sm:leading-[0.9]
              sm:tracking-[-0.05em]
            "
          >
            <span ref={(el) => (ProblemTitleLines.current[0] = el)} className="block">
              The air you
            </span>

            <span ref={(el) => (ProblemTitleLines.current[1] = el)} className="block">
              <span className="text-white/35">breathe</span> isn&apos;t
            </span>

            <span ref={(el) => (ProblemTitleLines.current[2] = el)} className="block">
              always <span className="text-white/35">clean.</span>
            </span>
          </h2>
        </div>

        {/* ========================================
        SUPPORTING TEXT
    ======================================== */}

        <div
          ref={ProblemDescriptionRef}
          className="
            mt-10
            flex
            max-w-3xl
            flex-col
            gap-5
            sm:mt-14
            sm:gap-6
            md:ml-[15%]
            lg:ml-[25%]
            lg:mt-16
            lg:flex-row
            lg:items-start
          "
        >
          <span
            className="
              mt-2
              hidden
              h-px
              w-12
              shrink-0
              bg-white/30
              lg:block
            "
          />

          <p
            className="
              max-w-xl
              text-sm
              font-light
              leading-7
              text-white/45
              sm:text-base
              lg:text-lg
            "
          >
            Dust, smoke, pollen and microscopic particles can remain hidden in
            the air around you. What you cannot see can still affect the quality
            of the environment you live in.
          </p>
        </div>

        {/* ========================================
        BOTTOM INFO
    ======================================== */}

        <div
          ref={ProblemBottomRef}
          className="
            mt-14
            flex
            flex-wrap
            items-end
            justify-between
            gap-4
            border-t
            border-white/10
            pt-5
            sm:mt-20
            sm:pt-6
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Invisible particles
          </span>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/40" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Air Quality Matters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

  
