<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';

	export let data;

	let revenue = data.movie.revenue;
	let formattedRevenue: string;

	if (revenue >= 1e9) {
		formattedRevenue = `${(revenue / 1e9).toFixed(1)}B`;
	} else {
		formattedRevenue = `${(revenue / 1e6).toFixed(0)}M`;
	}

	const formattedDate = new Date(data.movie.release_date).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<Hero movie={data.movie} in_watchlist={data.in_watchlist} />

<section class="column grid">
	{#if data.trailer}
		<iframe
			src={`https://www.youtube.com/embed/${data.trailer.key}`}
			frameborder="0"
			allowfullscreen
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		/>
	{/if}

	<dl>
		<dt>Released</dt>
		<dd>{formattedDate}</dd>

		<dt>Runtime</dt>
		<dd>{data.movie.runtime} minutes</dd>

		<dt>Genres</dt>
		<dd>{data.movie.genres.map((genre) => genre.name).join(', ')}</dd>

		<dt>Production countries</dt>
		<dd>{data.movie.production_countries.map((country) => country.name).join(', ')}</dd>

		<dt>Spoken languages</dt>
		<dd>{data.movie.spoken_languages.map((language) => language.name).join(', ')}</dd>

		<dt>Budget</dt>
		<dd>${data.movie.budget / 1e6}M</dd>

		<dt>Revenue</dt>
		<dd>${formattedRevenue}</dd>
	</dl>
</section>

{#if data.movie.recommendations.results.length > 0}
	<Carousel
		movies={data.movie.recommendations.results}
		view={{ title: 'You might also like...', endpoint: '' }}
		href={null}
	/>
{/if}

<style>
	.grid {
		display: grid;
		margin: 2em auto;
		gap: 2em;
		place-items: center;
	}

	iframe {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: 1rem;
		backdrop-filter: blur(4px);
		background-color: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
		transition: background-color 400ms, border-color 400ms;
	}

	iframe:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border-color: var(--accent);
	}

	dl {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1em;
	}

	dt {
		text-transform: uppercase;
		font-size: 0.8em;
		opacity: 0.8;
		top: 0.2em;
	}

	@media (min-width: 40rem) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
