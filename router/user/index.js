const Router = require('express')
const router = new Router()
const { user } = require('@api/controller')
const { user: userMiddleware } = require('@api/middleware')

router.post('/signin', userMiddleware.signin, user.signin)

module.exports = router