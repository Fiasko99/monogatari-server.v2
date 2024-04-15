const { user } = require('@api/repository')
const ApiError = require('@exception')
const bcrypt = require('bcrypt')

module.exports = async (newUser) => {
  const userExist = await user.get({ login: newUser.login })
  if (userExist) {
    throw ApiError.AlreadyExist()
  }

  const salt = parseInt(process.env.SALT);
  const hashPassword = bcrypt.hashSync(newUser.password, salt);
  const data = await user.create({
    ...newUser, password: hashPassword,
  });
  
  delete data.login
  delete data.password
  
  return data
}