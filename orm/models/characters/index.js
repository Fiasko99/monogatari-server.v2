module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('characters', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `${process.env.CDN_URL}/default/characterAvatar.svg`
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
    table.belongsTo(models.users, {
      foreignKey: 'userNickname',
      as: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.posts, {
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
        const character = await models.characters.findOne({
          where: { userNickname, active }
        })
        character && character.update({ active: false })
      }
      return Promise.resolve()
    })
  }

  return table
}