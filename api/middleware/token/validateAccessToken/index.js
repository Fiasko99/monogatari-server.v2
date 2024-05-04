const { token } = require('@api/service')

module.exports = (req, res, next) => {
  const accessToken = req.headers.authorization || ''
	const userData = token.getTokenData(
    accessToken, 
    'access', 
    true
  )

  req.user = userData
  next()
}