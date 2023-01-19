/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'or': '#800048',
        
      },
        backgroundImage: {
          'banner': "url('../banner.webp')",
        },
    },
  },
  plugins: [],
}
