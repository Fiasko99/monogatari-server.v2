const { activeLocations } = require('@api/repository')

module.exports = async () => {
  const data = await activeLocations.getCount()

  return data
}