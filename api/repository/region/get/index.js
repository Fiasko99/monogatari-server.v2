const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.region.findOne({where})

  return data && data.toJSON()
}