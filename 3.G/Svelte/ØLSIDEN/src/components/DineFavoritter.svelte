<script>
    export let yourFavorites
    import Beer from './Beer.svelte'

    let favoriteState = true

</script>


<main>
    <div class="headerdiv">
        <h1>Dine favorit øller</h1>
    </div>

    <div class="beerholder">
        {#each yourFavorites as beer}
        <Beer {beer} {favoriteState} bind:yourFavorites={yourFavorites}/> 
        {/each}    
    </div>
    
</main>


<style>
        h1.saed{
        border-bottom: solid white 3px;
        font-size: 100%; 
    }


    main{
        padding-top: 1rem;
        width: 100vw;
        background-color: rgb(122, 182, 162);
        color: white;
    }
    
    .beerholder{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    
    .headerdiv{
        display: grid;
        place-items: center;
    }

</style>