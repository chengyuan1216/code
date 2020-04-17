module.exports = function (source, map) {
  debugger
  console.log(source, map, this.resourceQuery)

  this.callback(
    null,
    `export default function (Component) {
      Component.options.__permission = JSON.parse(${
        JSON.stringify(source)
      })
    }`,
    map
  )
  // this.callback(null, `module.exports = ${generateCode(source, parse(this.resourceQuery))}`, sourceMap)
}
