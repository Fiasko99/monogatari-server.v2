const { post } = require('@api/service')

module.exports = async (req, res, next) => {
  try {
    const data = await post.getAll(req.params, req.query)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}