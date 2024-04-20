module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('user', {
    login: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  })

  table.associate = function (models) {
    table.hasMany(models.character, {
      foreignKey: 'userLogin',
      as: 'characters',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}