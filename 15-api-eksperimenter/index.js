let api_key = 'YfoA26GBT44kI0D0XCyRx5Hc52kYYhH6'


fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key)
    .then( response => response.json() )
    .then( json => {
        console.log(json.data[0].images.fixed_height.url)
        insertImage(json.data[30].images.fixed_height.url)
    } )


    const insertImage = (url) =>{
        let img = document.createElement('img')
        img.src = url
        document.querySelector('body').append(img)
    }
