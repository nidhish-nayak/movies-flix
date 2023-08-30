<script lang="ts">
	let myData = {
		name: 'N/A',
		content: `<p>N/A</p>`
	};

	async function add() {
		const response = await fetch('/api/posts');

		myData = await response.json();
	}
</script>

<h1>This is Popular Page</h1>
<button class="bg-teal-300 p-2 m-4" on:click={add}>Calculate</button>
<p>Response from posts server:</p>
<div class="m-4 p-8 bg-slate-300">
	{myData.name}
	{@html myData.content}
</div>
