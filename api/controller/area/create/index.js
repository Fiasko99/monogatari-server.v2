const { area } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await area.create(req.body);
    return res.json(data)
  } catch (e) {
    next(e)
  }
};