const { Router } = require('express')
const { character } = require('@api/controller')
const { character: characterMiddleware, token: tokenMiddleware } = require('@api/middleware')
const router = new Router()

router.post('/create', tokenMiddleware.validateAccessToken, characterMiddleware.create, character.create)
router.get('/activate/:id', tokenMiddleware.validateAccessToken, character.activate)
router.get('/:id', character.get)

module.exports = router