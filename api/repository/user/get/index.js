const { db } = require('@db')

module.exports = async (where, options = {}) => {
  const { 
    attributes = [
      'nickname',  
      'email',  
      'createdAt',  
      'updatedAt', 
      'confirmed'
    ]
  } = options
  const query = {
    where,
    attributes,
    include: [
      {
        model: db.character,
        as: 'characters'
      }
    ]
  }
  const data = await db.user.findOne(query)

  return data && data.toJSON()
}