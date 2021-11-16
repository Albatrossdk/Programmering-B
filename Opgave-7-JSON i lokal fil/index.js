let data


//Asynkron funktion:

fetch('./data/event.json')
    //get response object parse to json()
    .then( res => res.json() )
    //when parse done, json object as variable.
    .then( json => {
        console.log(json)
        data = json.events
        document.querySelector('#title').innerHTML = json.description

        json.events.map( events => {
            newCard(events)
        })
    })

    
    document.querySelector('#input').addEventListener('input', ()=>{
        let q = document.querySelector('#input').value

        let result = data.filter( events => 
        events.name.includes(q) 
        || events.synonyms.join(' ').includes(q) )
        document.querySelector('main').innerHTML = ''
        result.map( event => newCard(event) )
    })


    document.querySelector('#searchicon').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.add('show')
        document.querySelector('#searchicon').classList.add('hide')
    })

    document.querySelector('#close').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.remove('show')
        document.querySelector('#searchicon').classList.remove('hide')
    })


    const newCard = (events) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let synonyms = document.createElement('div')
        let nature = document.createElement('div')

        card.classList.add('card')
        synonyms.classList.add('synonyms')

        heading.innerHTML = events.name
        synonyms.innerHTML = events.synonyms
        synonyms.innerHTML = events.qualities
        nature.innerHTML = "Nature: " + events.nature
        
        card.append(heading)
        card.append(synonyms)
        card.append(nature)

        let list = ''
        events.synonyms.map( synonyms => list += '<li>' + synonyms + '</li>')
        events.qualities.map( qualities => list += '<li>' + qualities + '</li>')

        document.querySelector('main').append(card)
        synonyms.innerHTML = list
    }

    