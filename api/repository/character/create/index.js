const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.character.create(body)

  return data.toJSON()
}