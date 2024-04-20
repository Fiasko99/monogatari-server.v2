const { db } = require('@db')

module.exports = async (body) => {
  const data = await db.post.create(body)

  return data.toJSON()
}