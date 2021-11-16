let data


//Asynkron funktion:

fetch('./data/birds.json')
    //get response object parse to json()
    .then( res => res.json() )
    //when parse done, json object as variable.
    .then( json => {
        console.log(json)
        data = json.birds
        document.querySelector('#title').innerHTML = json.description
        json.birds.map( bird => {
            newCard(bird)
        })
    })


    document.querySelector('#input').addEventListener('input', ()=>{
        let q = document.querySelector('#input').value

        let result = data.filter( bird => 
        bird.family.includes(q) 
        || bird.members.join(' ').includes(q) )
        document.querySelector('main').innerHTML = ''
        result.map( bird => newCard(bird) )
    })


    document.querySelector('#searchicon').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.add('show')
    })

    document.querySelector('#close').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.remove('show')
    })


    const newCard = (bird) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        card.classList.add('card')
        members.classList.add('members')
        card.append(heading)
        card.append(members)
        heading.innerHTML = bird.family
        let list = ''
        bird.members.map( member => list += '<li>' + member + '</li>')
        members.innerHTML = list
        document.querySelector('main').append(card)
    }