# 1、配置webpck

安装依赖

```
npm i
```

直接贴代码， webpack的详细教程， 请看webpack-demo。

config/webpack.common.js

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        app: './src/app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 加载样式文件
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 加载图片
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载字体
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: "all", // async 切割异步加载的模块 | all 所有 | initial 初始化的模块
            minSize: 1000, // 模块的最小体积
            minChunks: 1, // 模块的最小被引用次数
            maxAsyncRequests: 5, // 按需加载的最大并行请求数
            maxInitialRequests: 3, // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: true,
            cacheGroups: { // 缓存组
                vendors: {
                    name: 'vendor', // 第三方公共模块打包到这里
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: { // 引用超过两次的模块打包到这里
                    name: 'common',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}
```



config/webpack.dev.js

```
const webpack = require('webpack');
const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const path = require('path')

console.log('webpack.dev.js')
const config = webpackMerge(webpackCommonConfig, 
{
    mode: 'development', // 设置为'development' 后代码不会压缩
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js', // 此时输出的文件名应该也是动态的
        chunkFilename: '[name].js', // 在代码切割时，它决定非入口 chunk 的名称
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' // 设置的值会影响index.html内引入js的路径
    },
    devServer: {
        port: 8002,
        contentBase: '/dist',// 告诉服务器从哪里查找文件
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
module.exports = config
```



config/webpack.build.js

```
const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin 
const path = require('path')

console.log('webpack.build.js')
const DEV_MODE = 'dev'
module.exports = function(env) {
    let config =  webpackMerge(webpackCommonConfig, {
        mode: 'production', // 设置为'development' 后代码不会压缩
        output: {
            filename: '[name].[chunkhash].js', // 此时输出的文件名应该也是动态的
            chunkFilename: '[name].[chunkhash].js', // 在代码切割时，它决定非入口 chunk 的名称
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/' // 设置的值会影响index.html内引入js的路径
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    })

    if (env.mode === DEV_MODE) {
        config.devtool = 'inline-source-map'
        config.mode = 'development'
    }

    return config
}
```



index.html

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>webpack-demo</title>
  </head>
  <body>
  </body>
</html>
```



src/app.js

```
const log = require('./log')


class App {
    constructor() {
        this.render()
    }
    render() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello webpack')
            })
        }).then(data => {
            document.write(log(data))
        })
    }
}

new App()
```



src/log.js

```
module.exports = function(wrap) {
    console.log(new Date().toLocaleString() + ': ' + wrap)
    return wrap
}
```



package.json

```
{
  "name": "all-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config ./config/webpack.build.js --env.mode",
    "dev": "webpack-dev-server --open --config ./config/webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1",
    "webpack-merge": "^4.2.2"
  }
}

```



执行 npm run build dev 。编译后的代码为。

```
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const log = __webpack_require__(/*! ./log */ "./src/log.js")


class App {
    constructor() {
        this.render()
    }
    render() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello webpack')
            })
        }).then(data => {
            document.write(log(data))
        })
    }
}

new App()

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(wrap) {
    console.log(new Date().toLocaleString() + ': ' + wrap)
    return wrap
}

/***/ })

},[["./src/app.js","manifest"]]]);
```



打包出来的代码还有class的语法， 低版本的浏览器是不支持class语法的， 因此使用babel将代码编译成es5的语法。



# 2、配置babel

安装babel-loader及babel

```
npm i babel-loader -D
npm i @babel/cli @babel/core @babel/preset-env @babel/runtime @babel/plugin-transform-runtime @babel/polyfill -D
```



在webpack.common.js增加

```
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
    	'babel-loader'
    ]
}
```



创建babel.config.js

```
console.log('babel.config.js')
module.exports = { 
    presets: [
        [
          "@babel/preset-env",
          {
            targets: {
                ie: "9",
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
          },
        ],
    ],
    plugins: [
        "@babel/plugin-transform-runtime"
    ]
};
```

重新编译后。

```
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var log = __webpack_require__(/*! ./log */ "./src/log.js");

var App =
/*#__PURE__*/
function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, App);

    this.render();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(App, [{
    key: "render",
    value: function render() {
      new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('hello webpack');
        });
      }).then(function (data) {
        document.write(log(data));
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (wrap) {
  console.log(new Date().toLocaleString() + ': ' + wrap);
  return wrap;
};

/***/ })

},[["./src/app.js","manifest","vendor"]]]);
```

已经成功将class语法编译成了es5的语法。



# 3、配置sass



```
npm i node-sass sass-loader -D
```

修改webpack.common.js

```
{
    test: /\.(css|scss)$/, // 加载样式文件
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
            "css-loader",
            "sass-loader"
        ]
    })
}
```



# 4、搭建vue开发环境

```
npm i vue vue-router vuex axios -S
vue-loader vue-template-compiler@2.6.10 // vue-template-compiler的版本需要和vue一致
```

每个 `vue` 包的新版本发布时，一个相应版本的 `vue-template-compiler` 也会随之发布。编译器的版本必须和基本的 `vue` 包保持同步，这样 `vue-loader` 就会生成兼容运行时的代码。这意味着**你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler。**



Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 `vue-loader` 应用到所有扩展名为 `.vue` 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：



> **这个插件是必须的！** 它的职责是将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `<script>` 块。



修改webpack.common.js文件

```
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```



修改babel-loader的配置

`exclude: /node_modules/` 在应用于 `.js` 文件的 JS 转译规则 (例如 `babel-loader`) 中是蛮常见的。鉴于 v15 中的推导变化，如果你导入一个 `node_modules` 内的 Vue 单文件组件，它的 `<script>` 部分在转译时将会被排除在外。

为了确保 JS 的转译应用到 `node_modules` 的 Vue 单文件组件，你需要通过使用一个排除函数将它们加入白名单：

```js
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
  )
}
```