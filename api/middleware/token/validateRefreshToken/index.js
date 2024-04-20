const { token } = require('@api/service')

module.exports = (req, res, next) => {
	const userData = token.getTokenData(
    req.cookies['refreshToken'], 
    'refresh', 
    true
  )
  delete userData.iat
  delete userData.exp
  req.user = userData
  next()
}