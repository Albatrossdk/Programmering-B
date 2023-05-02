let x1
let y1
let x2
let y2
let speed 
const ySpeed = 5.0

let beatInterval = (60 / 138) * 1000; // Calculate the interval between beats
let songDuration = 5 * 60 * 1000 + 11 * 1000; // Convert song duration to milliseconds
let beatTimes = []; // Initialize an empty array for beat times
let currentBeat = 0; // Initialize the current beat to 0
let fallingCircles = []; // Initialize an empty array for falling circles
let circleSpeed = 5; // Set the speed for all falling circles

let noteSpawns = []
let bongoColors = ["red", "blue", "yellow", "orange"]
let bongoXSpeeds = []
let keyCodes = ["q","w","e","r"]

let spawnLine
let beatLine
let checkPointLine

let player1Score = 0
let player2Score = 0

let clientSocket

let mqttClient

let drawState = true

let toplength
let bottomlength

//Spawnpoints of notes
let bongo1NoteSpawn
let bongo2NoteSpawn  
let bongo3NoteSpawn 
let bongo4NoteSpawn


function preload() {
    // Load the song
    song = loadSound('./assets/bongo2.mp3', function() {
      // Calculate the beat times when the song is loaded
      for (let i = 1; i * beatInterval < song.duration() * 1000; i++) {
        //if (i % 4 === 0) {
          beatTimes.push(i * beatInterval);
        //}
      }
      // Start the song
      song.play();
    });
  }

function setup(){
    console.log(beatTimes)

    let canvas = createCanvas(windowWidth, windowHeight)
    
    spawnLine = windowHeight*0.2
    beatLine = windowHeight*0.75

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
    
        //Setting variables for drawing the background:
            //Length of top and bottom lines
            let toplength = (windowWidth*0.55) - (windowWidth*0.45)
            let bottomlength = (windowWidth*0.75) - (windowWidth*0.25)
        
            //Spawnpoints of notes
            let bongo1NoteSpawn = toplength*1/5 + windowWidth *0.45
            x2 = toplength*1/5 + windowWidth *0.45
            let bongo2NoteSpawn = toplength*2/5 + windowWidth *0.45 
            let bongo3NoteSpawn = toplength*3/5 + windowWidth *0.45 
            let bongo4NoteSpawn = toplength*4/5 + windowWidth *0.45 
        
            noteSpawns = [bongo1NoteSpawn, bongo2NoteSpawn, bongo3NoteSpawn, bongo4NoteSpawn]
    
    //Math
    //Formel: v_x = (v_y * x) / y
    //XSpeeds:
    let v_x1 = (ySpeed * abs((toplength*1/5 + windowWidth *0.45)-(windowWidth*0.35))) / abs(windowHeight*0.2-windowHeight*0.75)
    let v_x2 = (ySpeed * abs((toplength*2/5 + windowWidth *0.45)-(windowWidth*0.45))) / abs(windowHeight*0.2-windowHeight*0.75)
    let v_x3 = (ySpeed * abs((toplength*3/5 + windowWidth *0.45)-(windowWidth*0.55))) / abs(windowHeight*0.2-windowHeight*0.75)
    let v_x4 = (ySpeed * abs((toplength*4/5 + windowWidth *0.45)-(windowWidth*0.65))) / abs(windowHeight*0.2-windowHeight*0.75)
    bongoXSpeeds = [-v_x1,-v_x2,v_x3,v_x4]

    //Yvalue stuff for the diameter change in bongobullet
    minY = windowHeight*0.2
    maxY = windowHeight*0.75
    ydist = abs(windowHeight*0.2-windowHeight*0.75)

    udpReceived()
  }

function draw(){
  drawBackground()

  select('#player1Score').html(player1Score)
  select('#player2Score').html(player2Score)


      // Draw the falling circles and check if they hit the line at the right time
  for (let i = 0; i < fallingCircles.length; i++) {
    fallingCircles[i].update()
    fallingCircles[i].show()
  }
  
  // Check if it's time to create a new falling circle
  if (currentBeat < beatTimes.length) {
    let elapsedTime = millis() - beatTimes[currentBeat];
    if (elapsedTime >= beatInterval && elapsedTime < beatInterval + 100) {
      //Making player 1's bongos
      let bongonumber1 = floor(random(0,2))
      fallingCircles.push(new Bongobullet(
        bongonumber1, 
          noteSpawns[bongonumber1], 
          spawnLine, 
          20, 
          bongoColors[bongonumber1], 
          bongoXSpeeds[bongonumber1], 
          ySpeed, 
          currentBeat,
          checkPointLine,
          minY, maxY, ydist
          ))    
      //Making player 2's bongos
      let bongonumber2 = floor(random(2,4))
      fallingCircles.push(new Bongobullet(
          bongonumber2, 
          noteSpawns[bongonumber2], 
          spawnLine, 
          20, 
          bongoColors[bongonumber2], 
          bongoXSpeeds[bongonumber2], 
          ySpeed, 
          currentBeat,
          checkPointLine,
          minY, maxY, ydist
          ))
    }
    if (elapsedTime >= beatInterval) {
      currentBeat++;
    }
  }
  
  // Remove the falling circles that have hit the line
  for (let i = fallingCircles.length - 1; i >= 0; i--) {
    if (fallingCircles[i].hit) {
      if(fallingCircles[i].drawState && (fallingCircles[i].bongo==0 || fallingCircles[i].bongo==1)){
        player1Score--}
      else if(fallingCircles[i].drawState && (fallingCircles[i].bongo==2 || fallingCircles[i].bongo==3)){
        player2Score--
      }
      fallingCircles.splice(i, 1);
    }
  }
}

