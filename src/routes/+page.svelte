<script lang="ts">
	import Card from '$lib/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1 class="p-2 mt-6 text-xl font-semibold text-center">New Release</h1>

	{#if data && data.props && data.props.nowPlaying}
		<ul class="flex flex-wrap justify-center p-4">
			{#each data.props.nowPlaying as movie (movie.id)}
				<Card {movie} />
			{/each}
		</ul>
	{:else}
		<!--Loading page incase data is not fetched-->
		<p>Loading...</p>
	{/if}
</main>
