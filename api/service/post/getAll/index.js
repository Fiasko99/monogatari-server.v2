const ApiError = require('@exception')
const { post } = require('@api/repository')

module.exports = async (reqParams, reqQuery) => {
  const data = await post.getAll(reqParams, reqQuery)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}