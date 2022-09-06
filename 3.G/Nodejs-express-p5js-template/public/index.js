function setup(){
    //fetch serve rip from node endpoint
    fetch('http://localhost:666/ip')
    .then(res => res.json())
    .then(ip => select('#info').html(ip))
}

function draw(){
    //mouseX mouseY frameCount map
}
