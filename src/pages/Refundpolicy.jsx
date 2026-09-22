import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const refundRules = [
  {
    number: "01",
    icon: "ri-checkbox-circle-line",
    title: "Eligible for Refund",
    description:
      "A refund may be available when an eligible order is returned and meets the applicable refund conditions.",
    points: [
      "Eligible product returned within the applicable period",
      "Product meets the stated return conditions",
      "Order can be verified",
    ],
  },
  {
    number: "02",
    icon: "ri-close-circle-line",
    title: "Non-Refundable Situations",
    description:
      "Some purchases or situations may not qualify for a refund depending on the condition of the product and applicable terms.",
    points: [
      "Product damaged after delivery due to misuse",
      "Missing required accessories",
      "Unauthorized modifications",
    ],
  },
  {
    number: "03",
    icon: "ri-secure-payment-line",
    title: "Original Payment Method",
    description:
      "Approved refunds are normally returned through the original payment method used to complete the purchase.",
    points: [
      "Card payments return to the original card",
      "Online payments follow the original payment channel",
      "Alternative arrangements may require support approval",
    ],
  },
  {
    number: "04",
    icon: "ri-time-line",
    title: "Processing Time",
    description:
      "Refund processing begins after the returned product has been received and successfully reviewed.",
    points: [
      "Return received",
      "Product inspected",
      "Refund approved",
      "Payment provider processes the refund",
    ],
  },
];

const refundSteps = [
  {
    number: "01",
    icon: "ri-file-edit-line",
    title: "Request Refund",
    description:
      "Contact our support team with your order details and reason for requesting a refund.",
  },
  {
    number: "02",
    icon: "ri-box-3-line",
    title: "Return Product",
    description:
      "If a return is required, follow the instructions provided by our support team.",
  },
  {
    number: "03",
    icon: "ri-search-eye-line",
    title: "Inspection",
    description:
      "Our team reviews the returned product and verifies that it meets the applicable conditions.",
  },
  {
    number: "04",
    icon: "ri-refund-2-line",
    title: "Refund Issued",
    description:
      "Once approved, the refund is submitted through the appropriate payment channel.",
  },
];

export const RefundPolicy = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const refundVisualRef = useRef(null);

  const processRef = useRef(null);
  const timingRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      /* =========================================
         HERO ANIMATION
      ========================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".refund-label", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".refund-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".refund-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".refund-date",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
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
         REFUND VISUAL
      ========================================= */

      gsap.to(refundVisualRef.current, {
        y: -20,
        rotate: 3,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(refundVisualRef.current, {
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
         REFUND PROCESS
      ========================================= */

      gsap.from(".refund-step", {
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

      gsap.from(".refund-line-fill", {
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
         REFUND TIMING
      ========================================= */

      gsap.from(".timing-content", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timingRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".timing-card", {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timingRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /* =========================================
         CTA
      ========================================= */

      gsap.from(".refund-cta-content", {
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
            <div className="refund-label mb-6 flex items-center gap-3">
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
                Refund Policy
              </span>
            </div>

            <h1
              className="
                refund-title
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
              Refunds made
              <br />

              <span className="text-slate-500">
                clear and simple.
              </span>
            </h1>

            <p
              className="
                refund-description
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              Our refund policy explains when a refund may be
              available, how your return is reviewed, and what
              happens after a refund is approved.
            </p>

            <div
              className="
                refund-date
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-slate-400
                  backdrop-blur-md
                "
              >
                Last updated: September 2026
              </span>

              <span className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Transparent refund process
              </span>
            </div>
          </div>

           
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="
              rounded-[2rem]
              border
              border-slate-200
              bg-slate-50
              p-8
              sm:p-10
              lg:p-12
            "
          >
            <div className="flex items-start gap-5">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-950
                  text-cyan-300
                "
              >
                <i className="ri-information-line text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  About our refund policy
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  Refund eligibility depends on the product,
                  order status, return condition, payment method,
                  and applicable terms. Please review the
                  information below before requesting a refund.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  If you are unsure whether your order qualifies,
                  contact our support team before shipping the
                  product back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REFUND RULES
      ===================================================== */}

      <section
 
        className="
          relative
          overflow-hidden
          bg-slate-50
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
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

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600">
                Refund Conditions
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              What you should know.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              These are the key areas that determine how a refund
              request is handled.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {refundRules.map((rule) => (
              <article
                key={rule.number}
                className="
                  refund-rule-card
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-[0_10px_40px_rgba(15,23,42,0.03)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-200
                  hover:shadow-[0_25px_70px_rgba(8,145,178,0.10)]
                  sm:p-9
                "
              >
                {/* Background number */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-7
                    text-[8rem]
                    font-black
                    leading-none
                    tracking-tighter
                    text-slate-950/[0.025]
                    transition-all
                    duration-700
                    group-hover:translate-x-2
                    group-hover:text-cyan-950/[0.05]
                  "
                >
                  {rule.number}
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

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-950
                        text-cyan-300
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:bg-cyan-500
                        group-hover:text-white
                      "
                    >
                      <i className={`${rule.icon} text-2xl`} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
                      {rule.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {rule.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {rule.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {rule.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <i className="ri-check-line mt-0.5 text-cyan-500" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 h-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="
                        h-full
                        w-1/4
                        rounded-full
                        bg-cyan-400
                        transition-all
                        duration-700
                        group-hover:w-full
                      "
                    />
                  </div>
                </div>

               
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          REFUND PROCESS
      ===================================================== */}

      <section
        ref={processRef}
        className="
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
                How Refunds Work
              </span>

              <span className="h-px w-8 bg-cyan-500" />
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From request to refund.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              A straightforward process designed to keep you
              informed.
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Timeline */}

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
              <div className="refund-line-fill h-full w-full bg-cyan-400" />
            </div>

            {refundSteps.map((step) => (
              <div
                key={step.number}
                className="refund-step group relative text-center"
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
          REFUND TIMING
      ===================================================== */}

      <section
        ref={timingRef}
        className="bg-slate-50 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
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
          <div className="timing-content">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600">
                Refund Timing
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              When will you receive your refund?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Refund timing depends on the time required to inspect
              the returned product and the processing speed of the
              payment provider or financial institution.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Return package received",
                "Product inspected",
                "Refund approved",
                "Payment provider processes refund",
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
                      shrink-0
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

          {/* Timing card */}

          <div
            className="
              timing-card
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
                <i className="ri-time-line text-2xl" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Processing
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Once approved, your refund is submitted through
                the applicable payment channel. Your bank or
                payment provider may require additional time to
                display the funds.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Inspection
                  </span>

                  <span className="text-sm font-semibold text-white">
                    Required
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Refund channel
                  </span>

                  <span className="text-sm font-semibold text-cyan-300">
                    Original payment
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Bank processing
                  </span>

                  <span className="text-sm font-semibold text-white">
                    May vary
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
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div
          className="
            refund-cta-content
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
              Need help with a refund?
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
              Contact our support team if you have questions about
              your refund, order, payment, or return status.
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

 