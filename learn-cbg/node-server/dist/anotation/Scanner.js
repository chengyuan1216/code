"use strict";

var fs = require('fs');

var join = require('path').join;
/**
 * 
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */


module.exports = function findSync(startPath) {
  var result = [];

  function finder(path) {
    var files = fs.readdirSync(path);
    files.forEach(function (val, index) {
      var fPath = join(path, val);
      var stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fPath);
    });
  }

  finder(startPath);
  return result;
}; // let fileNames = findSync('./');
// console.log(fileNames)