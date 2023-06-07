import * as api from '$lib/api';
import type { MovieListResult } from '$lib/types';

export async function load({ data, fetch }) {
	const movies = (await Promise.all(
		data.ids.map((id) => {
			return api.get(fetch, `movie/${id}`);
		})
	)) as MovieListResult[];

	return {
		movies,
		title: 'Watchlist'
	};
}
