module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'public/**/*.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: 'true'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
