module.exports = { 
    // "sourceMaps": true,
    presets: [
        [
          "@babel/preset-env",
          {
            targets: {
                ie: "9",
                edge: "17",
                firefox: "60",
                chrome: "67",
                // safari: "11.1",
            },
            // "corejs": "3",
            // useBuiltIns: "usage", // 设置后会把core-js很多多余模块页打包进来
          },
        ],
        // ['@babel/preset-typescript', { isTSX: false, allExtensions: true }]
    ],
    plugins: [
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-runtime",
        // "@babel/plugin-syntax-dynamic-import"
    ]
}