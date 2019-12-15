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
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-runtime"
    ]
};