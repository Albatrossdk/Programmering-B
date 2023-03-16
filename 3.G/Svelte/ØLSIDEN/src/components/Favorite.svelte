<script>
    export let beer
    export let checkFav
    export let removeFav
    export let addFav
    
    let favorited = checkFav(beer)
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<main on:click={(e)=>{
        e.stopPropagation()
        if(checkFav(beer)){
            removeFav(beer)
            favorited = false
        }else{
            addFav(beer)
            favorited = true
        }
    }} 
    class={favorited ? "fa fa-star favorited": "fa fa-star"}>
</main>    

<style>
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
    .fa{
        position: absolute;
        right: 3%;
        top: 5%;
        background: black;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        z-index: 2;
    }
    .favorited{
        color: yellow;
    }

</style>