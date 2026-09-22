import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Signup = () => {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* =========================
     GSAP ANIMATION
  ========================= */

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".signup-brand", {
        y: -25,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".signup-card",
          {
            y: 50,
            opacity: 0,
            scale: 0.97,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".signup-item",
          {
            y: 20,
            opacity: 0,
            stagger: 0.06,
            duration: 0.5,
          },
          "-=0.4"
        );

      gsap.to(".signup-orb-one", {
        x: 40,
        y: -30,
        scale: 1.1,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".signup-orb-two", {
        x: -35,
        y: 35,
        scale: 1.15,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".signup-ring", {
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
     HANDLE INPUT
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     SIGNUP
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = formData;

    if (!firstName.trim()) {
      toast.error("Please enter your first name.");
      return;
    }

    if (!lastName.trim()) {
      toast.error("Please enter your last name.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!password) {
      toast.error("Please create a password.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (!confirmPassword) {
      toast.error("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      toast.error("Please accept the Terms & Conditions.");
      return;
    }

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 900);
  };

  /* =========================
     GOOGLE SIGNUP
  ========================= */

  const handleGoogleSignup = () => {
    toast("Google signup will be available soon.", {
      
    });
  };

  return (
    <main
      ref={pageRef}
      className="
        relative min-h-screen
        overflow-hidden
        bg-slate-950
        px-5 
        py-32
        sm:px-8
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            signup-orb-one
            absolute -left-32 top-10
            h-80 w-80
            rounded-full
            bg-cyan-500/15
            blur-[120px]
          "
        />

        <div
          className="
            signup-orb-two
            absolute -right-32 bottom-10
            h-96 w-96
            rounded-full
            bg-blue-600/15
            blur-[130px]
          "
        />

        <div
          className="
            absolute left-1/2 top-1/2
            h-[650px] w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-cyan-400/[0.04]
          "
        />

        <div
          className="
            signup-ring
            absolute left-1/2 top-1/2
            h-[520px] w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-cyan-400/[0.05]
          "
        />

        <div
          className="
            absolute inset-0
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
          relative z-10
          flex
          min-h-[calc(100vh-80px)]
          items-center
          justify-center
        "
      >
        <div className="w-full max-w-1/2">

      
          {/* =========================================
              SIGNUP CARD
          ========================================= */}

          <div
            className="
              signup-card
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-white/[0.055]
              p-7
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              sm:p-9
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute -right-24 -top-24
                h-56 w-56
                rounded-full
                bg-cyan-400/10
                blur-[80px]
              "
            />

            <div className="relative">

              {/* =========================================
                  HEADING
              ========================================= */}

              <div className="signup-item mb-8">

                <div
                  className="
                    mb-5
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <i className="ri-user-add-line text-2xl" />
                </div>

                <h1
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Create your account
                </h1>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  Join AEROX and make your shopping
                  experience smarter.
                </p>
              </div>

              {/* =========================================
                  FORM
              ========================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* FIRST + LAST NAME */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* FIRST NAME */}

                  <div className="signup-item">

                    <label
                      htmlFor="firstName"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      First name
                    </label>

                    <div className="group relative">

                      <i
                        className="
                          ri-user-line
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
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        autoComplete="given-name"
                        className="
                          w-full
                          rounded-xl
                          border border-white/10
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

                  {/* LAST NAME */}

                  <div className="signup-item">

                    <label
                      htmlFor="lastName"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      Last name
                    </label>

                    <div className="group relative">

                      <i
                        className="
                          ri-user-line
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
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        autoComplete="family-name"
                        className="
                          w-full
                          rounded-xl
                          border border-white/10
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
                </div>

                {/* EMAIL */}

                <div className="signup-item">

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
                        rounded-xl
                        border border-white/10
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

                <div className="signup-item">

                  <label
                    htmlFor="password"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Password
                  </label>

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
                      placeholder="Create a password"
                      autoComplete="new-password"
                      className="
                        w-full
                        rounded-xl
                        border border-white/10
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

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        flex h-9 w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-500
                        transition-colors
                        hover:bg-white/5
                        hover:text-cyan-300
                      "
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

                  <p className="mt-2 text-xs text-slate-600">
                    Use at least 6 characters.
                  </p>
                </div>

                {/* CONFIRM PASSWORD */}

                <div className="signup-item">

                  <label
                    htmlFor="confirmPassword"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Confirm password
                  </label>

                  <div className="group relative">

                    <i
                      className="
                        ri-lock-password-line
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
                      id="confirmPassword"
                      name="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      className="
                        w-full
                        rounded-xl
                        border border-white/10
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

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        flex h-9 w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-500
                        transition-colors
                        hover:bg-white/5
                        hover:text-cyan-300
                      "
                    >
                      <i
                        className={
                          showConfirmPassword
                            ? "ri-eye-off-line text-lg"
                            : "ri-eye-line text-lg"
                        }
                      />
                    </button>
                  </div>
                </div>

                {/* TERMS */}

                <div className="signup-item pt-1">

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-start
                      gap-3
                    "
                  >
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) =>
                        setAgreeTerms(e.target.checked)
                      }
                      className="
                        mt-1
                        h-4 w-4
                        shrink-0
                        cursor-pointer
                        rounded
                        border-slate-600
                        bg-white/5
                        accent-cyan-400
                      "
                    />

                    <span className="text-xs leading-6 text-slate-500">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="
                          text-cyan-400
                          hover:text-cyan-300
                        "
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="
                          text-cyan-400
                          hover:text-cyan-300
                        "
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* SIGNUP BUTTON */}

                <div className="signup-item pt-2">

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
                        relative z-10
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      Create Account

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
                  signup-item
                  my-7
                  flex
                  items-center
                  gap-4
                "
              >
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs text-slate-600">
                  OR
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* =========================================
                  GOOGLE
              ========================================= */}

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="
                  signup-item
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-slate-200
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.08]
                "
              >
                <i className="ri-google-fill text-lg" />

                Continue with Google
              </button>

              {/* =========================================
                  LOGIN LINK
              ========================================= */}

              <div className="signup-item mt-7 text-center">

                <p className="text-sm text-slate-500">
                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="
                      font-semibold
                      text-cyan-400
                      transition-colors
                      hover:text-cyan-300
                    "
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              FOOTER LINKS
          ========================================= */}

          <div
            className="
              signup-item
              mt-7
              flex
              items-center
              justify-center
              gap-5
              text-xs
              text-slate-600
            "
          >
            <Link
              to="/privacy"
              className="transition-colors hover:text-slate-400"
            >
              Privacy
            </Link>

            <span>•</span>

            <Link
              to="/cookies"
              className="transition-colors hover:text-slate-400"
            >
              Cookies
            </Link>

            <span>•</span>

            <Link
              to="/contact"
              className="transition-colors hover:text-slate-400"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

 