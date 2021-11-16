// javascript
let main = document.querySelector('main')
let input = document.querySelector('#input')
let card = document.querySelector('card')

let namelist = ['Joseph Stalin','Michinomiya Hirohito','Chiang Kai Sheik','Mao Zedong','Adolf Hitler','Benito Mussolini', 'Ghengis Khan', 'King Leopold II']

const makeCards = array => {
    array.map( name => {
        let card = document.createElement('div')
        card.classList.add('card') 

        let top = document.createElement('div')    
        top.classList.add('top')

        let bottom = document.createElement('div')    
        bottom.classList.add('bottom')

        let h = document.createElement('h1')
        h.innerHTML = name
        
        let p = document.createElement('p')
        p.innerHTML = 'Telefon: +420 69 69 69 69 <br>Alder: 69'
        
        top.append(h)
        bottom.append(p)
        card.append(top)
        card.append(bottom)
        
        main.append(card) 
    })    
}

makeCards(namelist)

input.addEventListener('input', () => {
    let results = namelist.filter( name => name.toLowerCase().includes(input.value.toLowerCase(), name.includes( input.value ))  )
    main.innerHTML = ''
    makeCards(results)  
})

console.log(namelist.length)

text = "sovs"

for(let i = 0; i < namelist.length; i++){
    console.log(namelist[i])
  }


namelist.map( f => console.log(f) ) 
