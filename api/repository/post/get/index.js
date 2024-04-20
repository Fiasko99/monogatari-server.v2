const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.post.findOne({where})

  return data && data.toJSON()
}