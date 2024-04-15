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
      defaultValue: false,
    }
  });

  return table;
};