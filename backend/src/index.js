const express = require('express')
// Importa módulo CORS para segurança
const cors = require('cors')
// Importa rotas do routes.js
const routes = require('./routes')

const app = express()

app.use(cors())
// Utilizando JSON
app.use(express.json())
// Utilizando rotas
app.use(routes)

app.listen(3333)
