import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const getData = {
		name: 'Nidhish D Nayak',
		content: `
			<h1>Server has rendered <b>GET DATA</b></h1>
			<p>!!!!!!</p>
		`
	};
	return json(getData);
};
