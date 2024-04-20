const { post } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData) => {
  const isExist = await post.get(
    { 
      characterName: newData.characterName,
      locationName: newData.locationName,
      text: newData.text,
    }
  )
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await post.create(newData)
  
  return data
}