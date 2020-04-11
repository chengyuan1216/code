const fs = require('fs');
const path = require('path');

let code = fs.readFileSync(path.resolve(__dirname, 'test/b.vue'));
let res = replaceMatched(code.toString(), {
    isDebug: true,
    test: true
});

console.log(res);

function replaceMatched(js, options) {
    // let REG = /\/\*\s*IF(DEBUG|TRUE_\w+)(?:\s*\*\/)?([\s\S]+?)(?:\/\*\s*)?FI\1\s*\*\//g;
    let JS_REG = /\/\*\s*IF_(TRUE_\w+|FALSE_\w+)(?:\s*\*\/)?([\s\S]+?)(?:\/\*\s*)?FI_\1\s*\*\//g;
    let HTML_REG = /<!--\s*IF_(TRUE_\w+|FALSE_\w+)(?:\s*-->)?([\s\S]+?)(?:<!--\s*)?FI_\1\s*-->/g;
    return js.replace(JS_REG, handler).replace(HTML_REG, handler);
    function handler(match, $1, $2) {
        var isKeep;
        var varName;
        if (/^\s*TRUE/.test($1)) {
            varName = $1.slice(5);
            isKeep = options[varName];
        }
        else if (/^\s*FALSE/.test($1)) {
            varName = $1.slice(6);
            isKeep = options[varName] === false;
        }
        return isKeep ? $2 : '';
    }
};
