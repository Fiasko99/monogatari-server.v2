const ApiError = require('@exception')
const { region } = require('@api/repository')

module.exports = async () => {
  const data = await region.getAll()
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}