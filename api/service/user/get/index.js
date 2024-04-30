const ApiError = require('@exception')
const { user } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await user.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  delete data.login
  delete data.password

  return data
}