const { user, token } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const tokenData = token.getTokenData(
      req.headers.authorization, 
      'access', 
      withErrors=false
    )
    const userData = await user.get(req.params, tokenData)
    return res.json(userData)
  } catch (e) {
    next(e)
  }
};