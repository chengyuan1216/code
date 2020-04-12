require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  extensions: ["ts", "js"],
  presets: [
    [
      '@babel/preset-env',
      { 
        useBuiltIns:'usage',
        targets: {
          "chrome": "58",
          "ie": "11"
        },
      },
    ],
    ['@babel/preset-typescript', { isTSX: false, allExtensions: true }],
  ],
  plugins: [
    // 'macros',
    '@babel/plugin-syntax-dynamic-import',
    // 'dynamic-import-node-babel-7',
    // '@babel/plugin-proposal-do-expressions',
    // '@babel/plugin-proposal-optional-chaining',
    // 'babel-plugin-lodash',
  ],
});
// require('@babel/polyfill');
require('../src/index.ts');