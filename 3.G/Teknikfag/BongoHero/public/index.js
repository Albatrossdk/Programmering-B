let x1
let y1
let x2
let y2
let speed 
const ySpeed = 5

let beatInterval = (60 / 138) * 1000; // Calculate the interval between beats
let songDuration = 1 * 60 * 1000 + 43 * 1000; // Convert song duration to milliseconds
let beatTimes = []; // Initialize an empty array for beat times
let currentBeat = 0; // Initialize the current beat to 0
let fallingCircles = []; // Initialize an empty array for falling circles
let circleSpeed = 5; // Set the speed for all falling circles

let noteSpawns = []
let bongoColors = ["blue", "green", "yellow", "red"]
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

let scrollOnce = true

let gamemode
let gamestart = false

let milliSeconds
let startTime

let gameover

function preload() {
    // Load the song
    song = loadSound('./assets/bongo3.mp3', function() {
      // Calculate the beat times when the song is loaded
      for (let i = 1; i * beatInterval < song.duration() * 1000; i++) {
        /*if (i % 4 === 0) {*/
          beatTimes.push(i * beatInterval);
        /*}*/
      }
      // Start the song
      //song.play();
    });
  }

function setup(){
    select('#highscore').html(localStorage.getItem('highscore'))

    console.log(beatTimes)

    let canvas = createCanvas(windowWidth, windowHeight)
    
    spawnLine = windowHeight*0.2
    beatLine = windowHeight*0.75

    //Scroll to pages

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
    mqttStuff()
  }
  
