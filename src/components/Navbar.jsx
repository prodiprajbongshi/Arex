import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500
        ${scrolled
          ? "border-b border-white/10 bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-white/5 bg-black/60 backdrop-blur-md"
        }
      `}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80 sm:text-2xl"
          aria-label="Dreo Home"
        >
          DREO<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative text-sm font-medium text-gray-400
                transition-colors duration-300 hover:text-white
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                after:bg-white after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-1 md:flex">
          {/* User Icon */}
          <button
            className="rounded-full p-2.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
            aria-label="User Account"
          >
            <i className="ri-user-line text-lg" />
          </button>

          {/* Cart Icon */}
          <button
            className="relative rounded-full p-2.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
            aria-label="Shopping Cart"
          >
            <i className="ri-shopping-cart-line text-lg" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-semibold text-white">
              2
            </span>
          </button>

          {/* CTA */}
          <a
            href="/contact"
            className="
              ml-2 rounded-full bg-white px-5 py-2.5
              text-xs font-semibold tracking-wide text-black
              transition-all duration-300 hover:bg-blue-400 hover:text-white
            "
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-white/10 text-white
            transition-all duration-300 hover:border-white/30 hover:bg-white/10
            md:hidden
          "
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <i className={`${isOpen ? "ri-close-line" : "ri-menu-line"} text-xl transition-transform duration-300`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="border-t border-white/10 bg-black/95 px-5 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-lg px-4 py-3 text-base font-medium text-gray-300
                  transition-all duration-200 hover:bg-white/5 hover:text-white
                "
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              <button
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition-all hover:border-white/30 hover:text-white"
                aria-label="User Account"
              >
                <i className="ri-user-line" />
                <span>Account</span>
              </button>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-black transition-all hover:bg-blue-400 hover:text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
