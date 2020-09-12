<script>
    import StarWarsStore from '../store/StarWars';
    import Person from './Person.svelte';
    let allPersons = StarWarsStore.getAllPersons();
</script>

<div class="personList">
    {#await allPersons}
        <p>Loading......</p>
    {:then persons}
        {#each persons.results as person}
            <Person {person}/>
        {/each}
    {:catch error}
        <p>Whoops, there was an error! {JSON.stringify(error)} </p>
    {/await}
</div>

<style>
    .personList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>