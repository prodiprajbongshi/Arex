import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {

  const TechnologySectionRef = useRef(null);
  const TechnologyLabelRef = useRef(null);
  const TechnologyTitleRef = useRef(null);
  const TechnologyDescriptionRef = useRef(null);
  const TechnologyCardsRef = useRef([]);


  useGSAP(() => {
    // ========================================
    // SECTION 4 — TECHNOLOGY
    // ========================================

    const technologyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: TechnologySectionRef.current,
        start: "top 30%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });


    // Label
    technologyTimeline.fromTo(
      TechnologyLabelRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      }
    );


    // Main heading
    technologyTimeline.fromTo(
      TechnologyTitleRef.current,
      {
        opacity: 0,
        y: 100,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.3"
    );


    // Description
    technologyTimeline.fromTo(
      TechnologyDescriptionRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );


    // Technology cards
    technologyTimeline.fromTo(
      TechnologyCardsRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.3"
    );

  })

  return (
    <section
      ref={TechnologySectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#111315]
        px-5
        py-20
        text-white
        sm:px-8
        sm:py-24
        lg:px-16
        lg:py-28
      "
    >
      {/* Background glow */}
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
          bg-white/[0.02]
          blur-[100px]
          sm:h-[550px]
          sm:w-[550px]
          lg:h-[700px]
          lg:w-[700px]
          lg:bg-white/[0.025]
          lg:blur-[120px]
        "
      />

      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:60px_60px]
          sm:[background-size:80px_80px]
        "
      />

      {/* Side borders */}
      <div
        className="
          pointer-events-none
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
          pointer-events-none
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

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* --------------------------------
            TOP HEADER
        -------------------------------- */}
        <div
          ref={TechnologyLabelRef}
          className="
            mb-12
            flex
            items-center
            justify-between
            sm:mb-16
            lg:mb-24
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
              Technology
            </span>
          </div>

        
        </div>


        {/* --------------------------------
            TITLE
        -------------------------------- */}
        <div className="max-w-5xl">

          <div
            ref={TechnologyTitleRef}
            className="overflow-hidden"
          >
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
              Technology
              <br />

              <span className="text-white/35">
                that works
              </span>

              <br />

              quietly.
            </h2>
          </div>


          <div
            ref={TechnologyDescriptionRef}
            className="
              mt-8
              max-w-xl
              sm:mt-12
              md:ml-[15%]
              lg:ml-[25%]
            "
          >
            <p
              className="
                text-sm
                font-light
                leading-7
                text-white/45
                sm:text-base
                lg:text-lg
              "
            >
              Advanced air purification technology designed to
              remove pollutants, monitor air quality, and keep your
              environment cleaner — without disrupting your life.
            </p>
          </div>
        </div>


        {/* --------------------------------
            TECHNOLOGY CARDS
        -------------------------------- */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            border
            border-white/10
            bg-white/10
            sm:mt-20
            sm:grid-cols-2
            lg:mt-24
          "
        >

          {/* CARD 01 */}
          <div
            ref={(el) => (TechnologyCardsRef.current[0] = el)}
            className="
              group
              relative
              min-h-[260px]
              overflow-hidden
              bg-[#111315]
              p-6
              transition-colors
              duration-500
              hover:bg-[#181b1e]
              sm:min-h-[300px]
              sm:p-8
              lg:min-h-[320px]
              lg:p-10
            "
          >

            {/* Number */}
            <span
              className="
                absolute
                right-6
                top-6
                text-xs
                tracking-[0.25em]
                text-white/20
                sm:right-8
                sm:top-8
              "
            >
              01
            </span>

            {/* Icon */}
            <div
              className="
                mb-14
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-white/30
                sm:mb-20
                sm:h-14
                sm:w-14
              "
            >
              <i className="ri-radar-line text-xl text-white/70 sm:text-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3
                className="
                  text-xl
                  font-medium
                  tracking-tight
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                360° Air Intake
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-xs
                  font-light
                  leading-6
                  text-white/40
                  sm:mt-4
                  sm:text-sm
                "
              >
                Pulls polluted air from every direction for
                efficient and consistent purification.
              </p>
            </div>

            {/* Arrow */}
            <div
              className="
                absolute
                bottom-6
                right-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:border-white/30
                sm:bottom-8
                sm:right-8
                sm:h-10
                sm:w-10
              "
            >
              <i className="ri-arrow-right-up-line text-sm text-white/50 sm:text-base" />
            </div>
          </div>


          {/* CARD 02 */}
          <div
            ref={(el) => (TechnologyCardsRef.current[1] = el)}
            className="
              group
              relative
              min-h-[260px]
              overflow-hidden
              bg-[#111315]
              p-6
              transition-colors
              duration-500
              hover:bg-[#181b1e]
              sm:min-h-[300px]
              sm:p-8
              lg:min-h-[320px]
              lg:p-10
            "
          >

            <span
              className="
                absolute
                right-6
                top-6
                text-xs
                tracking-[0.25em]
                text-white/20
                sm:right-8
                sm:top-8
              "
            >
              02
            </span>

            <div
              className="
                mb-14
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-white/30
                sm:mb-20
                sm:h-14
                sm:w-14
              "
            >
              <i className="ri-filter-3-line text-xl text-white/70 sm:text-2xl" />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-medium
                  tracking-tight
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                HEPA H14 Filter
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-xs
                  font-light
                  leading-6
                  text-white/40
                  sm:mt-4
                  sm:text-sm
                "
              >
                High-efficiency filtration captures microscopic
                airborne particles for cleaner indoor air.
              </p>
            </div>

            <div
              className="
                absolute
                bottom-6
                right-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:border-white/30
                sm:bottom-8
                sm:right-8
                sm:h-10
                sm:w-10
              "
            >
              <i className="ri-arrow-right-up-line text-sm text-white/50 sm:text-base" />
            </div>
          </div>


          {/* CARD 03 */}
          <div
            ref={(el) => (TechnologyCardsRef.current[2] = el)}
            className="
              group
              relative
              min-h-[260px]
              overflow-hidden
              bg-[#111315]
              p-6
              transition-colors
              duration-500
              hover:bg-[#181b1e]
              sm:min-h-[300px]
              sm:p-8
              lg:min-h-[320px]
              lg:p-10
            "
          >

            <span
              className="
                absolute
                right-6
                top-6
                text-xs
                tracking-[0.25em]
                text-white/20
                sm:right-8
                sm:top-8
              "
            >
              03
            </span>

            <div
              className="
                mb-14
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-white/30
                sm:mb-20
                sm:h-14
                sm:w-14
              "
            >
              <i className="ri-moon-line text-xl text-white/70 sm:text-2xl" />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-medium
                  tracking-tight
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                Silent Mode
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-xs
                  font-light
                  leading-6
                  text-white/40
                  sm:mt-4
                  sm:text-sm
                "
              >
                Quiet operation keeps your space comfortable while
                purification continues in the background.
              </p>
            </div>

            <div
              className="
                absolute
                bottom-6
                right-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:border-white/30
                sm:bottom-8
                sm:right-8
                sm:h-10
                sm:w-10
              "
            >
              <i className="ri-arrow-right-up-line text-sm text-white/50 sm:text-base" />
            </div>
          </div>


          {/* CARD 04 */}
          <div
            ref={(el) => (TechnologyCardsRef.current[3] = el)}
            className="
              group
              relative
              min-h-[260px]
              overflow-hidden
              bg-[#111315]
              p-6
              transition-colors
              duration-500
              hover:bg-[#181b1e]
              sm:min-h-[300px]
              sm:p-8
              lg:min-h-[320px]
              lg:p-10
            "
          >

           

            <div
              className="
                mb-14
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-white/30
                sm:mb-20
                sm:h-14
                sm:w-14
              "
            >
              <i className="ri-pulse-line text-xl text-white/70 sm:text-2xl" />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-medium
                  tracking-tight
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                Smart Air Monitoring
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-xs
                  font-light
                  leading-6
                  text-white/40
                  sm:mt-4
                  sm:text-sm
                "
              >
                Continuously monitors indoor air conditions and
                provides real-time feedback about air quality.
              </p>
            </div>

            <div
              className="
                absolute
                bottom-6
                right-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:border-white/30
                sm:bottom-8
                sm:right-8
                sm:h-10
                sm:w-10
              "
            >
              <i className="ri-arrow-right-up-line text-sm text-white/50 sm:text-base" />
            </div>
          </div>

        </div>


        {/* --------------------------------
            BOTTOM
        -------------------------------- */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-5
            sm:mt-8
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
            Engineered for cleaner air
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
              Advanced Air Technology
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technology
