/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'pretendard': ['Pretendard'],
      'hri_iconset': ['hri_iconset']
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    // screens: {
    //   '2xl': {'max': '1400px'},
    //   // => @media (max-width: 1400px) { ... }

    //   'xl': {'max': '1200px'},
    //   // => @media (max-width: 1200px) { ... }

    //   'lg': {'max': '992px'},
    //   // => @media (max-width: 992px) { ... }

    //   'md': {'max': '768px'},
    //   // => @media (max-width: 768px) { ... }

    //   'sm': {'max': '576px'},
    //   // => @media (max-width: 576px) { ... }
    // }
  },
  plugins: [],
}

