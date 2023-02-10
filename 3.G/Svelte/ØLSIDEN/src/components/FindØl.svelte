<script>
    export let responeBeers
</script>


<main>
    <h1>Find Øl</h1>
    {#each responeBeers as beer}
        <h1>{beer.name}</h1>
    {/each}    
</main>


<style>

</style>