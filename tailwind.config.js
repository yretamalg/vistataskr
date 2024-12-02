/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        teal: {
          100: '#E6FFFA',
          500: '#38B2AC',
          600: '#319795',
        },
        gray: {
          200: '#E5E7EB',
          500: '#6B7280',
          600: '#4B5563',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}