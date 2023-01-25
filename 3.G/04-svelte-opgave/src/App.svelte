<script>
	let query = 'something'
    $: console.log('when query changes - this log will be induced: ' + query)
	$: fetch("https://api.giphy.com/v1/gifs/search?&api_key=y29zSFTKH8okWLq2IxkcudGq1j9NYQ9i&q="+query+"&limit=1")
		.then( response => response.json() )
		.then( json => {
			juiceImage = json.data[0].images.original.url 
			console.log(json)
			/*if(json.data[0] === undefined){
				console.log('User search query returned no results in GIPHY api')
				alert('Woops! Sorry no gif could be found with that search query, please try again :3')
				return
			}else{
				juiceImage = json.data[0].images.original.url 
				console.log(json)
			}*/
			})
	let juiceImage
</script>

<main>
	<div class="holder">
		<h2>Show me: <input bind:value={query} type="text"></h2>
		<img class='juiceIMG' src="{juiceImage}" alt=""> <br>
	</div>
</main>

<style>
	:global(body){
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: grid;
		place-items: center;
		height: 100vh;
		width: 100vw;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.juiceIMG{
    	width:15rem;
    	height:15rem;
    	object-fit: cover;
    	border-radius: 50%;
		padding-bottom: 1rem;
	}

	.holder{
		height: 60vh;
	}
	input{
		margin: 1rem;
	}
</style>