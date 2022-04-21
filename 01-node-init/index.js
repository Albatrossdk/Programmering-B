console.log('Jeg er mies cumslut')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log('Now listening on port 3000')