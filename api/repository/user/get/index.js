const { db } = require('@db')

module.exports = async (where, options = {}) => {
  const { 
    attributes = [
      'nickname',  
      'email',  
      'createdAt',  
      'updatedAt', 
      'confirmed'
    ], 
    userSelf = false
  } = options
  const query = {
    where,
    attributes,
    raw: true
  }
  if (userSelf) {
    query.include = [
      {
        model: db.character,
        as: 'characters',
      }
    ]
    query.order = [
      [
        {model: db.character, as: 'characters'},
        'name',
        'DESC'
      ]
    ]
  }
  const user = await db.user.findOne(query)

  return user
}