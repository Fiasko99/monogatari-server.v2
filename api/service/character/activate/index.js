const { character, user } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (reqParams, nickname) => {
  const data = await character.update(
    {active: true}, 
    {
      ...reqParams, 
      userNickname: nickname
    }
  ).catch((err) => {
    throw ApiError.BadRequest(err)
  })
  
  return data
}