const { db } = require('@db')

module.exports = async (where) => {
  const query = {
    where,
    include: [
      {
        model: db.users,
        as: 'user'
      },
    ],
  }
  const data = await db.characters.findOne(query)

  return data && data.toJSON()
}