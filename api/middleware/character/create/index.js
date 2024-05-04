const ApiError = require('@exception')
const { minNameLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { name } = req.body

  !name && next(ApiError.InputError('Пустое поле имени'))
  typeof name !== 'string' && next(ApiError.InputError('Неверные данные в поле имени'))
  name.length < minNameLength && next(ApiError.InputError(`Длина имени должна быть не менее ${minNameLength}`))

  next()
}