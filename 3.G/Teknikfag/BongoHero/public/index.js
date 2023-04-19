let x1
let y1
let x2
let y2
let d = 0.0035


function preload(){

}

function setup(){
    let canvas = createCanvas(windowWidth, windowHeight)
    
    //Scroll to pages
    select('#btn1').mouseClicked(()=>{
        select('main').elt.scrollTo(windowWidth*0.2,0)
        select('#btn1').addClass('active'); select('#btn2').removeClass('active'); select('#btn3').removeClass('active')
    })
    select('#btn2').mouseClicked(()=>{
        select('main').elt.scrollTo(windowWidth*1,0)
        select('#btn2').addClass('active'); select('#btn1').removeClass('active'); select('#btn3').removeClass('active')
    })
    select('#btn3').mouseClicked(()=>{
        select('main').elt.scrollTo(windowWidth*2,0)
        select('#btn3').addClass('active'); select('#btn2').removeClass('active'); select('#btn1').removeClass('active')
    })

    select('#page3').child(canvas)

    
    let trapezoid = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.55, windowHeight*0.2, windowWidth*0.45, windowHeight*0.2);
    let trapezoid2 = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.84, windowHeight, windowWidth*0.16, windowHeight);


    let playLine = rect(0, windowHeight*0.75, windowWidth, 10,)

    let bongo1 = circle(windowWidth*0.35, windowHeight*0.75, 80)
    x1 = windowWidth*0.35
    y1 = windowHeight*0.75
    let bongo2 = circle(windowWidth*0.45, windowHeight*0.75, 80)
    let bongo3 = circle(windowWidth*0.55, windowHeight*0.75, 80)
    let bongo4 = circle(windowWidth*0.65, windowHeight*0.75, 80)
    
    //Length of top and bottom lines
    let toplength = (windowWidth*0.55) - (windowWidth*0.45)
    let bottomlength = (windowWidth*0.75) - (windowWidth*0.25)

    //Spawnpoints of notes
    let bongo1NoteSpawn = toplength*1/5 + windowWidth *0.45
    x2 = toplength*1/5 + windowWidth *0.45
    let bongo2NoteSpawn = toplength*2/5 + windowWidth *0.45 
    let bongo3NoteSpawn = toplength*3/5 + windowWidth *0.45 
    let bongo4NoteSpawn = toplength*4/5 + windowWidth *0.45 

    circle(bongo1NoteSpawn, windowHeight*0.2, 20)
    y2 = windowHeight*0.2
    circle(bongo2NoteSpawn, windowHeight*0.2, 20)
    circle(bongo3NoteSpawn, windowHeight*0.2, 20)
    circle(bongo4NoteSpawn, windowHeight*0.2, 20)
    

    console.log(toplength)
    console.log(bottomlength)


    
    
}

function draw(){

    var bongo1Note1 = circle(x2, y2, 20)
    
    if(mouseIsPressed){ 
    x2 = (1-d)*x2-d*(x1+x2);
    console.log(x2)
    y2 = (1-d)*y2-d*(y1+y2);
    console.log(y2)
    }
    
}

function updateNote(){

}
