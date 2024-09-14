const bcrypt = require('bcrypt')

const randomInteger = (max) => {
  let rand = 0.5 + Math.random() * max
  return Math.round(rand)
}
const COUNTREGIONS = 1
const COUNTAREAS = 3
const COUNTLOCATIONS = 50
const COUNTUSERS = 1
const COUNTCHARACTERS = 2
const COUNTPOSTS = 100

const createUsers = async (db) => {
  const count = await db.users.count({ distinct: 'nickname' })
  if (count >= COUNTUSERS) {
    console.info('Загрузка пользователей не требуется');
    return
  }
  const salt = parseInt(process.env.SALT)
  for (let i = 1; i <= COUNTUSERS; i++) {
    const elem = { login: `user${i}`, nickname: `user${i}`, password: bcrypt.hashSync(`user${i}`, salt), email: `${i}@mail.ru` }
    await db.users.create(elem)
  }
  console.info('Пользователи загружены');
}

const createCharacters = async (db) => {
  const count = await db.characters.count({ distinct: 'id' })
  if (count >= COUNTCHARACTERS) {
    console.info('Загрузка персонажей не требуется');
    return
  }
  for (let i = 1; i <= COUNTCHARACTERS; i++) {
    const elem = { name: `character${i}`, userNickname: `user${randomInteger(COUNTUSERS)}` }
    await db.characters.create(elem)
  }
  console.info('Персонажи загружены');
}

const createRegions = async (db) => {
  const count = await db.regions.count({ distinct: 'id' })
  if (count >= COUNTREGIONS) {
    console.info('Загрузка регионов не требуется');
    return
  }
  for (let i = 1; i <= COUNTREGIONS; i++) {
    const elem = { 
      name: `Region${i}`, 
      image: '/default/background.png'
    }
    await db.regions.create(elem)
  }
  console.info('Регионы загружены');
}

const createAreas = async (db) => {
  const count = await db.areas.count({ distinct: 'id' })
  if (count >= COUNTAREAS) {
    console.info('Загрузка областей не требуется');
    return
  }
  for (let i = 1; i <= COUNTAREAS; i++) {
    const elem = { 
      name: `Area${i}`, 
      regionId: randomInteger(COUNTREGIONS)
    }
    await db.areas.create(elem)
  }
  console.info('Области загружены');
}

const createLocations = async (db) => {
  const count = await db.locations.count({ distinct: 'id' })
  if (count >= COUNTLOCATIONS) {
    console.info('Загрузка локаций не требуется');
    return
  }
  for (let i = 1; i <= COUNTLOCATIONS; i++) {
    const elem = { 
      name: `Location${i}`, 
      areaId: randomInteger(COUNTAREAS)
    }
    await db.locations.create(elem)
  }
  console.info('Локации загружены');
}

const createPosts = async (db) => {
  const count = await db.posts.count({ distinct: 'id' })
  if (count >= COUNTPOSTS) {
    console.info('Загрузка постов не требуется');
    return
  }
  for (let i = 1; i <= COUNTPOSTS; i++) {
    const elem = { 
      characterId: randomInteger(COUNTCHARACTERS), 
      locationId: randomInteger(COUNTLOCATIONS), 
      text: String(randomInteger(COUNTLOCATIONS + COUNTCHARACTERS)) + "В то время как такие разговоры происходили в приемной и в княжниной комнатах, карета с Пьером (за которым было послано) и с Анной Михайловной (которая нашла нужным ехать с ним) въезжала во двор графа Безухова. Когда колеса кареты мягко зазвучали по соломе, настланной под окнами, Анна Михайловна, обратившись к своему спутнику с утешительными словами, убедилась в том, что он спит в углу кареты, и разбудила его. Очнувшись, Пьер за Анной Михайловной вышел из кареты и тут только подумал о том свидании с умирающим отцом, которое его ожидало. Он заметил, что они подъехали не к парадному, а к заднему подъезду. В то время как он сходил с подножки, два человека в мещанской одежде торопливо отбежали от подъезда в тень стены. Приостановившись, Пьер разглядел в тени дома с обеих сторон еще несколько таких же людей. Но ни Анна Михайловна, ни лакей, ни кучер, которые не могли не видеть этих людей, не обратили на них внимания. Стало быть, это так нужно, решил сам с собой Пьер и прошел за Анною Михайловной. Анна Михайловна поспешными шагами шла вверх по слабо освещенной узкой каменной лестнице, подзывая отстававшего за ней Пьера, который, хотя и не понимал, для чего ему надо было вообще идти к графу, и еще меньше, зачем ему надо было идти по задней лестнице, но, судя по уверенности и поспешности Анны Михайловны, решил про себя, что это было необходимо нужно. На половине лестницы чуть не сбили их с ног какие-то люди с ведрами, которые, стуча сапогами, сбегали им навстречу. Люди эти прижались к стене, чтобы пропустить Пьера с Анною Михайловной, и не показали ни малейшего удивления при виде их."
    }
    await db.posts.create(elem)
  }
  console.info('Посты загружены');
}

module.exports = async (db) => {
  console.info("Загрузка тестовых данных")
  await createUsers(db)
  await createCharacters(db)
  await createRegions(db)
  await createAreas(db)
  await createLocations(db)
  await createPosts(db)
}