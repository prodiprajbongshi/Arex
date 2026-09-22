import  { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    category: "General",
    question: "What makes DREO air purifiers different?",
    answer:
      "DREO air purifiers combine high-efficiency filtration, 360° air intake, smart air-quality monitoring, and quiet operation. The system continuously monitors the air and adjusts purification based on the surrounding environment.",
  },
  {
    category: "General",
    question: "Which room size is suitable for your air purifiers?",
    answer:
      "Our air purifiers are designed for different room sizes, from bedrooms and offices to large living spaces. Check the coverage specification of each model to choose the right purifier for your room.",
  },
  {
    category: "Filtration",
    question: "What type of filter does the air purifier use?",
    answer:
      "The purification system uses multiple filtration stages, including a pre-filter, high-efficiency HEPA filtration, and an activated carbon layer to help capture particles, dust, pollen, smoke, and unwanted odors.",
  },
  {
    category: "Filtration",
    question: "How often should I replace the filter?",
    answer:
      "Filter life depends on usage and air quality. Under typical conditions, a filter can last several months. The smart monitoring system can notify you when the filter needs attention or replacement.",
  },
  {
    category: "Performance",
    question: "How noisy is the air purifier?",
    answer:
      "The purifier is engineered for quiet operation, making it suitable for bedrooms, workspaces, and other areas where low noise is important. You can also use a dedicated sleep or quiet mode.",
  },
  {
    category: "Performance",
    question: "Does it automatically adjust purification?",
    answer:
      "Yes. In Auto Mode, the purifier monitors air quality and dynamically adjusts fan speed according to detected conditions.",
  },
  {
    category: "Smart",
    question: "Can I control the purifier from my phone?",
    answer:
      "Compatible models can connect to a mobile application, allowing you to monitor air quality, change operating modes, adjust settings, and receive notifications from your smartphone.",
  },
  {
    category: "Smart",
    question: "Does it support voice assistants?",
    answer:
      "Selected smart models can integrate with supported voice assistants, allowing you to control basic purifier functions using voice commands.",
  },
  {
    category: "Maintenance",
    question: "How do I clean the air purifier?",
    answer:
      "Regularly clean the exterior and air intake areas using a soft, dry or slightly damp cloth. Follow the product manual for filter maintenance and replacement instructions.",
  },
  {
    category: "Maintenance",
    question: "Can I wash the HEPA filter?",
    answer:
      "HEPA filters are generally not designed to be washed. Washing can damage the filtration material. Replace the filter according to the maintenance instructions for your specific model.",
  },
];

const categories = ["All", "General", "Filtration", "Performance", "Smart", "Maintenance"];

