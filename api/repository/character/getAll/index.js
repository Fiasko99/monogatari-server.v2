const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.characters.findAll({
    where,
    order: [
      [
        'createdAt',
        'DESC'
      ]
    ]
  })
  
  return data
}