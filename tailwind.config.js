/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/src/index.html", // Arquivo HTML na raiz do projeto
    "./src/**/*.{html,js,ts,jsx,tsx}", // Todos os HTML e JS dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

