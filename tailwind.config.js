/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  //prefix: "tw-",
  daisyui: {
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      "light",
      {
        // generate a theme for company colors
        // font color and highlight: #E60023
        // base-100: rgb(38, 47, 57)
        // other: white
        dark: {
          "base-100": "#262f39",
          "base-200": "#384450",
          "base-300": "#EBEEF3",
          "base-content": "#eeeeee",
          primary: "#E60023",
          secondary: "#E60023",
          accent: "#E60023",
          neutral: "#E60023",
          info: "#2094f3", // info color
          success: "#009485", // success color
          warning: "#ff9900", // warning color
          error: "#ff5724", // error color
        },
        // import all daisyui themes
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
