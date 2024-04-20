const ApiError = require('@exception')
const { character } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await character.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}