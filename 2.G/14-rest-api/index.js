const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity?type='+ document.querySelector('#pet-select').value)
        .then( response => response.json() )    
        .then( json => createCard(json) )
    }
    
    const createCard = a => {
    console.log(a)
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accesibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
    document.querySelector('#cat').innerHTML = 'Type: ' + a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)