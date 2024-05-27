const { Router } = require('express')
const { activeLocations } = require('@api/controller')
const router = new Router()

router.get('/getAll', activeLocations.getAll)

module.exports = router