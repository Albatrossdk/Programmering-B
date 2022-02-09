
class Ball {
    constructor(radius, xpos, ypos, col, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.name = name

        this.gravity = 1
        this.friction = 1 - radius / 1000
        this.velocity = 0
        this.updrift = 10
        this.button = createButton(this.name)
    }

    show(){
        /*text(this.name, this.xpos, this.ypos + this.radius + 2)*/
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            if(confirm('Vil du hoppe med '+ this.name)){
                this.up() 
            }else{
                console.log('cum')    
        }        

            
        })
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }

    updater(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity
        
        if(this.ypos > window.innerHeight - this.radius / 2){
            this.ypos = window.innerHeight - this.radius / 2
            this.velocity = -this.velocity
           }
    }

    up(){
        this.velocity -= this.updrift
    }
}