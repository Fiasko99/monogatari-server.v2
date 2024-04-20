module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('area', {
    regionName: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  })

  table.associate = function (models) {
    table.belongsTo(models.region, {
      foreignKey: 'regionName',
      as: 'region',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.location, {
      foreignKey: 'areaName',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}