const { user } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const { nickname } = req.user
    const userData = await user.getProfile(nickname)
    return res.json(userData)
  } catch (e) {
    next(e)
  }
};