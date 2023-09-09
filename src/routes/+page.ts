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

	try {
		const res = await fetch(nowPlayingURL, options);

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					url: nowPlayingURL,
					nowPlaying: data.results
				}
			};
		} else {
			throw error(404, 'Not found');
		}
	} catch (error) {
		console.log('500 ', error);
	}
};
