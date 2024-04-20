const ApiError = require('@exception')
const { minNameLength } = require('@api/middleware/constants.js')

module.exports = async (req, _, next) => {
  const { name } = req.body;

  !name && next(ApiError.InputError('Пустые поле логина'))
  name < minNameLength && next(ApiError.InputError(`Длина имени должна быть не менее ${minNameLength}`))

  next();
};