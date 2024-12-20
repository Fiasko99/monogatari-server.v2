// @config
require("module-alias/register")
require('dotenv').config()

// @external
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// @internal
const { orm, db } = require('@db')
const router = require('@router')
const { error } = require('@middleware')
const createTestData = require("./createTestData")
const port = process.env.PORT
const app = express()

app.use(express.json({limit: '2mb'}))
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true,
}))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))

app.use('/api', router)
app.use('/cdn', express.static('assets'))
app.use(error)

// const development = process.env.MODE === 'development'
const development = true

orm.sync({alter: true, force: development}).then(async () => {
  console.info("База данных подключена")
  development && await createTestData(db).then(() => {
    console.info('Тестовые данные загружены')
  })
  app.listen(port, () => {
    console.info(`Сервер запущен`)
    console.info(`Ссылка: http://localhost:${port}`)
  })
}).catch(e => console.error(e))
