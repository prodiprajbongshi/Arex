import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const returnSteps = [
  {
    number: "01",
    icon: "ri-file-list-3-line",
    title: "Start a Return",
    description:
      "Contact our support team with your order number and reason for the return.",
  },
  {
    number: "02",
    icon: "ri-inbox-unarchive-line",
    title: "Pack Your Product",
    description:
      "Securely pack the product with its original accessories, packaging, and documentation.",
  },
  {
    number: "03",
    icon: "ri-truck-line",
    title: "Send It Back",
    description:
      "Follow the return instructions provided by our support team and ship your package.",
  },
  {
    number: "04",
    icon: "ri-refund-2-line",
    title: "Get Your Refund",
    description:
      "Once your return is inspected and approved, your refund will be processed.",
  },
];

const returnRules = [
  {
    icon: "ri-calendar-check-line",
    title: "Return Window",
    description:
      "Eligible products can be returned within the return period stated in your order or purchase terms.",
  },
  {
    icon: "ri-box-3-line",
    title: "Original Condition",
    description:
      "Products should be returned in good condition with original accessories and packaging whenever possible.",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Refund Method",
    description:
      "Approved refunds are normally issued to the original payment method used for the purchase.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Need Help?",
    description:
      "Our support team can guide you through the return process and answer questions about your order.",
  },
];

export const Returns = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const returnIconRef = useRef(null);
 
  const processRef = useRef(null);
  const refundRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        /* =========================================
           HERO INTRO
        ========================================= */

        const heroTimeline = gsap.timeline();

        heroTimeline
          .from(".return-label", {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .from(
            ".return-title",
            {
              y: 80,
              opacity: 0,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.3"
          )
          .from(
            ".return-description",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".return-button",
            {
              y: 25,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          );

        /* =========================================
           HERO PARALLAX
        ========================================= */

        gsap.to(heroContentRef.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        /* =========================================
           FLOATING RETURN ICON
        ========================================= */

        gsap.to(returnIconRef.current, {
          y: -20,
          rotate: 3,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(returnIconRef.current, {
          x: 90,
          y: 100,
          scale: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

 
 
        /* =========================================
           RETURN PROCESS
        ========================================= */

        gsap.from(".return-step", {
          y: 70,
          opacity: 0,
          stagger: 0.14,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%",
            once: true,
          },
        });

        gsap.from(".return-line-fill", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 65%",
            once: true,
          },
        });

        /* =========================================
           REFUND SECTION
        ========================================= */

        gsap.from(".refund-content", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refundRef.current,
            start: "top 75%",
            once: true,
          },
        });

        gsap.from(".refund-card", {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refundRef.current,
            start: "top 75%",
            once: true,
          },
        });

        /* =========================================
           CTA
        ========================================= */

        gsap.from(".return-cta-content", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }, pageRef);

      return () => ctx.revert();
    },
    { scope: pageRef }
  );

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-white text-slate-950"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          flex
          min-h-[680px]
          items-center
          overflow-hidden
          bg-slate-950
          px-6
          py-32
          sm:px-10
          lg:min-h-[760px]
          lg:px-16
        "
      >
        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.05]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Main glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-0
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-400/20
            blur-[130px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        <div
          ref={heroContentRef}
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-16
            lg:grid-cols-[1fr_420px]
          "
        >
          {/* Content */}

          <div>
            <div className="return-label mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300
                "
              >
                Returns & Refunds
              </span>
            </div>

            <h1
              className="
                return-title
                max-w-4xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Simple returns.
              <br />

              <span className="text-slate-500">
                No unnecessary stress.
              </span>
            </h1>

            <p
              className="
                return-description
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              We want you to feel confident about your purchase.
              If something isn't right, our return process is
              designed to make the next steps clear and simple.
            </p>

            <a
              href="/contact"
              className="
                return-button
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-400
                px-7
                py-4
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:bg-cyan-300
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]
              "
            >
              Start a Return

              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          </div>

          
        </div>
      </section>

      {/* =====================================================
          POLICY
      ===================================================== */}
<section
   
  className="
    relative
    overflow-hidden
    bg-white
    px-6
    py-24
    sm:px-10
    sm:py-32
    lg:px-16
  "
