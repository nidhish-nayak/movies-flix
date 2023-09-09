<script lang="ts">
	export let movie: {
		id: number;
		title: string;
		poster_path: string;
		vote_average: number;
		release_date: string;
		overview: string;
	};

	function getPosterUrl() {
		return movie.poster_path
			? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
			: 'https://source.unsplash.com/EEZgog4AS5M';
	}
</script>

<li class="flex p-3 m-2 rounded-md bg-slate-200 w-80">
	<!-- Render movie data -->
	<img src={getPosterUrl()} alt={movie.title} class="relative w-28 h-min" />
	<p class="absolute p-1 m-1 text-xs font-semibold bg-white rounded-full">
		{movie.vote_average.toFixed(1)}
	</p>
	<div class="flex flex-col justify-start px-2 align-top">
		<h2 class="font-semibold">{movie.title}</h2>
		<p class="text-sm text-gray-500">{movie.release_date}</p>
	</div>
</li>
