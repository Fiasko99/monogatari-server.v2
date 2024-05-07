const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.characters.create(body)

  return data.toJSON()
}