module.exports = {
  // 基本路径
  publicPath: '/',
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3333",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
