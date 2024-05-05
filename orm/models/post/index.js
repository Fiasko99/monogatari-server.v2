module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'posts_id_index',
        fields: ['id']   
      },
      {
        name: 'posts_characterId_index',
        fields: ['characterId']   
      }
    ]
  })

  table.associate = function (models) {
    table.belongsTo(models.location, {
      foreignKey: 'locationId',
      as: 'location',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.character, {
      foreignKey: 'characterId',
      as: 'character',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}