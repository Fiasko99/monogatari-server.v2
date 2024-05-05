module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('area', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'areas_id_index',
        fields: ['id']
      },
      {
        name: 'areas_regionId_index',
        fields: ['regionId']
      },
    ]
  })

  table.associate = function (models) {
    table.belongsTo(models.region, {
      foreignKey: 'regionId',
      as: 'region',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.location, {
      foreignKey: 'areaId',
      as: 'locations',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}