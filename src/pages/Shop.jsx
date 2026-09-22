import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "DREO Air Purifier Pro",
    category: "Large Room",
    price: 299,
    oldPrice: 349,
    rating: 4.9,
    reviews: 328,
    image: "/images/HeroImage.png",
    badge: "Best Seller",
    description: "High-performance HEPA air purifier designed for large rooms.",
  },
  {
    id: 2,
    name: "DREO Air Purifier Max",
    category: "Large Room",
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    reviews: 214,
    image: "/images/HeroImage.png",
    badge: "Popular",
    description:
      "Powerful purification with intelligent air quality monitoring.",
  },
  {
    id: 3,
    name: "DREO Air Purifier Mini",
    category: "Bedroom",
    price: 179,
    oldPrice: 199,
    rating: 4.7,
    reviews: 186,
    image: "/images/HeroImage.png",
    badge: "New",
    description:
      "Compact and quiet purification for bedrooms and personal spaces.",
  },
  {
    id: 4,
    name: "DREO Smart Air Purifier",
    category: "Smart",
    price: 329,
    oldPrice: 379,
    rating: 4.9,
    reviews: 452,
    image: "/images/HeroImage.png",
    badge: "Smart",
    description: "Smart Wi-Fi air purifier with app and voice control.",
  },
  {
    id: 5,
    name: "DREO PureAir 360",
    category: "Large Room",
    price: 279,
    oldPrice: 319,
    rating: 4.8,
    reviews: 173,
    image: "/images/HeroImage.png",
    badge: "Sale",
    description: "360-degree air intake for fast and efficient purification.",
  },
  {
    id: 6,
    name: "DREO Silent Air",
    category: "Bedroom",
    price: 219,
    oldPrice: 249,
    rating: 4.8,
    reviews: 291,
    image: "/images/HeroImage.png",
    badge: "Quiet",
    description: "Ultra-quiet operation designed for peaceful nighttime use.",
  },
  {
    id: 7,
    name: "DREO Air Monitor",
    category: "Accessories",
    price: 89,
    oldPrice: 109,
    rating: 4.6,
    reviews: 96,
    image: "/images/HeroImage.png",
    badge: "Accessory",
    description: "Real-time indoor air quality monitoring with smart alerts.",
  },
  {
    id: 8,
    name: "DREO Replacement Filter",
    category: "Accessories",
    price: 49,
    oldPrice: 59,
    rating: 4.9,
    reviews: 521,
    image: "/images/filter.png",
    badge: "Essential",
    description:
      "Replacement HEPA filter for selected DREO air purifier models.",
  },
];

const categories = ["All", "Large Room", "Bedroom", "Smart", "Accessories"];

