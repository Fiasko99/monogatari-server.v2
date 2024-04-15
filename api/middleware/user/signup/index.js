const ApiError = require('@exception')
const { 
  minLoginLength, 
  minPasswordLength, 
  minNicknameLength, 
} = require('@api/middleware/constants.js')

const validateMail = (mail) => {
  const indexSymbolDog = mail.indexOf('@')
  const indexSymbolDot = mail.indexOf('.')
  const notLast = indexSymbolDog < mail.length
  const notFirstOrnotFound = indexSymbolDog > 0
  const notAfterDot = indexSymbolDog < indexSymbolDot
  return notFirstOrnotFound && notLast && notAfterDot
}

module.exports = async (req, _, next) => {
  const { 
    login, 
    password,
    nickname,
    email,
  } = req.body;

  !login && next(ApiError.InputError('Пустые поле логина'))
  !password && next(ApiError.InputError('Пустое поле пароля'))
  !nickname && next(ApiError.InputError('Пустое поле никнейма'))
  !email && next(ApiError.InputError('Пустое поле почты'))
  login.length < minLoginLength && next(ApiError.InputError(`Длина логина должна быть не менее ${minLoginLength}`))
  password.length < minPasswordLength && next(ApiError.InputError(`Длина пароля должна быть не менее ${minPasswordLength}`))
  nickname.length < minNicknameLength && next(ApiError.InputError(`Длина никнейма должна быть не менее ${minNicknameLength}`))
  !validateMail(email) && next(ApiError.InputError('Неверный формат почты'))

  next();
};