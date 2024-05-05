module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('location', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    table.belongsTo(models.area, {
      foreignKey: 'areaId',
      as: 'area',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.post, {
      foreignKey: 'locationId',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}