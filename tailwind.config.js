/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
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
        "custom-bg-five-mobile": "url('./assets/bg-five-nvv.webp')",
        "custom-bg-five-descktop": "url('./assets/bg-five-nv.webp')",
        "custom-bg-six-mobile": "url('./assets/bg-six-nv-mobile.webp')",
        "custom-bg-six-descktop": "url('./assets/bg-six-nv-desktop.webp')",

        "custom-bg-container1-seven-mobile":
          "url('./assets/img1-consultorio-mobile.webp')",
        "custom-bg-container1-seven-descktop":
          "url('./assets/img1-consultorio-desktop.webp')",
        "custom-bg-container2-seven-mobile":
          "url('./assets/img2-consultorio-mobile.webp')",
        "custom-bg-container2-seven-descktop":
          "url('./assets/img2-consultorio-desktop.webp')",
        "custom-bg-container3-seven-mobile":
          "url('./assets/img3-consultorio-mobile.webp')",
        "custom-bg-container3-seven-descktop":
          "url('./assets/img3-consultorio-desktop.webp')",
        "custom-bg-container4-seven-mobile":
          "url('./assets/img4-consultorio-mobile.webp')",
        "custom-bg-container4-seven-descktop":
          "url('./assets/img4-consultorio-desktop.webp')",
        "custom-bg-container5-seven-mobile":
          "url('./assets/img5-consultorio-mobile.webp')",
        "custom-bg-container5-seven-descktop":
          "url('./assets/img5-consultorio-desktop.webp')",
        "custom-bg-container6-seven-mobile":
          "url('./assets/img6-consultorio-mobile.webp')",
        "custom-bg-container6-seven-descktop":
          "url('./assets/img6-consultorio-desktop.webp')",
        "custom-bg-container7-seven-mobile":
          "url('./assets/img7-consultorio-mobile.webp')",
        "custom-bg-container7-seven-descktop":
          "url('./assets/img7-consultorio-desktop.webp')",
        "custom-bg-container8-seven-mobile":
          "url('./assets/img8-consultorio-mobile.webp')",
        "custom-bg-container8-seven-descktop":
          "url('./assets/img8-consultorio-desktop.webp')",
        "custom-bg-container9-seven-mobile":
          "url('./assets/img9-consultorio-mobile.webp')",
        "custom-bg-container9-seven-descktop":
          "url('./assets/img9-consultorio-desktop.webp')",

        "custom-icon-whatsap": "url('./assets/icone-whatsapp-branco.svg')",
        "custom-icon-joinha": "url('./assets/icone-joinha.svg')",
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

      borderRadius: {},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const novaUtilsButton = {
        ".custom-button-test": {
          padding: "1.5rem",
          borderRadius: "0.5rem",
          backgroundColor: "#f2f2f2",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
        },
      };

      addUtilities(novaUtilsButton);
    },
  ],
};
