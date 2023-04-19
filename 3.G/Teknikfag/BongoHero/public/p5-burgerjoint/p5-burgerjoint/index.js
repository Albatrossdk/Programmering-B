let x, y, diameter
let friction = .75   
let moveSpeed = 3
let velocityX = 0
let velocityY = 0
let rectH, rectW, rectX, rectY
let rectSpeed = 8
let score = 0
let gameStatus = true
let bullets = []
let face

function preload(){
    face = loadImage('assets/face.png')
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    
    background('lightblue')

    diameter = 120
    x = windowWidth/2
    y = windowHeight*0.8
    rectH = 60
    rectW = 60
    rectX = Math.random()*(windowWidth - rectW)
    rectY = 0

}

function draw(){

    if(gameStatus){
        background('lightblue')
        update()
        show()
        showRect()
        updateRect()
        collission()
        select('#info').html(Math.round(score))

    }else{
        background('black')
        if(keyIsDown(82)){
            location.reload()
        }
    }


}

function showRect(){
    rect(rectX, rectY, rectW, rectH)
}

function updateRect(){
    rectY += rectSpeed 
    if(rectY >= windowHeight){
        rectY = 0
        rectX = Math.random() * (windowWidth - rectW)
    }
}

function show(){
    ellipseMode(CENTER)
    imageMode(CENTER)
    image(face, x, y)
    // ellipse(x, y, diameter)
}

function update(){
    velocityX *= friction
    velocityY *= friction
    x += velocityX 
    y += velocityY 

    score += 1/60
    

    //player collision with walls
    if(x > windowWidth - diameter/2){
        x = windowWidth - diameter/2
    }
    if(x < diameter/2){
        x = diameter/2
    }

    //player collision with top and bot
    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
    }
    if(y < diameter/2){
        y = diameter/2
    }

    //movement controls
    if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
        velocityX = velocityX - moveSpeed
    }
    if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
        velocityX = velocityX + moveSpeed
    }
    if(keyIsDown(87) || keyIsDown(UP_ARROW)){
        velocityY = velocityY - moveSpeed
    }
    if(keyIsDown(83) || keyIsDown(DOWN_ARROW)){
        velocityY = velocityY + moveSpeed
    }


    for (var j = bullets.length - 1; j >= 0; j--) {
        bullets[j].display();
        bullets[j].move();
    
        if(bullets[j].y < y - windowHeight/2){
          bullets.splice(j,1);
          break;
        }

        if((bullets[j].x + bullets[j].r > rectX && bullets[j].x - bullets[j].r < rectX + rectW)&&(bullets[j].y + bullets[j].r > rectY && bullets[j].y - bullets[j].r < rectY+rectH)){
            rectY = -rectH
            rectX = Math.random() * (windowWidth - rectW)
        }
}}

function collission(){
    if((x + diameter/2 > rectX && x - diameter/2 < rectX + rectW)&&(y + diameter/2 > rectY && y - diameter/2 < rectY+rectH)){
            
         gameStatus = false
         select('#score').html('Score: ' + Math.round(score))   
         select('#deathMessage').html('You lost')   
         select('#refresh').html('Press R to try again!')   
        
    }
}



function keyPressed(){
    if(keyCode == 32){
        let b = new Bullet(x, y);
        bullets.push(b);

    }
}