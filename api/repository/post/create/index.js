const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.posts.create(body)

  return data.toJSON()
}