
var apidata

fetch('./apidata/apidata.json')
.then(res => res.json())
.then(json => {
    apidata = json
})

console.log('Jeg er et nodejs script')

const express = require('express')
const app = express()
const port = 6950

app.get('/', (req, res)=>{
    res.send('Jeg ser dig!')
})

app.get('/itadmin/', (req, res)=>{
    res.send('Dataen du bedte om: ' + apidata)
})

app.listen(port, ()=> {
    console.log('Express server is now running on port: ' + port)
})