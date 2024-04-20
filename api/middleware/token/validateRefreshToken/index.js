const { token } = require('@api/service');

module.exports = (req, res, next) => {
	const userData = token.getTokenData(req.headers, 'refresh', true)
  req.user = userData;
  next();
};