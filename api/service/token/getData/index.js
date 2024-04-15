const jwt = require('jsonwebtoken')

module.exports = (token, typeToken) => {
  const typesToken = {
    access: "JWT_ACCESS_SECRET",
    refresh: "JWT_REFRESH_SECRET",
  }
  const userData = jwt.verify(token, process.env[typesToken[typeToken]])
  
  return userData;
}