export const Faq = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroOrbRef = useRef(null);
  const faqSectionRef = useRef(null);
  const faqListRef = useRef(null);
  const ctaRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        /* --------------------------------
           HERO INTRO
        -------------------------------- */

        const heroTl = gsap.timeline();

        heroTl
          .from(".faq-hero-label", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          })
          .from(
            ".faq-hero-title",
            {
              y: 70,
              opacity: 0,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.4"
          )
          .from(
            ".faq-hero-description",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.55"
          )
          .from(
            ".faq-hero-stats",
            {
              y: 30,
              opacity: 0,
              stagger: 0.12,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          );

        /* --------------------------------
           HERO PARALLAX
        -------------------------------- */

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

        gsap.to(heroOrbRef.current, {
          y: 180,
          x: 80,
          scale: 1.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        /* --------------------------------
           SECTION REVEAL
        -------------------------------- */

        gsap.from(".faq-section-heading", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: "top 78%",
            once: true,
          },
        });

        /* --------------------------------
           FAQ CARDS
        -------------------------------- */

        gsap.from(".faq-item", {
          y: 70,
          opacity: 0,
          scale: 0.97,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqListRef.current,
            start: "top 78%",
            once: true,
          },
        });

        /* --------------------------------
           CTA
        -------------------------------- */

        gsap.from(".faq-cta-content", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            once: true,
          },
        });

        /* --------------------------------
           FLOATING ORB
        -------------------------------- */

        gsap.to(".faq-floating-orb", {
          y: -25,
          x: 15,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, pageRef);

      return () => ctx.revert();
    },
    { scope: pageRef }
  );

  /* --------------------------------
     ACCORDION
  -------------------------------- */

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-white text-slate-950"
    >
      {/* ==========================================
          HERO
      ========================================== */}

      <section
        ref={heroRef}
        className="
          relative
          flex
          min-h-[650px]
          items-center
          overflow-hidden
          bg-slate-950
          px-6
          py-32
          sm:px-10
          lg:min-h-[720px]
          lg:px-16
        "
      >
        {/* Background grid */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Cyan glow */}

        <div
          ref={heroOrbRef}
          className="
            faq-floating-orb
            absolute
            -right-40
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/20
            blur-[120px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[100px]
          "
        />

        {/* Hero content */}

        <div
          ref={heroContentRef}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
          "
        >
          <div className="max-w-4xl">
            <div
              className="
                faq-hero-label
                mb-6
                flex
                items-center
                gap-3
              "
            >
              

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300
                "
              >
                Support Center
              </span>
            </div>

            <h1
              className="
                faq-hero-title
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
              Questions?
              <br />

              <span className="text-slate-500">
                We've got answers.
              </span>
            </h1>

            <p
              className="
                faq-hero-description
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              Everything you need to know about air purification,
              filtration, smart features, maintenance, and getting
              the most from your DREO air purifier.
            </p>

            {/* Stats */}

            <div
              className="
                faq-hero-stats
                mt-12
                flex
                flex-wrap
                gap-8
                border-t
                border-white/10
                pt-8
              "
            >
              <div>
                <p className="text-2xl font-semibold text-white">
                  10+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Common Questions
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  24/7
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Smart Monitoring
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  360°
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Air Intake
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-slate-500
            sm:flex
          "
        >
          <span>Explore</span>

          <div className="h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
      ========================================== */}

      <section
        ref={faqSectionRef}
        className="
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
        <div className="mx-auto max-w-5xl">
          {/* Heading */}

          <div className="faq-section-heading mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Frequently Asked Questions
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                tracking-tight
                text-slate-950
                sm:text-5xl
              "
            >
              Everything you need to know.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              Browse our most common questions about performance,
              maintenance, filtration, and smart features.
            </p>
          </div>

          {/* Category filter */}

          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(null);
                }}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? "border-slate-950 bg-slate-950 text-white shadow-lg"
                      : "border-slate-200 bg-white text-slate-500 hover:border-cyan-300 hover:text-cyan-600"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ list */}

          <div
            ref={faqListRef}
            className="space-y-4"
          >
            {filteredFaqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={`${activeCategory}-${faq.question}`}
                  className={`
                    faq-item
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    bg-white
                    transition-all
                    duration-500
                    ${
                      isOpen
                        ? "border-cyan-200 shadow-[0_20px_60px_rgba(8,145,178,0.10)]"
                        : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                    }
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-6
                      text-left
                      sm:px-8
                    "
                  >
                    <div className="flex items-start gap-5">
                      {/* Number */}

                      <span
                        className={`
                          mt-0.5
                          hidden
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-xs
                          font-bold
                          transition-all
                          duration-300
                          sm:flex
                          ${
                            isOpen
                              ? "bg-cyan-500 text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <span
                          className="
                            mb-2
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-cyan-600
                          "
                        >
                          {faq.category}
                        </span>

                        <h3
                          className={`
                            text-base
                            font-semibold
                            transition-colors
                            duration-300
                            sm:text-lg
                            ${
                              isOpen
                                ? "text-cyan-700"
                                : "text-slate-900"
                            }
                          `}
                        >
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Icon */}

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? "rotate-180 bg-cyan-500 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                        }
                      `}
                    >
                      <i className="ri-arrow-down-s-line text-xl" />
                    </span>
                  </button>

                  {/* Answer */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-6 pb-7 pt-5 sm:pl-[6.5rem] sm:pr-10">
                        <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                          {faq.answer}
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                          <span className="text-xs font-medium text-slate-400">
                            DREO Technology
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className={`
                      h-0.5
                      origin-left
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      transition-transform
                      duration-500
                      ${
                        isOpen
                          ? "scale-x-100"
                          : "scale-x-0"
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA
      ========================================== */}

      <section
        ref={ctaRef}
        className="
          px-6
          pb-24
          sm:px-10
          lg:px-16
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2.5rem]
            bg-slate-950
            px-8
            py-16
            sm:px-12
            lg:px-20
            lg:py-20
          "
        >
          {/* Glow */}

          <div
            className="
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

          <div
            className="
              faq-cta-content
              relative
              z-10
              flex
              flex-col
              justify-between
              gap-10
              lg:flex-row
              lg:items-center
            "
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Still have questions?
              </span>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Let's find the right solution for your air.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Our team is ready to help you choose the right
                purifier for your home and understand how to get
                the most from your device.
              </p>
            </div>

            <a
              href="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
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
              Contact Support

              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

 