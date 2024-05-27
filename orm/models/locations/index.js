module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('locations', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    areaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'locations_id_index',
        fields: ['id']
      },
      {
        name: 'locations_areaId_index',
        fields: ['areaId']
      }
    ]
  })

  table.associate = function (models) {
    table.belongsTo(models.areas, {
      foreignKey: 'areaId',
      as: 'area',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.posts, {
      foreignKey: 'locationId',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.activeLocations, {
      foreignKey: 'locationId',
      as: 'activeLocation',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}