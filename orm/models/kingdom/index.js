module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('kingdom', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  table.associate = function (models) {
    table.hasMany(models.area, {
      foreignKey: 'kingdomName',
      as: 'areas',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return table;
};