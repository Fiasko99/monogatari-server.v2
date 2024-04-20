const { user } = require('@api/repository')
const ApiError = require('@exception')
const bcrypt = require('bcrypt')

module.exports = async ({login, password}) => {
  const attributes = [
    'nickname',  
    'email',  
    'createdAt',  
    'updatedAt', 
    'confirmed',
    'password'
  ]
  const data = await user.get(
    {login}, 
    {attributes}
  )
  if (!data) {
    throw ApiError.NotFound()
  }
  
  const equalPass = bcrypt.compareSync(password, data.password)
  if (!equalPass) {
    throw ApiError.InputError({ message: 'Неверный пароль' })
  }

  delete data.login
  delete data.password

  return data
}