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
  }
  const data = await db.users.findOne(query)

  return data && data.toJSON()
}