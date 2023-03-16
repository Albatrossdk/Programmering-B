<script>
    export let beer
    console.log(beer)
</script>


<main>
    <div class="title">
        <h2>{beer.name}</h2>
    </div>
    <h2>The beer costs: {beer.price}</h2>
    <div class="rating">
        <h2>Rating:</h2>
        <h3>{Math.round(beer.rating.average * 100)/100} / 5 ({beer.rating.reviews} reviews)</h3>
    </div>
</main>


<style>
    main{
        height: 60vh;
        width: 50vw;
        background-color: white;
        background-image: url("https://img.freepik.com/free-photo/grunge-wood-background-with-decorative-border_1048-14281.jpg?w=900&t=st=1678308170~exp=1678308770~hmac=3ba816928e0bfc0eb82ee08acd3edf08f6019ed93b90cad612d4def97657b5ae%22");
        background-size:  cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 3px solid black;
        border-radius: 50px;
        color: whitesmoke;
        display: grid;
        place-items: center;
        grid-template-rows: 1fr 1fr 1fr;
        padding-top: 10%;
        padding-bottom: 10%;
    }

</style>