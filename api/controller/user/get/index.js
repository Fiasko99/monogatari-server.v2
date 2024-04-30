const { user } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const userData = await user.get(req.params)
    return res.json(userData)
  } catch (e) {
    next(e)
  }
}