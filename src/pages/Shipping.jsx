import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const shippingMethods = [
  {
    icon: "ri-truck-line",
    title: "Standard Delivery",
    time: "3–5 Business Days",
    price: "Free",
    description:
      "Reliable doorstep delivery for most orders within our standard delivery network.",
  },
  {
    icon: "ri-flashlight-line",
    title: "Express Delivery",
    time: "1–2 Business Days",
    price: "From $15",
    description:
      "Need your purifier sooner? Choose express delivery at checkout where available.",
  },
  {
    icon: "ri-store-2-line",
    title: "Local Pickup",
    time: "Same Day",
    price: "Free",
    description:
      "Collect your order from an available pickup location when this option is offered.",
  },
];

const deliverySteps = [
  {
    number: "01",
    icon: "ri-shopping-bag-3-line",
    title: "Order Confirmed",
    description:
      "Once your payment is confirmed, we'll prepare your order for shipment.",
  },
  {
    number: "02",
    icon: "ri-box-3-line",
    title: "Packed With Care",
    description:
      "Your product is securely packed and handed over to our delivery partner.",
  },
  {
    number: "03",
    icon: "ri-truck-line",
    title: "On The Way",
    description:
      "You'll receive tracking information once your package leaves our facility.",
  },
  {
    number: "04",
    icon: "ri-home-smile-2-line",
    title: "Delivered",
    description:
      "Your order arrives safely at the delivery address provided during checkout.",
  },
];

