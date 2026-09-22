import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: 1,
    name: "AEROX Air Purifier",
    category: "Air Purifiers",
    price: 299,
    oldPrice: 349,
    rating: 4.9,
    reviews: 2400,
    image: "/images/HeroImage.png",
    badge: "Best Seller",
    description:
      "Premium HEPA H14 purification with smart monitoring and 360° air intake.",
    features: ["HEPA H14", "Wi-Fi", "360° Intake"],
  },
  {
    id: 2,
    name: "AEROX Mini",
    category: "Air Purifiers",
    price: 179,
    oldPrice: 219,
    rating: 4.8,
    reviews: 1280,
    image: "/images/HeroImage.png",
    badge: "Popular",
    description:
      "Compact smart air purification designed for bedrooms and smaller spaces.",
    features: ["HEPA H13", "Sleep Mode", "Smart Sensor"],
  },
  {
    id: 3,
    name: "AEROX Pro Max",
    category: "Air Purifiers",
    price: 449,
    oldPrice: 499,
    rating: 5.0,
    reviews: 870,
    image: "/images/HeroImage.png",
    badge: "Premium",
    description:
      "Maximum purification performance for large rooms and modern living spaces.",
    features: ["HEPA H14", "PM2.5 Monitor", "Voice Control"],
  },
  {
    id: 4,
    name: "AEROX Smart Sensor",
    category: "Accessories",
    price: 79,
    oldPrice: 99,
    rating: 4.7,
    reviews: 640,
    image: "/images/HeroImage.png",
    badge: "New",
    description:
      "Monitor indoor air quality in real time with intelligent environmental sensing.",
    features: ["PM2.5", "Temperature", "Humidity"],
  },
  {
    id: 5,
    name: "HEPA H14 Replacement Filter",
    category: "Filters",
    price: 59,
    oldPrice: 69,
    rating: 4.9,
    reviews: 1900,
    image: "/images/HeroImage.png",
    badge: "Essential",
    description:
      "Official high-efficiency replacement filter for long-lasting clean air.",
    features: ["H14 HEPA", "Easy Replace", "Long Life"],
  },
  {
    id: 6,
    name: "AEROX Filter Pack",
    category: "Filters",
    price: 99,
    oldPrice: 119,
    rating: 4.8,
    reviews: 760,
    image: "/images/HeroImage.png",
    badge: "Value Pack",
    description:
      "Multi-filter replacement pack for extended air purification performance.",
    features: ["2 Filters", "H14", "Value Pack"],
  },
];

export const Shop = () => {
  const mainRef = useRef(null);
  const productsRef = useRef([]);

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("airflow-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("airflow-cart", JSON.stringify(cart));
  }, [cart]);

  const categories = ["All", "Air Purifiers", "Filters", "Accessories"];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sort, search]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useGSAP(
    () => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".shop-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".shop-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".shop-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".shop-controls",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      gsap.from(".shop-product-card", {
        y: 70,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: mainRef,
    }
  );

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-[#f7f9fc] text-slate-900"
    >
      {/* =========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden bg-[#07111f] px-6 pb-20 pt-32 text-white md:px-12 lg:px-20">
        {/* Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="shop-eyebrow mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              AIRFLOW STORE
            </p>

            <h1 className="shop-title text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Cleaner air.
              <br />
              <span className="text-cyan-400">
                Better living.
              </span>
            </h1>

            <p className="shop-description mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Explore our collection of intelligent air purifiers,
              high-performance filters and smart accessories designed
              for modern homes.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SHOP CONTROLS
      ========================== */}

      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur-xl md:px-10">
        <div className="shop-controls mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === item
                    ? "bg-slate-950 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:w-64"
              />
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none focus:border-cyan-400"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
            >
              <i className="ri-shopping-bag-3-line text-lg" />
              Cart

              {cartCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-xs font-bold text-slate-950">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          PRODUCTS
      ========================== */}

      <section className="px-5 py-16 md:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
                SHOP COLLECTION
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Find your perfect purifier.
              </h2>
            </div>

            <p className="hidden text-sm text-slate-500 md:block">
              {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">
              <i className="ri-search-line text-5xl text-slate-300" />

              <h3 className="mt-5 text-2xl font-bold">
                No products found
              </h3>

              <p className="mt-2 text-slate-500">
                Try another search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="products-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.id}
                  ref={(element) => {
                    productsRef.current[index] = element;
                  }}
                  className="shop-product-card group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-cyan-50">
                    {/* Glow */}
                    <div className="absolute h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl transition duration-700 group-hover:scale-150" />

                    {/* Badge */}
                    <span className="absolute left-5 top-5 z-10 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      {product.badge}
                    </span>

                    {/* Wishlist */}
                    <button
                      className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-950 hover:text-white"
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      <i className="ri-heart-3-line" />
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 h-[280px] w-auto object-contain transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
                        {product.category}
                      </span>

                      <div className="flex items-center gap-1 text-sm">
                        <i className="ri-star-fill text-amber-400" />
                        <span className="font-semibold">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">
                            ${product.price}
                          </span>

                          <span className="text-sm text-slate-400 line-through">
                            ${product.oldPrice}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-400">
                          Free shipping included
                        </p>
                      </div>

                      <span className="text-xs font-medium text-slate-400">
                        {product.reviews.toLocaleString()} reviews
                      </span>
                    </div>

                    {/* Add */}
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-500 hover:text-slate-950"
                    >
                      <i className="ri-shopping-cart-2-line text-lg" />
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================
          BENEFITS
      ========================== */}

      <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
              <i className="ri-truck-line" />
            </div>

            <div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Fast and free delivery on every purifier.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
              <i className="ri-shield-check-line" />
            </div>

            <div>
              <h3 className="font-bold">2-Year Warranty</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Every AEROX purifier is protected by our warranty.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-500">
              <i className="ri-refresh-line" />
            </div>

            <div>
              <h3 className="font-bold">30-Day Returns</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Shop confidently with our easy return policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CART OVERLAY
      ========================== */}

      {cartOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <button
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500">
                  AIRFLOW
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Your Cart
                </h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-slate-950 hover:text-white"
              >
                <i className="ri-close-line" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                    <i className="ri-shopping-bag-3-line text-3xl text-slate-400" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Add a product to get started.
                  </p>

                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-auto object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold">
                            {item.name}
                          </h3>

                          <p className="mt-1 font-semibold text-cyan-500">
                            ${item.price}
                          </p>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center overflow-hidden rounded-full border border-slate-200">
                              <button
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                className="flex h-8 w-8 items-center justify-center hover:bg-slate-100"
                              >
                                <i className="ri-subtract-line" />
                              </button>

                              <span className="w-8 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="flex h-8 w-8 items-center justify-center hover:bg-slate-100"
                              >
                                <i className="ri-add-line" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-sm font-medium text-red-500 hover:text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-slate-500">
                    Subtotal
                  </span>

                  <span className="text-2xl font-bold">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <p className="mb-5 text-xs text-slate-400">
                  Taxes and shipping calculated at checkout.
                </p>

                <button
                  onClick={() => {
                    alert(
                      "Checkout functionality can be connected to Stripe, PayPal, or your own backend."
                    );
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-cyan-500 hover:text-slate-950"
                >
                  Proceed to Checkout
                  <i className="ri-arrow-right-line" />
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
};

 