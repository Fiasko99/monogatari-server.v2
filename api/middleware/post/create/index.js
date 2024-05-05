const ApiError = require('@exception')
const { maxTextLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { characterId, locationId, text } = req.body

  !characterId && next(ApiError.InputError('Пустое поле имени персонажа'))
  !locationId && next(ApiError.InputError('Пустое поле имени локации'))
  !text && next(ApiError.InputError('Пустое текстовое поле'))
  text.length > maxTextLength && next(ApiError.InputError(`Длина текста должна быть не более ${maxTextLength}`))

  next()
}