export const Shipping = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const truckRef = useRef(null);
 
  const processRef = useRef(null);
  const zonesRef = useRef(null);
  const trackingRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        /* ========================================
           HERO
        ======================================== */

        const heroTl = gsap.timeline();

        heroTl
          .from(".shipping-label", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .from(
            ".shipping-title",
            {
              y: 80,
              opacity: 0,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.3"
          )
          .from(
            ".shipping-description",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".shipping-hero-button",
            {
              y: 25,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            ".shipping-hero-stat",
            {
              y: 25,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3"
          );

        /* Hero parallax */

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

        /* Truck floating */

        gsap.to(truckRef.current, {
          y: -20,
          rotate: 1,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        /* Truck scroll */

        gsap.to(truckRef.current, {
          x: 100,
          y: 120,
          scale: 0.8,
          rotate: -5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

 

        /* ========================================
           PROCESS
        ======================================== */

        gsap.from(".delivery-step", {
          y: 70,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%",
            once: true,
          },
        });

        /* Timeline line */

        gsap.from(".delivery-line-fill", {
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

        /* ========================================
           DELIVERY ZONES
        ======================================== */

        gsap.from(".shipping-zone", {
          x: -50,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: zonesRef.current,
            start: "top 75%",
            once: true,
          },
        });

        /* ========================================
           TRACKING
        ======================================== */

        gsap.from(".tracking-content", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trackingRef.current,
            start: "top 75%",
            once: true,
          },
        });

        /* ========================================
           CTA
        ======================================== */

        gsap.from(".shipping-cta-content", {
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
            top-10
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
            <div className="shipping-label mb-6 flex items-center gap-3">
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
                Shipping & Delivery
              </span>
            </div>

            <h1
              className="
                shipping-title
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
              From our door
              <br />
              <span className="text-slate-500">
                to yours.
              </span>
            </h1>

            <p
              className="
                shipping-description
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              We make getting cleaner air to your home simple.
              Explore our delivery options, estimated shipping
              times, and everything you need to know about your
              order.
            </p>

            <a
              href="/shop"
              className="
                shipping-hero-button
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
              Shop Air Purifiers

              <i className="ri-arrow-right-up-line text-lg" />
            </a>

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-8
                border-t
                border-white/10
                pt-8
              "
            >
              <div className="shipping-hero-stat">
                <p className="text-2xl font-semibold text-white">
                  3–5
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Standard Days
                </p>
              </div>

              <div className="shipping-hero-stat">
                <p className="text-2xl font-semibold text-white">
                  Free
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Over $300
                </p>
              </div>

              <div className="shipping-hero-stat">
                <p className="text-2xl font-semibold text-white">
                  24/7
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Order Tracking
                </p>
              </div>
            </div>
          </div>

          {/* Delivery visual */}

          <div className="relative hidden h-[430px] lg:block">
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

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div
                ref={truckRef}
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
                    ri-truck-line
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
                  On the move
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SHIPPING METHODS
      ===================================================== */}

      <section
         
        className="
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                Delivery Options
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose how your order arrives.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Select the delivery option that works best for your
              schedule. Available options may vary by location.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {shippingMethods.map((method) => (
              <div
                key={method.title}
                className="
                  shipping-method-card
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-200
                  hover:shadow-[0_25px_70px_rgba(8,145,178,0.10)]
                  sm:p-8
                "
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-100
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
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
                      bg-slate-950
                      text-cyan-300
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-cyan-500
                      group-hover:text-white
                    "
                  >
                    <i className={`${method.icon} text-2xl`} />
                  </div>

                  <div className="mt-8 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {method.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-cyan-600">
                        {method.time}
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        text-slate-600
                      "
                    >
                      {method.price}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {method.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-slate-100">
                    <div className="h-full w-1/3 bg-cyan-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY PROCESS
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
                How It Works
              </span>

              <span className="h-px w-8 bg-cyan-500" />
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Your order, step by step.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              From confirmation to doorstep, here's what happens
              after you place your order.
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Desktop line */}

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-slate-200 md:block">
              <div className="delivery-line-fill h-full w-full bg-cyan-400" />
            </div>

            {deliverySteps.map((step) => (
              <div
                key={step.number}
                className="
                  delivery-step
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
          DELIVERY ZONES
      ===================================================== */}

      <section
        ref={zonesRef}
        className="
          px-6
          py-24
          sm:px-10
          sm:py-32
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-500" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Delivery Coverage
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Where we deliver.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
                Delivery availability, estimated arrival times,
                and shipping fees depend on your location and
                the product selected.
              </p>

              <a
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-950
                  transition-colors
                  hover:text-cyan-600
                "
              >
                Check your delivery area

                <i className="ri-arrow-right-line" />
              </a>
            </div>

            <div className="space-y-3">
              {[
                ["Major Cities", "1–3 business days"],
                ["Metro Areas", "2–4 business days"],
                ["Regional Areas", "3–5 business days"],
                ["Remote Locations", "5–8 business days"],
              ].map(([area, time], index) => (
                <div
                  key={area}
                  className="
                    shipping-zone
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:border-cyan-200
                    hover:bg-cyan-50/30
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-100
                        text-sm
                        font-bold
                        text-slate-500
                        transition-colors
                        group-hover:bg-cyan-100
                        group-hover:text-cyan-600
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold text-slate-900">
                      {area}
                    </span>
                  </div>

                  <span className="text-sm text-slate-500">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRACKING
      ===================================================== */}

      <section
        ref={trackingRef}
        className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-16"
      >
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2.5rem]
            bg-slate-950
            px-8
            py-14
            sm:px-12
            lg:px-20
            lg:py-16
          "
        >
          <div
            className="
              tracking-content
              grid
              gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <i className="ri-map-pin-time-line text-xl text-cyan-300" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Order Tracking
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Know where your order is.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Once your order ships, we'll send tracking
                information so you can follow its journey from
                our facility to your doorstep.
              </p>
            </div>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400
                hover:text-slate-950
              "
            >
              Track Your Order

              <i className="ri-arrow-right-up-line text-lg" />
            </a>
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
            shipping-cta-content
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
            Ready for cleaner air?
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-tight
              sm:text-6xl
            "
          >
            Find your perfect purifier.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
            Explore our collection and bring smarter, cleaner air
            into your home.
          </p>

          <a
            href="/shop"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-slate-950
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-slate-950
              hover:shadow-[0_20px_50px_rgba(8,145,178,0.18)]
            "
          >
            Explore Products

            <i className="ri-arrow-right-up-line text-lg" />
          </a>
        </div>
      </section>
    </main>
  );
};

 