module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_variables.scss";
          @import "@/assets/css/_mixins.scss";
        `,
      },
    },
  },
};
