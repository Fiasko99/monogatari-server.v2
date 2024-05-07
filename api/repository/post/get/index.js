const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.posts.findOne({where})

  return data && data.toJSON()
}