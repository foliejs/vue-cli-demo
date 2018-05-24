module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,
  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9999,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {}
  }
}
