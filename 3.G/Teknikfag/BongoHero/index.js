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
const server = app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
})
app.use('/', express.static('public'))


//Opret en server websocket
const socketLib = require('socket.io')
const serverSocket = socketLib(server)

serverSocket.sockets.on('connection', socket => {
    console.log('new socket connection established')
})


//UDP PROTOCOL:
const dgram = require('dgram');
const udpserver = dgram.createSocket('udp4');

const udpPORT = 3000;
const udpHOST = ip.address();

udpserver.bind(udpPORT, udpHOST);


udpserver.on('message', (msg, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
    serverSocket.sockets.emit('movement', `${msg}`)
});

udpserver.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    server.close();
  });


//MQTT

const mqtt = require("mqtt")

client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {        
        //published ip on bongoip mqtt subject
        client.publish('bongoip',ip.address())
    })