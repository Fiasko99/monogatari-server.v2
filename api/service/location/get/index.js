const ApiError = require('@exception')
const { location } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await location.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}