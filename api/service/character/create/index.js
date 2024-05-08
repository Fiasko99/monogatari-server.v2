const { character, user } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData, nickname) => {
  const isExist = await character.get(newData)
  if (isExist) {
    throw ApiError.AlreadyExist()
  }
  
  const characterData = {
    ...newData,
    userNickname: nickname
  }
  const data = await character.create(characterData)
  
  return data
}