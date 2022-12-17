/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4E3E36',
        secondary: '#603624',
        accent: '#7e22ce',
        neutral: '#bda79e',
        bases: '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
