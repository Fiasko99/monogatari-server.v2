const { db } = require('@db')
const { userAttributes } = require('@constants/attributes')

module.exports = async (pagination) => {
  const { page = 1, limit = 10 } = pagination;
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
                attributes: userAttributes,
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
    offset: (page - 1) * limit,
    limit
  })
  
  return data
}