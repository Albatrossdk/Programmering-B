<script>
	import{fly, fade} from 'svelte/transition'
	import{onMount} from 'svelte'
	let name = "Gertrud";
	let destination = "Vienna"
	let destinations = [{'name':'Berlin'}, {'name':'Tokyo'}, {'name':'Paris'}]
	const removeItem = (i)=>{
		destinations.splice(i, 1)
		destinations = destinations
	}
	let state = false
	
	const createBackgroundArray = () =>{
		destinations.map(n=>{
			console.log(n)
			fetch("https://api.giphy.com/v1/gifs/search?&api_key=y29zSFTKH8okWLq2IxkcudGq1j9NYQ9i&q="+n.name+"&limit=1")
			.then( response => response.json() )
			.then( json => {
				n.img = json.data[0].images.original.url
				destinations = destinations
			})
		})
	
	}
	const updateDestinations = () =>{
		fetch("https://api.giphy.com/v1/gifs/search?&api_key=y29zSFTKH8okWLq2IxkcudGq1j9NYQ9i&q="+destination+"&limit=1")
		.then( response => response.json() )
		.then( json => {
			if(json.data[0] === undefined){
				console.log('User search query returned no results in GIPHY api')
				destination = ''
				alert('Woops! Sorry no gif could be found with that search query, please try again :3')
				return
			}else{
				destinations = [...destinations, {'name':destination, 'img':json.data[0].images.original.url}]
				destination = ''
				destinations = destinations
			}
			})
	}
	
	createBackgroundArray()
</script>

<header>
	<h1>{name}'s travel destinations</h1>
	<div class="destinationInput">
		<input type="text" bind:value={destination}>
		<button on:click={updateDestinations}>Add Destination</button>
	</div>
</header>

<main>
	<div class="overtopdiv {state === false ? 'show' : 'hide'}"></div>
	<div transition:fade="{{duration: 2000}}" class="namepage {state === false ? 'show' : 'hide'}">
		Whats your name?
		<div class="submit">
			<input type="text" bind:value={name}>
			<button on:click={()=> {state='true'}}>Submit</button>
		</div>
	</div>

	
	<div class='destinations'>
		{#each destinations as n, index}
			<div transition:fly="{{ y: 200, duration: 1000, delay:index*100}}" id={n.name} class='destination' style="background-image:url('{n.img}')" on:click={()=>removeItem(index)}>{n.name} ({index})</div>
		{/each}
	</div>

</main>

<style>
	:global(body){
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	header {
		height: 25vh;
		width: 100vw;
		display: grid;
		place-items: center;
		margin: 0;
		padding: 0;
	}
	main {
		max-width: 240px;
		margin: 0 auto;
		height: 75vh;
		width: 100vw;
		display: grid;
		place-items: center;
	}
	.namepage{
		position: fixed;
		top: 35vh;
		background-color: #1c356d;
		color: white;
		height: 30vh;
		width: 40vw;
		display: grid;
		place-items: center;
		font-size: 2rem;
		border-radius: 1rem;
		box-shadow: 10px 10px 20px 4px black;
		z-index: 3;
	}
	.overtopdiv{
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		position: fixed;
		top: 0;
	}
	.submit{
		font-size: 1rem;
	}
	.destinations{
		width: 80vw;
		margin: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		height: 75vh;
		overflow-x: scroll;
		padding: 1rem;
	}
	.destination{
		display: grid;
		place-items: center;
		height: 20vh;
		color:white;
		border-radius: 8px;
		box-shadow: 10px 10px 20px 4px black;
		background-repeat: no-repeat;
		background-size: cover;
		/*background-image: url("https://media2.giphy.com/media/3oEduZC8JSRVMh7jJS/200_d.webp?cid=2b9028852lfq637pzexk33f42ncfpw95rjsa3r2kq9mey0zp&rid=200_d.webp&ct=g");*/
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
		border-bottom: #1c356d 3px solid;
		margin-bottom: 1rem;
	}
	.hide{
		left: 200%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>