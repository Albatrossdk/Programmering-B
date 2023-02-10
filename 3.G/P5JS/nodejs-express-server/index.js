console.log('Jeg er et nodejs script')

const express = require('express')
const app = express()
const port = 6950

app.get('/', (req, res)=>{
    res.send('Jeg ser dig!')
})

app.get('/itadmin/*', (req, res)=>{
    res.send('Der er hemmelig info: ' + req.params[0])
})

app.listen(port, ()=> {
    console.log('Express server is now running on port: ' + port)
})