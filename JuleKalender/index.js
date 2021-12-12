//Shuffling array to get random positions!! :D
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

fetch('./kaldata.json')
.then( res => res.json() )
.then(json =>{
    let shuffleDays = shuffle(json.days)
    console.log(json)
    shuffleDays.map( door =>{
        let div = document.createElement('div')
        div.id = door.date + '-day'
        div.classList.add('door')
        div.style.width = door.width
        div.style.height = door.height
        
        let lock = document.createElement('div')
        lock.classList.add('locker')
        lock.innerHTML = door.date

        switch(door.content){
            case 'image':
                setImage(div, door)
                break
            case 'youtube':
                setYoutube(div, door)
                break
            case 'redditapi':
                setRedditApi(div, door)
            default:
                break
        }


        lock.addEventListener("click",()=>{
          switch(door.animation){
            case 'slide':
              lock.innerHTML = ''
              lock.classList.add('slideanim')
            break
            case 'spin':
              lock.innerHTML = ''
              lock.classList.add('spinanim')
            break
            case 'dooropen':
              lock.innerHTML = ''
              lock.classList.toggle('dooropen')
              break
          }
        })

        div.append(lock)
        document.querySelector('main').append(div)


    })

})

const setImage = (div, obj) => {
  div.style.backgroundImage = `url('${obj.url}')`
}

const setYoutube = (div, obj) => {
  div.innerHTML = obj.embed
}

/*const setRedditApi = (div, obj) => {
  fetch('https://www.reddit.com/r/nekoboys/hot.json')
  .then( resred => resred.json() )
  .then(json =>{
    div.style.backgroundImage = data.url_overridden_by_dest
  }
}*/






/*let succ = document.querySelector('.locker')
locker.addEventListener("click", gateOpen)

const gateOpen = () => {
  console.log("hej")

  //funktionen her for h

}*/





fetch('https://www.reddit.com/r/javascript/hot.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  });