const { db } = require('@db')

module.exports = async (where) => {
  return await db.posts.count({ distinct: 'id', where })
}