module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('character', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    userNickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: 'characters_id_index',
        fields: ['id']
      },
      {
        name: 'characters_userNickname_index',
        fields: ['userNickname']
      }
    ]
  })

  table.associate = function (models) {
    table.belongsTo(models.user, {
      foreignKey: 'userNickname',
      as: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.post, {
      foreignKey: 'characterId',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  table.addHooks = function(models) {
    table.beforeUpdate(async (data, options) => {
      const { userNickname, active } = data
      const { fields } = options
      if (fields.includes('active') && active) {
        const character = await models.character.findOne({
          where: { userNickname, active }
        })
        character && character.update({ active: false })
      }
      return Promise.resolve()
    })
  }

  return table
}