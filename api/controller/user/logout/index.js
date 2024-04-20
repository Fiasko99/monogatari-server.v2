const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken')
    return res.end()
  } catch (e) {
    next(e)
  }
}