const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.area.create(body)

  return data && data.toJSON()
}