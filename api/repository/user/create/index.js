const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.users.create(body)

  return data.toJSON()
}