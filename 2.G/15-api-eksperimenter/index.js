let api_key = 'YfoA26GBT44kI0D0XCyRx5Hc52kYYhH6'


fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&limit=20&rating=pg-13')
    .then( response => response.json() )
    .then( json => {
        json.data.map( image => insertImage(image.images.fixed_width.url) )
        console.log(image)
    } )


    const insertImage = (url) =>{
        let img = document.createElement('img')
        img.src = url
        console.log(document.querySelector('body'))
        document.querySelector('body').append(img)
    }
