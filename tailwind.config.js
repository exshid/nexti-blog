module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'nightish': '#222831',
      'midnightish': '#242A35',
      'evening': '#262D39',
      'lightnight':'#282F3C',
      'reddish': '#480323',
      'darker-reddish':'#39021c',
      'grayish': '#e7eaed',
      'grayer': '#676c70',
      'daylight':'#f2f2f2',
      'lightreddish':'#A0144F',
      'darkish': '#111',
      'muted': '#6c757d'
    }},
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
};
