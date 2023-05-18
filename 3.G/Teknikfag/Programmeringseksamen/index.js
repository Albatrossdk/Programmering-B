//Fortæl udvikleren i konsollen, at Node nu kører "index.js" koden
console.log('Node script now running')

//Webserver med Express
//Hent biblioteket express og gem objektet i en konstant
const express = require('express')
//Initaliser app objektet
const app = express()
//Definer en port
const port = 666
//Start en webserver på port 666
const server = app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
})
//Serving public folder to clients at the endpoint "/"
app.use('/', express.static('public'))


//Websockets
//Hent biblioteket socket.io og gem det i en konstant.
const socketLib = require('socket.io')
//Opret en server websocket
const serverSocket = socketLib(server)
//Når serversocketen, har oprettet forbindelse til en klient socket (Eventbaseret asynkront):
serverSocket.sockets.on('connection', socket => {
    //Fortæl 
    console.log('new socket connection established')
})


//UDP PROTOCOL:
//Hent UDP biblioteket "dgram" og gem i en konstant
const dgram = require('dgram');
//Opret en udpsocket, der anvender udp4, og gem den i konstanten "udpserver"
const udpserver = dgram.createSocket('udp4');
//Hent biblioteket ip
const ip = require('ip')
//Sæt en variabel til at være lig med den ip adresse som node scriptet kører på
const udpHOST = ip.address()
//Definer en UDPPORT
const udpPORT = 3000;
//Sæt serversidens updsocket til at køre på vores definerede Port og IP adresse
udpserver.bind(udpPORT, udpHOST);

//Lyt efter når udpserveren modtager beskeder, og udfør kode, med de to parametre msg og rinfo
//"msg" indeholder beskeden sendt med udp protokollen
//"rinfo" indeholder information omkring hvem der har sendt information til "udpserver"
udpserver.on('message', (msg, rinfo) => {
    //Fortæl udvikleren hvem der har sendt beskeden, samt beskeden i konsollen
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
    //Med socket.io sender vi beskeden vi har modtaget med udp, til alle vores klienter, på emnet "movement"
    serverSocket.sockets.emit('movement', `${msg}`)
});

//Basal error handling, når udpserveren (udpsocketen) oplever en fejl: 
udpserver.on('error', (err) => {
    //Fortæl udvikleren information omkring fejlen i konsollen
    console.error(`server error:\n${err.stack}`);
    //Luk web-serveren der køres med Express
    server.close();
  });