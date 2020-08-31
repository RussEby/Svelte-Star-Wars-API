<script>
	let count = 0;
	function adder(){
		count += 1;
	}
</script>

<main>
	<div>
		<h1>Click the button to increase the count: {count}</h1>
		<button on:click={adder}>+ 1</button>
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		text-align: center;
		margin: 20px auto;
	}
	button {
		outline: none;
		border: none;
		border-radius: 10px;
		background-color: #0000ff;
		color: white;
		padding: 15px;
	}
</style>