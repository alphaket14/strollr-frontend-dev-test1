module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'box-shadow': '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        sm: '575px',
        md: '768px',
        lg: '992px',
        ls: '1040px',
        xl: '1280px',
        '2xl': '1440px',
      }, 
      fontFamily: {
        baloo: ['Baloo 2', 'sans-serif'],
      },
    },
  
  },
  plugins: [],
};
