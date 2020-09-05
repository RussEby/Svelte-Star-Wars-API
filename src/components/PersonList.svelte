<script>
    import StarWarsStore from '../store/StarWars';
    let allPersons = StarWarsStore.getAllPersons();
</script>

<div class="personList">
    {#await allPersons}
        <p>Loading......</p>
    {:then persons}
        <!-- {JSON.stringify(persons)} -->

        <p>{JSON.stringify(persons.count)}</p>
        <p>{JSON.stringify(persons.next)}</p>
        <p>{JSON.stringify(persons.previous)}</p>
        <p>{JSON.stringify(persons.results)}</p>
        <p>{JSON.stringify(persons.results[0])}</p>
        
    {:catch error}
        <p>Whoops, there was an error! {JSON.stringify(error)} </p>
    {/await}
</div>

<style></style>