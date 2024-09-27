/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./src/index.html"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            maxWidth: {
                "screen-lg-2x": "1100px",
            },
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",

            map: "#293E3F",
            bra: "#226246",
            sky: "#226246",
            sun: "#BD8836",
            blue: "#212639",
            uru: "#4C89C8",
            way: "#B8CADB",

            grey: {
                background: "#fafafa",
                "page-primary": "#303239",
                lighter: "#e3e3e3",
                light: "#c3c3c3",
                medium: "#a0a0a0",
                "medium-dark": "#737373",
                dark: "#303133",
                darkest: "#1d1d1d",
            },

            yellow: "#F3A633",
        },

        fontFamily: {
            prata: ["Prata", "serif"],
            roboto: ["Roboto", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
