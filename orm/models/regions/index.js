module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('regions', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    table.hasMany(models.areas, {
      foreignKey: 'regionId',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}