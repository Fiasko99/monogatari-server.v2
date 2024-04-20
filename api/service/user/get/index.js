const ApiError = require('@exception')
const { user } = require('@api/repository')

module.exports = async (reqParams, tokenData) => {
  const userSelf = reqParams.nickname === tokenData.nickname
  const data = await user.get(reqParams, {userSelf})
  if (!data) {
    throw ApiError.NotFound()
  }

  delete data.login
  delete data.password

  return data
}