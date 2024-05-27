const ApiError = require('@exception')
const { activeLocations } = require('@api/repository')

module.exports = async () => {
  const data = await activeLocations.getAll()
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}