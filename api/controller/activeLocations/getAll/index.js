const { activeLocations } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await activeLocations.getAll(req.query)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}