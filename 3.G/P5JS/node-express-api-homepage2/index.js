//hent biblioteket IP 
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 2500
//vi laver en meget simpel database 

//serve en statisk mappe i roden 
app.use('/', express.static('public'))


// Hvis der kommer klienter der  
app.get('/api/naturkrafter', (req, res)=>{
    const obj ={
        'tyngdekraft':{
            'Effects': 'all particles with mass',
            'Force carrier particle': 'graviton (Not yet detected)'
        }
    }
    res.json(obj)

})
app.get('/api/begreber', (req, res)=>{
    res.send('Du er kommet til hval-API\'et')
})


app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 