<script>
	import Menuitem from "./components/Menuitem.svelte";
	import Frontpage from "./components/Frontpage.svelte";
	import FindCocktails from "./components/FindCocktails.svelte";
	import SavedCocktails from "./components/SavedCocktails.svelte";
	let menu = ['Frontpage', 'Find cocktails', 'Favorite Cocktails']
	let activePage = menu[0]
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
		<FindCocktails />
	{:else if activePage == menu[2]}
		<SavedCocktails />
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