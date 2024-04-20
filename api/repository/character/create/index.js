const { db } = require('@db')

module.exports = async (data) => {
  const character = await db.character.create(data)

  return character.toJSON()
}