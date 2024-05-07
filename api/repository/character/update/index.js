const { db } = require('@db')

module.exports = async (updateData, where) => {
  const data = await db.characters.findOne({where})
  if (!data) {
    throw 'Персонаж не найден'
  }
  await data.update(updateData)

  return data
}