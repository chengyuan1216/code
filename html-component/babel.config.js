console.log('babel config')
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
        './util/babel-plugin-transform-jsx/index',
        // '@babel/plugin-transform-react-jsx',
        // "@babel/plugin-syntax-dynamic-import",
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-runtime"
    ]
};