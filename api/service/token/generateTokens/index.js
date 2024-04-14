const jwt = require('jsonwebtoken')

module.exports = (payload) => {
  const accessToken = jwt.sign(
    payload, 
    process.env.JWT_ACCESS_SECRET, 
    { expiresIn: '28d' }
  )
  const refreshToken = jwt.sign(
    payload, 
    process.env.JWT_REFRESH_SECRET, 
    { expiresIn: '14d' }
  )
  return {
    accessToken,
    refreshToken
  }
}