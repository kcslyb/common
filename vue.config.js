// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 以多页模式构建应用程序。
  pages: undefined,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  // webpack配置
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|ico)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: path.join('../main/static/', 'img/[name].[ext]')
      })
    config.module
      .rule('js')
      .include
      .add('/components/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  configureWebpack: config => {
    const pluginsPublic = []
    const pluginsDev = []
    const pluginsPro = []
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
      config.plugins = [...config.plugins, ...pluginsPro, ...pluginsPublic]
    } else {
      // 为开发环境修改配置...
      config.plugins = [...config.plugins, ...pluginsDev, ...pluginsPublic]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // prependData: '@import "~@/assets/scss/common.scss";'
      }
    }
  }
}
