let apiData

fetch('https://www.boredapi.com/api/activity?')
    .then( response => response.json() )    
    .then( json =>{
        logIt(json)
        apiData = json
    } )

    
const logIt = a => {
//console.log(a)

//document.querySelector('.container').innerHTML = a.activity
}


  