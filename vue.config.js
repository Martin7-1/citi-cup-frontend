const { defineConfig } = require('@vue/cli-service')

// // 引入等比适配插件
// const px2rem = require('postcss-px2rem')
//
// // 配置基本大小
// const postcss = px2rem({
//     // 基准大小 baseSize，需要和rem.js中相同
//     remUnit: 16
// })

module.exports = defineConfig({
  transpileDependencies: true,
  //跨域配置
  devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
    port: 9876,
    proxy: {                 //设置代理，必须填
      '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
        target: 'https://124.223.105.99:8081',     //代理的目标地址
        changeOrigin: true,              //是否设置同源，输入是的
        // pathRewrite: {                   //路径重写
        //   '/api': ''                     //选择忽略拦截器里面的单词
        // }
      }
    }
  },
})
// 使用等比适配插件
//     lintOnSave: true,
//     css: {
//         loaderOptions: {
//             postcss: {
//                 postcssOptions:{
//                     plugins: [
//                         postcss
//                     ]
//                 }
//             }
//         }
//     }
//     lintOnSave: true,
//     css: {
//         loaderOptions: {
//             postcss: {
//                 plugins: [
//                     postcss
//                 ]
//             }
//         }
//     }




