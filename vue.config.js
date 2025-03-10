module.exports = {
  // 其他配置...
  devServer: {
    // 开发服务器配置...
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 代理目标地址
        changeOrigin: true, // 改变请求的源头
        pathRewrite: { '^/api': '' } // 重写路径
      }
    }
  },
  configureWebpack: {
    // Webpack 配置...
  },
  // 确保环境变量能够正确加载
  // Vue CLI 会自动加载 .env 文件，无需额外配置
};