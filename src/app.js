import express from 'express'
const app = express()

const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suiça', grupo: 'G' },
    { id: 3, selecao: 'sérvia', grupo: 'G' },
    { id: 4, selecao: 'Camarões', grupo: 'G' }
]
app.get('/', (req, res) => {
    res.send('Eeeeps!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app