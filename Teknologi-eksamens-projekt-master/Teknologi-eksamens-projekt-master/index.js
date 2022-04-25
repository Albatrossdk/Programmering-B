let data
let anbefalingBtn, narmesteBtn
let button1, button2, button3

function setup(){
    noCanvas()
    //referencer til html
    anbefalingBtn = select('#anbefaling_btn')
    button1 = select('#button1')
    button2 = select('#button2')
    button3 = select('#button3')
    //html_interaktion

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiYXRyb3NzZGsiLCJhIjoiY2wyN2NlcWVlMDB1MzNscWhicTh6ZWh2aCJ9.dUMy9S_emcOhW4OHrqONQg';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [12.568759518980915, 55.66447035003021], // starting position [lng, lat]
        zoom: 10 // starting zoom
    })
    
    fetch('./index.json')
    //get response object parse to json()
    .then( res => res.json() )
    //when parse done, json object as variable.
    .then( json => {
        //console.log(json)
        data = json.badesteder

    json.badesteder.map( badesteder => {
        newMarker(badesteder)
        newCard(badesteder)
        newPopUp(badesteder)
    })
})


const newMarker = (badested) => {
    
    let coords = badested.coordinates
    let coordsarray = coords.split(',')
    console.log(coordsarray)
    const marker = new mapboxgl.Marker()
    marker.setLngLat([coordsarray[1],coordsarray[0]])
    marker.addTo(map)

    marker.getElement().addEventListener('click', () => {
        alert(badested.name);
      })

}

const newCard = (badesteder) => {

    //main card structure
    let card = createDiv('')
    let heading = createElement('h2')
    let indhold = createDiv('')

    card.addClass('card')
    heading.addClass('heading')
    indhold.addClass('indhold')


    //renlighed
    let heading2 = createElement('h4', 'Badestedets snavsethed:')
    let progressholder = createDiv('')
    let progress = createDiv('')

    heading2.addClass('heading2')
    progressholder.addClass('progressholder')
    progress.addClass('progress')

    progress.style('width', badesteder.renlighed+'%')
    
    indhold.child(heading2)
    progressholder.child(progress)
    indhold.child(progressholder)


    //mennesker
    let heading3 = createElement('h4', 'Mængde mennesker:')
    let progressholder1 = createDiv('')
    let progress1 = createDiv('')

    heading3.addClass('heading3')
    progressholder1.addClass('progressholder')
    progress1.addClass('progress')

    progress1.style('width', badesteder.mennesker+'%')
    
    indhold.child(heading3)
    progressholder1.child(progress1)
    indhold.child(progressholder1)


    //indhold
    heading.html(badesteder.name)
    card.child(heading)
    card.child(indhold)


    cardholder = select('.cardholder')
    cardholder.child(card)



    //"user interfaction" section (målgruppe..)
    let usersection = createDiv('')
    usersection.addClass('usersection')
    card.child(usersection)


    //rating
    let rating = createDiv('')
    rating.addClass('rating')
    usersection.child(rating)
    
    let rating1 = createDiv('')
    let rating2 = createDiv('')
    let rating3 = createDiv('')
    
    rating1.addClass('rating1')
    rating2.addClass('rating2')
    rating3.addClass('rating3')

    rating.child(rating1)
    rating.child(rating2)
    rating.child(rating3)

    rating3.style('width', badesteder.rating*20-11+'%')


    //toiletforhold 
    let toilet = createDiv('')
    toilet.addClass('toilet')
    usersection.child(toilet)
    console.log(badesteder.toiletter)

    if (badesteder.toiletter == "ja") {
        toilet.style('opacity', '1')
    } else{
        toilet.style('opacity', '0.4')
    }

    
    //målgruppe
    let målgruppe = createDiv('')
    målgruppe.addClass('målgruppe')
    usersection.child(målgruppe)

    if (badesteder.maalgruppe == 'familie') {
        målgruppe.style('background-image', 'url(./assets/familie.png)')
    } else if (badesteder.maalgruppe == 'ung') {
        målgruppe.style('background-image', 'url(./assets/ung.png)')        
    } else {
        målgruppe.style('background-image', 'url(./assets/multi.png)')
    }

}

const newPopUp = (badesteder) => {
    console.log('cum')
}


/*function draw(){
    select('.anbefalinger').mouseReleased()
}*/










/*
NOT WORKING, SEARCH FUNCTION PLS FIX GOD


function draw(){
    document.querySelector('#input').addEventListener('input', ()=>{
        let q = document.querySelector('#input').value
    
        let result = data.filter( events => 
        events.name.includes(q) 
        || events.maalgruppe.join(' ').includes(q) )
        document.querySelector('main').innerHTML = ''
        result.map( event => newCard(event) )
    })
}

function createCard(){
*/

}
