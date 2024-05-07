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
        model: db.characters,
        as: 'characters'
      }
    ],
    order: [
      [
        {
          model: db.characters, 
          as: 'characters',
        },
        'createdAt', 
        'DESC'
      ]
    ],
  }
  const data = await db.users.findOne(query)

  return data && data.toJSON()
}