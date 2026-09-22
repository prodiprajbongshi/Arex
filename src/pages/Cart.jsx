 
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  // Free shipping over $300
  const shipping = cartTotal >= 300 || cartTotal === 0 ? 0 : 15;

  // Example 5% tax
  const tax = cartTotal * 0.05;

  const grandTotal = cartTotal + shipping + tax;

  // ========================================
  // EMPTY CART
  // ========================================

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#f5f7f8] pt-28 text-slate-900">
        <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-6 py-16">
          <div className="text-center">

            {/* Icon */}
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
              <i className="ri-shopping-cart-line text-4xl text-slate-300" />
            </div>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-500">
              Looks like you haven't added anything to your cart yet.
              Discover our air purifiers and start breathing better.
            </p>

            <a
              href="/shop"
              className="
                mt-8 inline-flex
                items-center gap-3
                rounded-full
                bg-slate-950
                px-7 py-4
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-cyan-500
                hover:shadow-xl
              "
            >
              Explore Shop

              <i className="ri-arrow-right-line text-lg" />
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7f8] pt-28 text-slate-900">

      {/* ========================================
          HEADER
      ======================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-8 lg:pt-20">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Shopping Cart
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your cart
            </h1>

            <p className="mt-4 text-base text-slate-500">
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              items ready for checkout.
            </p>
          </div>

          {/* Continue Shopping */}
          <a
            href="/shop"
            className="
              inline-flex
              items-center gap-2
              text-sm font-semibold
              text-slate-700
              transition-colors
              hover:text-cyan-600
            "
          >
            <i className="ri-arrow-left-line" />

            Continue Shopping
          </a>
        </div>
      </section>

      {/* ========================================
          CART CONTENT
      ======================================== */}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* ========================================
              LEFT - CART ITEMS
          ======================================== */}

          <div>

            {/* Cart Header */}
            <div className="mb-4 hidden items-center justify-between px-5 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:flex">
              <span>Product</span>

              <div className="flex items-center gap-24">
                <span>Quantity</span>
                <span>Total</span>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4">

              {cartItems.map((item) => {

                const itemTotal = item.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="
                      group
                      rounded-[1.5rem]
                      border border-slate-200
                      bg-white
                      p-4
                      transition-all
                      duration-300
                      hover:border-slate-300
                      hover:shadow-lg
                      sm:p-5
                    "
                  >

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                      {/* ========================================
                          PRODUCT
                      ======================================== */}

                      <div className="flex min-w-0 flex-1 items-center gap-4">

                        {/* Image */}
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-28">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="
                              h-full
                              w-full
                              object-contain
                              p-3
                              transition-transform
                              duration-500
                              group-hover:scale-105
                            "
                          />
                        </div>

                        {/* Info */}
                        <div className="min-w-0">

                          <p className="text-xs font-medium uppercase tracking-wider text-cyan-600">
                            Air Purifier
                          </p>

                          <h2 className="mt-1 truncate text-base font-semibold text-slate-950 sm:text-lg">
                            {item.name}
                          </h2>

                          <p className="mt-1 text-sm text-slate-500">
                            ${item.price.toFixed(2)} each
                          </p>

                          {/* Mobile Remove */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="
                              mt-3
                              inline-flex
                              items-center
                              gap-1.5
                              text-xs
                              font-medium
                              text-slate-400
                              transition
                              hover:text-red-500
                              sm:hidden
                            "
                          >
                            <i className="ri-delete-bin-line" />

                            Remove
                          </button>
                        </div>
                      </div>

                      {/* ========================================
                          DESKTOP CONTROLS
                      ======================================== */}

                      <div className="flex items-center justify-between gap-6 sm:justify-end">

                        {/* Quantity */}
                        <div
                          className="
                            flex
                            items-center
                            rounded-full
                            border
                            border-slate-200
                            bg-slate-50
                          "
                        >
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              text-slate-500
                              transition
                              hover:bg-slate-200
                              hover:text-slate-950
                            "
                            aria-label="Decrease quantity"
                          >
                            <i className="ri-subtract-line" />
                          </button>

                          <span className="w-8 text-center text-sm font-semibold text-slate-900">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              text-slate-500
                              transition
                              hover:bg-slate-200
                              hover:text-slate-950
                            "
                            aria-label="Increase quantity"
                          >
                            <i className="ri-add-line" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-slate-950">
                            ${itemTotal.toFixed(2)}
                          </p>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="
                              mt-1
                              hidden
                              text-xs
                              text-slate-400
                              transition
                              hover:text-red-500
                              sm:block
                            "
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ========================================
                CLEAR CART
            ======================================== */}

            <div className="mt-6 flex justify-end">
              <button
                onClick={clearCart}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-slate-400
                  transition
                  hover:text-red-500
                "
              >
                <i className="ri-delete-bin-line" />

                Clear cart
              </button>
            </div>

            {/* ========================================
                FREE SHIPPING MESSAGE
            ======================================== */}

            {cartTotal < 300 && (
              <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-cyan-500 shadow-sm">
                    <i className="ri-truck-line text-lg" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      You're ${(
                        300 - cartTotal
                      ).toFixed(2)} away from free shipping.
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Add another product to unlock free delivery.
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                    style={{
                      width: `${Math.min(
                        (cartTotal / 300) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ========================================
              RIGHT - ORDER SUMMARY
          ======================================== */}

          <aside className="lg:sticky lg:top-28 lg:self-start">

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">

              {/* Header */}
              <div className="border-b border-slate-100 px-6 py-6">
                <h2 className="text-xl font-semibold text-slate-950">
                  Order summary
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Review your order before checkout.
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-5 px-6 py-6">

                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Subtotal
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Shipping
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {shipping === 0 ? (
                      <span className="text-emerald-500">
                        Free
                      </span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {/* Tax */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Estimated tax
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100" />

                {/* Total */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">
                      Total
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Including estimated tax
                    </p>
                  </div>

                  <span className="text-2xl font-bold text-slate-950">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                {/* Checkout */}
                <button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-slate-950
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-cyan-500
                    hover:shadow-xl
                  "
                >
                  Proceed to Checkout

                  <i className="ri-arrow-right-line text-lg" />
                </button>

                {/* Secure Checkout */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <i className="ri-lock-line" />

                  Secure checkout
                </div>
              </div>

              {/* Benefits */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <i className="ri-truck-line text-lg text-cyan-500" />

                    <span className="text-xs text-slate-600">
                      Free shipping over $300
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <i className="ri-shield-check-line text-lg text-cyan-500" />

                    <span className="text-xs text-slate-600">
                      2-year product warranty
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <i className="ri-refresh-line text-lg text-cyan-500" />

                    <span className="text-xs text-slate-600">
                      30-day easy returns
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* ========================================
          TRUST SECTION
      ======================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <i className="ri-truck-line text-2xl text-cyan-500" />

            <h3 className="mt-4 font-semibold text-slate-950">
              Fast delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get your air purifier delivered quickly and safely.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <i className="ri-shield-check-line text-2xl text-cyan-500" />

            <h3 className="mt-4 font-semibold text-slate-950">
              Trusted quality
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Designed with advanced purification technology.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <i className="ri-customer-service-2-line text-2xl text-cyan-500" />

            <h3 className="mt-4 font-semibold text-slate-950">
              Expert support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Our support team is ready whenever you need help.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

 