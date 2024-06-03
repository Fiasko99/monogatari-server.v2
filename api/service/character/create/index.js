const im = require('imagemagick');
const fs = require("fs");
const path = require("path");
const { character } = require('@api/repository')
const ApiError = require('@exception')

module.exports = async (newData, nickname) => {
  const isExist = await character.get({name: newData.name})
  if (isExist) {
    throw ApiError.AlreadyExist()
  }

  const image = newData.image
  const matches = image.split(',')
  const imageBuf = Buffer.from(matches[1], 'base64')
  const imageType = await new Promise((resolve, reject) => {
    im.identify({data:imageBuf.toString('binary')}, (err, features) => {
      if (err) return reject(err)
      return resolve(features.format)
    })
  }).catch(() => {
    throw ApiError.BadRequest('Файл не является изображением')
  })
  const nowDate = new Date()
  const relativePathToImage = `public/${nowDate.getFullYear()}/${nowDate.getMonth()}/${nowDate.getDate()}/${nowDate.getTime()}.${imageType}`
  const dirname = path.dirname(`assets/${relativePathToImage}`)
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, {recursive: true})
  }
  
  const isCreateImage = await new Promise((resolve, reject) => {
    im.resize({
      srcData: imageBuf,
      dstPath: `assets/${relativePathToImage}`,
      height: 256,
    }, (err) => {
      if (err) return reject(err)
      return resolve(true)
    })
  }).catch(() => {
    throw ApiError.BadRequest('Не удалось обработать файл')
  })
  
  delete newData.image

  const characterData = {
    ...newData,
    userNickname: nickname
  }
  
  if (isCreateImage) {
    characterData.avatar = `${process.env.CDN_URL}/${relativePathToImage}`
  }

  const data = await character.create(characterData)
  
  return data
}