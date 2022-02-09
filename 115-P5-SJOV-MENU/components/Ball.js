
class Ball{
    constructor(radius, xpos, ypos, col, obj, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.name = name
        this.obj = obj

        this.gravity = 0.2
        this.friction = 1 - this.radius / 1000
        this.velocity = 0
        this.updrift = 25
        this.button = createButton(this.name)
        this.radius = this.button.height
    }

    show(){
        // textSize(24)
        // text(this.name, this.xpos, this.ypos - (this.radius + 2))
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            let sDiv = select('.student')
            sDiv.html('')
            console.log(this.obj)
            sDiv.style('background-image', 'url(' + this.obj.img +')')
            let info = createDiv()
            info.child(createDiv('Gender: '+this.obj.gender))
            sDiv.child(info)

            sDiv.addClass('show')
            setTimeout(()=>sDiv.removeClass('show'), 5000)

        })
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity 

        if(this.ypos > window.innerHeight - this.button.height){
            this.ypos = window.innerHeight - this.button.height
            this.velocity = -this.velocity
        }
    }
    up(howmuch){
        howmuch = howmuch ? howmuch : this.updrift
        this.velocity -= howmuch
    }
}