module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '1fr',
        movieUnitLayout: '1fr auto',
      },
      backgroundColor: {
        header: 'rgba(0,0,0,0.5)',
      },
      width: {
        form: '40vw',
      },
    },
  },
  variants: {},
  plugins: [],
};
