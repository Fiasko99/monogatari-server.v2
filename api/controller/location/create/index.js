const { location } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await location.create(req.body);
    return res.json(data)
  } catch (e) {
    next(e)
  }
};