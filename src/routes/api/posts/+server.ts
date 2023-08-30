import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = [
		{
			name: 'Nidhish D Nayak',
			age: 24,
			city: 'Belthangady'
		}
	];
	return json(posts);
};
