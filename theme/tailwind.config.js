/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.hbs', './partials/*.hbs'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

