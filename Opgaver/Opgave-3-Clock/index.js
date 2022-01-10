let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')
let main = document.querySelector('main')
let header = document.querySelector('header')


thomas.style.backgroundImage = "url('./assets/glad.jpg')"

console.log('punish me daddy')



const saetTid = () => {
    let nul = ''
    let tid = new Date()

    thomas.style.marginLeft = 1.57 * tid.getSeconds() + '%'

    nul = ''
    if(tid.getHours()< 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()
    nul = ''
    if(tid.getMinutes()< 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()
    nul = ''
    if(tid.getSeconds()< 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()

    if(tid.getSeconds()< 30){
        thomas.style.backgroundImage = "url('./assets/glad.jpg')"
    }else{
        thomas.style.backgroundImage = "url('./assets/ked.jpg')"
    }

    if(tid.getHours()> 12){
        main.style.backgroundImage = "url('./assets/69.jpg')"
        header.style.backgroundColor = "rgba(110,99,141,255)"
    }
    else{
        main.style.backgroundImage = "url('./assets/2.jpg')"
        header.style.backgroundColor = "rgba(86,132,141,255);"
    }
}

setInterval(saetTid, 1000)