const express = require(`express`)

 const app = express()

 const users = []

 app.post(`/user`, (req, res) => {
   
   console.log(req)
   
   res.send(`ok`)
 })

 app.get(`/user`, (req, res) => {
    res.send(`ok,deu bom`)
 })

app.listen(3000)