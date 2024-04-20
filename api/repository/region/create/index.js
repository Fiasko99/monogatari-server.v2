const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.region.create(body)

  return data.toJSON()
}