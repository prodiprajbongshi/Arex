import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      )

        .fromTo(
          titleRef.current,
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
          "-=0.25",
        )

        .fromTo(
          contentRef.current.children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5",
        )

        .fromTo(
          bottomRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="
        relative
        overflow-hidden
        bg-[#111315]
        px-6
        pb-8
        pt-24
        text-white
        lg:px-16
        lg:pt-32
      "
    >
      {/* ================================= */}
      {/* Background Glow */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================================= */}
        {/* Big CTA */}
        {/* ================================= */}

        <div className="border-b border-white/10 pb-20 lg:pb-28">
          <span
            ref={labelRef}
            className="
              block
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-white/35
            "
          >
            Cleaner air starts here
          </span>

          <h2
            ref={titleRef}
            className="
              mt-6
              max-w-5xl
              text-[clamp(4rem,10vw,10rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.07em]
            "
          >
            Breathe
            <br />
            <span className="text-white/30 tracking-normal">better.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
             <Link to="/shop">
            <button
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                px-7
                py-4
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#111315]
                transition-all
                duration-300
                hover:gap-6
                hover:bg-gray-400
                cursor-pointer
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
                  bg-black
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <i className="ri-arrow-right-line" />
              </span>
            </button>
            </Link>

            <span className="text-sm text-white/30">
              Intelligent air purification.
            </span>
          </div>
        </div>

        {/* ================================= */}
        {/* Footer Content */}
        {/* ================================= */}

        <div
          ref={contentRef}
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-4
            lg:py-20
          "
        >
          {/* Brand */}

          <div>
            <h3
              className="
                text-4xl
                font-semibold
                tracking-[-0.06em]
              "
            >
              AEROX
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              Advanced air purification designed for cleaner spaces, quieter
              moments and smarter living.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <i className="ri-instagram-line" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <i className="ri-facebook-line" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <i className="ri-youtube-line" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <i className="ri-twitter-x-line" />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              Product
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/45">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  AEROX
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Technology
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Air Quality
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Specifications
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              Support
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/45">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              Stay in the air
            </h4>

            <p className="mt-6 text-sm leading-6 text-white/35">
              Get product updates, air quality insights and news from AEROX.
            </p>

            <div
              className="
                mt-6
                flex
                border-b
                border-white/15
                pb-3
                focus-within:border-white/40
              "
            >
              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                "
              />

              <button
                aria-label="Subscribe"
                className="
                  text-white/40
                  transition-colors
                  hover:text-white
                "
              >
                <i className="ri-arrow-right-line text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* Bottom */}
        {/* ================================= */}

        <div
          ref={bottomRef}
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-6
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/25
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>© 2026 AEROX. All rights reserved.</span>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/60">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-white/60">
              Terms
            </a>

            <a href="#" className="transition-colors hover:text-white/60">
              Cookies
            </a>
          </div>

          <span>Designed for better breathing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
