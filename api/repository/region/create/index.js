const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.regions.create(body)

  return data.toJSON()
}