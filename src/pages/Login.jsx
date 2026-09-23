import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /* =========================
     GSAP ANIMATIONS
  ========================= */

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".login-brand", {
        y: -25,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".login-card",
          {
            y: 50,
            opacity: 0,
            scale: 0.97,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".login-item",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.4"
        );

      // Floating background orb
      gsap.to(".login-orb-one", {
        x: 40,
        y: -30,
        scale: 1.1,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".login-orb-two", {
        x: -35,
        y: 35,
        scale: 1.15,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Rotating ring
      gsap.to(".login-ring", {
        rotate: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    {
      scope: pageRef,
    }
  );

  /* =========================
     INPUT CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     LOGIN
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!formData.password) {
      toast.error("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    // Success
    toast.success("Login successful!");

    // Demo redirect
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  /* =========================
     FORGOT PASSWORD
  ========================= */

  const handleForgotPassword = () => {
    toast("Password reset feature will be available soon.", {
      icon: "🔑",
    });
  };

  return (
    <main
      ref={pageRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        px-4
        py-8
        sm:px-6
        sm:py-10
        md:px-8
        lg:px-12
        xl:px-16
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan Glow */}

        <div
          className="
            login-orb-one
            absolute
            -left-32
            top-10
            h-64
            w-64
            rounded-full
            bg-cyan-500/15
            blur-[100px]
            sm:h-80
            sm:w-80
            sm:blur-[120px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            login-orb-two
            absolute
            -bottom-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-blue-600/15
            blur-[110px]
            sm:-right-32
            sm:bottom-10
            sm:h-96
            sm:w-96
            sm:blur-[130px]
          "
        />

        {/* Large Ring */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/[0.04]
            sm:h-[500px]
            sm:w-[500px]
            md:h-[600px]
            md:w-[600px]
          "
        />

        {/* Rotating Ring */}

        <div
          className="
            login-ring
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/[0.05]
            sm:h-[420px]
            sm:w-[420px]
            md:h-[500px]
            md:w-[500px]
          "
        />

        {/* Dot Pattern */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-64px)]
          items-center
          justify-center
          sm:min-h-[calc(100vh-80px)]
        "
      >
        <div
          className="
            w-full
            max-w-md
  
            lg:max-w-lg
 
          "
        >

          {/* =========================================
              LOGIN CARD
          ========================================= */}

          <div
            className="
              login-card
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.055]
              p-6
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              sm:p-7
              md:p-9
            "
          >

            {/* Card Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-cyan-400/10
                blur-[70px]
                sm:h-56
                sm:w-56
                sm:blur-[80px]
              "
            />

            <div className="relative">

              {/* =========================================
                  HEADING
              ========================================= */}

              <div className="login-item mb-7 sm:mb-8">

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <i className="ri-user-line text-2xl" />
                </div>

                <h1
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Welcome back
                </h1>

                <p
                  className="
                    mt-2
                    max-w-sm
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  Sign in to your AEROX account and
                  continue shopping.
                </p>
              </div>

              {/* =========================================
                  LOGIN FORM
              ========================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* EMAIL */}

                <div className="login-item">

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Email address
                  </label>

                  <div className="group relative">

                    <i
                      className="
                        ri-mail-line
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        transition-colors
                        group-focus-within:text-cyan-400
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.045]
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-slate-600
                        transition-all
                        duration-300
                        focus:border-cyan-400/50
                        focus:bg-white/[0.07]
                        focus:ring-4
                        focus:ring-cyan-400/10
                      "
                    />
                  </div>
                </div>

                {/* PASSWORD */}

                <div className="login-item">

                  <div className="mb-2 flex items-center justify-between gap-3">

                    <label
                      htmlFor="password"
                      className="
                        block
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="
                        shrink-0
                        text-xs
                        font-medium
                        text-cyan-400
                        transition-colors
                        hover:text-cyan-300
                      "
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="group relative">

                    <i
                      className="
                        ri-lock-line
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        transition-colors
                        group-focus-within:text-cyan-400
                      "
                    />

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.045]
                        py-3.5
                        pl-11
                        pr-12
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-slate-600
                        transition-all
                        duration-300
                        focus:border-cyan-400/50
                        focus:bg-white/[0.07]
                        focus:ring-4
                        focus:ring-cyan-400/10
                      "
                    />

                    {/* Show Password */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="
                        absolute
                        right-2
                        top-1/2
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-500
                        transition-colors
                        hover:bg-white/5
                        hover:text-cyan-300
                        sm:right-3
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      <i
                        className={
                          showPassword
                            ? "ri-eye-off-line text-lg"
                            : "ri-eye-line text-lg"
                        }
                      />
                    </button>
                  </div>
                </div>

                {/* REMEMBER ME */}

                <div className="login-item">

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="
                        h-4
                        w-4
                        shrink-0
                        cursor-pointer
                        rounded
                        border-slate-600
                        bg-white/5
                        accent-cyan-400
                      "
                    />

                    <span className="text-sm text-slate-400">
                      Remember me
                    </span>
                  </label>
                </div>

                {/* LOGIN BUTTON */}

                <div className="login-item pt-2">

                  <button
                    type="submit"
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      px-5
                      py-3.5
                      text-sm
                      font-semibold
                      text-slate-950
                      shadow-[0_15px_40px_rgba(6,182,212,0.2)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)]
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      Sign In

                      <i
                        className="
                          ri-arrow-right-line
                          text-lg
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </span>

                    {/* Button Shine */}

                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-white/20
                        transition-transform
                        duration-500
                        group-hover:translate-x-full
                      "
                    />
                  </button>
                </div>
              </form>

              {/* =========================================
                  DIVIDER
              ========================================= */}

              <div
                className="
                  login-item
                  my-6
                  flex
                  items-center
                  gap-4
                  sm:my-7
                "
              >
                <div className="h-px flex-1 bg-white/10" />

                <span className="shrink-0 text-xs text-slate-600">
                  OR
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* =========================================
                  REGISTER
              ========================================= */}

              <div className="login-item mt-6 text-center sm:mt-7">

                <p className="text-sm text-slate-500">
                  Don't have an account?{" "}

                  <Link
                    to="/register"
                    className="
                      font-semibold
                      text-cyan-400
                      transition-colors
                      hover:text-cyan-300
                    "
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </main>
  );
};