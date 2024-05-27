const { activeLocations } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await activeLocations.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}