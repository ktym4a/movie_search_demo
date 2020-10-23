module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      backgroundImage: {
        variants: ['before'],
      },
    },
  },
  variants: {},
  plugins: [],
};
