<script>
    import Infobox from './Infobox.svelte';
    import Beer from './Beer.svelte'
    export let responseBeers
    export let yourFavorites
    console.log(responseBeers)
    let q = ''
</script>


<main>
    <div class="headerdiv" >
        <h1>Find Øl</h1>
        <input type="text" bind:value={q}>
    </div>

    <div class="beerholder">
        {#each responseBeers as beer}
            {#if beer.name.toLowerCase().includes(q.toLowerCase())}
            <Beer {beer} bind:yourFavorites={yourFavorites}/> 
            {/if}
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