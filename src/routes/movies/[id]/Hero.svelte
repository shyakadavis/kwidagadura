<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { media } from '$lib/api';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;
	export let in_watchlist: boolean;

	let submitting = false;

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

		{#if $page.data.user}
			<form
				method="POST"
				action="/watchlist?/{in_watchlist ? 'delete' : 'add'}"
				use:enhance={() => {
					in_watchlist = !in_watchlist;
					submitting = true;

					return async () => {
						await invalidateAll();
						submitting = false;
					};
				}}
			>
				<input type="hidden" name="movie_id" value={movie.id} />
				<button disabled={submitting}>
					{in_watchlist ? 'Remove this from your watchlist' : 'Add this to your watchlist'}
				</button>
			</form>
		{:else}
			<p><a href="/login">Log in</a> to add this to your watchlist.</p>
		{/if}
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

	button {
		font-size: 1em;
		width: 20em;
		cursor: pointer;
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
