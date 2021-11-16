
let bingelist = [
    './Assets/film/1.png',
    './Assets/film/2.png',
    './Assets/film/3.png',
    './Assets/film/4.png',
    './Assets/film/5.png',
    './Assets/film/6.png',
    './Assets/film/7.png',
    './Assets/film/8.png',
]



bingelist.map( (movie, index) => {
    let newImage = document.createElement('img')
    newImage.src = movie
    document.querySelector('#bingelist').append(newImage)
})

