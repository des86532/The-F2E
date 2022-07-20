module.exports = {
  publicPath: '/The-F2E/gogoro-homepage/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/scss/variable.scss";
        `
      }
    }
  }
}
