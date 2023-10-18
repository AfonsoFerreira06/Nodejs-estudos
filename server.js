import app from './src/app.js'
const port = 5050

app.listen(port, () => {
    console.log(`Servidor hospedado em http://localhost:${port}`)
})