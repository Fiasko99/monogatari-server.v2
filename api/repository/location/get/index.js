const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.locations.findOne(
    {
      where,
      include: [
        {
          model: db.posts,
          as: 'posts',
          include: [
            {
              model: db.characters,
              as: 'character',
              include: [
                {
                  model: db.users,
                  attributes: ['nickname'],
                  as: 'user'
                }
              ]
            }
          ]
        },
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
      ],
      order: [
        [
          {model: db.posts, as: 'posts'}, 
          'createdAt', 
          'DESC'
        ]
      ],
    },
  )

  return data && data.toJSON()
}