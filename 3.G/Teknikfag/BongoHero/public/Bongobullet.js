class Bongobullet{
    constructor(bongo, xpos, ypos, dia, col, xspeed, yspeed, beatIndex, checkPointLine, minY, maxY, ydist, gamemode){
        this.bongo = bongo
        this.ypos = ypos
        this.xpos = xpos
        this.dia = dia
        this.col = col
        this.xspeed = xspeed
        this.yspeed = yspeed
        this.beatIndex = beatIndex
        this.hit = false
        this.checkPointLine = checkPointLine
        this.drawState = true
        this.minY = minY
        this.maxY = maxY
        this.ydist = ydist
        this.gamemode = gamemode
    }
    update(){
        this.ypos += this.yspeed
        this.xpos += this.xspeed
        if(this.ypos>windowHeight-50){this.hit = true}

        let yposRatio = (this.ypos - this.minY) / this.ydist;
        // Map the ypos ratio to a value between minDia and maxDia
        this.dia = 20 + (60 - 20) * yposRatio;
    }
    show(){
        if(this.drawState){
            fill(this.col)
            circle(this.xpos, this.ypos, this.dia)
        }    
    }
    checkPoint(){
        if(this.ypos >= (this.checkPointLine - 30) && this.ypos <= (this.checkPointLine - 20)||this.ypos >= (this.checkPointLine + 20) && this.ypos <= (this.checkPointLine + 30)){
            console.log("ok")
            if(this.gamemode == "versus"){
                

                if(this.bongo == 0){
                    select('#bongo1Animation1').style('visibility', 'visible')
                    
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 1){
                    select('#bongo2Animation1').style('visibility', 'visible')
    
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 2){
                    select('#bongo3Animation1').style('visibility', 'visible')
    
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 3){
                    select('#bongo4Animation1').style('visibility', 'visible')
    
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
                }
    
    
                if(this.bongo == 0||this.bongo == 1){
                    select('#player1Animation1').style('visibility', 'visible')
    
                    select('#player1Animation2').style('visibility', 'hidden')
                    select('#player1Animation5').style('visibility', 'hidden')
                    select('#player1Animation-1').style('visibility', 'hidden')
                }else{
                    select('#player2Animation1').style('visibility', 'visible')
    
                    select('#player2Animation2').style('visibility', 'hidden')
                    select('#player2Animation5').style('visibility', 'hidden')
                    select('#player2Animation-1').style('visibility', 'hidden')
                }
            }else if(this.gamemode == "classic"){
                if(this.bongo == 0){
                    select('#bongo1Animation1').style('visibility', 'visible')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                    
                    for (let i = 2; i < 5; i++) {
                                                
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }else if(this.bongo == 1){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==2){
                            select('#bongo2Animation1').style('visibility', 'visible')
                            select('#bongo2Animation2').style('visibility', 'hidden')
                            select('#bongo2Animation5').style('visibility', 'hidden')
                            select('#bongo2Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                     
                      }
                }else if(this.bongo == 2){                    
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==3){
                            select('#bongo3Animation1').style('visibility', 'visible')
                            select('#bongo3Animation2').style('visibility', 'hidden')
                            select('#bongo3Animation5').style('visibility', 'hidden')
                            select('#bongo3Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                       
                      }
                }else if(this.bongo == 3){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==4){
                            select('#bongo4Animation1').style('visibility', 'visible')
                            select('#bongo4Animation2').style('visibility', 'hidden')
                            select('#bongo4Animation5').style('visibility', 'hidden')
                            select('#bongo4Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }
            }
            return [true, 1]
        }else if(this.ypos >= (this.checkPointLine - 20) && this.ypos <= (this.checkPointLine - 5)||this.ypos >= (this.checkPointLine + 5) && this.ypos <= (this.checkPointLine + 20)){
            console.log("good")
            if(this.gamemode == "versus"){

                if(this.bongo == 0){
                    select('#bongo1Animation2').style('visibility', 'visible')
                    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 1){
                    select('#bongo2Animation2').style('visibility', 'visible')
                    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 2){
                    select('#bongo3Animation2').style('visibility', 'visible')
                    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 3){
                    select('#bongo4Animation2').style('visibility', 'visible')
                    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
                }
                if(this.bongo == 0||this.bongo == 1){
                    select('#player1Animation2').style('visibility', 'visible')
    
                    select('#player1Animation1').style('visibility', 'hidden')
                    select('#player1Animation5').style('visibility', 'hidden')
                    select('#player1Animation-1').style('visibility', 'hidden')
                }else{
                    select('#player2Animation2').style('visibility', 'visible')
    
                    select('#player2Animation1').style('visibility', 'hidden')
                    select('#player2Animation5').style('visibility', 'hidden')
                    select('#player2Animation-1').style('visibility', 'hidden')
                }
            }else if(this.gamemode == "classic"){
                if(this.bongo == 0){
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'visible')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                    
                    for (let i = 2; i < 5; i++) {
                                                
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }else if(this.bongo == 1){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==2){
                            select('#bongo2Animation1').style('visibility', 'hidden')
                            select('#bongo2Animation2').style('visibility', 'visible')
                            select('#bongo2Animation5').style('visibility', 'hidden')
                            select('#bongo2Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                      
                      }
                }else if(this.bongo == 2){ 
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==3){
                            select('#bongo3Animation1').style('visibility', 'hidden')
                            select('#bongo3Animation2').style('visibility', 'visible')
                            select('#bongo3Animation5').style('visibility', 'hidden')
                            select('#bongo3Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                      
                      }
                }else if(this.bongo == 3){                   
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==4){
                            select('#bongo4Animation1').style('visibility', 'hidden')
                            select('#bongo4Animation2').style('visibility', 'visible')
                            select('#bongo4Animation5').style('visibility', 'hidden')
                            select('#bongo4Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }
            }
            return [true, 2]
        }else if(this.ypos >= (this.checkPointLine - 5) && this.ypos <= (this.checkPointLine + 5)){
            console.log("perfect")
            if(this.gamemode == "versus"){
                if(this.bongo == 0){
                    select('#bongo1Animation5').style('visibility', 'visible')
                    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 1){
                    select('#bongo2Animation5').style('visibility', 'visible')
                    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 2){
                    select('#bongo3Animation5').style('visibility', 'visible')
                    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 3){
                    select('#bongo4Animation5').style('visibility', 'visible')
                    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
                }
    
                if(this.bongo == 0||this.bongo == 1){
                    select('#player1Animation5').style('visibility', 'visible')
    
                    select('#player1Animation1').style('visibility', 'hidden')
                    select('#player1Animation2').style('visibility', 'hidden')
                    select('#player1Animation-1').style('visibility', 'hidden')
                }else{
                    select('#player2Animation5').style('visibility', 'visible')
    
                    select('#player2Animation1').style('visibility', 'hidden')
                    select('#player2Animation2').style('visibility', 'hidden')
                    select('#player2Animation-1').style('visibility', 'hidden')
                }
            }else if(this.gamemode == "classic"){
                if(this.bongo == 0){
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'visible')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                    
                    for (let i = 2; i < 5; i++) {
                                                
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }else if(this.bongo == 1){
                    
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==2){
                            select('#bongo2Animation1').style('visibility', 'hidden')
                            select('#bongo2Animation2').style('visibility', 'hidden')
                            select('#bongo2Animation5').style('visibility', 'visible')
                            select('#bongo2Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                                                
                      }
                }else if(this.bongo == 2){                    
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==3){                            
                            select('#bongo3Animation1').style('visibility', 'hidden')
                            select('#bongo3Animation2').style('visibility', 'hidden')
                            select('#bongo3Animation5').style('visibility', 'visible')
                            select('#bongo3Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }else if(this.bongo == 3){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==4){
                            select('#bongo4Animation1').style('visibility', 'hidden')
                            select('#bongo4Animation2').style('visibility', 'hidden')
                            select('#bongo4Animation5').style('visibility', 'visible')
                            select('#bongo4Animation-1').style('visibility', 'hidden')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                     
                      }
                }
            }
            return [true, 5]
        }else if(this.ypos >= (this.checkPointLine - 60) && this.ypos <= (this.checkPointLine - 30)||this.ypos >= (this.checkPointLine + 30) && this.ypos <= (this.checkPointLine + 60)){
            console.log('you fucked up')
            if(this.gamemode == "versus"){

                if(this.bongo == 0){
                    select('#bongo1Animation-1').style('visibility', 'visible')
                    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
                    select('#bongo2Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 1){
                    select('#bongo2Animation-1').style('visibility', 'visible')
                    
                    select('#bongo2Animation1').style('visibility', 'hidden')
                    select('#bongo2Animation2').style('visibility', 'hidden')
                    select('#bongo2Animation5').style('visibility', 'hidden')
    
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 2){
                    select('#bongo3Animation-1').style('visibility', 'visible')
                    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
                    select('#bongo4Animation-1').style('visibility', 'hidden')
                }else if(this.bongo == 3){
                    select('#bongo4Animation-1').style('visibility', 'visible')
                    
                    select('#bongo4Animation1').style('visibility', 'hidden')
                    select('#bongo4Animation2').style('visibility', 'hidden')
                    select('#bongo4Animation5').style('visibility', 'hidden')
    
                    select('#bongo3Animation1').style('visibility', 'hidden')
                    select('#bongo3Animation2').style('visibility', 'hidden')
                    select('#bongo3Animation5').style('visibility', 'hidden')
                    select('#bongo3Animation-1').style('visibility', 'hidden')
                }
    
                if(this.bongo == 0||this.bongo == 1){
                    select('#player1Animation-1').style('visibility', 'visible')
    
                    select('#player1Animation1').style('visibility', 'hidden')
                    select('#player1Animation2').style('visibility', 'hidden')
                    select('#player1Animation5').style('visibility', 'hidden')
                }else{
                    select('#player2Animation-1').style('visibility', 'visible')
    
                    select('#player2Animation1').style('visibility', 'hidden')
                    select('#player2Animation2').style('visibility', 'hidden')
                    select('#player2Animation5').style('visibility', 'hidden')
                }
            }else if(this.gamemode == "classic"){
                if(this.bongo == 0){
                    select('#bongo1Animation1').style('visibility', 'hidden')
                    select('#bongo1Animation2').style('visibility', 'hidden')
                    select('#bongo1Animation5').style('visibility', 'hidden')
                    select('#bongo1Animation-1').style('visibility', 'visible')
                    
                    for (let i = 2; i < 5; i++) {
                                                
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                      }
                }else if(this.bongo == 1){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==2){
                            select('#bongo2Animation1').style('visibility', 'hidden')
                            select('#bongo2Animation2').style('visibility', 'hidden')
                            select('#bongo2Animation5').style('visibility', 'hidden')
                            select('#bongo2Animation-1').style('visibility', 'visible')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')
                                               
                      }
                }else if(this.bongo == 2){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==3){
                            select('#bongo3Animation1').style('visibility', 'hidden')
                            select('#bongo3Animation2').style('visibility', 'hidden')
                            select('#bongo3Animation5').style('visibility', 'hidden')
                            select('#bongo3Animation-1').style('visibility', 'visible')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                      
                      }
                }else if(this.bongo == 3){
                    for (let i = 1; i < 5; i++) {
                        
                        if(i==4){
                            select('#bongo4Animation1').style('visibility', 'hidden')
                            select('#bongo4Animation2').style('visibility', 'hidden')
                            select('#bongo4Animation5').style('visibility', 'hidden')
                            select('#bongo4Animation-1').style('visibility', 'visible')
                            continue
                        }
                        select('#bongo'+i+'Animation1').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation2').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation5').style('visibility', 'hidden')
                        select('#bongo'+i+'Animation-1').style('visibility', 'hidden')                       
                      }
                }
            }
            return [true, -1]
        }else{
            return [false]
        }
    }
}