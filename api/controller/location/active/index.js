const { location } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await location.active()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}