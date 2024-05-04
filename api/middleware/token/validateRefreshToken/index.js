const { token } = require('@api/service')

module.exports = (req, res, next) => {
  const refreshToken = req.cookies['refreshToken'] || ''
  res.clearCookie('refreshToken')
  const userData = token.getTokenData(
    `Bearer ${refreshToken}`, 
    'refresh', 
    true
  )
  delete userData.iat
  delete userData.exp
  req.user = userData
  next()
}