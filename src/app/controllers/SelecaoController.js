
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {
    async index(req, res) {
        // res.status(200).send(selecoes)
        const row = await SelecaoRepository.findAll(req)
        res.json(row)
    }
    async show(req, res) {
        // res.json(pesquisaPorId(req.params.id))
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
    async store(req, res) {
        // selecoes.push(req.body)
        // res.status(201).send('Seleção cadastrada com sucesso!')
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }
    async update(req, res) {
        // let index = buscaIndexSelecao(req.params.id)
        // selecoes[index].selecao = req.body.selecao
        // selecoes[index].grupo = req.body.grupo

        // res.json(selecoes)
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
        
    }
    async delete(req, res) {
        // let index = buscaIndexSelecao(req.params.id)
        // selecoes.splice(index, 1)
        // res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

export default new SelecaoController()