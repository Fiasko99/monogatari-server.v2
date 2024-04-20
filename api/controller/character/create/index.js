const { character } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const characterData = await character.create(req.body);
    return res.json(characterData)
  } catch (e) {
    next(e)
  }
};