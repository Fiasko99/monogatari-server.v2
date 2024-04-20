const { db } = require('@db')

module.exports = async (where) => {
  const character = await db.character.findOne(where)

  return character && character.toJSON()
}