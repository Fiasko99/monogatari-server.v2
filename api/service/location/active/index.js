const ApiError = require('@exception')
const { location } = require('@api/repository')

module.exports = async () => {
  const data = await location.getAll()
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}