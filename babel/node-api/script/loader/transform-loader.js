module.exports = function (source, inputSourceMap) {
    // const callback = this.async();
    // new Promise(resolve => {
    //     let result = transformCode(source)
    //     resolve([result.code, result.map])
    // }).then((data) => {
    //     console.log('data', data)
    //     return callback(null, data.code, data.map)
    // })
    return transformCode(source).code
};


function transformCode(codeStr) {
    let result = require("@babel/core").transform(codeStr, { 
        "sourceMaps": true,
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
                // "corejs": "3",
                // useBuiltIns: "usage", // 设置后会把core-js很多多余模块页打包进来
              },
            ],
            ['@babel/preset-typescript', { isTSX: false, allExtensions: true }]
        ],
        plugins: [
            // ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-transform-runtime",
            // "@babel/plugin-syntax-dynamic-import"
        ]
    } );
    // console.log('result', result)
    return result
}