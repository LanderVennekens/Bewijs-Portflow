// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};