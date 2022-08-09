let lukas, viktor

let balls = []

function setup(){
    noCanvas()
    for(student in students) {
        console.log(students[student])
        let b = new Ball( random(50) , random(window.innerWidth), random(window.innerHeight), 'red', students[student], student)
        balls.push(b)
    }
}

function draw(){
    balls.map( item => {
        item.show()
        item.update()
        if(frameCount % 23 == 0){
            item.up(random(7.1028391823))
        }
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}
