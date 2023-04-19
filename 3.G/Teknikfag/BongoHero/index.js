console.log('Node script now running')
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())

//UDP PROTOCOL:
const dgram = require('dgram');
const udpserver = dgram.createSocket('udp4');

const udpPORT = 3000;
const udpHOST = '10.78.65.255';

udpserver.bind(udpHOST, ":", udpPORT);
console.log(udpHOST, ":", udpPORT)

udpserver.on('message', (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//initaliser app objektet
const app = express()

//definer en port
const port = 666
//start en webserver på port 666
const server = app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
})
// opret en server websocket
app.use('/', express.static('public'))
