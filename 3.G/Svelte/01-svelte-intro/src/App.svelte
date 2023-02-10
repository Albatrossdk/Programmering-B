<script>
	import{fly} from 'svelte/transition'
	let name = "Getrud";
	let names = ['Mie', 'Bjørn', 'Theis']
	const removeItem = (i)=>{
		names.splice(i, 1)
		names = names
	}
	let magic = false
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" bind:value={name}>
	<button on:click={()=> {names = [...names, name];name=''}}>Add</button>
	<button on:click={()=>magic=!magic}>Show me the magic</button>
	{#if magic}
		 <div class='people'>
			 {#each names as n, index}
				 <div transition:fly="{{ y: 200, duration: 1000, delay:index*100}}" class='person' on:click={()=>removeItem(index)}>{n} ({index})</div>
			 {/each}
		 </div>
	{/if}
</main>

<style>
	.people{
		margin: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
	.person{
		display: grid;
		place-items: center;
		background-color: darkslateblue;
		height: 5rem;
		color:white;
		border-radius: 8px;
		box-shadow: 10px 10px 20px 4px black;

	}
	main {
		padding: 1rem;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>