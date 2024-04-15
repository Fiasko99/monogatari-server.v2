const ApiError = require('@exception');
const { token } = require('@api/service');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
      next(ApiError.UnauthorizedError())
  }

  const accessToken = authorizationHeader.split(' ')[1];
  if (!accessToken) {
      next(ApiError.EmptyToken())
  }
  
  const userData = token.validateToken(accessToken);
  if (!userData) {
      next(ApiError.WrongToken())
  }

  req.user = userData;
  next();
};