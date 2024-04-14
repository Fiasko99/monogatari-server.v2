const ApiError = require('@exception');

module.exports = (err, req, res, next) => {
  console.error(err);
  if (err instanceof ApiError) {
    const { status, message, errors } = err;
    return res.status(status).json({ message, errors })
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка' })
};