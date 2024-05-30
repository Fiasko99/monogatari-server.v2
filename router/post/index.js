const { Router } = require('express')
const { post } = require('@api/controller')
const { post: postMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, postMiddleware.create, post.create)
router.get('/character/:characterId', post.getAll)
router.get('/location/:locationId', post.getAll)
router.get('/count/character/:characterId', post.getCount)
router.get('/count/location/:locationId', post.getCount)

module.exports = router