const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}