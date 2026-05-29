/** Config Tailwind reprenant le thème inline du site (pour compiler assets/tailwind.css). */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cream:'#f5efe4', creamlight:'#faf6ee', paper:'#ede4d3',
        charcoal:'#1a1612', ink:'#2a221c',
        terracotta:'#b8533a', terradeep:'#8e3c27',
        olive:'#5b6b3a', olivedeep:'#3f4a25',
        tomato:'#c0392b', gold:'#c8a45a', golddeep:'#9c7b34',
      },
      fontFamily: {
        serif:['"Cormorant Garamond"','ui-serif','Georgia','serif'],
        sans:['Inter','ui-sans-serif','system-ui','sans-serif'],
        hand:['Caveat','cursive'],
      },
      boxShadow: {
        soft:'0 12px 40px -16px rgba(26,22,18,.25)',
        card:'0 24px 60px -28px rgba(26,22,18,.45)',
        glow:'0 0 0 1px rgba(200,164,90,.35), 0 18px 50px -20px rgba(184,83,58,.45)',
      },
    },
  },
  plugins: [],
};
