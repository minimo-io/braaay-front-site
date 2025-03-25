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

- GraphQL:

  - No funciona la categoría vinhos after build.
  - Simplificar obtención de lista de blog posts, (esquema de interfaces), como en productos.
  - También aprovechar a hacer un mejor try...catch y en el caso de un artículo no existir o no poder ser obtenido, hacer un redirect a una página 404.
  - Agregar la lista de entries, también para artículos del blog de UY.
  - Adicionar y obtener las categorías
  - Ya que vamos a editar el ouput de graphql, creo que todo lo relacionado a WPBakery debería desaparecer desde el origen, con una función PHP (o convertirse en HTML via una mutation del graphql).
    - Tambien, el author tiene que venir con un campo ˝profession".
  - En algunos artículos como /blog/vinhos-brasileiros-premiados-que-vao-te-surpreender los <ul> no se renderizan bien.
  - Be able to concatenate GQL queries, so i can add the total number of posts in the latests
  - Starting working in the structure for fetching data from the GraphQL >Currently<
  - We need to be able to see a log of our WP GraphQL queries so to know if we are hitting a log.
    - This might need to better configure Breeze cache.

- Add component for seo schema.
- Filtering menu in search should receive a payload will selecteed filters, and pre-select a country for example.
- On modal we need hover with white opacity in the BG, like https://v3.tailwindcss.com/docs/installation (open menu)
  Also when clicked in category > All filters
- Add accesibility with tab button to <main> like in Minimo.

- When articles have final routes, they must have the Blog Secondary Menu.
- Mobile menu, needs to improve (no current place for cashback or account buttons)

- _i18n_: We need to stablish a library for this from the start, the /blog part of the site might be a good start.

  - https://jldec.me/blog/getting-started-i18n-with-paraglide-and-fink
  - https://inlang.com/m/gerre34r/library-inlang-paraglideJs/sveltekit
  - https://www.npmjs.com/package/@inlang/paraglide-js

- SCREEN: Cashback
- LOGIN

  - Must be a dynamic popup

- MARKETING POPUP: like primalwines.
- BUTTONS:

  - Should accept url, click or submit behavious. There is already an action param. But still currently you must send the url (mandatory). Not good.

- CASHBACK:

  - Debo completar desafíos para ganar puntos de cashback
    - Desafíos:
      - Link de "Convide amigos": Invitar a tres amigos desde mi link de afiliados, ganha 50% de cashback dos amigos

- Create a loader

- CHECKOUT: The first choosing of the Shipping is weid. Use the same boxed components as below.

- MODAL:

  - Be able to pass an specific action to the action button in the modal.

- PRODUCT PAGE:
  - We need than when you hover down, and loose sight of "Buy button" a fixed div appears below.
  - Show price with PIX discount (or lowest possible price)
- OTHER PRODUCTS PAGES: There are (not-yet-designed types of products), kits, presentes & experiences.

- LOADER:

  - Not its a basic setup, it would be better with a wine animation, over a overlayed screen in white (with blur)

- Enable GraphQL debug mode.

- ERROR
  - No tiene traducciones, `+error.svelte`

### Bugs

- The selective top bar is not working well in preview... should change on articles (works ok if refresh the page, not the reactivity)
- Por algun motivo en el header, el botón de CONTA no tiene shine effect
- In the checkout process the footer `components/ui/footers/CheckoutFooter.svelte` is not visible on mobile and this it is not visible the phone number, etc. Check our reference sites (happends on smaller screens -- laptop)
  Probablemente también causa en el checkout (mismo footer).

### v2

- MULTI-LANG:
  - If we are in an article and try to switch lang, and in that other lang the article does not exists we get an error.
- SSG Pre-rendering DISABLED BECAUSE OF CONFLICTS WITH PARAGLIDE (urls were not recognized by sveltekit / for /uy)
  For the moment we stick to SSR.
  - No consigo que el entries funcione para otras urls además de las definidas en routes.
    Ejemplo: /blog/ARTICULO funciona ok
    /uy/blog/ no funciona
- SEARCH:
  - On focus search results
  - Autocompletion
- ARTICLE: - Header debe ser igual que el blog -> Ver que sea una propiedad global configurable (Pensar si así o mejor no, en términos de conversión).
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
