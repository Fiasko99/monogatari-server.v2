const ApiError = require('@exception')

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const { status, message, errors } = err
    return res.status(status).json({ message, errors })
  }
  console.error(err)
  return res.status(500).json({ message: 'Непредвиденная ошибка' })
}