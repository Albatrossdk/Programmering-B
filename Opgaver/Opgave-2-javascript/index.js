let main = document.querySelector('main')
let button = document.querySelector('#button')

main.style.backgroundImage = 'url("./assets/1.jpg")'

const skiftBillede = () => {

    if(main.style.backgroundImage == 'url("./assets/1.jpg")'){
        main.style.backgroundImage = 'url("./assets/2.jpg")'
    }else if(main.style.backgroundImage == 'url("./assets/2.jpg")'){
        main.style.backgroundImage = 'url("./assets/3.jpg")'
    }else if(main.style.backgroundImage == 'url("./assets/3.jpg")'){
           main.style.backgroundImage = 'url("./assets/4.jpg")'
    }else if(main.style.backgroundImage == 'url("./assets/4.jpg")'){
        main.style.backgroundImage = 'url("./assets/1.jpg")'
    }

}


button.addEventListener('click', skiftBillede)
