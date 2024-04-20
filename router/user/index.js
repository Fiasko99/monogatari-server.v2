const { Router } = require('express')
const { user } = require('@api/controller')
const { user: userMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/signin', userMiddleware.signin, user.signin)
router.post('/signup', userMiddleware.signup, user.signup)
router.get('/refresh', tokenMiddleware.validateRefreshToken, user.refresh)
router.get('/logout', tokenMiddleware.validateAccessToken, user.logout)
router.get('/:nickname', user.get)

module.exports = router