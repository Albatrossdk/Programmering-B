let client
let info

//Flappy bird
let x, y, diameter
let gravity = 0
let friction = 0.99
let velocity = 0
let jump = 15
let rectX, rectY, rectW, rectH
let rectSpeed = 0
let score = 0
let randomizer = 50
let lives = 2
let once = true
let once2 = true
let fr = 60
let offset
let gamestarted
let once3

let video1
let losebutton

function preload(){
    video1 = createVideo('./assets/video1.mp4')
}

function setup(){
    //request fullscreen
    if (confirm("Accept fullscreen") == true) {
        select('body').elt.requestFullscreen()
        console.log('Fullscreen accepted')
      }

    //framerate på canvas
    frameRate(60)

    //Video1 lort
    video1.addClass('video')
    select('#page1').child(video1)
    video1.play()
    video1.loop()
    
    //Flappy bird gamerestart knap handling
    losebutton = select('#losebutton')
    losebutton.mouseClicked(restartgame)

    //Failsafe start video1
    video1.mouseClicked(()=>{
        console.log('klikket')
        video1.play()
    })
    
    
    
    //mqtt subscribtions, asynkron eventbaseret kode
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {        
        //code restart
        client.publish('coderestart','babadoobe')
        
        client.subscribe('video2') //Knap m5'er
        client.subscribe('flappybird') //Knap m5'er
        client.subscribe('flappybirdstart') //Gesture sensor m5'er
        client.subscribe('video4') //Lyspære m5'er
        
        client.on('message', (topic, message)=>{
            //Flappy bird
            if(topic == 'flappybird' && gamestarted == true){
                once3 = true
                if(once3 == true){
                    velocity -= jump
                    console.log('jump')
                    once3 = false
                }
            }else if(topic == 'flappybirdstart'){
                gamestarted = true
                gravity = 0.3
                rectSpeed = 4
                select('main').elt.scrollTo(windowWidth*2,0)
            }
            
            
            else if(topic == 'video2'){
                video1.pause()
                select('#video2').play()
                select('main').elt.scrollTo(windowWidth*1,0)
                
                console.log('video2')
                //
                
            }
            
            else if(topic == 'video4'){
                console.log('video4')
                select('#video4').play()
                select('main').elt.scrollTo(windowWidth*4,0)
            }
        })
    })


    //Flappy bird
    let canvas = createCanvas(windowWidth, windowHeight)
    let page3 = select('#page3')
    canvas.parent(page3)

    frameRate(fr)
    background('cornflowerblue')
    diameter = 32
    x = windowWidth/2
    y = diameter/2
    rectW = 60
    rectH = round(windowHeight/2.888) //250 on laptop screen 
    rectX = windowWidth - rectW
    rectY = windowHeight - rectH
    lives = 2
    offset = round(windowHeight/12.03) //60 on laptop screen
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
        offset = random(windowHeight/-5, windowHeight/5)
    }
    /*if(rectX == windowWidth/2){
        score++
    }*/
    if (rectX > windowWidth/2 - rectW/2 && rectX < windowWidth/2 + rectW/2 && once2) {
        score++
        select('.score').html(score)
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
        lives = 0
    }
    if(y < 0){
        lives = 0
    }
}

function draw(){
    //mouseX mouseY frameCount map

    background('cornflowerblue')
    show()
    update()   
    showRect()
    updateRect()
    collision()
    scoreis5()
    //console.log(frameCount) 

    //Video2 lort (virker ikke ved ikke helt hvorfor)
    select('#video2').onended(()=>{
        console.log('published getsture on listen')*
        client.publish('gesture','listen')
    })
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
        select('.score').html(score)
        once = false    
        console.log('bottom')
    }
    if(((x > rectX) && (x < rectX + rectW) &&
    (y > 0) && (y < 0 + rectH - offset) && (once))){
        //if(!alert('You lost')){window.location.reload();}
        lives--
        score--
        select('.score').html(score)
        once = false
        console.log('top')
    }
    //else(once = true)W

    //lifechecker
    if(lives == 0){
        stopgame()
    }
}


function stopgame(){
    gravity = 0
    rectSpeed = 0
    velocity = 0
    select('.youlost').addClass('show')
    
}

function restartgame(){
    select('.youlost').removeClass('show')
    y = diameter/2
    lives = 1
    score = 0
    select('.score').html(score)
    gravity = 0.3
    rectSpeed = 4
    console.log('restartgame called')
    rectX = windowWidth
}

function scoreis5(){
    if(score == 5){
        score = 0
        stopgame()
        select('#video3').play()
        select('main').elt.scrollTo(windowWidth*3,0)

        select('#video3').onended(()=>{
            console.log('published pare on ok')
            client.publish('pare','ok')
        })
    }
}
