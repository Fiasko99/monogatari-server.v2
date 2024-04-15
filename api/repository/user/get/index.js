const { db } = require('@db')

module.exports = async (where) => {
  const user = await db.user.findOne({where, raw: true})

  return user
}