let code = `
let fn = () => {
    console.log('lll')
}

`

const fs = require('fs')
const path = require('path')


let sourcePath = path.resolve(process.cwd(), 'src')
let distPath = path.resolve(process.cwd(), 'dist')


compile()


function compile() {
    let files = fs.readdirSync(sourcePath)
    console.log(files)
    files.forEach(file => {
        let childPath = path.resolve(sourcePath, file)
        let stat = fs.statSync(childPath)
        // console.log(stat.isFile())
        if (stat.isFile()) {
            let code = fs.readFileSync(childPath)
            let result = transformCode(code)
            writeFile2Dist(result.code, file)
        }
    })
}

function writeFile2Dist(code, file) {
    let isExist = fs.existsSync(distPath)
    // console.log(isExist)
    if (!isExist) {
        fs.mkdirSync(distPath)
    }
    fs.writeFileSync(path.resolve(distPath, file), code)
}

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
    return result
}

