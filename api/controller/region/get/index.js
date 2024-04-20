const { region } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await region.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}