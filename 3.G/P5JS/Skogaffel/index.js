let button
let client
let openState
let once

function setup(){
    noCanvas()
    button = select('#button')
    

    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {
        client.publish('skogaffel','Closed')
        openState = 'Closed'
        
    })

}

function draw(){
    button.mouseReleased(()=>{
        once = true
        console.log('Du har trykket på knappen!!')

        if (openState == 'Closed' && once){
            client.publish('skogaffel','Open')
            openState = 'Open'
            once = false
            console.log('Open')
        }else if (openState == 'Open' && once){
            client.publish('skogaffel','Closed')
            openState = 'Closed'
            once = false
            console.log('Closed')
        }

    })


}




