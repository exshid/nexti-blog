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
      'nightish': '#262D39',
      'midnightish': '#222831',
      'evening': '#242A35',
      'lightnight': '#1c2229',
      'reddish': '#480323',
      'darker-reddish':'#39021c',
      'grayish': '#e7eaed',
      'grayer': '#676c70',
      'daylight':'#F9FAFB',
      'lightreddish':'#A0144F',
      'muted': '#6c757d'
    }},
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
};
