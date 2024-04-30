const { db } = require('@db')

module.exports = async (where) => {
  const data = await db.location.findOne(
    {
      where,
      include: [
        {
          model: db.post,
          as: 'posts',
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

  return data && data.toJSON()
}