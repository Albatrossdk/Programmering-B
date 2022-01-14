let x, y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let jump = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 12
let score = 0
let randomizer = 50

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(120)
    background('cornflowerblue')
    diameter = 32
    x = windowWidth/2
    y = diameter/2
    rectW = 60
    rectH = 200
    rectX = windowWidth - rectW
    rectY = windowHeight - rectH
}

function showRect(){
    fill('lightgreen')
    rect(rectX,rectY,rectW,rectH)
    rect(rectX,0,rectW,rectH)
}

function updateRect(){
    rectX -= rectSpeed
    if(rectX <= 0 - rectW){
        rectX = windowWidth
        rectH = random(200, 360)
        rectY = windowHeight - rectH
    }
    if(rectX == windowWidth/2){
        score++
    }
}

function show(){
    fill('yellow')
    ellipse(x, y, diameter)
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity
    
    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
        if(!alert('You lost')){window.location.reload();}
    }
    if(y < 0){
        y = windowHeight/2
        if(!alert('You lost')){window.location.reload();}
        x = 0
    }
    
}

function draw(){
    background('cornflowerblue')
    show()
    update()   
    showRect()
    updateRect()
    select('#info').html(round(score))
    collision()

    
}

function keyPressed(key){
    //console.log(key)
    if(key.key == ' '){
        velocity -= jump
    }
}

function collision(){
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > rectY) && (y < rectY + rectH))){
        x = 0
        if(!alert('You lost')){window.location.reload();}        
    }
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > 0) && (y < 0 + rectH))){
        x = 0
        if(!alert('You lost')){window.location.reload();}        
    }

}
