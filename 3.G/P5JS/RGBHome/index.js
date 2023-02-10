let data
let once

function setup(){
    noCanvas()
    client = mqtt.connect('wss://mqtt.nextservices.dk') 
    select('#redslider').changed(mqttPublish)
    select('#greenslider').changed(mqttPublish)
    select('#blueslider').changed(mqttPublish)
}


function mqttPublish(){
    data = select('#redslider').value() + ',' + select('#greenslider').value() + ',' + select('#blueslider').value()
    console.log(data)
    client.publish('RGBHome', data)
}


