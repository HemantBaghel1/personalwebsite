/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5px':'5px',
        '50px':'50px',
        '400px': '400px',
        '44':'-44px',
        '7':'7px',
      },
      colors : {
        'oran':'#EF8354',
      },
      transitionDelay: {
        
      }, 
      transitionProperty: {
        'al': 'all 0.7s ease', 
      },
    },
  },
  plugins: [],
}

