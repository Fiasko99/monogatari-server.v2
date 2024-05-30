const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.locations.findOne(
    {
      where,
      include: [
        {
          model: db.areas,
          as: 'area',
          include: [
            {
              model: db.regions,
              as: 'region'
            }
          ]
        }
      ]
    },
  )

  return data && data.toJSON()
}