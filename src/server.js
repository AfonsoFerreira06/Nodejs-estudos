import app from './app.js'
import conexao from './app/database/conexão.js'

const port = 5050

conexao.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Conexão estabeleciada com sucesso!")

        app.listen(port, () => {
            console.log(`Servidor hospedado em http://localhost:${port}`)
        })
    }
})

