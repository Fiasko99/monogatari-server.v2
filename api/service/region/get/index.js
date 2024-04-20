const ApiError = require('@exception')
const { region } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await region.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}