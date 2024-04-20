const ApiError = require('@exception')
const { area } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await area.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}