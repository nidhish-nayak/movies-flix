<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1 class="p-2 mt-6 text-xl text-center font-semibold">New Release</h1>
	<ul class="flex flex-wrap justify-center m-2 p-4 rounded-lg">
		{#each data.props.nowPlaying as item}
			<li class="bg-slate-200 flex p-2 m-2 rounded-sm w-80">
				<img
					src={item.poster_path
						? `https://image.tmdb.org/t/p/w500${item.poster_path}`
						: 'https://source.unsplash.com/EEZgog4AS5M'}
					alt={item.title}
					class="w-28 relative h-min rounded-md"
				/>
				<p class="absolute bg-white m-1 font-semibold text-xs rounded-md p-1">
					{item.vote_average.toFixed(1)}
				</p>
				<div class="flex justify-start align-top flex-col">
					<h2 class="px-2 font-semibold">{item.title}</h2>
					<p class="pb-2 pl-2 text-sm text-gray-500">{item.release_date}</p>
				</div>
			</li>
		{/each}
	</ul>
</main>
