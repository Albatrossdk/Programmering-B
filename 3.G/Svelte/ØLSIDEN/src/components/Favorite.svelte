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
        margin: 1rem;
        text-align: center;
        position:relative;
    }
    .fa{
        position: absolute;
        right: 1%;
        top: 2%;
        z-index: 2;
    }
    .favorited{
        color: yellow;
    }

</style>