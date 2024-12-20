module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('posts', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'posts_id_index',
        fields: ['id']   
      },
      {
        name: 'posts_characterId_index',
        fields: ['characterId']   
      }
    ]
  })

  table.associate = function (models) {
    table.belongsTo(models.locations, {
      foreignKey: 'locationId',
      as: 'location',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.characters, {
      foreignKey: 'characterId',
      as: 'character',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.activeLocations, {
      foreignKey: 'postId',
      as: 'activeLocation',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  table.addHooks = function(models) {
    table.afterCreate(async (data, options) => {
      const { id, locationId } = data
      const activeLocation = await sequelize.models.activeLocations.findOne({
        where: { locationId }
      })
      if (activeLocation) {
        await activeLocation.update({ postId: id }) 
      } else {
        await models.activeLocations.create({
          locationId,
          postId: id
        })
      }
      return Promise.resolve()
    })
  }

  return table
}