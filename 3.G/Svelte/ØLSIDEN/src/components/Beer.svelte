<script>
    import Infobox from './Infobox.svelte';
    import {scale} from 'svelte/transition'
    import InfoBox from './Infobox.svelte'
    export let beer
    export let yourFavorites
    export let favoriteState
    
    let result
    let imagestate

    function checkImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => resolve("no image found");
        });


    }

    function imageExists(url){
        checkImage(url).then((result) => {
            if (typeof result === "string") {
                imagestate = false
                console.log(result);
            } else {
                // The image exists
                imagestate = true
                console.log(result);
                // Do something with the image element, e.g. add it to the DOM
            }
    });
    }

    imageExists(beer.image)
    let active = false;
</script>

<main on:click={()=> active=!active}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h1 class="saed">{beer.name}</h1>
    <span on:click={()=>{
        if(favoriteState){
            favoriteState = false
            //remove from array
        }else{
            favoriteState = true
            yourFavorites = [...yourFavorites, beer]
            console.log(yourFavorites)
        }
    }} 
    class="fa fa-star"></span>
    {#if imagestate === true}
        <img src="{beer.image}">
    {:else}
        <img class="obama" src="https://nypost.com/wp-content/uploads/sites/2/2014/10/usa-whitehouse-beer-1.jpg?quality=75&strip=all&w=744">
    {/if}
    <div class="rating">
        <h2>Rating:</h2>
        <h3>{Math.round(beer.rating.average *100)/100} / 5 ({beer.rating.reviews} reviews)</h3>
    </div>
    {#if active}
    <div class='active' in:scale>
        <Infobox {beer}/>
    </div>
    {/if}
</main>    

<style>
    .obama{
        height: 90%;
        width: 50%;
    }

    .rating{
        display: grid;
        text-align: center;
    }

    main{
        display: grid;
        place-items: center;
        border-radius: 1rem;
        border: solid black 2px;
        padding: 1rem;
        margin: 1rem;
        height: 300px;
        text-align: center;
        position:relative;
    }
    .active{
        position:absolute;
        z-index:2;
    }
    .fa{
        position: absolute;
        right: 3%;
        top: 5%;
    }

</style>