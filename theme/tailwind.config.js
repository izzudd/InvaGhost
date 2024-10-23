/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.hbs', './partials/**/*.hbs'],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'border': 'var(--border)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

