<script>
    export let responseBeers
    let randomIndex = Math.floor(Math.random() * 181)

    console.log(responseBeers[1])

    
</script>


<main>
    <div class="headerdiv">
        <h1>Random Øl</h1>
        <button on:click={()=>randomIndex = Math.floor(Math.random() * 181)}>New beer</button>
        
    </div>

    <div class="beerholder">
        <div class="beer">
            <h2>{responseBeers[randomIndex].name}</h2>
            <img src="{responseBeers[randomIndex].image}">
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
    }

    main{
        padding-top: 1rem;
        width: 100vw;
        background-color: rgb(122, 182, 162);
        color: white;
        height: 100vw;
    }

    .headerdiv{
        display: grid;
        place-items: center;
    }

</style>