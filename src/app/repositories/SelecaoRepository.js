import { promise } from "../database/conexão.js"

class SelecaoRepository {
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        // return new Promise((resolve, reject) => {
        //     conexao.query(sql, selecao, (error, result) => {
        //         if (error) return reject('Ops, algo deu errado')

        //         const row = JSON.parse(JSON.stringify(result))
        //         return resolve(row)
        //     })
        // })
        return promise(sql, selecao, 'Algo deu errado ao cadastrar, tente novemente.')
    }
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        // return new Promise((resolve, reject) => {
        //     conexao.query(sql, (error, result) => {
        //         if (error) return reject('Não foi possível localizar')

        //         const row = JSON.parse(JSON.stringify(result))
        //         return resolve(row)
        //     })
        // })
        return promise(sql, 'Não conseguimos localizar sua tabela')
    }
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE ID=?;"
        // return new Promise((resolve, reject) => {
        //     conexao.query(sql, id, (error, result) => {
        //         if (error) return reject('Não foi possível localizar')

        //         const row = JSON.parse(JSON.stringify(result))
        //         return resolve(row)
        //     })
        // })
        return promise(sql, id, 'Não conseguimos localizar a sua seleçã.')
    }
    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE ID=?;"
        // return new Promise((resolve, reject) => {
        //     conexao.query(sql, [selecao, id], (error, result) => {
        //         if (error) return reject(error)

        //         const row = JSON.parse(JSON.stringify(result))
        //         return resolve(row)
        //     })
        // })
        return promise(sql, [selecao, id], 'Erro ao atualizar.')
    }
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE ID=?;"
        // return new Promise((resolve, reject) => {
        //     conexao.query(sql, id, (error, result) => {
        //         if (error) return reject('Não foi possível deletar')

        //         const row = JSON.parse(JSON.stringify(result))
        //         return resolve(row)
        //     })
        // })
        return promise(sql, id, 'Erro ao deletar.')
    }
}

export default new SelecaoRepository()
