const { Router } = require('express');
const autoImports = require('@helpers/autoImports')
const router = new Router();

const listRouters = autoImports(__dirname)
Object.entries(listRouters).forEach(([routerName, route]) => {
  router.use(`/${routerName}`, route)
})

module.exports = router;
