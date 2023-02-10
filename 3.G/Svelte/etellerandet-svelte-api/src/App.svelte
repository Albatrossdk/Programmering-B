<script>
	let animals = [{"name":"Seagull"},{"name":"Dog"},{"name":"Albatross"},{"name":"Unicorn"},{"name":"Hydra"},{"name":"Fnatmide"},{"name":"Bendelorm"},{"name":"Due"},{"name":"Kraken"},{"name":"Sphinx"},]
	let shadow
	let animalsDiv
	let screenW
	const handleLight = (e) => {
		console.log(e.clientX)
		shadow = (e.clientX / screenW) * 10 
		let children = animalsDiv.children
		for(let i=0; i>children.length; i++){
			console.log(children[i])
			children[i].style.boxShadow = '4px 4px 4px 4px'
		}
		
	}
</script>

<main bind:clientWidth={screenW} on:mousemove={handleLight}>
	<div class="header">
		<h1>Sjove dyr</h1>
	</div>
	<div class="animals" bind:this={animalsDiv}>
		{#each animals as animal}
			<div class="animal">
				<h2>{animal.name}</h2>
			</div>
		{/each}
	</div>
</main>

<style>
	:global(body){
		margin: 0;
		padding: 0;
	}
	.header{
		background-color: pink;
		height: 12vh;
		display: grid;
		place-items: center;
		border-bottom: 3px solid black;
	}
	h1{
		margin: 0;
		font-weight: 500;
	}
	h2{
		margin: 0;
		font-weight: 500;
	}
	.animals{
		gap: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		margin: 1rem;
		padding: 1rem;
	}
	.animal{
		display: grid;
		place-items: center;
		border-radius: 50%;
		border: black solid 3px;
		height: 200px;
		width: 200px;
		background-color: pink;
	}


</style>