import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	const postData = {
		name: 'Nidhish D Nayak',
		content: `
			<h1>Server has rendered <b>POST DATA</b></h1>
			<p>!!!!!!</p>
		`
	};
	return json(postData);
};
