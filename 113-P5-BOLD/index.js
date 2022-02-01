let x, y, diameter
let gravity = 1
let friction = 0.99
let velocity = 0
let jump = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 13
let score = 0
let randomizer = 50
let lives = 3
let once = true
let once2 = true
let fr = 60
let offset

//highscore
var highscore = localStorage.getItem("highscore")

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(fr)
    background('cornflowerblue')
    diameter = 32
    x = windowWidth/2
    y = diameter/2
    rectW = 60
    rectH = round(windowHeight/2.888) //250 on laptop screen 
    rectX = windowWidth - rectW
    rectY = windowHeight - rectH
    lives = 3
    offset = round(windowHeight/12.03) //60 on laptop screen
    console.log('Window height: '+windowHeight)
    console.log('Rectangle height: '+rectH)
    console.log('Offset: '+offset)

    select('#highscore').html('Highscore: ' + localStorage.highscore)
}

function showRect(){
    fill('lightgreen')
    rect(rectX,rectY - offset,rectW,rectH + offset)
    rect(rectX,0,rectW,rectH - offset)
}

function updateRect(){
    rectX -= rectSpeed
    if(rectX <= 0 - rectW){
        rectX = windowWidth
        //rectH = random(200, 300)
        rectY = windowHeight - rectH
        once = true
        once2 = true
        offset = random(windowHeight/-3.61, windowHeight/3.61) //-200 to 200 on laptop screen
    }
    /*if(rectX == windowWidth/2){
        score++
    }*/
    if (rectX > windowWidth/2 - rectW/2 && rectX < windowWidth/2 + rectW/2 && once2) {
        score++
        console.log('Offset: '+round(offset))
        once2 = false
        console.log(localStorage.highscore)
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
        if(!alert('You smashed into the ground, YOU LOST!')){window.location.reload();}
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
    select('#info').html('Lives: ' + lives + '<br>' + ' Score: ' + score)
    collision()
    //console.log(frameCount)
    speedIncreaser()    
    setHighScore()
}

function keyPressed(key){
    //console.log(key)
    if(key.key == ' '){
        velocity -= jump
    }
}

function collision(){
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > rectY - offset) && (y < rectY + rectH + offset) && (once))){
        //if(!alert('You lost')){window.location.reload();}     
        lives--
        score--
        once = false    
        console.log('bottom')
    }
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > 0) && (y < 0 + rectH - offset) && (once))){
        //if(!alert('You lost')){window.location.reload();}
        lives--
        score--
        once = false
        console.log('top')
    }
    //else(once = true)W

    //lifechecker
    if(lives == 0){
        if(!alert('Out of lives, YOU LOST!')){window.location.reload();}
        x = 0
        lives = 3
    }

}

function setHighScore(){
    select('#highscore').html('Highscore: ' + localStorage.highscore)
    if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem("highscore", score);     
        }
    }
    else{
        localStorage.setItem("highscore", score)
    }
}

function speedIncreaser(){
    if(frameCount % 500 == 0){
        rectSpeed = rectSpeed + 0.5
        console.log('material gourl')
        console.log('Speed: '+round(rectSpeed, 3))
        select('#speed').style('opacity','1')
    }
    if(frameCount % 550 == 0){
        select('#speed').style('opacity','0')
    }
}