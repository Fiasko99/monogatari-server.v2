const ApiError = require('@exception')
const { user } = require('@api/repository')

module.exports = async (nickname) => {
  const data = await user.get({nickname})
  if (!data) {
    throw ApiError.NotFound()
  }

  delete data.login
  delete data.password

  return data
}