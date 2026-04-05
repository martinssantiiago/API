/* ' ' */

import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res) => {

    console.log(req)

    res.send('ok post')
})

const objResponse = [
    {nome: 'andre', idade:18}
]

app.get('/usuarios', (req, res) => {
    res.send(objResponse)
})

app.listen(3000)