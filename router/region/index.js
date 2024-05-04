const { Router } = require('express')
const { region } = require('@api/controller')
const { region: regionMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, regionMiddleware.create, region.create)
router.get('/all', region.getAll)
router.get('/:id', region.get)

module.exports = router