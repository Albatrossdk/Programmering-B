let x, y, diameter
let gravity = 1
let friction = .97   
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0
let bird1, bird2, bird3, bird4, bird5
const animRate = 50

function preload() {
    bird1 = loadImage('assets/Bird1.png');
    bird2 = loadImage('assets/Bird2.png');
    bird3 = loadImage('assets/Bird3.png');
    bird4 = loadImage('assets/Bird4.png');
    bird5 = loadImage('assets/Bird5.png');
  }

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('green')
    x = windowWidth/2
    diameter = 334
    y = diameter/2
    rectW = 20
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
}

function showRect(){
    rect(rectX, rectY, rectW, rectH)
    rect(rectX, 0, rectW, rectH)
}

function updateRect(){
    rectX -= rectSpeed 
    if(rectX <= 0){
        rectX = windowWidth
        rectH = random(300, 600)
        rectY = windowHeight - rectH  
    }
}

function show(){
    ellipseMode(CENTER)
    ellipse(x, y, diameter)
    imageMode(CENTER)
    let a = frameCount % animRate / 10
    if(a <= 1)image(bird1, x, y)
    if(a >= 1 && a < 2)image(bird2, x, y)
    if(a >= 2 && a < 3)image(bird3, x, y)
    if(a >= 3 && a < 4)image(bird4, x, y)
    if(a >= 4 && a < 5)image(bird5, x, y)
    
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity 

    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }
    if(y < 0 + diameter/2){
        y = 0 + diameter/2
        velocity = 0
        score += 4
    }
}


function collision(){
    /*let d = dist(x, y, rectX, rectY)
    if( d < diameter/2){
        score -= 1
    }*/

    if(x > rectX && rectX + rectW){
        if(y < rectH || y > windowHeight - rectH){
            score -= 1
        }
    }

}

function draw(){
    background('green')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
}

function keyPressed(key){
    if(key.key == ' '){
        velocity -= updrift
    }
}
