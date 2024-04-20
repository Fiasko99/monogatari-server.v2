const fs = require('fs')
/**
 * @description What is it for
 * Function for auto-importing modules or objects with modules 
 * Analyzes folders and creates object keys based on folder names
 * 
 * @description !!!IMPORTANT!!!
 * Auto-import forces you to write folder names in camelCase 
 * if you want to be able to access functions in a convenient way
 * 
 * @description !!!IMPORTANT!!!
 * Auto-import deprives you of the opportunity to go to the target
 * function since the editor will not understand where you want to go
 * 
 * @param {string} path - absolute path to file, should be `__dirname` 
 * @returns {object} return module or object with modules 
 */
module.exports = (path) => {
  const listImports = {}
  fs.readdirSync(path, { withFileTypes: true }).forEach(dir => {
    if(dir.isDirectory()) {
      listImports[dir.name] = require(`${path}/${dir.name}`)
    }
  })

  return listImports
}