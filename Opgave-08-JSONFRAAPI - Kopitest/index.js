const getActivity = () => {
    document.querySelector('#activity2').style.visibility = 'visible'
    fetch('https://www.boredapi.com/api/activity?type='+ document.querySelector('#pet-select').value + '&participants=' + document.querySelector('#pet-select2').value)
        .then( response => response.json() )    
        .then( json =>{ 
            console.log(json)
            createCard(json)
            writeKey(json)
            
            
            if(document.querySelector('#title').innerHTML=='undefined'){
                alert("Error, No activity with selected criteria")
                location.reload()
            }
            document.querySelector('#activity2').style.visibility = 'hidden'
        })
}

const createCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accesibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
    document.querySelector('#cat').innerHTML = 'Type: ' + a.type

}

const writeKey = b => {
    localStorage.clear()
    var key1 = b.key
    var john = JSON.stringify(key1)
    localStorage.setItem('myKey', john)
    console.log(localStorage)
    console.log(localStorage.getItem("myKey"))
}


getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)


document.querySelector('#bookmark').addEventListener('click', writeKey)

console.log(localStorage)
