const { db } = require('@db')

module.exports = async () => {
  return await db.activeLocations.count({ distinct: 'id' })
}