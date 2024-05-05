const { db } = require('@db')

module.exports = async (updateData, where) => {
  const data = await db.character.findOne({where})
  if (!data) {
    throw 'Персонаж не найден'
  }
  await data.update(updateData)

  return data
}