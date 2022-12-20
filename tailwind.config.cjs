/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#7e22ce',
        bases: '#FFFFFF',
        error: '#F87272',
        coffee: '#55433b',
        coffeLight: '#bda79e',
        coffeeBrown: '#c27c5e',
        info: '#3ABFF8',
        neutral: '#bda79e',
        primary: '#4E3E36',
        red: '#850000',
        secondary: '#603624',
        success: '#36D399',
        warning: '#FBBD23',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
