console.log('loading..')
console.log(`
__                                 __                  
|/  |         |           /         /  |      /      /   
|___|      ___| ___  ___ (___      (___| ___    ___ (___ 
|   )|   )|   )|   )|___)|         |    |   )| |   )|    
|__/ |__/ |__/ |__/ |__  |__       |    |__/|| |  / |__  
               __/                                                                             
`)
console.log('script loaded')

let paint = false

let erase = false

let brushColor = 'black'

let brushSize = '5'

let backgroundcolor = 'pink'


function setup(){ 
    console.log('setup')
    frameRate(120)
    createCanvas(windowWidth, windowHeight)
    background(backgroundcolor)

    //brushsizes
    stroke('black')
    fill('black')
    var br1 = ellipse(30, 30, 5, 5)
    var br2 = ellipse(50, 30, 10, 10)
    var br3 = ellipse(80, 30, 20, 20)
    var br4 = ellipse(120, 30, 30, 30)

    //brushcolors
    strokeWeight(1)
    stroke('black')
    ////
    fill('black')
    var clr1 = ellipse(170, 20 , 10, 10)
    fill('white')
    var clr1 = ellipse(170, 40 , 10, 10)
    fill('red')
    var clr1 = ellipse(190, 20 , 10, 10)
    fill('green')
    var clr1 = ellipse(190, 40 , 10, 10)
    fill('blue')
    var clr1 = ellipse(210, 20 , 10, 10)
    fill('orange')
    var clr1 = ellipse(210, 40 , 10, 10)
    fill('cyan')
    var clr1 = ellipse(230, 20 , 10, 10)
    fill('purple')
    var clr1 = ellipse(230, 40 , 10, 10)
    
    noFill()
    rect(0, 0, 270, 60);

}

function mouseReleased(){
    paint = false
    erase = false
}

function draw(){
    select('#info').html(frameCount)


    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
          paint = true
        }
        if (mouseButton === RIGHT) {
            erase = true
        }
        
        if(paint){
            strokeWeight(brushSize)
            stroke(brushColor)
            fill(brushColor)
            line(mouseX, mouseY, pmouseX, pmouseY)
        }
        
    }
    
    if(erase){
        strokeWeight(brushSize)
        stroke(backgroundcolor)
        fill(backgroundcolor)
        line(mouseX, mouseY, pmouseX, pmouseY)
    }

    if ((mouseX > 0) && (mouseX < 270) &&
    (mouseY > 0) && (mouseY < 60)) {
        print("material gourl")
        //sæt opcaity til nul her eller noget er for træt
    } else {
        
    }


    
}

function mousePressed(){
    //brushsizes
    var d = dist(mouseX, mouseY, 30, 30)
    if (d < 2.5){
        brushSize = 5
    }
    var d = dist(mouseX, mouseY, 50, 30)
    if (d < 5){
        brushSize = 10
    }
    var d = dist(mouseX, mouseY, 80, 30)
    if (d < 10){
        brushSize = 20
    }
    var d = dist(mouseX, mouseY, 120, 30)
    if (d < 15){
        brushSize = 30
    }
    
    //brushcolors
    var d = dist(mouseX, mouseY, 170, 20)
    if (d < 5){
        brushColor = 'black'
    }
    var d = dist(mouseX, mouseY, 170, 40)
    if (d < 5){
        brushColor = 'white'
    }
    var d = dist(mouseX, mouseY, 190, 20)
    if (d < 5){
        brushColor = 'red'
    }
    var d = dist(mouseX, mouseY, 190, 40)
    if (d < 5){
        brushColor = 'green'
    }
    var d = dist(mouseX, mouseY, 210, 20)
    if (d < 5){
        brushColor = 'blue'
    }
    var d = dist(mouseX, mouseY, 210, 40)
    if (d < 5){
        brushColor = 'orange'
    }
    var d = dist(mouseX, mouseY, 230, 20)
    if (d < 5){
        brushColor = 'cyan'
    }
    var d = dist(mouseX, mouseY, 230, 40)
    if (d < 5){
        brushColor = 'purple'
    }
    
    
}