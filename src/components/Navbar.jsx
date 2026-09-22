import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keep active link updated
  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Check active page
  const isActive = (href) => {
    if (href === "/") {
      return activePath === "/";
    }

    return activePath === href || activePath.startsWith(`${href}/`);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500
        ${
          scrolled
            ? "border-b border-white/10 bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border-b border-white/5 bg-black/60 backdrop-blur-md"
        }
      `}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8">
        {/* ========================================
            LOGO
        ======================================== */}

        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80 sm:text-2xl"
          aria-label="Dreo Home"
        >
          DREO<span className="text-cyan-400">.</span>
        </a>

        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <a
                key={link.name}
                href={link.href}
                className={`
                  group relative py-2
                  text-sm font-medium
                  transition-colors duration-300

                  ${active ? "text-white" : "text-gray-400 hover:text-white"}

                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:rounded-full
                  after:bg-cyan-400
                  after:shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  after:transition-all
                  after:duration-300

                  ${
                    active
                      ? "after:w-full"
                      : "after:w-0 group-hover:after:w-full"
                  }
                `}
              >
                {link.name}

                {/* Active indicator */}
                {active}
              </a>
            );
          })}
        </div>

        {/* ========================================
            DESKTOP ACTIONS
        ======================================== */}

        <div className="hidden items-center gap-1 md:flex">
          {/* User */}.
          <Link to="/login">
            <button
              className="
              rounded-full p-2.5 text-gray-400
              transition-all duration-300
              hover:bg-white/10 hover:text-white
            "
              aria-label="User Account"
            >
              <i className="ri-user-line text-lg" />
            </button>
          </Link>
          {/* Cart */}
          <a
            href="/cart"
            className="
              relative rounded-full p-2.5 text-gray-400
              transition-all duration-300
              hover:bg-white/10 hover:text-white
            "
            aria-label={`Shopping Cart with ${cartCount} items`}
          >
            <i className="ri-shopping-cart-line text-lg" />

            {cartCount > 0 && (
              <span
                className="
                  absolute -right-0.5 -top-0.5
                  flex h-5 min-w-5 items-center justify-center
                  rounded-full bg-cyan-400 px-1
                  text-[10px] font-bold text-slate-950
                  ring-2 ring-black
                "
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </a>
          {/* CTA */}
          <a
            href="/contact"
            className="
              ml-2 rounded-full
              bg-white px-5 py-2.5
              text-xs font-semibold tracking-wide text-black
              transition-all duration-300
              hover:bg-cyan-400
              hover:text-slate-950
              hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            "
          >
            Let's Talk
          </a>
        </div>

        {/* ========================================
            MOBILE MENU BUTTON
        ======================================== */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-white/10
            text-white
            transition-all duration-300
            hover:border-cyan-400/40
            hover:bg-white/10
            md:hidden
          "
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <i
            className={`${
              isOpen ? "ri-close-line" : "ri-menu-line"
            } text-xl transition-transform duration-300`}
          />
        </button>
      </div>

      {/* ========================================
          MOBILE NAVIGATION
      ======================================== */}

      <div
        className={`
          overflow-hidden
          transition-all duration-500
          ease-in-out
          md:hidden

          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="border-t border-white/10 bg-black/95 px-5 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {/* Mobile Links */}
            {navLinks.map((link, i) => {
              const active = isActive(link.href);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    relative flex items-center justify-between
                    rounded-xl px-4 py-3.5
                    text-base font-medium
                    transition-all duration-300

                    ${
                      active
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                  style={{
                    transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    {/* Active dot */}
                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                            : "bg-transparent"
                        }
                      `}
                    />

                    {link.name}
                  </span>

                  {/* Active arrow */}
                  {active && (
                    <i className="ri-arrow-right-s-line text-cyan-400" />
                  )}
                </a>
              );
            })}

            {/* ========================================
                MOBILE CART
            ======================================== */}

            <a
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="
                mt-2 flex items-center justify-between
                rounded-xl border border-white/10
                px-4 py-3.5
                text-gray-300
                transition-all
                hover:border-white/20
                hover:bg-white/5
                hover:text-white
              "
            >
              <div className="flex items-center gap-3">
                <i className="ri-shopping-cart-line text-lg" />

                <span>Shopping Cart</span>
              </div>

              {cartCount > 0 && (
                <span
                  className="
                    flex h-6 min-w-6
                    items-center justify-center
                    rounded-full
                    bg-cyan-400
                    px-1.5
                    text-xs font-bold
                    text-slate-950
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </a>

            {/* ========================================
                MOBILE BOTTOM ACTIONS
            ======================================== */}

            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              {/* Account */}
              <button
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-white/10
                  px-4 py-2.5
                  text-sm text-gray-300
                  transition-all
                  hover:border-white/30
                  hover:text-white
                "
                aria-label="User Account"
              >
                <i className="ri-user-line" />

                <span>Account</span>
              </button>

              {/* Let's Talk */}
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  flex-1
                  rounded-full
                  bg-white
                  px-5 py-2.5
                  text-center
                  text-sm font-semibold
                  text-black
                  transition-all
                  hover:bg-cyan-400
                  hover:text-slate-950
                "
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
