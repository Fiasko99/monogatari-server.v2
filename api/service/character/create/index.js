const { character, user } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData, nickname) => {
  console.log(newData);
  const isExist = await character.get({ name: newData.name })
  if (isExist) {
    throw ApiError.AlreadyExist()
  }
  
  const userData = await user.get({nickname}, {attributes: ['login']})
  const characterData = {
    ...newData,
    userLogin: userData.login
  }
  const data = await character.create(characterData)
  
  return data
}