# Braaay Front Site

Everything you need to build the Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# run the project
npm run dev -- --open
```

## To Do

- Filtering menu in search should receive a payload will selecteed filters, and pre-select a country for example.
- Product page we must hide and toggle accordion (think to do this after UI framework install).
- Continue with other Tailwind-Base pages:
  - Cart must have totally different Header and Footer
- On modal we need hover with white opacity in the BG, like https://v3.tailwindcss.com/docs/installation (open menu)
  Also when clicked in category > All filters
- Add accesibility with tab button to <main> like in Minimo.
- Create button component
- When articles have final routes, they must have the Blog Secondary Menu.
- Create the svelte this repo as a standalone project to use it with Vercel or Netlify.
- Mobile menu, needs to improve (no current place for cashback or account buttons)
- SCREEN: Cashback
- LOGIN
  - Must be a dynamic popup
- MARKETING POPUP: like primal.

### Bugs

- In the checkout process the footer `components/ui/footers/CheckoutFooter.svelte` is not visible on mobile and this it is not visible the phone number, etc. Check our reference sites (happends on smaller screens -- laptop)
  Probablemente también causa en el checkout (mismo footer).

### v2

- Aviso para Pedidos Express: Pedidos hasta el medio día (envío express) se envía en el mismo día, ou se for final de semana, no próximo dia util da Braaay.
- Be able to add favorite wines (I would use this, to explore and remember my favorite wines!).
- Components could have a config value. When present we can take that value for header & footer components choosing.

## Notes & References

- Take this reference for project structure: [https://github.com/huggingface/chat-ui](https://github.com/huggingface/chat-ui)
- Wine store references:
  - [https://primalwine.com/](https://primalwine.com/) - BRAND VIBES
  - [https://www.wine.com/](https://www.wine.com/) - ECOMMERCE, FILTERS, SALES, DYAMIC ELEMENTS
  - [https://bacan.uy/](https://bacan.uy/) - UY
