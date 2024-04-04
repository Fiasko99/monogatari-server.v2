const express = require('express')

const app = express();

app.get('/', (_, res) => {
    res.send('Скоро здесь появится функционал, но это не точно')
})

app.listen(3000)