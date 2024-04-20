const { Router } = require('express')
const { post } = require('@api/controller')
const { post: postMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, postMiddleware.create, post.create)
router.get('/:name', post.get)

module.exports = router