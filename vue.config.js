// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // webpack配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples')) // @ 默认指向 src 目录，这里要改成 examples
      .set('~', path.resolve('packages')) // ~ 指向 packages

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
