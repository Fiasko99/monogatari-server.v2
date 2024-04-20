const { Sequelize, DataTypes } = require('sequelize')
const models = require('./models')

const orm = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false
})

const db = {}

Object.entries(models).forEach(([modelName, instanceModel]) => {
  db[modelName] = instanceModel(orm, DataTypes)
})

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db)
  }
  if (model.addHooks) {
    model.addHooks(db)
  }
})

module.exports = {
  orm, db
}