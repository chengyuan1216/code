module.exports = function(wrap) {
    console.log(new Date().toLocaleString() + ': ' + wrap)
    return wrap
}