export const Shop = () => {
  const { addToCart, cartItems, cartCount } = useCart();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  // ========================================
  // FILTER PRODUCTS
  // ========================================

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // ========================================
    // SORT
    // ========================================

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
  }, [activeCategory, search, sort]);

  // ========================================
  // GET PRODUCT QUANTITY
  // ========================================

  const getQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);

    return item?.quantity || 0;
  };

  const notify = () =>
    toast("Product added to cart!", {
      icon: <i className="ri-shopping-cart-line"></i>,
      position: "top-right",
      style: {
        background: "#00b8db",
        color: "#ffffff",
        border: "1px solid #334155",
      },
    });

  return (
    <main className="min-h-screen bg-[#f5f7f8] text-slate-900">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="relative overflow-hidden bg-slate-950 pt-32">
        {/* Glow */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
              DREO Air Collection
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Breathe
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Discover intelligent air purification designed to deliver cleaner,
              fresher air throughout your home.
            </p>

            {/* Stats */}
            {/* ========================================
    HERO STATS / TECHNOLOGY SPECS
======================================== */}

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
              {/* ========================================
      FILTRATION
  ======================================== */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] sm:rounded-none sm:border-0 sm:px-6 sm:first:rounded-l-2xl">
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20">
                    <i className="ri-filter-3-line text-lg" />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-bold tracking-tight text-white">
                        99.9
                      </p>

                      <span className="text-lg font-semibold text-cyan-300">
                        %
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      Particle filtration
                    </p>

                    {/* Indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                      <span className="text-[10px] text-slate-500">
                        Advanced purification
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================
      HEPA
  ======================================== */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] sm:rounded-none sm:border-0 sm:px-6">
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-400/20">
                    <i className="ri-shield-check-line text-lg" />
                  </div>

                  <div>
                    <p className="text-3xl font-bold tracking-tight text-white">
                      H13
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      True HEPA
                    </p>

                    {/* Indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

                      <span className="text-[10px] text-slate-500">
                        Multi-layer filter
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================
      AIR INTAKE
  ======================================== */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] sm:rounded-none sm:border-0 sm:px-6 sm:last:rounded-r-2xl">
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20">
                    <i className="ri-windy-line text-lg" />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-bold tracking-tight text-white">
                        360
                      </p>

                      <span className="text-lg font-semibold text-cyan-300">
                        °
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      Air intake
                    </p>

                    {/* Indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                      <span className="text-[10px] text-slate-500">
                        Omnidirectional airflow
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 h-16 w-full rounded-t-[50%] bg-[#f5f7f8]" />
      </section>

      {/* ========================================
          SHOP CONTROLS
      ======================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Search + Sort */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search air purifiers..."
                className="
                  w-full rounded-full
                  border border-slate-200
                  bg-white
                  py-3.5 pl-11 pr-5
                  text-sm
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-400/10
                "
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-slate-500 sm:block">
                Sort by
              </span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                  rounded-full
                  border border-slate-200
                  bg-white
                  px-5 py-3
                  text-sm
                  outline-none
                  focus:border-cyan-400
                "
              >
                <option value="featured">Featured</option>

                <option value="price-low">Price: Low to High</option>

                <option value="price-high">Price: High to Low</option>

                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0 rounded-full px-5 py-2.5
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-slate-950 text-white shadow-lg"
                      : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PRODUCT GRID
      ======================================== */}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Result count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          {cartCount > 0 && (
            <a
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              <i className="ri-shopping-cart-line" />
              {cartCount} item
              {cartCount !== 1 ? "s" : ""} in cart
              <i className="ri-arrow-right-line" />
            </a>
          )}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const quantity = getQuantity(product.id);

              return (
                <article
                  key={product.id}
                  className="
                    group relative overflow-hidden
                    rounded-[1.75rem]
                    border border-slate-200
                    bg-white
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-slate-300
                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                  "
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    {/* Badge */}
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                      {product.badge}
                    </div>

                    {/* Wishlist */}
                    <button
                      className="
                        absolute right-4 top-4 z-10
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        bg-white/90
                        text-slate-500
                        shadow-sm
                        backdrop-blur
                        transition
                        hover:bg-slate-950
                        hover:text-white
                      "
                      aria-label="Add to wishlist"
                    >
                      <i className="ri-heart-line" />
                    </button>

                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full w-full
                        object-contain
                        p-8
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-600">
                      {product.category}
                    </p>

                    {/* Name */}
                    <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-slate-950">
                      {product.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        <i className="ri-star-fill text-sm" />
                        <i className="ri-star-fill text-sm" />
                        <i className="ri-star-fill text-sm" />
                        <i className="ri-star-fill text-sm" />
                        <i className="ri-star-fill text-sm" />
                      </div>

                      <span className="text-xs text-slate-400">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-2xl font-bold text-slate-950">
                        ${product.price}
                      </span>

                      <span className="pb-0.5 text-sm text-slate-400 line-through">
                        ${product.oldPrice}
                      </span>
                    </div>

                    {/* Add To Cart */}
                    <button
                      onClick={() => {
                        notify();
                        addToCart(product);
                      }}
                      className="
                        mt-5 flex w-full
                        items-center justify-center
                        gap-2
                        rounded-xl
                        bg-slate-950
                        px-5 py-3.5
                        text-sm font-semibold
                        text-white
                        transition-all duration-300
                        hover:bg-cyan-500
                        hover:shadow-lg
                      "
                    >
                      <i className="ri-shopping-cart-line text-lg" />

                      {quantity > 0
                        ? `Add More (${quantity} in cart)`
                        : "Add to Cart"}
                    </button>

                    {/* Quantity indicator */}
                    {quantity > 0 && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-cyan-600">
                        <i className="ri-checkbox-circle-fill" />
                        {quantity} {quantity === 1 ? "item" : "items"} already
                        added
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* ========================================
              NO RESULTS
          ======================================== */

          <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <i className="ri-search-line text-2xl text-slate-400" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-950">
              No products found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another search term or choose a different product category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* ========================================
          TECHNOLOGY CTA
      ======================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-32">
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-[#030712]">
          {/* ================= BACKGROUND ================= */}
          <div className="absolute inset-0">
            {/* Main radial glow */}
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

            <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
                backgroundSize: "55px 55px",
              }}
            />

            {/* Large decorative number */}
            <div className="absolute -right-10 top-10 select-none text-[180px] font-black leading-none text-white/[0.02] sm:text-[240px]">
              04
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* ================= LEFT ================= */}
              <div className="relative">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    DREO Technology
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Cleaner air starts
                  <span className="mt-2 block bg-gradient-to-r from-slate-300 via-white to-slate-500 bg-clip-text text-transparent">
                    with better technology.
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
                  Advanced filtration, intelligent sensors and whisper-quiet
                  motors work together to create a healthier indoor environment.
                </p>

                {/* CTA */}
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link  to="/technology"
                    
                    className="
                group/btn
                inline-flex items-center gap-3
                rounded-full
                bg-white
                px-7 py-4
                text-sm font-semibold
                text-slate-950
                shadow-[0_0_35px_rgba(255,255,255,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
              "
                  >
                    Explore Technology
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/10 transition-transform duration-300 group-hover/btn:rotate-45">
                      <i className="ri-arrow-right-up-line text-base" />
                    </span>
                  </Link>

                  <span className="flex items-center gap-2 text-xs text-slate-500">
                    <i className="ri-shield-check-line text-cyan-400" />
                    Engineered for everyday comfort
                  </span>
                </div>

                {/* Technical stats */}
                <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-white/10 py-5">
                  <div className="pr-4">
                    <p className="text-xl font-semibold text-white">360°</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                      Air Intake
                    </p>
                  </div>

                  <div className="border-l border-white/10 px-4">
                    <p className="text-xl font-semibold text-white">H13</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                      HEPA Filter
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="text-xl font-semibold text-white">24/7</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                      Monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT FEATURES ================= */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Card 01 */}
                <div className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]">
                  {/* Glow */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover/card:bg-cyan-400/20" />

                  <span className="absolute right-5 top-5 text-xs font-medium tracking-widest text-white/20">
                    01
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-cyan-400/15">
                    <i className="ri-filter-3-line text-2xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Filtration
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      HEPA Filtration
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Multi-layer filtration captures airborne particles and
                      helps deliver cleaner indoor air.
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="relative mt-6 flex items-center gap-2">
                    <span className="h-1 w-10 rounded-full bg-cyan-400" />
                    <span className="h-1 w-4 rounded-full bg-cyan-400/20" />
                    <span className="h-1 w-4 rounded-full bg-cyan-400/20" />
                  </div>
                </div>

                {/* Card 02 */}
                <div className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.06]">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover/card:bg-blue-400/20" />

                  <span className="absolute right-5 top-5 text-xs font-medium tracking-widest text-white/20">
                    02
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300 transition-all duration-500 group-hover/card:scale-110">
                    <i className="ri-radar-line text-2xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Intelligence
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Smart Sensors
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Continuously monitors indoor air conditions and adapts
                      purification automatically.
                    </p>
                  </div>

                  {/* Radar visual */}
                  <div className="relative mt-6 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">
                      Live monitoring
                    </span>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.06]">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl transition-all duration-500 group-hover/card:bg-violet-400/20" />

                  <span className="absolute right-5 top-5 text-xs font-medium tracking-widest text-white/20">
                    03
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300 transition-all duration-500 group-hover/card:scale-110">
                    <i className="ri-volume-mute-line text-2xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                      Acoustics
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Whisper Quiet
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Powerful purification engineered to operate quietly
                      without distracting from your environment.
                    </p>
                  </div>

                  {/* Sound bars */}
                  <div className="mt-6 flex h-5 items-end gap-1">
                    <span className="h-2 w-1 rounded-full bg-violet-400/40" />
                    <span className="h-4 w-1 rounded-full bg-violet-400/60" />
                    <span className="h-3 w-1 rounded-full bg-violet-400/50" />
                    <span className="h-5 w-1 rounded-full bg-violet-400/80" />
                    <span className="h-2 w-1 rounded-full bg-violet-400/40" />
                    <span className="h-3 w-1 rounded-full bg-violet-400/50" />
                  </div>
                </div>

                {/* Card 04 */}
                <div className="group/card relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.10] via-white/[0.035] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/15 blur-3xl transition-all duration-500 group-hover/card:bg-cyan-300/25" />

                  <span className="absolute right-5 top-5 text-xs font-medium tracking-widest text-cyan-300/40">
                    04
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition-all duration-500 group-hover/card:scale-110">
                    <i className="ri-wifi-line text-2xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Connectivity
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Smart Control
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Control your purifier remotely and stay connected to your
                      indoor air from anywhere.
                    </p>
                  </div>

                  {/* Connection indicator */}
                  <div className="relative mt-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">
                      Connected
                    </span>

                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                      <span className="text-[10px] font-medium text-emerald-400">
                        ONLINE
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= BOTTOM TECH BAR ================= */}
            <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                  <i className="ri-cpu-line text-sm text-cyan-300" />
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Intelligent Air System
                  </p>

                  <p className="mt-0.5 text-xs text-slate-300">
                    Engineered for cleaner everyday living
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-slate-500">
                <span>Advanced</span>
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Connected</span>
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Quiet</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
