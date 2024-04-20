const { character } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newCharacter) => {
  const characterExist = await character.get({ name: newCharacter.name })
  if (characterExist) {
    throw ApiError.AlreadyExist()
  }

  const data = await character.create(newCharacter)
  
  return data
}