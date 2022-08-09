/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite',
      },
      colors: {
        'white': 'var(--white)',
        'black': 'var(--black)',
        'neutral-50': 'var(--neutral-50)',
        'neutral-100': 'var(--neutral-100)',
        'neutral-200': 'var(--neutral-200)',
        'neutral-250': 'var(--neutral-250)',
        'neutral-300': 'var(--neutral-300)',
        'neutral-400': 'var(--neutral-400)',
        'neutral-500': 'var(--neutral-500)',
        'neutral-600': 'var(--neutral-600)',
        'neutral-700': 'var(--neutral-700)',
        'teal-100': 'var(--teal-100)',
        'teal-200': 'var(--teal-200)',
        'teal-300': 'var(--teal-300)',
        'teal-400': 'var(--teal-400)',
        'teal-500': 'var(--teal-500)',
        'teal-600': 'var(--teal-600)',
        'red-100': 'var(--red-100)',
        'red-200': 'var(--red-200)',
        'red-300': 'var(--red-300)',
        'red-400': 'var(--red-400)',
        'primary': 'var(--primary)',
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'special': ['Jost', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },


    },
    screens: {
      xxs: '380px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}