<script>
	import Menuitem from "./components/Menuitem.svelte";
	import Frontpage from "./components/Frontpage.svelte";
	import FindØl from "./components/FindØl.svelte";
	import DineFavoritter from "./components/DineFavoritter.svelte";
	import RandomBeer from "./components/RandomBeer.svelte";
	let menu = ['Frontpage', 'Find Øl', 'Dine Favoritter', 'Random Beer']
	let activePage = menu[0]

	let responseBeers = []
	let yourFavorites = []
	let randomBeer = []

	fetch('https://api.sampleapis.com/beers/ale')
	.then(res => res.json())
	.then(json =>{
		responseBeers = json
	})

</script>

<header>
	{#each menu as item}
		<Menuitem bind:activePage={activePage} title={item}/>
	{/each}
</header>

<main>
	{#if activePage == menu[0]}
		<Frontpage />
	{:else if activePage == menu[1]}
		<FindØl {responseBeers}/>
	{:else if activePage == menu[2]}
		<DineFavoritter />
	{:else if activePage == menu[3]}
		<RandomBeer />
	{/if}
	
</main>

<style>
	:global(*, body){
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	main {
		display: grid;
		place-items: center;
	}
	h1{
		font-weight: 100;
	}
	header{
		display: grid;
		height: 10vh;
		grid-auto-flow: column;
		place-items: center;
	}
</style>