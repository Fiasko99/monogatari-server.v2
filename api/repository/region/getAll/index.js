const { db } = require('@db')

module.exports = async () => {

  const data = await db.regions.findAll({
    include: [
      {
        model: db.areas,
        as: 'areas',
        include: [
          {
            model: db.locations,
            as: 'locations',
          }
        ]
      }
    ],
    order: [
      [
        'name',
        'ASC',
      ],
      [
        {
          model: db.areas,
          as: 'areas'
        },
        'name',
        'ASC',
      ],
      [
        {
          model: db.areas,
          as: 'areas'
        },
        {
          model: db.locations,
          as: 'locations'
        },
        'name',
        'ASC',
      ],
    ]
  })

  return data
}