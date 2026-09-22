import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FilteringProcess = () => {
  const FilterSectionRef = useRef(null);

  const FilterFlowRef = useRef(null);
  const FilterCardsRef = useRef([]);

  const AirParticlesRef = useRef([]);
  const AirflowLineRef = useRef(null);
  const FilterProgressRef = useRef(null);

  useGSAP(() => {
    // ========================================
    // SECTION 5 — FILTER EXPERIENCE
    // ========================================

    const filterCards = FilterCardsRef.current;

    gsap.set(filterCards, {
      opacity: 0,
      scale: 0.88,
      y: 80,
    });

    gsap.set(filterCards[0], {
      opacity: 1,
      scale: 1,
      y: 0,
    });

    // ========================================
    // PINNED FILTER EXPERIENCE
    // ========================================

    const filterMasterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: FilterFlowRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
      },
    });

    // ========================================
    // CARD 01 → CARD 02
    // ========================================

    filterMasterTimeline
      .to(filterCards[0], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[1],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 02 → CARD 03
    // ========================================

    filterMasterTimeline
      .to(filterCards[1], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[2],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 03 → CARD 04
    // ========================================

    filterMasterTimeline
      .to(filterCards[2], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[3],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );

    // ========================================
    // CARD 04 → CARD 05
    // ========================================

    filterMasterTimeline
      .to(filterCards[3], {
        opacity: 0,
        scale: 0.88,
        y: -80,
        duration: 1,
        ease: "power3.inOut",
      })

      .to(
        filterCards[4],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );
  });

  return (
    <section
      ref={FilterSectionRef}
      className="
        relative
        overflow-hidden
        bg-[#111315]
        px-4
        pt-20
        pb-0
        text-[#111315]
        sm:px-6
        sm:pt-24
        lg:px-16
        lg:pt-28
      "
    >
      {/* =====================================
      FILTER FLOW — PINNED EXPERIENCE
  ===================================== */}

      <div
        ref={FilterFlowRef}
        className="
          relative
          mt-10
          h-[380vh]
          sm:mt-14
          lg:mt-16
        "
      >
        {/* =====================================
        PINNED MAIN BOX
    ===================================== */}

        <div
          className="
            sticky
            top-0
            flex
            h-screen
            items-center
            justify-center
            py-4
            sm:py-6
          "
        >
          <div
            className="
              relative
              h-[78vh]
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[1.5rem]
              border
              border-white/10
              bg-[#6b7280]
              sm:h-[80vh]
              sm:rounded-[2rem]
              lg:h-[82vh]
              lg:rounded-[2.5rem]
            "
          >
            {/* =====================================
            BACKGROUND DECORATION
        ===================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-64
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-black/5
                blur-[80px]
                sm:h-96
                sm:w-96
                lg:h-[500px]
                lg:w-[500px]
                lg:blur-[100px]
              "
            />

            {/* =====================================
            TOP HEADER
        ===================================== */}

            <div
              className="
                absolute
                left-4
                right-4
                top-4
                z-30
                flex
                items-center
                justify-between
                sm:left-6
                sm:right-6
                sm:top-6
                lg:left-10
                lg:right-10
                lg:top-8
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                Air purification process
              </span>

              <span
                ref={FilterProgressRef}
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-black/40
                  sm:text-xs
                "
              >
                01 / 05
              </span>
            </div>

            {/* =====================================
            AIRFLOW PATH
        ===================================== */}

            <div
              className="
                absolute
                bottom-10
                left-1/2
                top-16
                w-px
                -translate-x-1/2
                bg-black/10
                sm:top-20
              "
            />

            <div
              ref={AirflowLineRef}
              className="
                absolute
                bottom-10
                left-1/2
                top-16
                w-[2px]
                origin-top
                -translate-x-1/2
                scale-y-0
                bg-black/40
                sm:top-20
              "
            />

            {/* =====================================
            AIR PARTICLES
        ===================================== */}

            <span
              ref={(el) => (AirParticlesRef.current[0] = el)}
              className="
                absolute
                left-1/2
                top-[23%]
                z-20
                h-2.5
                w-2.5
                -translate-x-1/2
                rounded-full
                bg-black/40
                sm:h-3
                sm:w-3
              "
            />

            <span
              ref={(el) => (AirParticlesRef.current[1] = el)}
              className="
                absolute
                left-[48%]
                top-[27%]
                z-20
                h-2
                w-2
                rounded-full
                bg-black/30
              "
            />

            <span
              ref={(el) => (AirParticlesRef.current[2] = el)}
              className="
                absolute
                left-[53%]
                top-[30%]
                z-20
                h-2
                w-2
                rounded-full
                bg-black/25
                sm:h-2.5
                sm:w-2.5
              "
            />

            <span
              ref={(el) => (AirParticlesRef.current[3] = el)}
              className="
                absolute
                left-[46%]
                top-[34%]
                z-20
                h-1.5
                w-1.5
                rounded-full
                bg-black/35
              "
            />

            {/* =====================================
            FILTER CARDS CONTAINER
            ===================================== */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-4
                sm:px-6
                md:px-10
                lg:px-14
              "
            >
              {/* =================================
              CARD 01 — DIRTY AIR
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[0] = el)}
                className="
                  absolute
                  w-full
                  max-w-4xl
                  rounded-2xl
                  border
                  border-black/10
                  bg-[#111315]
                  p-5
                  text-white
                  opacity-0
                  sm:rounded-3xl
                  sm:p-8
                  lg:rounded-4xl
                  lg:p-14
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/80
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Incoming Air
                  </span>

                  <span className="text-xs text-white/80 sm:text-sm">01</span>
                </div>

                <div className="mt-8 sm:mt-14 lg:mt-20">
                  <i
                    className="
                      ri-cloud-windy-line
                      text-4xl
                      text-white/80
                      sm:text-5xl
                      lg:text-7xl
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-semibold
                      tracking-[-0.03em]
                      sm:mt-5
                      sm:text-5xl
                      sm:tracking-[-0.04em]
                      lg:mt-6
                      lg:text-8xl
                    "
                  >
                    Dirty Air
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-white/60
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                      lg:mt-5
                      lg:text-lg
                    "
                  >
                    Dust, smoke, pollen and airborne particles enter the
                    purification system.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 02 — PRE FILTER
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[1] = el)}
                className="
                  absolute
                  w-full
                  max-w-4xl
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-5
                  opacity-0
                  sm:rounded-3xl
                  sm:p-8
                  lg:rounded-[2rem]
                  lg:p-14
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-black/35
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Filtration Stage 01
                  </span>

                  <span className="text-xs text-black/30 sm:text-sm">02</span>
                </div>

                <div className="mt-8 sm:mt-14 lg:mt-20">
                  <i
                    className="
                      ri-filter-line
                      text-4xl
                      text-black/50
                      sm:text-5xl
                      lg:text-7xl
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-semibold
                      tracking-[-0.03em]
                      sm:mt-5
                      sm:text-5xl
                      sm:tracking-[-0.04em]
                      lg:mt-6
                      lg:text-8xl
                    "
                  >
                    Pre Filter
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-black/45
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                      lg:mt-5
                      lg:text-lg
                    "
                  >
                    The first layer captures larger dust, hair and visible
                    airborne particles.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 03 — HEPA H14
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[2] = el)}
                className="
                  absolute
                  w-full
                  max-w-4xl
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111315]
                  p-5
                  opacity-0
                  sm:rounded-3xl
                  sm:p-8
                  lg:rounded-[2rem]
                  lg:p-14
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/80
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Filtration Stage 02
                  </span>

                  <span className="text-xs text-white/80 sm:text-sm">03</span>
                </div>

                <div className="mt-8 sm:mt-14 lg:mt-20">
                  <i
                    className="
                      ri-shield-check-line
                      text-4xl
                      text-white/80
                      sm:text-5xl
                      lg:text-7xl
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white/80
                      sm:mt-5
                      sm:text-5xl
                      sm:tracking-[-0.04em]
                      lg:mt-6
                      lg:text-8xl
                    "
                  >
                    HEPA H14
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-white/60
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                      lg:mt-5
                      lg:text-lg
                    "
                  >
                    Fine airborne particles move through the high-efficiency
                    HEPA filtration layer.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 04 — CARBON FILTER
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[3] = el)}
                className="
                  absolute
                  w-full
                  max-w-4xl
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-5
                  opacity-0
                  sm:rounded-3xl
                  sm:p-8
                  lg:rounded-[2rem]
                  lg:p-14
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-black/35
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Filtration Stage 03
                  </span>

                  <span className="text-xs text-black/30 sm:text-sm">04</span>
                </div>

                <div className="mt-8 sm:mt-14 lg:mt-20">
                  <i
                    className="
                      ri-bubble-chart-line
                      text-4xl
                      text-black/50
                      sm:text-5xl
                      lg:text-7xl
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-semibold
                      tracking-[-0.03em]
                      sm:mt-5
                      sm:text-5xl
                      sm:tracking-[-0.04em]
                      lg:mt-6
                      lg:text-8xl
                    "
                  >
                    Carbon Filter
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-black/45
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                      lg:mt-5
                      lg:text-lg
                    "
                  >
                    Activated carbon helps reduce unwanted odors and gaseous
                    pollutants.
                  </p>
                </div>
              </div>

              {/* =================================
              CARD 05 — CLEAN AIR
          ================================= */}

              <div
                ref={(el) => (FilterCardsRef.current[4] = el)}
                className="
                  absolute
                  w-full
                  max-w-4xl
                  rounded-2xl
                  bg-[#111315]
                  p-5
                  text-white
                  opacity-0
                  sm:rounded-3xl
                  sm:p-8
                  lg:rounded-[2rem]
                  lg:p-14
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/35
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    Purified Air
                  </span>

                  <span className="text-xs text-white/30 sm:text-sm">05</span>
                </div>

                <div className="mt-8 sm:mt-14 lg:mt-20">
                  <i
                    className="
                      ri-leaf-line
                      text-4xl
                      text-white/60
                      sm:text-5xl
                      lg:text-7xl
                    "
                  />

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-semibold
                      tracking-[-0.03em]
                      sm:mt-5
                      sm:text-5xl
                      sm:tracking-[-0.04em]
                      lg:mt-6
                      lg:text-8xl
                    "
                  >
                    Clean Air
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-white/40
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                      lg:mt-5
                      lg:text-lg
                    "
                  >
                    Cleaner air leaves the system and returns to your living
                    space.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
            BOTTOM INFORMATION
        ===================================== */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                z-30
                flex
                items-center
                justify-between
                sm:bottom-5
                sm:left-6
                sm:right-6
                lg:left-10
                lg:right-10
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                Multi-layer purification
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

  
