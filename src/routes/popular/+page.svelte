<script lang="ts">
	let myData = {
		name: 'N/A',
		content: `<p>N/A</p>`
	};

	async function getPost() {
		const postResponse = await fetch('/api/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ key: 'value' })
		});
		myData = await postResponse.json();
	}

	async function getGet() {
		const getResponse = await fetch('/api/get');
		myData = await getResponse.json();
	}
</script>

<h1 class="m-4 font-bold text-lg">This is Popular Page</h1>
<button class="bg-teal-300 p-2 m-4" on:click={getPost}>Calculate Post</button>
<button class="bg-teal-300 p-2 m-4" on:click={getGet}>Calculate Get</button>
<p class="m-4 font-semibold">Response from posts server:</p>
<div class="m-4 p-8 bg-slate-300">
	{myData.name}
	{@html myData.content}
</div>
