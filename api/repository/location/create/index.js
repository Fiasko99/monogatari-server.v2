const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.locations.create(body)

  return data.toJSON()
}