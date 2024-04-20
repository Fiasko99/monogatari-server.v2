module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('area', {
    kingdomName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  table.associate = function (models) {
    table.belongsTo(models.kingdom, {
      foreignKey: 'kingdomName',
      as: 'kingdom',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    table.hasMany(models.location, {
      foreignKey: 'areaName',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return table;
};