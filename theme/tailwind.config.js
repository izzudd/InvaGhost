/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.hbs', './partials/**/*.hbs'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    },
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'accent': 'var(--accent)',
        'border': 'var(--border)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

