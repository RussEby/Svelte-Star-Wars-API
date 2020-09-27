<script>
    export let showModal = false;
    export let movie;
</script>

{#if showModal}
    <div class="backdrop" on:click|self>
        <div class="modal" >
          <div class="crawl">
            <h2>{movie.title}</h2>
            <h3>Episode {movie.episode_id}</h3>
            <p class="scroll">{movie.opening_crawl}</p>
          </div>
        </div>
    </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 99;
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
    margin: 10% auto;
    text-align: center;
    background: #222;
    color: gold;
  }
  .scroll {
    padding: 5px 30px;
    line-height: 2.1;
    font-size: 1.4;
    font-family: 'Krona One', sans-serif;
    text-align: justify;
  }
</style>