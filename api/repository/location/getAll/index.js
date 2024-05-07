const { db } = require('@db')

module.exports = async () => {
  const data = await db.locations.findAll(
    {
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
      ]
    },
  )


  return data
}