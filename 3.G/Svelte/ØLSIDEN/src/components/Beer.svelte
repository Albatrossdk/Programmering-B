<script>
    export let beer
    let result

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
                console.log(result);
            } else {
                // The image exists
                console.log(result);
                // Do something with the image element, e.g. add it to the DOM
            }
    });
    }
</script>

<main>
    <h1 class="saed">{beer.name}</h1>
    {#if result === 'string'}
        <img src="{beer.image}">
    {:else}
        <img src="https://nypost.com/wp-content/uploads/sites/2/2014/10/usa-whitehouse-beer-1.jpg?quality=75&strip=all&w=744">
    {/if}
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
    }
</style>