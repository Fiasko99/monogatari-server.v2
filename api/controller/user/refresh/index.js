const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const { 
      accessToken, 
      refreshToken 
    } = token.pairGeneration(req.user)
    res.cookie(
      'refreshToken', 
      refreshToken, 
      {maxAge: 28 * 24 * 60 * 60 * 1000, httpOnly: true}
    )
    return res.json({ userData: req.user, accessToken })
  } catch (e) {
    next(e)
  }
}