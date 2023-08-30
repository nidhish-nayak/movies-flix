import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	const posts = {
		name: 'Nidhish D Nayak',
		content: `
			<h1>Server has rendered post data</h1>
			<p>!!!!!!</p>
		`
	};
	return json(posts);
};
