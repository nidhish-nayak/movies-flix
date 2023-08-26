import { MY_API_TOKEN } from '$lib/Env';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${MY_API_TOKEN}`
		}
	};

	const nowPlayingURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
	const res = await fetch(nowPlayingURL, options);
	const data = await res.json();
	console.log(data);
	if (res.ok) {
		return {
			props: {
				url: nowPlayingURL,
				nowPlaying: data.results
			}
		};
	} else {
		throw error(404, 'Not found');
	}
};
