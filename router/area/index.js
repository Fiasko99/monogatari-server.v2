const { Router } = require('express')
const { area } = require('@api/controller')
const { area: areaMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, areaMiddleware.create, area.create)
router.get('/:name', area.get)

module.exports = router