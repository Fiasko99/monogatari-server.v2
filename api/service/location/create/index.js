const { location } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData) => {
  const isExist = await location.get({ name: newData.name })
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await location.create(newData)
  
  return data
}