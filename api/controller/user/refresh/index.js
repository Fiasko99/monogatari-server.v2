const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const userData = await user.get({nickname: req.user.nickname})
    const { 
      accessToken, 
      refreshToken 
    } = token.pairGeneration(userData)
    res.cookie(
      'refreshToken', 
      refreshToken, 
      {maxAge: 28 * 24 * 60 * 60 * 1000, httpOnly: true}
    )
    return res.json({ userData: userData, accessToken })
  } catch (e) {
    next(e)
  }
}