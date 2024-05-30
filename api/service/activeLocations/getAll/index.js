const ApiError = require('@exception')
const { activeLocations } = require('@api/repository')

module.exports = async (reqQuery) => {
  const data = await activeLocations.getAll(reqQuery)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}