module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('region', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'regions_id_index',
        fields: ['id']   
      }
    ]
  })

  table.associate = function (models) {
    table.hasMany(models.area, {
      foreignKey: 'regionId',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}