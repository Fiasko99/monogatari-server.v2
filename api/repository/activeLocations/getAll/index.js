const { db } = require('@db')

module.exports = async () => {
  const data = await db.activeLocations.findAll({
    include: [
      {
        model: db.posts,
        as: 'post',
        include: [
          {
            model: db.characters,
            as: 'character',
            include: [
              {
                model: db.users,
                as: 'user'
              }
            ]
          }
        ]
      },
      {
        model: db.locations,
        as: 'location',
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
      }
    ],
    order: [
      [
        'updatedAt',
        'DESC'
      ]
    ],
  })
  
  return data
}