<script>
    import StarWarsStore from '../store/StarWars';
    import Person from './Person.svelte';
    let allPersons = StarWarsStore.getAllPersons();

    function loadList({ target }){
        if(target.dataset.link != null){
            allPersons = StarWarsStore.getByURL(target.dataset.link);
        }
    }
</script>

<div class="personList">
    {#await allPersons}
        <p>Loading......</p>
    {:then persons}
        {#each persons.results as person}
            <Person {person}/>
        {/each}
        <div class="buttons">
            <button 
                data-link="{persons.previous}" 
                disabled="{(persons.previous) ? '' : 'true'}" 
                on:click={loadList}>
                Previous 10
            </button>
            <button 
                data-link="{persons.next}" 
                disabled="{(persons.next) ? '' : 'true'}"  
                on:click={loadList}>
                Next 10
            </button>
        </div>
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
    .buttons {
        width: 100%;
        text-align: center;
    }
    .buttons button {
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        outline: none;
        margin: 5px;
        background-color: #8185fc;
        color: #222;
        font-size: 1.5em;
    }
    button:disabled {
        background-color: #8185fc;
        color: #999;
    }
</style>