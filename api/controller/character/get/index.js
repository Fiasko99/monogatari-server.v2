const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.get(req.paramss)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}