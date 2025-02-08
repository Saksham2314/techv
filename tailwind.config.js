module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b8ff',
          400: '#339fff',
          500: '#0088ff', // Customize the primary blue color here
          600: '#0077e6',
          700: '#0066cc',
          800: '#0055b3',
          900: '#004499',
        },
        customBlue: "#275d63",
        customBlue2:"#264653",
        customBlue3:"#264b56",
      },
    },
  },
  plugins: [],
};
