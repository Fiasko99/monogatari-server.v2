const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.activate(req.params, req.user.nickname)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}