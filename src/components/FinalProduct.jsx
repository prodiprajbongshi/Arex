import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FinalProduct = () => {
  const sectionRef = useRef(null);

  const productRef = useRef(null);
  const glowRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      // --------------------------------
      // Initial States
      // --------------------------------

      gsap.set(productRef.current, {
        opacity: 0,
        scale: 0.45,
        rotation: -18,
        y: 120,
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(
        [
          labelRef.current,
          titleRef.current,
          descriptionRef.current,
          priceRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // --------------------------------
      // Product Animation
      // --------------------------------

      tl.to(glowRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })

        .to(
          productRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          "-=0.9"
        )

        // --------------------------------
        // Text Reveal
        // --------------------------------

        .to(
          labelRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.7"
        )

        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )

        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .to(
          priceRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );

      // --------------------------------
      // Subtle Product Floating
      // --------------------------------

      gsap.to(productRef.current, {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f3f4f6]
        px-6
        py-24
        text-[#111315]
        lg:px-16
      "
    >
      {/* ================================= */}
      {/* Background Glow */}
      {/* ================================= */}

      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/[0.045]
          blur-[100px]
          lg:h-[700px]
          lg:w-[700px]
        "
      />

      {/* ================================= */}
      {/* Top Label */}
      {/* ================================= */}

      <div className="absolute left-6 right-6 top-8 flex items-center justify-between lg:left-16 lg:right-16">
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-black/60">
          Final Product
        </span>
 
      </div>

      {/* ================================= */}
      {/* Main Content */}
      {/* ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-12rem)]
          max-w-7xl
          flex-col
          items-center
          justify-center
        "
      >
        {/* ================================= */}
        {/* Product */}
        {/* ================================= */}

        <div className="relative flex items-center justify-center">
          <img
            ref={productRef}
            src="./images/HeroImage.png"
            alt="AEROX Air Purifier"
            className="
              relative
              z-20
              w-[260px]
              object-contain
              drop-shadow-[0_40px_50px_rgba(0,0,0,0.18)]
              sm:w-[320px]
              md:w-[380px]
              lg:w-[430px]
            "
          />

          {/* Product Shadow */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-20px]
              left-1/2
              z-10
              h-10
              w-[220px]
              -translate-x-1/2
              rounded-full
              bg-black/15
              blur-2xl
              sm:w-[280px]
              lg:w-[340px]
            "
          />
        </div>

        {/* ================================= */}
        {/* Product Information */}
        {/* ================================= */}

        <div className="relative z-30 mt-10 text-center sm:mt-12">
          {/* Label */}

          <span
            ref={labelRef}
            className="
              block
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-black/40
            "
          >
            Meet the next generation
          </span>

          {/* Title */}

          <h2
            ref={titleRef}
            className="
              mt-4
              text-[clamp(4rem,9vw,9rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.07em]
            "
          >
            AEROX
          </h2>

          {/* Description */}

          <p
            ref={descriptionRef}
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-black/45
              sm:text-base
              lg:text-lg
            "
          >
            Intelligent air purification designed for modern spaces.
            Powerful filtration, silent performance and smarter air
            monitoring — all in one system.
          </p>

          {/* ================================= */}
          {/* Price */}
          {/* ================================= */}

          <div
            ref={priceRef}
            className="mt-8"
          >
            <span className="block text-[10px] uppercase tracking-[0.3em] text-black/35">
              Starting from
            </span>

            <span className="mt-1 block text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              $499
            </span>
          </div>

          {/* ================================= */}
          {/* Buy Button */}
          {/* ================================= */}

          <div
            ref={buttonRef}
            className="mt-8 flex justify-center"
          >
            <button
              className="
                group
                flex
                items-center
                gap-4
                rounded-full
                bg-[#111315]
                px-7
                py-4
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:gap-6
                hover:bg-black
                hover:px-8
              "
            >
              <span>Buy AEROX</span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <i className="ri-arrow-right-line text-base" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* Bottom Details */}
      {/* ================================= */}

      <div
        className="
          absolute
          bottom-7
          left-6
          right-6
          flex
          items-center
          justify-between
          lg:left-16
          lg:right-16
        "
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-black/30">
          Clean air / Smart living
        </span>

        <span className="text-[9px] uppercase tracking-[0.3em] text-black/30">
          Scroll to continue
        </span>
      </div>
    </section>
  );
};

 