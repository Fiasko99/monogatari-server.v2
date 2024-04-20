const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.location.findOne(where)

  return data && data.toJSON()
}