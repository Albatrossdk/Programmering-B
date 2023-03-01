<script>
    export let beer
    console.log(beer)
</script>


<main>
    <h1>{beer.rating.average}</h1>
</main>


<style>
    main{
        height: 60vh;
        width: 50vw;
        background-color: white;
        border: 1px solid black;
        border-radius: 50px;
    }
    h1{
        color:green;
    }
</style>