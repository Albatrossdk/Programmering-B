let client 
let info 

function setup(){
    info = select('#info')
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {
        info.html('lort')
        
        client.subscribe('moodT')
    })
}

function draw(){
    if('message' = glad){
        select(main).style.backgroundColor = "red"
    }
}