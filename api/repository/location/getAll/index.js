const { db } = require('@db')

module.exports = async () => {
  const data = await db.location.findAll(
    {
      include: [
        {
          model: db.post,
          as: 'posts',
          limit: 1,
          include: [
            {
              model: db.character,
              as: 'character',
              include: [
                {
                  model: db.user,
                  attributes: ['nickname'],
                  as: 'user'
                }
              ]
            }
          ]
        },
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
    },
  )

  return data
}