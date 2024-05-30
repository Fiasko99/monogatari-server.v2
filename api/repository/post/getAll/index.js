const { db } = require('@db')

module.exports = async (where, pagination) => {
  const { page = 1, limit = 10 } = pagination;

  const joinTables = [
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
  where.characterId && joinTables.push(
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
  )

  const data = await db.posts.findAll({
    where,
    include: joinTables,
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