const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.getAll(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}