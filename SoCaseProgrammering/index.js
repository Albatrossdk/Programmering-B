var slider
var sovs
var slideshow
var plchold
var slidecounter = 0
var wave
var waveX
var waveY
var vari1
var opac

function preload(){
    img1 = loadImage('./assets/astronaut.png')
    wave = loadImage('./assets/sinewave2.gif')
}

function setup(){
    var myDiv = select('.illustration')
    var text = select('.text')
    var myCanvas = createCanvas()

    slideshow = select('.slideshow')
    plchold = select('.plchold')

    console.log(img1)
    image(img1,600,600)

    myCanvas.parent(myDiv)
    frameRate(30)
    slider = createSlider(5, 50, 0)
    slider.parent(text)
    slider.id('id')  
    
    waveX = 450
    waveY = 0
    pik = 0
    opac = 0

}

function draw(){
    tint(255,255)
    myDiv = select('.illustration')
    var myWidth = myDiv.width
    const myHeight = myDiv.height
    
    
    myCanvas = createCanvas(myWidth, myHeight)
    myCanvas.parent(myDiv)

    changeBackground()
    
    //ON THE CANVAS
    stroke(50)
    strokeWeight(slider.value())
    myArc = arc(myWidth/2, myHeight*1, myWidth*0.85, myWidth*0.85, PI, 0, OPEN);
    var sumth = myArc.width/2
    
    image(img1, myWidth/2.35, windowHeight-sumth, myArc.width*0.15, myArc.width*0.30)

    waveX = myWidth/2.1
    vari1 = myHeight
    radiationwaves()
}

function radiationwaves(){
    waveY += 5
    opac = map(slider.value(), 1, 55, 255, 1)

    tint(255, opac)
    
    image(wave, waveX, waveY, 50, 100)
    image(wave, waveX+100, waveY, 50, 100)
    image(wave, waveX+200, waveY, 50, 100)
    image(wave, waveX-100, waveY, 50, 100)
    image(wave, waveX-200, waveY, 50, 100)
    
    if(waveY > vari1){
        waveY = -50
    }

}

function changeBackground(){
    if(frameCount % 60 == 0){

        slidecounter++

        if( slidecounter == 4){
            slidecounter = 1
        }

        if( slidecounter == 1){
            slidecounter1 = 3
        }
        if( slidecounter == 2){
            slidecounter1 = 1
        }

        if( slidecounter == 3){
            slidecounter1 = 2
        }
        

        slideshow.child(select('.slide'+slidecounter))
        plchold.child(select('.slide'+slidecounter1))

    }

}
