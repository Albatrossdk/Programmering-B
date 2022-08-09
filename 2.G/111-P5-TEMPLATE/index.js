function setup(){
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('pink')
    select('#info').html('Sådan her skriver man noget i HTML dokumentet')
}

function draw(){
    //mouseX mouseY frameCount map
}


function mousePressed(){
    select('#info').html('🍆🥺✨😳💕😍🤤🏳‍🌈🥵')
}

function mouseReleased(){
    select('#info').html('Sådan her skriver man noget i HTML dokumentet')
}

function keyPressed(event){
    select('#info').html('You pressed: ' + event.key)
}

function keyReleased(){
    select('#info').html('Sådan her skriver man noget i HTML dokumentet')
}