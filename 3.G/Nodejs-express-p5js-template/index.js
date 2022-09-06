console.log('Node script now running')
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())

//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//initaliser app objektet
const app = express()
//definer en port
const port = 666
//start en webserver på port 666
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
})

app.use('/', express.static('public'))

//opret et endpoint som returnerer serverens ip
app.get('/ip', (req, res)=>{
    res.json('Din ip er: ' + ip.address())
})