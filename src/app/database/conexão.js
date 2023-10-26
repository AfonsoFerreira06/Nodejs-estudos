import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "toor",
    database: "db-apirest",
})

/**
 * 
 * @param {string} sql 
 * @param {string=id | [selecao, id]} values 
 * @param {string} rejectMensage 
 * @returns 
 */
export const promise = (sql, values = '', rejectMensage) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result) => {
            if (error) return reject(rejectMensage)

            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao