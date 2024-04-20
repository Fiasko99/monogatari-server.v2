const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await character.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
};