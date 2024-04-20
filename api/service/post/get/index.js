const ApiError = require('@exception')
const { post } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await post.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}