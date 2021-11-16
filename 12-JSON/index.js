let people = [{
    id: '21381',
    name: 'Nagib',
    age: 33,
    hobbies:['code','durum','tentacle hentai','Sauce'],
    favoriteColor: 'red'    
},{
    id: '69420',
    name: 'Theis',
    age: 79,
    hobbies:['briller','sovs','diarrhea','stomipose porno'],
    favoriteColor: 'green'    
},{
    id: '19832',
    name: 'Marius',
    age: 9,
    hobbies:['code','cubing','gaming','Køge'],
    favoriteColor: 'purple'    
},{
    id: '45682',
    name: 'Bjarke',
    age: 89,
    hobbies:['music','esports','gaming','league of legends'],
    favoriteColor: 'turquoise'    
}]

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.innerHTML = '<h2>' + person.name + '<h2>'
    nc.innerHTML += person.id + '<br>'
    nc.innerHTML += person.age + '<br>'
    nc.innerHTML += person.favoriteColor + '<br>'
    document.querySelector('main').append(nc)
})