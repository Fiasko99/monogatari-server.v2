const { db } = require('@db')

module.exports = async (where) => {
  const data = db.user.findOne({where})

  return data
}