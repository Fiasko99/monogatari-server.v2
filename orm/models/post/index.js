module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('post', {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  table.associate = function (models) {
    table.belongsTo(models.location, {
      foreignKey: 'locationName',
      as: 'location',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    table.belongsTo(models.character, {
      foreignKey: 'characterName',
      as: 'character',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return table;
};