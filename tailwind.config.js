/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#273043',
        'beige' : '#EEEBD0',
        'coral' : '#F78E69',
        'azure' : '#F78E69',
      },
      backgroundColor: {
        'dark-blue': '#273043',
        'beige' : '#EEEBD0',
        'coral' : '#F78E69',
        'azure' : '#F78E69',
      },
    },
  },
  plugins: [],
}