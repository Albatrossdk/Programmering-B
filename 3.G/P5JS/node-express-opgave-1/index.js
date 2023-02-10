//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til expreessserveren
const app = express()
//definer en port
const port = 2500
//Vi laver en meget simpel database
const misInformation = {
     'frederik': 'Frederik er sej (Misinformation)',
     'theis': 'Theis har gode øjne (Misinformation)',
     'john': 'John kussekvinde (Misinformation)',
     'viktor': 'Viktor er god til ikke at ødelægge ting når han er fuld (Misinformation)',
     'simmoe': 'Simmoe er ikke verdens bedste lærer (Misinformation)',
     'helmut': 'Helmut er hvid (Misinformation)',
     'bjørn': 'Bjørn har en lille pik (Misinformation)',
     'palme': 'Palme er ikke gud (Misinformation)',
     'bjarke': 'Bjarkes nøgne far er ikke lækker (Misinformation)'
}

//serve en statisk mappe
app.get('/', express.static('public'))



app.get('/api/*', (req, res)=>{
    console.log('serveren fik besøg i roden')
    if(req.params[0]){
        console.log('WOW! nogle vil bruge vores api: ' + req.params[0])
        if(misInformation[req.params[0]]){
            res.send(misInformation[req.params[0]])
        }else if(req.params[0] == 'information'){
            res.send('Information: Du kan finde (mis)information på disse endpoints: frederik, theis, john, viktor, simmoe, helmut, bjørn, palme, bjarke')
        }else{
            res.send('\'' + req.params[0] + '\'' + ' is NOT an api endpoint. Go to this link for list of api endpoints: shorturl.at/ahiK9')
        }
    }else{
        res.send('Du besøgte mig i min rod!!')
    }
})

//start en webserver på port 2500
app.listen(port, ()=>{
    console.log('server lytter på port: ' + port)
})
