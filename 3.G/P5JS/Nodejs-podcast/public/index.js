let clientSocket
let startmsg = "im ready for some audio please"


function setup(){
    noCanvas()
    fetch('http://localhost:666/ip')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    
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

    //

    console.log('public served and running')
    //Connect client with socket
    clientSocket = io.connect()

    //Ask server if podcast is live
    clientSocket.emit('podcastLive','is server live?')

    clientSocket.on('podcastLive', liveState =>{
        if(liveState){
            console.log('Podcast is live!')
            select('#placeholder').html('Podcasten har præmiere nu!')
        }else{
            console.log('Podcast isnt live :(')
            select('#placeholder').html('Næste podcast episode har premiere på mandag kl. 14')
        }
    })

    clientSocket.on('sendingaudio', msg => {            
        console.log(msg)
        select('.eyoo').html(msg)

    })

    clientSocket.on('date', date => {            
        console.log(date)
    })

}
