<script>
    import Number from "./Number.svelte";
    export let title = 'unnamed'
    export let index = 0
    let active = true
	
</script>

<main >
	<h1>{title}</h1>
    <button on:click={()=>active=!active}>Number</button>
    <div class="number">
        <Number number={index} active={active}/>
    </div>
</main>

<style>
    main{
        display: grid;
        place-items: center;
        height: 400px;
        width: 400px;
        border: 3px solid blueviolet;
        border-radius: 1rem;
        margin: 1rem;
        position: relative;
    }
    .number{
        position: absolute;
        display: grid;
        place-items: center;
        right: 1rem;
        bottom: 1rem;
    }

</style>