module.exports = function (source, options) {
    return transformCode(source)
};


function transformCode(codeStr) {
    let result = require("@babel/core").transform(codeStr, { 
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
                "corejs": "3",
                useBuiltIns: "usage",
              },
            ],
            // ['@babel/preset-typescript', { isTSX: false, allExtensions: true }]
        ],
        plugins: [
            // ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-transform-runtime",
            // "@babel/plugin-syntax-dynamic-import"
        ]
    });
    // console.log(result.code)
    return result.code
}