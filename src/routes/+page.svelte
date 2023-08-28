<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1 class="p-2 mt-6 text-xl font-semibold text-center">New Release</h1>
	<ul class="flex flex-wrap justify-center p-4 m-2">
		{#each data.props.nowPlaying as item}
			<li class="flex p-3 m-2 rounded-md bg-slate-200 w-80">
				<img
					src={item.poster_path
						? `https://image.tmdb.org/t/p/w500${item.poster_path}`
						: 'https://source.unsplash.com/EEZgog4AS5M'}
					alt={item.title}
					class="relative w-28 h-min"
				/>
				<p class="absolute p-1 m-1 text-xs font-semibold bg-white rounded-full">
					{item.vote_average.toFixed(1)}
				</p>
				<div class="flex flex-col justify-start px-2 align-top">
					<h2 class="font-semibold">{item.title}</h2>
					<p class="text-sm text-gray-500">{item.release_date}</p>
				</div>
			</li>
		{/each}
	</ul>
</main>
