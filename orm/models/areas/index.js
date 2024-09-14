module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('areas', {
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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
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
    table.belongsTo(models.regions, {
      foreignKey: 'regionId',
      as: 'region',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.locations, {
      foreignKey: 'areaId',
      as: 'locations',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}