>
  {/* Background decoration */}
  <div
    className="
      pointer-events-none
      absolute
      -right-40
      top-20
      h-96
      w-96
      rounded-full
      bg-cyan-100/40
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -left-40
      bottom-0
      h-80
      w-80
      rounded-full
      bg-blue-100/30
      blur-[110px]
    "
  />

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* =========================
        SECTION HEADER
    ========================= */}

    <div className="mb-14 max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-cyan-500" />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.22em]
            text-cyan-600
          "
        >
          Return Policy
        </span>
      </div>

      <h2
        className="
          text-4xl
          font-semibold
          leading-tight
          tracking-[-0.03em]
          text-slate-950
          sm:text-5xl
          lg:text-6xl
        "
      >
        Before you
        <span className="text-slate-400"> send it back.</span>
      </h2>

      <p
        className="
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-slate-500
          sm:text-lg
        "
      >
        A few important things to know before starting a return.
        We've designed the process to keep everything simple and
        transparent.
      </p>
    </div>

    {/* =========================
        POLICY CARDS
    ========================= */}

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {returnRules.map((rule, index) => (
        <div
          key={rule.title}
          className="
            return-policy-card
            group
            relative
            min-h-[320px]
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-7
            shadow-[0_10px_40px_rgba(15,23,42,0.04)]
            transition-[transform,box-shadow,border-color]
            duration-500
            ease-out
            hover:-translate-y-3
            hover:border-cyan-200
            hover:shadow-[0_25px_70px_rgba(8,145,178,0.12)]
            will-change-transform
            sm:p-8
          "
        >
          {/* Large background number */}

          <span
            className="
              pointer-events-none
              absolute
              -right-3
              -top-7
              select-none
              text-[8rem]
              font-black
              leading-none
              tracking-tighter
              text-slate-950/[0.025]
              transition-all
              duration-700
              group-hover:text-cyan-950/[0.05]
              group-hover:translate-x-2
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-cyan-300/20
              opacity-0
              blur-3xl
              transition-all
              duration-700
              group-hover:scale-125
              group-hover:opacity-100
            "
          />

          {/* Content */}

          <div className="relative z-10 flex h-full flex-col">
            {/* Icon */}

            <div
              className="
                relative
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-slate-950
                text-cyan-300
                shadow-[0_12px_30px_rgba(15,23,42,0.15)]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-2
                group-hover:bg-cyan-500
                group-hover:text-white
              "
            >
              {/* Icon glow */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-cyan-400/30
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <i
                className={`
                  ${rule.icon}
                  relative
                  z-10
                  text-2xl
                `}
              />
            </div>

            {/* Title */}

            <h3
              className="
                mt-7
                text-xl
                font-semibold
                tracking-tight
                text-slate-950
                transition-colors
                duration-300
                group-hover:text-cyan-700
              "
            >
              {rule.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-500
              "
            >
              {rule.description}
            </p>

            {/* Bottom area */}

            <div className="mt-auto pt-8">
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-cyan-600
                  "
                >
                  Important
                </span>

                <i
                  className="
                    ri-arrow-right-up-line
                    text-lg
                    text-slate-300
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-cyan-500
                  "
                />
              </div>

              {/* Progress line */}

              <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="
                    h-full
                    w-1/4
                    rounded-full
                    bg-cyan-400
                    transition-all
                    duration-700
                    ease-out
                    group-hover:w-full
                  "
                />
              </div>
            </div>
          </div>

        
        </div>
      ))}
    </div>
  </div>
</section>
      {/* =====================================================
          RETURN PROCESS
      ===================================================== */}

      <section
        ref={processRef}
        className="
          bg-slate-50
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Return Process
              </span>

              <span className="h-px w-8 bg-cyan-500" />
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Four simple steps.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              We'll guide you through every stage of your return.
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Desktop timeline */}

            <div
              className="
                absolute
                left-[12%]
                right-[12%]
                top-10
                hidden
                h-px
                bg-slate-200
                md:block
              "
            >
              <div className="return-line-fill h-full w-full bg-cyan-400" />
            </div>

            {returnSteps.map((step) => (
              <div
                key={step.number}
                className="
                  return-step
                  group
                  relative
                  text-center
                "
              >
                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-cyan-500
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-cyan-300
                    group-hover:shadow-[0_15px_40px_rgba(8,145,178,0.15)]
                  "
                >
                  <i className={`${step.icon} text-2xl`} />

                  <span
                    className="
                      absolute
                      -right-2
                      -top-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-950
                      text-[9px]
                      font-bold
                      text-white
                    "
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          REFUND INFORMATION
      ===================================================== */}

      <section
        ref={refundRef}
        className="
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            lg:grid-cols-[1fr_420px]
            lg:items-center
          "
        >
          <div className="refund-content">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Refunds
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              What happens after we receive your return?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Once your returned product reaches us, our team
              checks the item against the applicable return
              conditions. If approved, we'll initiate your refund
              using the original payment method.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Return received",
                "Product inspection",
                "Return approved",
                "Refund initiated",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-50
                      text-xs
                      font-bold
                      text-cyan-600
                    "
                  >
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Refund card */}

          <div
            className="
              refund-card
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-slate-950
              p-8
              text-white
              shadow-[0_30px_80px_rgba(15,23,42,0.15)]
              sm:p-10
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-cyan-400/20
                blur-3xl
              "
            />

            <div className="relative">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400
                  text-slate-950
                "
              >
                <i className="ri-refund-2-line text-2xl" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Refund Timeline
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Processing time can vary depending on the payment
                provider and banking institution.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Return inspection
                  </span>

                  <span className="text-sm font-semibold text-white">
                    Required
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Refund method
                  </span>

                  <span className="text-sm font-semibold text-cyan-300">
                    Original payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        ref={ctaRef}
        className="px-6 pb-24 sm:px-10 lg:px-16"
      >
        <div
          className="
            return-cta-content
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2.5rem]
            bg-slate-950
            px-8
            py-16
            text-center
            sm:px-12
            lg:py-20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              h-80
              w-80
              rounded-full
              bg-cyan-400/20
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-blue-500/10
              blur-[100px]
            "
          />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Need assistance?
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              We're here to help.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              If you have questions about a return, refund, or
              existing order, our support team is ready to help.
            </p>

            <a
              href="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-400
                px-7
                py-4
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:bg-cyan-300
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.20)]
              "
            >
              Contact Support

              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

 