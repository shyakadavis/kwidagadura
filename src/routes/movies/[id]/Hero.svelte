<script lang="ts">
	import { media } from '$lib/api';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) || movie.images.backdrops[0];
</script>

<section class="hero">
	<div class="backdrop">
		<img src={media(backdrop.file_path, 1280)} alt={movie.title} />
	</div>

	<div class="info">
		<SectionTitle title={movie.title} />
		<Stars vote_average={movie.vote_average} vote_count={movie.vote_count} />
		<p>{movie.overview}</p>
	</div>
</section>

<style>
	.hero {
		display: grid;
		background: black;
	}

	.backdrop img {
		width: 100%;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8rem;
		left: 0;
		bottom: 0;
		background: linear-gradient(to top, black, transparent);
	}

	.info {
		display: flex;
		flex-direction: column;
		bottom: 0;
		width: 100%;
		padding: var(--side);
		margin-top: -4rem;
		gap: 1rem;
	}

	.info p {
		margin: 0;
	}

	.info p {
		max-width: 40ch;
	}

	@media (min-width: 80em) {
		.hero {
			grid-template-columns: 1fr 80em;
			grid-template-rows: auto;
		}

		.info {
			position: absolute;
			justify-content: center;
			top: 0;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
			margin: 0;
		}

		.backdrop {
			grid-column: 2/3;
		}

		.backdrop::after {
			width: 15rem;
			height: 100%;
			left: 0;
			bottom: 0;
			background: linear-gradient(to right, black, transparent);
		}
	}
</style>
