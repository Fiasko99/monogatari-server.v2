const { Router } = require('express')
const { user } = require('@api/controller')
const { user: userMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/signin', userMiddleware.signin, user.signin)
router.post('/signup', userMiddleware.signup, user.signup)
router.get('/:nickname', user.get)
router.get('/refresh', tokenMiddleware.validateAccessToken, tokenMiddleware.validateRefreshToken)
router.get('/logout', tokenMiddleware.validateAccessToken)

module.exports = router