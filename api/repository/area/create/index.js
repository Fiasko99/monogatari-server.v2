const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.areas.create(body)

  return data && data.toJSON()
}