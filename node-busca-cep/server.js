const express = require('express')
const cors = require('cors')
const Correio = require('node-correios')
const correio = new Correio

const app = express()

const Port = 3001

app.use(cors())

app.listen(Port, () => console.log(`Server rodando na porta: ${Port}`))

app.get('/', (req, res) => {
    const { buscaCep } = req.query
    
    correio.consultaCEP({ cep: buscaCep })
    .then(result => {
        res.send(result)
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
})