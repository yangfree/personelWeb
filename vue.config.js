const path = require("path");

module.exports = {
  devServer: {
    port: 8082,
    proxy: {
      "/home": {
        target: "http://localhost:3001",
        ws: true,
        changeOrigin: true
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  }
};