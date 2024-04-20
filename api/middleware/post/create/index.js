const ApiError = require('@exception')
const { maxTextLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { characterName, locationName, text } = req.body

  !characterName && next(ApiError.InputError('Пустое поле имени персонажа'))
  !locationName && next(ApiError.InputError('Пустое поле имени локации'))
  !text && next(ApiError.InputError('Пустое текстовое поле'))
  text.length > maxTextLength && next(ApiError.InputError(`Длина текста должна быть не более ${maxTextLength}`))

  next()
}