function udpReceived(){
  clientSocket = io.connect()

  clientSocket.on('movement', data => {      
      console.log(data)      
      //Movement controls
      if(data == "BONGO1"){
        let points = false
        let qCircles = fallingCircles.filter(bongo => bongo.bongo == 0)
        qCircles.map(q=>{
          if(q.checkPoint()){
          
          }
        })
        if(points){player1Score++}else{player1Score--}
      }
      else if(data == "BONGO2"){
        let points = false
        let wCircles = fallingCircles.filter(bongo => bongo.bongo == 1)
        wCircles.map(w=>{
          if(w.checkPoint()){
            points = true
          }
        })
        if(points){player1Score++}else{player1Score--}
      }
      else if(data == "BONGO3"){
        let points = false
        let eCircles = fallingCircles.filter(bongo => bongo.bongo == 2)
        eCircles.map(e=>{
          if(e.checkPoint()){
            points = true
          }
        })
        if(points){player2Score++}else{player2Score--} 
      }
      else if(data == "BONGO4"){
        let points = false
        let rCircles = fallingCircles.filter(bongo => bongo.bongo == 3)
        rCircles.map(r=>{
          if(r.checkPoint()){
            points = true
          }
        })
        if(points){player2Score++}else{player2Score--}
      }})
}



function keyPressed(key){
  if(key.key==="q"){
    let points = false
    let qCircles = fallingCircles.filter(bongo => bongo.bongo == 0)
    qCircles.map((q, i)=>{
      if(q.checkPoint()[0]){
        points = true
        q.drawState = false
        player1Score = player1Score + q.checkPoint()[1]
      }else if(q.checkPoint()[0]==false){
        player1Score = player1Score + q.checkPoint()[1]
      }
    })

  }
  else if(key.key==="w"){
    let points = false
    let wCircles = fallingCircles.filter(bongo => bongo.bongo == 1)
    wCircles.map((w,i)=>{
      if(w.checkPoint()[0]){
        points = true
        w.drawState = false
        player1Score = player1Score + w.checkPoint()[1]
      }else if(w.checkPoint()[0]==false){
        player1Score = player1Score + w.checkPoint()[1]
      }
    })

  }

  else if(key.key==="e"){
    let points = false
    let eCircles = fallingCircles.filter(bongo => bongo.bongo == 2)
    eCircles.map((e,i)=>{
      if(e.checkPoint()[0]){
        points = true
        e.drawState = false
        player2Score = player2Score + e.checkPoint()[1]
      }else if(e.checkPoint()[0]==false){
        player2Score = player2Score + e.checkPoint()[1]
      }
    })
  }
  
  else if(key.key==="r"){
    let points = false
    let rCircles = fallingCircles.filter(bongo => bongo.bongo == 3)
    rCircles.map((r,i)=>{
      if(r.checkPoint()){
        points = true
        r.drawState = false
        player2Score = player2Score + r.checkPoint()[1]
      }else if(r.checkPoint()[0]==false){
        player2Score = player2Score + r.checkPoint()[1]
      }
    })
  }
}

function updateNote(){

}


function drawBackground(){
    fill("white")
    let trapezoid = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.55, windowHeight*0.2, windowWidth*0.45, windowHeight*0.2);
    let trapezoid2 = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.84, windowHeight, windowWidth*0.16, windowHeight);

    let playLine = rect(0, windowHeight*0.75, windowWidth, 10,)
    checkPointLine = windowHeight*0.75

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

    noteSpawns = [bongo1NoteSpawn, bongo2NoteSpawn, bongo3NoteSpawn, bongo4NoteSpawn]

    circle(bongo1NoteSpawn, windowHeight*0.2, 20)
    y2 = windowHeight*0.2
    circle(bongo2NoteSpawn, windowHeight*0.2, 20)
    circle(bongo3NoteSpawn, windowHeight*0.2, 20)
    circle(bongo4NoteSpawn, windowHeight*0.2, 20)
}