const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const userData = await user.signup(req.body)
    const { 
      accessToken, 
      refreshToken 
    } = token.pairGeneration(userData)

    res.cookie(
      'refreshToken', 
      refreshToken,
      {maxAge: 28 * 24 * 60 * 60 * 1000, httpOnly: true}
    )
    return res.json({ userData, accessToken })
  } catch (e) {
    next(e)
  }
}