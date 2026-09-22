import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

export const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const imageRef = useRef(null);
  const thumbnailsRef = useRef([]);

  // ============================================
  // Product Images
  // ============================================

  const images = [
  
    {
      src: "/images/productImage2.jpg",
           title: "AEROX",

      label: "Side View",
    },
      {
      src: "/images/productImage1.jpg",
      title: "Powerful Airflow",
      label: "Main View",
    },
    {
      src: "/images/productImage3.jpg",
      title: "Minimal Design",
      label: "Performance",
    },
    {
      src: "/images/productImage4.jpg",
      title: "Smart Sensor",
      label: "Technology",
    },
  ];

  // ============================================
  // GSAP Image Animation
  // ============================================

  useGSAP(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.08,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, [activeImage]);

  // ============================================
  // Change Image
  // ============================================

  const changeImage = (index) => {
    if (index === activeImage) return;

    setActiveImage(index);
  };

  // ============================================
  // Next Image
  // ============================================

  const nextImage = () => {
    setActiveImage((prev) => {
      return (prev + 1) % images.length;
    });
  };

  // ============================================
  // Previous Image
  // ============================================

  const previousImage = () => {
    setActiveImage((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f3f4f6]
        px-6
        py-24
        text-[#111315]
        lg:px-16
        lg:py-32
      "
    >
      {/* ========================================= */}
      {/* Background Glow */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/[0.035]
          blur-[120px]
          lg:h-[800px]
          lg:w-[800px]
        "
      />

      {/* ========================================= */}
      {/* Main Container */}
      {/* ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* Header */}
        {/* ========================================= */}

        <div
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-end
            lg:mb-16
          "
        >
          {/* Heading */}

          <div>
            <span
              className="
                block
                text-[10px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-black/35
              "
            >
              Product Gallery
            </span>

            <h2
              className="
                mt-5
                text-[clamp(3.5rem,8vw,8rem)]
                font-semibold
                leading-[0.85]
                tracking-[-0.07em]
              "
            >
              Designed
              <br />

              <span className="text-black/30 tracking-normal">
                differently.
              </span>
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-black/45
              lg:text-base
            "
          >
            Explore AEROX from every angle. Minimal on the outside,
            engineered for powerful performance inside.
          </p>
        </div>

        {/* ========================================= */}
        {/* FULL IMAGE GALLERY */}
        {/* ========================================= */}

        <div
          className="
            relative
            h-[65vh]
            min-h-125
            w-full
            overflow-hidden
            rounded-[2.5rem]
            border
            border-black/10
            bg-[#dfe1e4]
            sm:h-[60vh]
            lg:h-[60vh]
          "
        >
          {/* ========================================= */}
          {/* Main Image */}
          {/* ========================================= */}

          <img
            ref={imageRef}
            src={images[activeImage].src}
            alt={images[activeImage].title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
            "
          />

          {/* ========================================= */}
          {/* Dark Gradient Overlay */}
          {/* ========================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-black/20
            "
          />

          {/* ========================================= */}
          {/* Top Information */}
          {/* ========================================= */}

          <div
            className="
              absolute
              left-6
              right-6
              top-6
              z-20
              flex
              items-center
              justify-between
              sm:left-8
              sm:right-8
              sm:top-8
              lg:left-10
              lg:right-10
              lg:top-10
            "
          >
            {/* Counter */}

            <div className="flex items-center gap-3 text-white">
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
              >
                View
              </span>

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.15em]
                "
              >
                {String(activeImage + 1).padStart(2, "0")}

                <span className="mx-2 text-white/30">
                  /
                </span>

                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            {/* Current Label */}

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >
              {images[activeImage].label}
            </span>
          </div>

       

          {/* ========================================= */}
          {/* Bottom Content */}
          {/* ========================================= */}

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              z-20
              flex
              items-end
              justify-between
              gap-6
              sm:bottom-8
              sm:left-8
              sm:right-8
              lg:bottom-10
              lg:left-10
              lg:right-10
            "
          >
            {/* Product Information */}

            <div>
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
              >
                AEROX
              </span>

              <h3
                className="
                  mt-2
                  text-4xl
                  font-semibold
                  tracking-[-0.05em]
                  text-white
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                {images[activeImage].title}
              </h3>
            </div>

            {/* Navigation */}

            <div className="flex shrink-0 gap-2">
              {/* Previous */}

              <button
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  sm:h-14
                  sm:w-14
                "
              >
                <i className="ri-arrow-left-line text-lg" />
              </button>

              {/* Next */}

              <button
                onClick={nextImage}
                aria-label="Next image"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  sm:h-14
                  sm:w-14
                "
              >
                <i className="ri-arrow-right-line text-lg" />
              </button>
            </div>
          </div>

          {/* ========================================= */}
          {/* Progress Bar */}
          {/* ========================================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              z-30
              h-[2px]
              bg-white
              transition-all
              duration-500
            "
            style={{
              width: `${((activeImage + 1) / images.length) * 100}%`,
            }}
          />
        </div>

        {/* ========================================= */}
        {/* Thumbnail Gallery */}
        {/* ========================================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-4
            gap-3
            sm:gap-4
          "
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              ref={(el) => {
                thumbnailsRef.current[index] = el;
              }}
              onClick={() => changeImage(index)}
              className={`
                group
                relative
                aspect-[16/10]
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-300

                ${
                  activeImage === index
                    ? "border-black"
                    : "border-black/10 hover:border-black/30"
                }
              `}
            >
              {/* Thumbnail Image */}

              <img
                src={image.src}
                alt={image.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Thumbnail Overlay */}

              <div
                className={`
                  absolute
                  inset-0
                  transition-all
                  duration-300

                  ${
                    activeImage === index
                      ? "bg-black/5"
                      : "bg-black/30 group-hover:bg-black/10"
                  }
                `}
              />

              {/* Number */}

              <span
                className="
                  absolute
                  bottom-3
                  left-3
                  z-10
                  text-[9px]
                  font-medium
                  tracking-[0.2em]
                  text-white
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Active Indicator */}

              {activeImage === index && (
                <span
                  className="
                    absolute
                    bottom-3
                    right-3
                    z-10
                    h-2
                    w-2
                    rounded-full
                    bg-white
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* ========================================= */}
        {/* Product Information */}
        {/* ========================================= */}

        <div
          className="
            mt-10
            grid
            gap-6
            border-t
            border-black/10
            pt-8
            sm:grid-cols-3
            lg:mt-12
          "
        >
          {/* Filtration */}

          <div>
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-black/30
              "
            >
              Filtration
            </span>

            <p className="mt-2 text-sm font-medium">
              HEPA H14 + Carbon
            </p>
          </div>

          {/* Coverage */}

          <div>
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-black/30
              "
            >
              Coverage
            </span>

            <p className="mt-2 text-sm font-medium">
              Up to 800 sq ft
            </p>
          </div>

          {/* Noise */}

          <div>
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-black/30
              "
            >
              Noise
            </span>

            <p className="mt-2 text-sm font-medium">
              As low as 24 dB
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

 