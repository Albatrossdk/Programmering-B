<script>
    export let number = 0
    export let active = true
    import {blur} from 'svelte/transition'
</script>

{#if active}
    <main in:blur out:blur>
        {number}
    </main>
{/if}

<style>
main{
    display: grid;
    place-items: center;
    height: 2rem;
    width: 2rem;
    background-color: blueviolet;
    color: whitesmoke;
    border-radius: 100%;
    border: solid black 2px;
}

</style>