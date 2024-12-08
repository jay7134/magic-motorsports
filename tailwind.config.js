/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#4A0CB6',
        'purple-light': '#5e12e3',
      },
      boxShadow: {
        '2sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes
        'xxs': '0.625rem', // 10px
        'xs-sm': '0.813rem', // 13px
        'sm': ['1rem',{
            lineHeight: '1.5rem',
            fontWeight: '500',
        }], // 16px
        'normal': [
          '1.1rem', {
            lineHeight: '1.68rem',
            fontWeight: '500',
          }
        ], // 18px
        'h1': ['4.5rem',{lineHeight: '5.4rem',}], // 72px
        'h2': '3.25rem', // 52px
        'h3': '2.5rem', // 40px
        'h4': '1.2rem', // 20px
      },
      backgroundImage: {
        'black-gradient': 'background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.67%, rgba(0, 0, 0, 0.7) 86.4%)',
        'custom-gradient': 'linear-gradient(128.63deg, rgba(255, 255, 255, 0) 27.79%, rgba(255, 255, 255, 0.15) 94.8%)',
      },
    },
  },
  plugins: [],
}