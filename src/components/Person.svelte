<script>
    import StarWarsStore from '../store/StarWars';
    import Modal from './Modal.svelte';
    export let person = {};

    let HomeWorldInfo = StarWarsStore.getByURL(person.homeworld);
    let MovieInfo = StarWarsStore.getMovies(person.films);

    let showModal = false;
    let selectedEpisode = 0;

    let toggleModal = ({target}) => {
        selectedEpisode = target.dataset.episodeid;
        showModal = !showModal;
    };
</script>

<div class="person">
    <h2>{person.name}</h2>
    <div class="stat">
        <p>Birth Year: {person.birth_year}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.height}</p>
        {#await HomeWorldInfo}
            <p>Homeworld: ....</p>
        {:then homeworld}
            <p>HomeWorld: {homeworld.name}</p>
            <p>HomeWorld Population: {homeworld.population}</p>
        {:catch error}
            <p>Whoops, there was an error! {JSON.stringify(error)}</p>
        {/await}
        {#await MovieInfo}
            <h3>Loading....</h3>
        {:then movies}
            {#each movies as movie}
                <hr />
                <p on:click={toggleModal} data-episodeid="{movie.episode_id}">{movie.title}</p>
                {#if selectedEpisode == movie.episode_id}
                    <Modal {showModal} {movie} on:click={toggleModal} />
                {/if}
            {/each}
        {:catch error}
            <p>Whoops</p>
        {/await}
    </div>
</div>

<style>
    .person {
        border: 1px solid #111;
        box-shadow: 2px 2px 3px #444;
        margin: 10px;
        width: 300px;
        text-align: center;
    }
    .stat p {
        margin: 4px;
    }
</style>