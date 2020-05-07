module.exports = {
  // ...
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': { //640
            // maxWidth: '600px',
          },
          '@screen md': { //768
            // maxWidth: '728px',
          },
          '@screen lg': { //1024
            maxWidth: '984px',
          },
          '@screen xl': { //1280
            maxWidth: '1240px',
          },
        }
      })
    }
  ]
}