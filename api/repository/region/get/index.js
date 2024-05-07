const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.regions.findOne({where})

  return data && data.toJSON()
}