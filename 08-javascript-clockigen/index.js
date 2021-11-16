let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')

let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')


const settid =() =>{    

    let tid = new Date()
    
    header.style.width = 100/24 * tid.getHours() + '%'

    main.style.width = 100/60 * tid.getMinutes() + '%'

    footer.style.width = 100/60 * tid.getSeconds() + '%'

    let nul = ''
    if (tid.getHours() < 10) nul= '0'
    timer.innerHTML = nul + tid.getHours()

    nul = ''
    if (tid.getMinutes() < 10) nul= '0'
    min.innerHTML = nul + tid.getMinutes()

    nul = ''
    if (tid.getSeconds() < 10) nul= '0'
    sek.innerHTML = nul + tid.getSeconds()

}

const gay = () =>{

}



setInterval(settid, 1000)
setInterval(gay, 1000)