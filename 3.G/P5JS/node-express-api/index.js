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
const weekDays = {
    'mandag': 'Jeg har det... mandag agtigt. Er depressiv har lang dag og vil sikkert gerne dø.. bare en smule',
    'tirsdag': 'Solid dag, har det sgu egentligt meget fedt :)',
    'onsdag': 'Onsdage er meget onsdag-agtige, de ligger bare midt på ugen og eksisterer, hvorfor er de der dog?? Ikke godt ikke dårligt bare onsdag, mediocrity',
    'torsdag': 'JEG KAN SE LYSET!! Ugen er næsten slut og man kan virkelig ikke brokke sig, er lidt ked af det som sædvagentligt men vi lever',
    'fredag': 'ØL ØL ØL :D',
    'lørdag': 'Weekend! evt. lidt tømmermænd men har det sku hyggeligt nok har det meget fint :)',
    'søndag': 'Tjo, kan ikke brokke mig det er stadig weekend, men altså det er mandag i morgen T_T, men jo jo ok jeg hygger da'

}

app.get('/*', (req, res)=>{
    console.log('serveren fik besøg i roden')
    if(req.params[0]){
        console.log('WOW! nogle vil bruge vores api: ' + req.params[0])
        if(weekDays[req.params[0]]){
            res.send(weekDays[req.params[0]])
        }else{
            res.send('\'' + req.params[0] + '\'' + ' is NOT an api endpoint. Use one of the 7 days as an endpoint')
        }

    }else{
        res.send('Du besøgte mig i min rod!!')
    }
})

//start en webserver på port 2500
app.listen(port, ()=>{
    console.log('server lytter på port: ' + port)
})
