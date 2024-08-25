const { db } = require('@db')
const { userAttributes } = require('@constants/attributes')

module.exports = async (where) => {
  const query = {
    where,
    include: [
      {
        model: db.users,
        attributes: userAttributes,
        as: 'user'
      },
    ],
  }
  const data = await db.characters.findOne(query)

  return data && data.toJSON()
}