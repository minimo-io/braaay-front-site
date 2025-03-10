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

- There is conflict with : Use in layout
<style global>
	:root {
		--bry-current-color: #211a2e;
		--bry-current-gradient-start: #847f87;
		--bry-current-gradient-end: #77747d;
	}
</style>

- Components on /blog
- Adicionar boton en /blog -- abajo de dica do chef
- Create a loader
- Some articles share elements that are duplicated, (componentize!)
- Add a lightweight component library (for popups)
- Continue creating sub-components for product.
- ORODUCTS: There are (not-yet-designed types of products), kits, presentes & experiences.
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
- MARKETING POPUP: like primal.

### Bugs

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
