const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.character.findOne({where})

  return data && data.toJSON()
}