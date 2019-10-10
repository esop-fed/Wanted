const path = require('path')
const marked = require('marked')
const renderer = new marked.Renderer()
const highlight = require('highlight.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: 'src/index',
  chainWebpack(config) {
    config.output
      .path(resolve('docs'))
      .publicPath('/Wanted/')
    config.resolve.alias
      .set('modules', resolve('src/modules'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .set('md', resolve('src/markdown'))
    config.resolve.extensions
      .add('.vue')
    config.module
      .rule('compile')
      .test(/\.md$/)
      .use('html')
      .loader('html-loader')
      .end()
      .use('markdown')
      .loader('markdown-loader')
      .options({
        renderer,
        highlight: code => highlight.highlightAuto(code).value,
        pedantic: false
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "assets/css/variables.scss";
        `
      }
    }
  },
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
      options: {
        lintOnSave: true
      }
    }
  ]
}
