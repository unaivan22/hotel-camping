/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bghero': "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url('https://assets.website-files.com/61f981dc0f719d75a5d78239/61f9b2922979d5273f91fffc_home-hero-image-rental-webflow-ecommerce-template.jpg')",
      'bgroom': "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url('https://assets.website-files.com/61f981dc0f719d75a5d78239/61fdb03636bc8731f4c3ca10_rooms-hero-bg-image-rental-webflow-ecommerce-template.jpg')",
    },
    extend: {},
    screens: {
      'xs': '360px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '0rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}