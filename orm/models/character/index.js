module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('character', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
    userLogin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  })

  table.associate = function (models) {
    table.belongsTo(models.user, {
      foreignKey: 'userLogin',
      as: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.post, {
      foreignKey: 'characterName',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  table.addHooks = function(models) {
    table.beforeUpdate(async (data, options) => {
      const { userLogin, active } = data
      const { fields } = options
      if (fields.includes('active') && active) {
        const character = await models.character.findOne({
          where: { userLogin, active }
        })
        character && character.update({ active: false })
      }
      return Promise.resolve()
    })
  }

  return table
}