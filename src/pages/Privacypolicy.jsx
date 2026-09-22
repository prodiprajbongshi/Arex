import  { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const privacySections = [
  {
    number: "01",
    icon: "ri-database-2-line",
    title: "Information We Collect",
    description:
      "We may collect information you provide when creating an account, placing an order, contacting support, or interacting with our website.",
    points: [
      "Name and contact information",
      "Billing and shipping information",
      "Account information",
      "Order and purchase information",
      "Information you voluntarily provide to us",
    ],
  },
  {
    number: "02",
    icon: "ri-settings-3-line",
    title: "How We Use Your Information",
    description:
      "We use collected information to operate our store, process orders, provide customer support, and improve your experience.",
    points: [
      "Process and fulfill orders",
      "Provide customer support",
      "Send important order updates",
      "Improve products and website functionality",
      "Prevent fraud and unauthorized activity",
    ],
  },
  {
    number: "03",
    icon: "ri-shield-check-line",
    title: "How We Protect Your Data",
    description:
      "We use reasonable technical and organizational safeguards designed to protect your information against unauthorized access, loss, misuse, or disclosure.",
    points: [
      "Secure data transmission",
      "Access controls",
      "Limited employee access",
      "Security monitoring",
      "Regular system improvements",
    ],
  },
  {
    number: "04",
    icon: "ri-share-forward-line",
    title: "Information Sharing",
    description:
      "We may share limited information with trusted service providers when necessary to operate our business and provide services to you.",
    points: [
      "Payment service providers",
      "Shipping and delivery partners",
      "Website and technology providers",
      "Customer support services",
      "Legal or regulatory authorities when required",
    ],
  },
  {
    number: "05",
    icon: "ri-cookie-line",
    title: "Cookies & Tracking",
    description:
      "Our website may use cookies and similar technologies to remember preferences, understand website usage, and improve functionality.",
    points: [
      "Essential website cookies",
      "Preference cookies",
      "Analytics technologies",
      "Performance measurement",
      "Marketing technologies where applicable",
    ],
  },
  {
    number: "06",
    icon: "ri-user-settings-line",
    title: "Your Privacy Choices",
    description:
      "Depending on your location and applicable laws, you may have rights concerning the personal information we hold about you.",
    points: [
      "Request access to your information",
      "Request correction of inaccurate information",
      "Request deletion where applicable",
      "Manage communication preferences",
      "Ask questions about our privacy practices",
    ],
  },
];

export const Privacypolicy = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const privacyVisualRef = useRef(null);

  const securityRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      /* =========================================
         HERO
      ========================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".privacy-label", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".privacy-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".privacy-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".privacy-date",
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
         PRIVACY VISUAL
      ========================================= */

      gsap.to(privacyVisualRef.current, {
        y: -20,
        rotate: 3,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(privacyVisualRef.current, {
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
         SECURITY SECTION
      ========================================= */

      gsap.from(".security-content", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: securityRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".security-card", {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: securityRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /* =========================================
         CTA
      ========================================= */

      gsap.from(".privacy-cta-content", {
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
          {/* Hero content */}

          <div>
            <div className="privacy-label mb-6 flex items-center gap-3">
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
                Privacy Policy
              </span>
            </div>

            <h1
              className="
                privacy-title
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
              Your privacy.
              <br />

              <span className="text-slate-500">
                Our responsibility.
              </span>
            </h1>

            <p
              className="
                privacy-description
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              We believe your personal information should be
              handled with care, transparency, and respect. This
              policy explains what information we collect and how
              we use it.
            </p>

            <div
              className="
                privacy-date
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
                Data protection matters
              </span>
            </div>
          </div>

          {/* Privacy visual */}

          <div className="relative hidden h-[430px] lg:block">
            {/* Rings */}

            <div
              className="
                absolute
                inset-10
                rounded-full
                border
                border-cyan-400/10
              "
            />

            <div
              className="
                absolute
                inset-20
                rounded-full
                border
                border-cyan-400/10
              "
            />

            <div
              className="
                absolute
                inset-32
                rounded-full
                border
                border-cyan-400/10
              "
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={privacyVisualRef}
                className="
                  relative
                  flex
                  h-64
                  w-64
                  items-center
                  justify-center
                  rounded-[3rem]
                  border
                  border-white/10
                  bg-white/[0.04]
                  shadow-[0_30px_100px_rgba(6,182,212,0.12)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-5
                    rounded-[2.5rem]
                    border
                    border-cyan-400/10
                  "
                />

                <i
                  className="
                    ri-shield-keyhole-line
                    relative
                    z-10
                    text-[7rem]
                    text-cyan-300
                  "
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                    backdrop-blur-md
                  "
                >
                  Protected Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
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
                  About this Privacy Policy
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  This Privacy Policy describes how your personal
                  information may be collected, used, stored, and
                  shared when you use our website, purchase our
                  products, or contact our team.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  By using our website, you acknowledge that you
                  have read this policy. Additional notices may
                  apply to specific products, services, or
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVACY SECTIONS
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
            top-40
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
                Your Information
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              How we handle your data.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              Here is an overview of the main ways your information
              may be handled when you interact with our services.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {privacySections.map((section) => (
              <article
                key={section.number}
                className="
                  privacy-section-card
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
                  {section.number}
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
                      <i className={`${section.icon} text-2xl`} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-slate-300
                      "
                    >
                      {section.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-slate-950">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {section.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {section.points.map((point) => (
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
          SECURITY
      ===================================================== */}

      <section
        ref={securityRef}
        className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
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
          <div className="security-content">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600">
                Data Security
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built around trust.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Protecting personal information is an ongoing
              responsibility. We take reasonable steps to protect
              the information we manage and continuously review
              our systems and processes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["ri-lock-line", "Secure connections"],
                ["ri-shield-check-line", "Access controls"],
                ["ri-eye-off-line", "Privacy focused"],
                ["ri-refresh-line", "Ongoing improvements"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                  "
                >
                  <i className={`${icon} text-lg text-cyan-500`} />

                  <span className="text-sm font-medium text-slate-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              security-card
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
                <i className="ri-shield-keyhole-line text-2xl" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Privacy by design
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                We aim to collect only the information reasonably
                needed to provide our products and services.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Data protection
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Active
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Access controls
                  </span>

                  <span className="text-sm font-semibold text-white">
                    Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / RIGHTS
      ===================================================== */}

      <section
        ref={ctaRef}
        className="px-6 pb-24 sm:px-10 lg:px-16"
      >
        <div
          className="
            privacy-cta-content
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
              Questions about your privacy?
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
              If you have questions about how we handle your
              information or want to make a privacy-related
              request, contact our support team.
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
              Contact Us

              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

 