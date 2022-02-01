let lukas, viktor, ball, cum

let students = ['mie', 'bjarke', 'bjørn', 'marius', 'lukas', 'frederik', 'sofus', 'theis', 'viktor', 'andreas']
let balls = []

function setup(){
    createCanvas(windowWidth, 300)
    background('purple')
    students.map( (item, index) => {
        let b = new Ball(random(10, 40), random(width), random(height), 'red', item)
        balls.push(b)
    })
}

function draw(){
    createCanvas(windowWidth, 300)
    background('cornflowerblue')
    balls.map( item => {
        item.show()
        item.updater()
    })
    
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map( item => {
            item.up()
        })
    }
}

