const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.location.create(body)

  return data.toJSON()
}