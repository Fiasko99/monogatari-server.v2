const { db } = require('@db')

module.exports = async (where) => {
  const query = {
    where,
    include: [
      {
        model: db.user,
        as: 'user'
      },
      {
        model: db.post,
        as: 'posts',
        include: [
          {
            model: db.location,
            as: 'location',
            include: [
              {
                model: db.area,
                as: 'area',
                include: [
                  {
                    model: db.region,
                    as: 'region'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  const data = await db.character.findOne(query)

  return data && data.toJSON()
}