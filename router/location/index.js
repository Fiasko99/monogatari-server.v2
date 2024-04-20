const { Router } = require('express')
const { location } = require('@api/controller')
const { location: locationMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, locationMiddleware.create, location.create)
router.get('/:name', location.get)

module.exports = router