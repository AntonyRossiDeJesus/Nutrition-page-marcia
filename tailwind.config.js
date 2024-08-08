/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-hero-mobile": "url('./assets/bg-hero-nv-mobile.webp')",
        "custom-bg-hero-descktop": "url('./assets/bg-hero-nv.webp')",
        "custom-bg-two-mobile": "url('./assets/bg-two-nv-mobile.webp')",
        "custom-bg-two-descktop": "url('./assets/bg-two-nv.webp')",
        "custom-bg-tree-mobile": "url('./assets/bg-tree-nv-mobile.webp')",
        "custom-bg-tree-descktop": "url('./assets/bg-tree-nv.webp')",
        "custom-bg-for-mobile": "url('./assets/bg-for-nv.webp')",
        "container-sec-for":
          "radial-gradient(at top right, #5B2A96 0%, #5B2A96 75%);",
        "container-sec-for-border":
          "linear-gradient(to top, #EEE307, #EEE30780)",
        "custom-icon-whatsap": "url('./assets/icone-whatsapp-branco.svg')",
        "container-hero":
          "radial-gradient(at top left, #D2ADFF40 0%, #D2ADFF10 75%)",
        "custom-gradient-sec-two-icon":
          "linear-gradient(to bottom, #AEA600, #635E00)",
      },

      colors: {
        "container-hero":
          "radial-gradient(at top left, #D2ADFF40 0%, #D2ADFF10 75%)",
      },

      boxShadow: {
        "custom-button-hero-shadown": "0px 0px 37px 0px #BEB500",
      },
    },
  },
  plugins: [],
};
