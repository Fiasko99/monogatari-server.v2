module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('activeLocations', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'active_location_id_index',
        fields: ['id']
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

    table.belongsTo(models.posts, {
      foreignKey: 'postId',
      as: 'post',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}