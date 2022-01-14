let x, y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let jump = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 12
let score = 0
let randomizer = 50
let lives = 10
let once = true
let fr = 60

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(fr)
    background('cornflowerblue')
    diameter = 32
    x = windowWidth/2
    y = diameter/2
    rectW = 60
    rectH = 200
    rectX = windowWidth - rectW
    rectY = windowHeight - rectH
    lives = 10
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
        rectH = random(200, 300)
        rectY = windowHeight - rectH
        once = true
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
        if(!alert('You touched the ground, YOU LOST!')){window.location.reload();}
    }
    if(y < 0){
        y = windowHeight/2
        if(!alert('You flew too close to the sun, YOU LOST!')){window.location.reload();}
        x = 0
    }
    
}

function draw(){
    background('cornflowerblue')
    show()
    update()   
    showRect()
    updateRect()
    select('#info').html(round(lives))
    collision()
    //console.log(frameCount)
    frameincreaser()    
}

function keyPressed(key){
    //console.log(key)
    if(key.key == ' '){
        velocity -= jump
    }
}

function collision(){
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > rectY) && (y < rectY + rectH) && (once))){
        //if(!alert('You lost')){window.location.reload();}     
        lives--
        once = false    
    }
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > 0) && (y < 0 + rectH) && (once))){
        //if(!alert('You lost')){window.location.reload();}
        lives--
        once = false
    }
    //else(once = true)

    //lifechecker
    if(lives == 0){
        if(!alert('Out of lives, YOU LOST!')){window.location.reload();}
        x = 0
        lives = 10
    }

}

function frameincreaser(){
    /*if(frameCount % 1000 == 0){
        frameRate(fr++)
        console.log('material gourl')
        console.log(fr)
    }*/
}
