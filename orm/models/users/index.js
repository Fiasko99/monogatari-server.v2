module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('users', {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
      autoIncrement: false,
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    indexes: [
      {
        name: 'users_auth_index',
        fields: ['login', 'password']
      },
      {
        name: 'users_nickname_index',
        fields: ['nickname']
      }
    ]
  })

  table.associate = function (models) {
    table.hasMany(models.characters, {
      foreignKey: 'userNickname',
      as: 'characters',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}