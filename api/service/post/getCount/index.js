const { post } = require('@api/repository')

module.exports = async (reqParams) => {
  const data = await post.getCount(reqParams)

  return data
}