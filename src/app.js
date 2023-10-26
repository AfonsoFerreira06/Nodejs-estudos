import express from 'express'
import router from './routes.js'

const app = express()

app.use(express.json())

// function pesquisaPorId(id) {
//     return selecoes.filter(selecao => selecao.id == id)
// }
// function buscaIndexSelecao(id) {
//     return selecoes.findIndex(selecao => selecao.id == id)
// }

app.use(router)

export default app