module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('location', {
    areaName: {
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
    table.belongsTo(models.area, {
      foreignKey: 'areaName',
      as: 'area',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.post, {
      foreignKey: 'locationName',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}