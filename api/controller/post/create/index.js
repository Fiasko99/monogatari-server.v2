const { post } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await post.create(req.body);
    return res.json(data)
  } catch (e) {
    next(e)
  }
};