function draw(){
  drawBackground()

  select('#player1Score').html(player1Score)
  select('#player2Score').html(player2Score)
  select('#singlePlayerScore').html(player1Score+player2Score)
  
  
  // Draw and update the falling circles
  for (let i = 0; i < fallingCircles.length; i++) {
    fallingCircles[i].update()
    fallingCircles[i].show()
  }
  

  // Check if it's time to create a new falling circle
  if (currentBeat < beatTimes.length && gamestart==true) {
    //Få tiden siden spillet, startede til nu i millisekunder
    milliSeconds = abs(startTime - new Date().getTime())
    //Trækker tiden fra da spillet startede fra det tidspunkt hvor der skal spawnes en node.
    let elapsedTime = milliSeconds - beatTimes[currentBeat];
    //Udfør kode i takt, når beats skal spawne, men stop når sangen er færdig.
    if (elapsedTime >= beatInterval && elapsedTime < beatInterval + 100) {
      console.log(gamemode)
      if(gamemode == "versus"){
        //Vælg tilfædligt nummer mellem 0 og 2
        let bongonumber1 = floor(random(0,2))
        //Lav en ny Bongobullet objekt, og skub den ind i et Array.
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
          minY, maxY, ydist,
          gamemode
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
            minY, maxY, ydist,
            gamemode
            ))
          }
        if(gamemode == "classic"){
        //Making player 2's bongos
        let bongonumber2 = floor(random(0,4))
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
            minY, maxY, ydist,
            gamemode
            ))
          }

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

  //GAME OVER FUNCTION
  if (currentBeat >= beatTimes.length) {
    setTimeout(() => {
      select('#gameOver').html('GAME OVER')
      gameover = true
      mqttClient.publish('Bongohero','RestartReady')
      setTimeout(() => {
        if(scrollOnce == true){
          scrollOnce = false
          select('main').elt.scrollTo(windowWidth*3,0)
          setTimeout(()=>{
            select('.restart').style('bottom','35vh')
          }, "10000")
        }
      }, "3000");
    }, "4000");

    if(player1Score < player2Score){
      select('#playerWon').html('PLAYER 2')
      select('#playerLost').html('PLAYER 1')
      
      select('#firstPlaceScoreboard').child(select('#player2Holder'))
      select('#secondPlaceScoreboard').child(select('#player1Holder'))
    }else{
      select('#playerWon').html('PLAYER 1')
      select('#playerLost').html('PLAYER 2')
  
      select('#firstPlaceScoreboard').child(select('#player1Holder'))
      select('#secondPlaceScoreboard').child(select('#player2Holder'))
    }
    
    select('#player1ScoreWinScreen').html(player1Score)
    select('#player2ScoreWinScreen').html(player2Score)
    select('#singlePlayerScoreWinScreen').html(player1Score+player2Score)
    if(player1Score+player2Score > localStorage.getItem('highscore')){
      select('#yourScoreh1').html('NEW HIGHSCORE')
      select('#highscore').html(player1Score+player2Score)
      localStorage.setItem('highscore', player1Score+player2Score)
    }else{
      select('#yourScoreh1').html('YOUR SCORE')
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
      qCircles.map((q, i)=>{
        if(q.checkPoint()[0]){
          points = true
          q.drawState = false
          player1Score = player1Score + q.checkPoint()[1]
        }else if(q.checkPoint()[0]==false){
          console.log('no circle was close')
        }
      }) 
    }

    else if(data == "BONGO2"){
      let points = false
      let wCircles = fallingCircles.filter(bongo => bongo.bongo == 1)
      wCircles.map((w,i)=>{
        if(w.checkPoint()[0]){
          points = true
          w.drawState = false
          player1Score = player1Score + w.checkPoint()[1]
        }else if(w.checkPoint()[0]==false){
          console.log('no circle was close')
        }
      })
      }

    else if(data == "BONGO3"){
      let points = false
      let eCircles = fallingCircles.filter(bongo => bongo.bongo == 2)
      eCircles.map((e,i)=>{
        if(e.checkPoint()[0]){
          points = true
          e.drawState = false
          player2Score = player2Score + e.checkPoint()[1]
        }else if(e.checkPoint()[0]==false){
          console.log('no circle was close')
        }
      })
      }
      else if(data == "BONGO4"){
        let points = false
        let rCircles = fallingCircles.filter(bongo => bongo.bongo == 3)
        rCircles.map((r,i)=>{
          if(r.checkPoint()[0]){
            points = true
            r.drawState = false
            player2Score = player2Score + r.checkPoint()[1]
          }else if(r.checkPoint()[0]==false){
            console.log('no circle was close')
          }
        })
      }
    })
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
        console.log('no circle was close')
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
        console.log('no circle was close')
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
        console.log('no circle was close')
      }
    })
  }
  
  else if(key.key==="r"){
    let points = false
    let rCircles = fallingCircles.filter(bongo => bongo.bongo == 3)
    rCircles.map((r,i)=>{
      if(r.checkPoint()[0]){
        points = true
        r.drawState = false
        player2Score = player2Score + r.checkPoint()[1]
      }else if(r.checkPoint()[0]==false){
        console.log('no circle was close')
      }
    })
  }
}

function updateNote(){

}


function drawBackground(){
    fill("rgb(255,99,0)")
    stroke('whitesmoke')
    strokeWeight(5)
    let trapezoid = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.55, windowHeight*0.18, windowWidth*0.45, windowHeight*0.18);
    let trapezoid2 = quad(windowWidth*0.25, windowHeight*0.75, windowWidth*0.75, windowHeight*0.75, windowWidth*0.84, windowHeight, windowWidth*0.16, windowHeight);

    stroke('black')
    strokeWeight(2)
    //let playLine = rect(0, windowHeight*0.75, windowWidth, 10,)
    checkPointLine = windowHeight*0.75
    
    x1 = windowWidth*0.35
    y1 = windowHeight*0.75
    fill('blue')
    circle(windowWidth*0.35, windowHeight*0.75, 80)
    fill('whitesmoke')
    circle(windowWidth*0.35, windowHeight*0.75, 60)

    fill('green')
    circle(windowWidth*0.45, windowHeight*0.75, 80)
    fill('whitesmoke')
    circle(windowWidth*0.45, windowHeight*0.75, 60)

    fill('yellow')
    circle(windowWidth*0.55, windowHeight*0.75, 80)
    fill('whitesmoke')
    circle(windowWidth*0.55, windowHeight*0.75, 60)
    
    fill('red')
    circle(windowWidth*0.65, windowHeight*0.75, 80)
    fill('whitesmoke')
    circle(windowWidth*0.65, windowHeight*0.75, 60)
    
    //Length of top and bottom lines
    let toplength = (windowWidth*0.55) - (windowWidth*0.45)
    let bottomlength = (windowWidth*0.75) - (windowWidth*0.25)

    //Spawnpoints of notes
    x2 = toplength*1/5 + windowWidth *0.45

    let bongo1NoteSpawn = toplength*1/5 + windowWidth *0.45
    let bongo2NoteSpawn = toplength*2/5 + windowWidth *0.45 
    let bongo3NoteSpawn = toplength*3/5 + windowWidth *0.45 
    let bongo4NoteSpawn = toplength*4/5 + windowWidth *0.45 

    noteSpawns = [bongo1NoteSpawn, bongo2NoteSpawn, bongo3NoteSpawn, bongo4NoteSpawn]

    /*circle(bongo1NoteSpawn, windowHeight*0.2, 20)
    y2 = windowHeight*0.2
    circle(bongo2NoteSpawn, windowHeight*0.2, 20)
    circle(bongo3NoteSpawn, windowHeight*0.2, 20)
    circle(bongo4NoteSpawn, windowHeight*0.2, 20)*/
    
    //console.log(currentBeat)
}

