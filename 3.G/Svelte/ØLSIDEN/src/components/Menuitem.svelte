<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
    export let title
    export let activePage
</script>

<main 
class={activePage == title ? 'active' : ''}
on:click={()=>activePage=title}
>

    {title}
</main>

<style>
    main{
        cursor: pointer;
        transition: .1s ease-in-out all;
        border-bottom-width: 0;
        padding-bottom: .2rem;

    }
    .active{
        border-bottom: 4px solid slateblue;
    }
</style>