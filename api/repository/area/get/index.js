const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.area.findOne(where)

  return data && data.toJSON()
}