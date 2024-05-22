const express = require('express')
const app = express()
const PORT = 3000

const DBConnction = require('./database/connect')
DBConnction()

app.use(express.json())

const routers = require('./Routers/Router')
app.use(routers)

app.listen(PORT, () => {
    console.log('API rodando com sucesso')
})