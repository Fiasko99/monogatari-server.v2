const { character } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData) => {
  const isExist = await character.get({ name: newData.name })
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await character.create(newData)
  
  return data
}