const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.get({...req.params, active: true})
    return res.json(data)
  } catch (e) {
    next(e)
  }
}