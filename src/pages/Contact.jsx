import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const mainRef = useRef(null);

  const heroRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  const contentRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactCardsRef = useRef([]);
  const socialRef = useRef(null);

  const formWrapperRef = useRef(null);
  const formRef = useRef(null);
  const formItemsRef = useRef([]);

  const ctaRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaButtonRef = useRef(null);

 

  const addFormItem = (el) => {
    if (el && !formItemsRef.current.includes(el)) {
      formItemsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      /*
      |--------------------------------------------------------------------------
      | HERO INTRO
      |--------------------------------------------------------------------------
      */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(heroBadgeRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          heroTitleRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.4",
        )
        .from(
          heroTextRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6",
        );

      /*
      |--------------------------------------------------------------------------
      | HERO BACKGROUND GLOW
      |--------------------------------------------------------------------------
      */

      const heroGlows = heroRef.current.querySelectorAll(".hero-glow");

      gsap.to(heroGlows[0], {
        x: 100,
        y: 80,
        scale: 1.15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroGlows[1], {
        x: -100,
        y: -60,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      |--------------------------------------------------------------------------
      | HERO SCROLL PARALLAX
      |--------------------------------------------------------------------------
      */

      gsap.to(heroTitleRef.current, {
        y: 100,
        opacity: 0.2,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(heroTextRef.current, {
        y: 70,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "80% top",
          scrub: 1.2,
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CONTACT CONTENT
      |--------------------------------------------------------------------------
      */

      gsap.from(contactInfoRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CONTACT CARDS
      |--------------------------------------------------------------------------
      */

      gsap.from(contactCardsRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: contactCardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | SOCIAL ICONS
      |--------------------------------------------------------------------------
      */

      gsap.from(socialRef.current.children, {
        y: 30,
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | FORM CARD
      |--------------------------------------------------------------------------
      */

      gsap.from(formWrapperRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: formWrapperRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | FORM FIELDS
      |--------------------------------------------------------------------------
      */

      gsap.from(formItemsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",

        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CTA
      |--------------------------------------------------------------------------
      */

      gsap.from(ctaRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.96,
        duration: 1,

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CTA CONTENT
      |--------------------------------------------------------------------------
      */

      gsap.from(ctaContentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CTA BUTTON
      |--------------------------------------------------------------------------
      */

      gsap.from(ctaButtonRef.current, {
        x: 60,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | CTA BACKGROUND GLOW
      |--------------------------------------------------------------------------
      */

      const ctaGlow = ctaRef.current.querySelector(".cta-glow");

      gsap.to(ctaGlow, {
        x: -80,
        y: 60,
        scale: 1.25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      |--------------------------------------------------------------------------
      | REFRESH SCROLLTRIGGER
      |--------------------------------------------------------------------------
      */

      ScrollTrigger.refresh();
    },
    {
      scope: mainRef,
    },
  );

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-[#f5f7f8] text-slate-900 overflow-hidden"
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section ref={heroRef} className="relative overflow-hidden bg-slate-950">
        {/* Background Glow */}

        <div className="hero-glow absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="hero-glow absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}

            <div
              ref={heroBadgeRef}
              className="mb-6 inline-flex items-center gap-2 rounded-full text-cyan-300 "
            >
              We're here to help
            </div>

            {/* Heading */}

            <h1
              ref={heroTitleRef}
              className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Let's talk about
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                cleaner air.
              </span>
            </h1>

            {/* Description */}

            <p
              ref={heroTextRef}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Have a question about our air purifiers, technology, orders, or
              support? Send us a message and our team will get back to you.
            </p>
          </div>
        </div>

        {/* Bottom Curve */}

        <div className="absolute bottom-0 left-0 h-16 w-full rounded-t-[50%] bg-[#f5f7f8]" />
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}

      <section
        ref={contentRef}
        className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div ref={contactInfoRef}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Contact us
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              We’re ready to
              <span className="block text-slate-400">hear from you.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              Whether you need help choosing the right purifier or need
              assistance with an existing product, we're only a message away.
            </p>

            {/* Contact Information */}

            <div className="mt-10 space-y-5">
              {/* Email */}

              <div
                
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xl text-[#a9aaab]">
                  <i className="ri-mail-line" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <p className="mt-1 font-medium text-slate-900">
                    support@airflow.com
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div
                
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xl text-[#a9aaab]">
                  <i className="ri-phone-line" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>

                  <p className="mt-1 font-medium text-slate-900">
                    +1 (800) 555-0123
                  </p>
                </div>
              </div>

              {/* Location */}

              <div
               
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xl text-[#a9aaab]">
                  <i className="ri-map-pin-line" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Headquarters</p>

                  <p className="mt-1 font-medium text-slate-900">
                    1200 Innovation Drive
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div ref={socialRef} className="mt-10">
              <p className="text-sm font-medium text-slate-500">
                Follow our journey
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  <i className="ri-instagram-line" />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  <i className="ri-facebook-fill" />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  <i className="ri-twitter-x-line" />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  <i className="ri-youtube-line" />
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <div ref={formWrapperRef} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-950">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form below and we'll respond as soon as possible.
                </p>
              </div>

              <form ref={formRef} className="space-y-6">
                {/* Name + Email */}

                <div ref={addFormItem} className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>

                    <input
                      required
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      required
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
                    />
                  </div>
                </div>

                {/* Subject */}

                <div ref={addFormItem}>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>

                  <select
                    required
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
                  >
                    <option value="" disabled>
                      Select a subject 
                    </option>

                    <option value="general">General inquiry</option>

                    <option value="support">Product support</option>

                    <option value="order">Order & delivery</option>

                    <option value="warranty">Warranty</option>

                    <option value="business">Business inquiry</option>
                  </select>
                </div>

                {/* Message */}

                <div ref={addFormItem}>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    required
                    id="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Checkbox */}

                <label
                  ref={addFormItem}
                  className="flex cursor-pointer items-start gap-3"
                >
                  <input
                    required
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
                  />

                  <span className="text-sm leading-6 text-slate-500">
                    I agree to receive a response regarding my inquiry.
                  </span>
                </label>

                {/* Submit */}

                <div ref={addFormItem}>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
                  >
                    Send message
                    <i className="ri-arrow-right-up-line text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT CTA
      ========================================================= */}

      <section
        ref={ctaRef}
        className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="cta-glow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />

          <div
            ref={ctaContentRef}
            className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Need quick help?
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Breathe easier.
                <span className="block text-slate-400">
                  We've got you covered.
                </span>
              </h2>
            </div>

            <button
              ref={ctaButtonRef}
              className="group flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-7 py-4 font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:self-center"
            >
              Visit Support Center
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
