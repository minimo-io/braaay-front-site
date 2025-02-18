# Braaaya Tailwind Base

Intended for development purposes only.
The idea of this sub-project is to generate the minified and unminified versions of the css packages for Braaay.com
Yo be used as the css library for Svelte (mobile & desktop) & Woocommerce front-ends.

## To Do

- Order confirmed page.
- Add schema for product page.

### On Svelte

- Login / Signup modal & Page.
- Catalog filter menu.
- There is no way to access your account on mobile (hamburger menu?).
- Search typing results
- Mini-cart

### (v2)

- Landing page.
- Checkout: Add testimonials.
- Wine.com has a functionality in which, no matter where you are, a popup appears, and you can apply a discount coupon, with reflects on the listings of all wines.
- Add shrinking top menu on scroll.
- Glide carrousel is still sub-optimal (uses a placeholder that is fixed), why not use srcset for the placeholder and THEN conditionally load the image?

### Components to Not Forget!

- Quick offer

```
                        <!-- Quick Offer -->
                        <div class="relative">
                            <a href="#" class="not-hover-effect hidden md:block relative">
                                <picture>
                                    <!-- Tailwind's sm breakpoint for mobile (640px and below) -->
                                    <source
                                        srcset="./images/happy-wine-home-desktop-mobile.webp"
                                        media="(max-width: 640px)"
                                    />
                                    <!-- Tailwind's md breakpoint for desktop (768px and above) -->
                                    <source
                                        srcset="./images/carousel/braaay-carousel-desktop-1.webp"
                                        media="(min-width: 768px)"
                                    />
                                    <img
                                        alt="oferta-do-mes"
                                        class="rounded-lg mb-5 mt-2 border border-grey-lighter opacity-90"
                                        src="/src/images/carousel/braaay-carousel-desktop-1.webp"
                                    />
                                </picture>
                                <div
                                    href="#"
                                    class="btn block absolute not-hover-effect hover:opacity-90 transition-all scale-90 bottom-2 right-2 border-0 text-white bg-blue uppercase md:items-center text-center mt-3 lg:mt-0 self-center"
                                >
                                    ADICIONAR AO CARRINHO
                                </div>
                            </a>
                        </div>
```
