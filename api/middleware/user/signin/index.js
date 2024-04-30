const ApiError = require('@exception')
const { minLoginLength, minPasswordLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { login, password } = req.body

  !login && next(ApiError.InputError('Пустое поле логина'))
  !password && next(ApiError.InputError('Пустое поле пароля'))
  typeof login !== 'string' && next(ApiError.InputError('Неверные данные в поле логина'))
  typeof password !== 'string' && next(ApiError.InputError('Неверные данные в поле пароля'))
  login.length < minLoginLength && next(ApiError.InputError(`Длина логина должна быть не менее ${minLoginLength}`))
  password.length < minPasswordLength && next(ApiError.InputError(`Длина пароля должна быть не менее ${minPasswordLength}`))

  next()
}