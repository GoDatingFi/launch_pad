const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      },
      colors: {
        'btn-connect': 'hsla(0,0%,100%,.3)',
        'bg-main-style': 'hsla(0,0%,100%,.3)',
        'color-menu-light': '#525252',
        'color-menu-light-active': '#000',
        "primary":'#5041E6'
      },
      padding: {
      
       
        'content-mobile': '150px 0 0',
      },
      margin: {
        'main-center': 'auto auto 60px',
      },
      maxWidth: {
        'main-width': '1400px',
      },
      // backgroundImage: {
      //   backgroundLight: "url('static/images/bg_light.jpg')",
      // },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