function mqttStuff(){
  mqttClient = mqtt.connect('wss://mqtt.nextservices.dk')

  if(gameover==true){
    mqttClient.publish('Bongohero','RestartReady')
  }

    mqttClient.on('connect', () => {        
        mqttClient.subscribe('Bongohero') //Subscriber på vores emne
        mqttClient.subscribe('BongoheroGamemode') //Subscriber på vores andet emne
        //Fortæl startknap m5'eren den skal være klar til at sende
        mqttClient.publish('Bongohero','StartReady')
      })
      
      mqttClient.on('message', (topic, message)=>{
        if(topic == 'Bongohero' && message == 'Start'){
          select('main').elt.scrollTo(windowWidth*1,0)
          mqttClient.publish('Bongohero','GamemodeReady')
        }
        
        if(topic == 'BongoheroGamemode'){
          select('main').elt.scrollTo(windowWidth*2,0)
          console.log('Scotty doenst know')
          gamemode = message.toString()
          gamestart = true
          startTime = new Date().getTime()

          if(gamemode == "versus"){
            select('#multiPlayerScoreCard1').style('visibility', 'visible')
            select('#multiPlayerScoreCard2').style('visibility', 'visible')
            select('#singlePlayerScoreCard').style('visibility', 'hidden')
            
            select('.multiPlayerScoreHolderWinScreen').style('visibility', 'visible')
            select('.singlePlayerScoreHolderWinScreen').style('visibility', 'hidden')

            select('#playerWon').style('visibility', 'visible')
            select('#playerLost').style('visibility', 'visible')
            select('#page4').style('background-image',"url('./assets/page4.png')")
          }else if(gamemode == "classic"){
            select('#multiPlayerScoreCard1').style('visibility', 'hidden')
            select('#multiPlayerScoreCard2').style('visibility', 'hidden')
            select('#singlePlayerScoreCard').style('visibility', 'visible')
            
            select('.multiPlayerScoreHolderWinScreen').style('visibility', 'hidden')
            select('.singlePlayerScoreHolderWinScreen').style('visibility', 'visible')

            select('#playerWon').style('visibility', 'hidden')
            select('#playerLost').style('visibility', 'hidden')
            select('#page4').style('background-image',"url('./assets/page4singleplayer.jpeg')")
          }

          // Start the song
          song.play();  
          mqttClient.publish('Bongohero','GamemodeChosen')
        }
        if(topic =='Bongohero' && message == 'Restart'){
          select('#gameOver').html('')
          currentBeat = 0
          player1Score = 0
          player2Score = 0
          startTime = 0
          gamestart = false
          select('.restart').style('bottom','-100vh')
          select('#gameOver').html('')
          select('main').elt.scrollTo(windowWidth*0.2,0)
          mqttClient.publish('Bongohero','StartReady')
        }

    })
}