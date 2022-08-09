let main = document.querySelector('main')
let input = document.querySelector('#input')
let card = document.querySelector('card')


const addCard = (name, i) => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    newCard.style.animation = 'anim';
    newCard.style.animationDelay = i/69 + 's';
    newCard.style.animationDuration = '.3s';
    main.append(newCard)
    
}


//Vi laver en array med tekst variabler det er bare så vold ultra frækt
let names = ['Chiang Kai-shek', 'Mao Zedong', 'Stalin', 'Lenin', 'Gengis Khan', 'Hitler', 'Mussolini', 'Kim Jong-Il', 'Kim Jong-Un', 'Kim Il-Sung', 'Hirohito', 'King Leopold II', 'Young Turks', 'Idi Amin']

names.map( name => addCard(name) )

input.addEventListener('input', () => {
    let results = names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()) )
    main.innerHTML = ''
    results.map( name => addCard(name) )
} )



//for(let i = 0; i < names.length; i++){
//    console.log(names[i])
//}




