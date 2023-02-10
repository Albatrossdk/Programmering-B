<script>
    export let recipe // javascript objekt med en hel opskrift
    console.log(recipe)
    let active = false 
</script>

<main on:click={()=>active=!active} class={active ? 'active' : ''} style='background-image:url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>
    {#if active}
        <div class="holder">
            <div class="ingredients">
                <p>{recipe.strIngredient1+': '+recipe.strMeasure1}</p>
                <p>{recipe.strIngredient2+': '+recipe.strMeasure2}</p>
                <p>{recipe.strIngredient3+': '+recipe.strMeasure3}</p>
                <p>{recipe.strIngredient4+': '+recipe.strMeasure4}</p>
                <p>{recipe.strIngredient5+': '+recipe.strMeasure5}</p>
                <p>{recipe.strIngredient6+': '+recipe.strMeasure6}</p>
                <p>{recipe.strIngredient7+': '+recipe.strMeasure7}</p>
                <p>{recipe.strIngredient8+': '+recipe.strMeasure8}</p>
                <p>{recipe.strIngredient9+': '+recipe.strMeasure9}</p>
                <p>{recipe.strIngredient10+': '+recipe.strMeasure10}</p>
                <p>{recipe.strIngredient11+': '+recipe.strMeasure11}</p>
                <p>{recipe.strIngredient12+': '+recipe.strMeasure12}</p>
                <p>{recipe.strIngredient13+': '+recipe.strMeasure13}</p>
                <p>{recipe.strIngredient14+': '+recipe.strMeasure14}</p>
                <p>{recipe.strIngredient15+': '+recipe.strMeasure15}</p>
                <p>{recipe.strIngredient16+': '+recipe.strMeasure16}</p>
                <p>{recipe.strIngredient17+': '+recipe.strMeasure17}</p>
                <p>{recipe.strIngredient18+': '+recipe.strMeasure18}</p>
                <p>{recipe.strIngredient19+': '+recipe.strMeasure19}</p>
                <p>{recipe.strIngredient20+': '+recipe.strMeasure20}</p>
            </div>

            <div class="description">
                {recipe.strInstructions}
            </div>

        </div>
         <!-- content here -->
    {/if}
</main>

<style>
    main{
        height:400px;
        width:100%;
        display:grid;
        place-items:center;
        font-weight: 100;
        color:white;
        border-radius:1rem;
        transition: all 1s ease-in-out;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .active{
        transition: all 1s ease-in-out;
        width:100%;
        height:130vh;
        z-index:2;
        position:absolute;
        left:0;
        top:0;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .holder{
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 1rem;
        gap: 0.5rem;
    }
    .description{
        background-color: rgba(240, 248, 255, 0.6);
        padding: 0.5rem;
        color: black;
        font-size: large;
        border-radius: 1rem;
    }
    .ingredients{
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: rgba(240, 248, 255, 0.6);
        color: black;
    }
</style>