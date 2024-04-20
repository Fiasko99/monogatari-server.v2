const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.user.create(body)

  return data.toJSON()
}