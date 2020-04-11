const path = require('path');
module.exports = {
    configureWebpack(config) {
        config.module.rules.push({
            test: /\.(js|json|vue)$/,
            enforce: 'pre',
            include: [resolve('src')],
            use: resolve('condition-compile-loader/index.js')
        });
    }
};

function resolve(dir) {
    return path.resolve(process.cwd(), dir);
}
