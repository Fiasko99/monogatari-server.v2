const { area } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData) => {
  const isExist = await area.get({ name: newData.name })
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await area.create(newData)
  
  return data
}