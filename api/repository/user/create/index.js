const { db } = require('@db')

module.exports = async (data) => {
  const user = await db.user.create(data)

  return user.toJSON()
}