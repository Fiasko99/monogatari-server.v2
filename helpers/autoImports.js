const fs = require('fs')

module.exports = (path) => {
  const listImports = {}
  fs.readdirSync(path, { withFileTypes: true }).forEach(dir => {
    if(dir.isDirectory()) {
      listImports[dir.name] = require(`${path}/${dir.name}`)
    }
  })

  return listImports
}