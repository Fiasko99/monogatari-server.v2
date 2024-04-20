module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('region', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  table.associate = function (models) {
    table.hasMany(models.area, {
      foreignKey: 'regionName',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return table;
};