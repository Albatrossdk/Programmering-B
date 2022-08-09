var page1
var page2
var canvas1
var canvas2
var main
var slider1
var slider2
var myWidth
var myHeight
let myLimit = 0
let days = ['mandag', 'tirsdag', 'ondsag', 'torsdag', 'fredag', 'lørdag', 'søndag']
let dayCounter = 0

function setup(){
    createDays()
    page1 = select('.page1')
    page2 = select('.page2')
    main = select('main')
    frameRate(60)

    myWidth = page1.width
    myHeight = page1.height

    canvas1 = createCanvas()
    canvas1.parent(main)
    canvas1.id('canvas')
    
    slider1 = createSlider(0, 7, 0)
    slider1.parent(page1)
    slider1.id('slider1')

    slider1.input(()=>{
        select('#number').html(slider1.value())
        select('.con').style('bottom', map(slider1.value(),0,7,0,100)+'%')
        mylimit = slider1.value()
    })
    
    slider2 = createSlider(0, 30, 0)
    slider2.parent(page2)
    slider2.id('slider2')


}

function createDays(){
    days.map(day=>{
        let newMark = createDiv().addClass('day')
        let mark = createCheckbox(day, false)
        mark.input(()=>{
            if( mark.checked()){
                dayCounter++
            }else{
                dayCounter--
            }
            select('#contents').style('height', map(dayCounter, 0, 7, 0, 100)+'%')
            console.log(dayCounter, slider1.value())
            if(dayCounter > slider1.value()){
                select('#contents').style('background-color', 'red')
            }else{
                select('#contents').style('background-color', 'green')
            }

        })
        newMark.child(mark)
        select('#checkmarks').child(newMark)
    })
}