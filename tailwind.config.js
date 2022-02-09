module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dianne': {
          DEFAULT: '#1E555C',
          '50': '#65C1CD',
          '100': '#55BBC8',
          '200': '#3CAAB8',
          '300': '#328E9A',
          '400': '#28717B',
          '500': '#1E555C',
          '600': '#102E32',
          '700': '#020707',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}
