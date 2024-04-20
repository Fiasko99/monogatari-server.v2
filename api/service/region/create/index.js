const { region } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData) => {
  const isExist = await region.get({ name: newData.name })
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await region.create(newData)
  
  return data
}