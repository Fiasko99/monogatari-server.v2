const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.areas.findOne({where})

  return data && data.toJSON()
}