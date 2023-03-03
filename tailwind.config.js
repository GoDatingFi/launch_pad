/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { max: '1023px' },
      sm: { max: '560px' },
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        backgroundLight: "url('static/images/bg_light.jpg')",
      },
      colors: {
        'btn-connect': 'hsla(0,0%,100%,.3)',
        'color-menu-light': '#525252',
        'color-menu-light-active': '#000',
        "primary":'#5041E6'
      },
      padding: {
        menu: '10px 24px 13px',
        content: '110px 0 0',
        'content-mobile': '150px 0 0',
      },
      margin: {
        'main-center': 'auto auto 60px',
      },
      maxWidth: {
        'main-width': '1400px',
      },
    },
  },
  plugins: [],
}
