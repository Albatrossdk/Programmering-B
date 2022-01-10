const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity?key=' + key)
        .then( response => response.json() )    
        .then( json => createCard(json) )
}

const createCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accesibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
    document.querySelector('#cat').innerHTML = 'Type: ' + a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity())
