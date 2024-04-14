const ApiError = require('@exception')
const { minLoginLength, minPasswordLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { login, password } = req.body;
  if (!login || !password) {
    next(ApiError.InputError('Пустые поля логина и пароля'))
  }

  if (login.length < minLoginLength || password.length < minPasswordLength) {
    const message = `Длина логина должна быть не менее ${minLoginLength} а пароля не менее ${minPasswordLength}`
    next(ApiError.InputError(message))
  }

  next();
};