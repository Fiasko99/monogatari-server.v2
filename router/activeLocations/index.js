const { Router } = require('express')
const { activeLocations } = require('@api/controller')
const router = new Router()

router.get('/getAll', activeLocations.getAll)
router.get('/count/getAll', activeLocations.getCount)

module.exports = router