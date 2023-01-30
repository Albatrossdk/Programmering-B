<script>
	import Recipe from './components/Recipe.svelte'
	let recipes = ['pasta al a carte', 'pasta med sild', 'whiskysovs', 'pebersovs', 'saltet sæd']
</script>

<header>
	<h1>Web components</h1>
</header>
<main>
	{#each recipes as title, index}
	<Recipe {title} {index}/>
	{/each}
</main>

<style>
	h1{
		color: blueviolet;
		text-transform: uppercase;
		font-weight: 100;	
	}
	main{
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
</style>