const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const userData = await user.signin(req.body)
    const { 
      accessToken, 
      refreshToken 
    } = token.pairGeneration(userData)

    res.cookie(
      'refreshToken', 
      `Bearer ${refreshToken}`, 
      {maxAge: 28 * 24 * 60 * 60 * 1000, httpOnly: true}
    )
    return res.json({ accessToken })
  } catch (e) {
    next(e)
  }
}