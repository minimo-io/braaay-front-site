# Braaay Front Site

👨‍💻 Development version [here](https://braaay-front-site.vercel.app/).
<br />
✅ Production site [here](https://braaay.com).

![Braaay Screenshot](https://raw.githubusercontent.com/minimo-io/braaay-front-site/main/static/images/snapshot.png)

Everything you need to build the Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Running the project

```bash
# run the project
npm run dev -- --open
```

## To Do: Speed & UI/UX

- Pensar en writables para modal: https://chatgpt.com/c/67cf781f-2bc8-8011-8575-98cb9ea53790
- Adicionar boton en /blog -- abajo de dica do chef
- ARTICLE: - Header debe ser igual que el blog -> Ver que sea una propiedad global configurable.
- COMPONENT LIBRARY:
  - Add a lightweight component library (for popups > Login, Frete, etc)
  - Precisamos toasts, ejemplo para notificaciones.
- Continue creating sub-components for product.
- PRODUCTS: There are (not-yet-designed types of products), kits, presentes & experiences.
- Add component for schema.
- Filtering menu in search should receive a payload will selecteed filters, and pre-select a country for example.
- On modal we need hover with white opacity in the BG, like https://v3.tailwindcss.com/docs/installation (open menu)
  Also when clicked in category > All filters
- Add accesibility with tab button to <main> like in Minimo.
- Create button component
- When articles have final routes, they must have the Blog Secondary Menu.
- Create the svelte this repo as a standalone project to use it with Vercel or Netlify.
- Mobile menu, needs to improve (no current place for cashback or account buttons)
- PRODUCT PAGE:
  - We need than when you hover down, and loose sight of "Buy button" a fixed div appears below.
  - Show price with PIX discount (or lowest possible price)
- SCREEN: Cashback
- LOGIN

  - Must be a dynamic popup

- MARKETING POPUP: like primalwines.
- BUTTONS:

  - Should accept url, click or submit. There is already an action param

- CASHBACK:

  - Debo completar desafíos para ganar puntos de cashback
    - Desafíos:
      - Link de "Convide amigos": Invitar a tres amigos desde mi link de afiliados, ganha 50% de cashback dos amigos

- Create a loader

### Bugs

- Por algun motivo en el header, el botón de CONTA no tiene shine effect
- In the checkout process the footer `components/ui/footers/CheckoutFooter.svelte` is not visible on mobile and this it is not visible the phone number, etc. Check our reference sites (happends on smaller screens -- laptop)
  Probablemente también causa en el checkout (mismo footer).

### v2

- En algunos lugares tenemos esto, utilizarlo para cambiar el color:

```
	:root {
		--bry-current-color: #211a2e;
		--bry-current-gradient-start: #847f87;
		--bry-current-gradient-end: #77747d;
	}
```

- BUTTONS:
  - Buttons should be able to receive the --page-color (check layout)
  - The add to cart button in products, shine-effect does not work because we are hardcoding the page color.
- Para el BottomArticle, si es twoColumn=true poder pasar un snippet.
- Pagination for blog
- Aviso para Pedidos Express: Pedidos hasta el medio día (envío express) se envía en el mismo día, ou se for final de semana, no próximo dia util da Braaay.
- Be able to add favorite wines (I would use this, to explore and remember my favorite wines!).
- Components could have a config value. When present we can take that value for header & footer components choosing.

## Notes & References

- Take this reference for project structure: [https://github.com/huggingface/chat-ui](https://github.com/huggingface/chat-ui)
- Wine store references:
  - https://primalwine.com/ - BRAND VIBES
  - https://www.vineria9.com.br/ - BR LOCAL E-COMMERCE
  - https://www.vinoverace.com.br/ - BR SMALL STORE
  - https://www.wine.com/ - ECOMMERCE, FILTERS, SALES, DYAMIC ELEMENTS
  - https://bacan.uy/ - UY
