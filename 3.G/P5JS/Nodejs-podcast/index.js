console.log('Node script now running')
//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())
//Hent biblioteket socket.io for at lave en websocket
const socketLib = require('socket.io')
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
const serverSocket = socketLib(server)
app.use('/', express.static('public'))

app.get('/ip', (req, res)=>{
    res.json(
        {
            'ip' : ip.address(),
            'port' : port
        }
    )
})


serverSocket.sockets.on('connection', socket => {
    console.log('new socket connection established')
    
    socket.on('podcastLive', question =>{
        const now = new Date(); // get the current date and time
         // check if the date is March 21, 2023 and the time is between 18 and 20
        if (now.getFullYear() === 2023 && now.getMonth() === 2 && now.getDate() === 21 && now.getHours() >= 18 && now.getHours() < 20) {
            console.log("The current date and time meet the condition!");
            serverSocket.to(socket.id).emit('podcastLive', true)
        } else {
            console.log("The current date and time do not meet the condition.");
            serverSocket.to(socket.id).emit('podcastLive', false)
        }
    })

    //const date = new Date()
    //serverSocket.sockets.emit('date', date)
    


    //serverSocket.sockets.emit('msgHist', messageHistory)

    

})