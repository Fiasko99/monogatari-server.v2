const { db } = require('@db')

module.exports = async (where) => {
  const query = {
    where,
    include: [
      {
        model: db.users,
        as: 'user'
      },
      {
        model: db.posts,
        as: 'posts',
        include: [
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
        ]
      }
    ],
    order: [
      [
        {
          model: db.posts, 
          as: 'posts',
        },
        'createdAt', 
        'DESC'
      ]
    ],
  }
  const data = await db.characters.findOne(query)

  return data && data.toJSON()
}