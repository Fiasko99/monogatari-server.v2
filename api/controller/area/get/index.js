const { area } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await area.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}