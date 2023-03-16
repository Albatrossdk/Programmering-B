<script>
    export let responseBeers
    let randomIndex = Math.floor(Math.random() * 181)

    

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
            } else {
                // The image exists
                imagestate = true
                // Do something with the image element, e.g. add it to the DOM
            }
    });
    }

    $: imageExists(responseBeers[randomIndex].image)
</script>


<main>
    <div class="headerdiv">
        <h1>Random Øl</h1>
        <button on:click={()=>randomIndex = Math.floor(Math.random() * 181)}>New beer</button>
        
    </div>

    <div class="beerholder">
        <div class="beer">
            <h2>{responseBeers[randomIndex].name}</h2>
            {#if imagestate === true}
                <img src="{responseBeers[randomIndex].image}">
            {:else}
                <img class="obama" src="https://nypost.com/wp-content/uploads/sites/2/2014/10/usa-whitehouse-beer-1.jpg?quality=75&strip=all&w=744">
            {/if}
            <div class="rating">
                <h2>Rating:</h2>
                <h3>{Math.round(responseBeers[randomIndex].rating.average *100)/100} / 5 ({responseBeers[randomIndex].rating.reviews} reviews)</h3>
            </div>
        </div>

</main>


<style>
    .beer{
        display: grid;
        place-items: center;
        border-radius: 1rem;
        border: solid black 2px;
        padding: 1rem;
        margin: 1rem;
        height: 70vh;
    }

    .rating {
        display: grid;
        text-align: center;
    }

    main{
        padding-top: 1rem;
        width: 100vw;
        background-color: rgb(122, 182, 162);
        color: white;
        height: 90vh;
        overflow: hidden;
        

    }

    .headerdiv{
        display: grid;
        place-items: center;
    }

    .beerholder{
        height: 70vh;
    }

    .obama{
        height: 85%;
        width: 40%;
    }

</style>