let clientSocket
let state = 'enterName'

function setup(){
    createCanvas(windowWidth, windowHeight)
    background('green')
    
    fetch('http://localhost:666/ip')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            select('#info').html(data.ip)
        })
        //io kommer fra socket.io biblioteket som vi linker til i html filen
        clientSocket = io.connect()
        clientSocket.on('newMessage', message => {
            let p = createElement('p', message)
            select('#chat').child(p)
            select('#chat').elt.scrollTop = select('#chat').elt.scrollHeight
        })
        select('#nameButton').mousePressed(()=>{
            console.log('new user - send to server')
            clientSocket.emit('newUser', select('#name').value())
            select('#nameBox').addClass('hide')
            select('#chatBox').removeClass('hide')
        })
        
}

function draw(){
    
}

function keyPressed(){
    
    if(key == 'Enter'){
        let message = select('#message').value()
        if(message!=''){
            //emit tager et emne og noet data
            clientSocket.emit('chat', message)
            select('#message').value('')
        }
    }
}

function mousePressed(){

}
