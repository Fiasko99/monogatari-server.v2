const { post } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await post.getCount(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}