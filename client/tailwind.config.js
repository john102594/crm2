const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['.src/**/*{html,js,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    colors: {
      ...colors,
    },
  },
};
