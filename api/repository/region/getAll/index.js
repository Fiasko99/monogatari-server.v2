const { db } = require('@db')

module.exports = async () => {

  const data = await db.region.findAll({
    include: [
      {
        model: db.area,
        as: 'areas',
        include: [
          {
            model: db.location,
            as: 'locations',
          }
        ]
      }
    ]
  })

  return data
}