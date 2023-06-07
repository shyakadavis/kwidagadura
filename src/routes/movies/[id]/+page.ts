import * as api from '$lib/api';
import type { MovieDetails } from '$lib/types';

export async function load({ data, fetch, params }) {
	const movie = (await api.get(fetch, `movie/${params.id}`, {
		append_to_response: 'images,videos,recommendations'
	})) as MovieDetails;

	const trailer = movie.videos.results.find((video) => {
		return (
			video.official &&
			video.site === 'YouTube' &&
			(video.type === 'Trailer' || video.type === 'Teaser')
		);
	});

	return { in_watchlist: data.in_watchlist, movie, trailer, title: movie.title };
}
