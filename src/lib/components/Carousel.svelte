<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import type { View } from '$lib/views';
	import SectionTitle from './SectionTitle.svelte';

	export let movies: MovieListResult[];
	export let view: View;
	export let href: string | null;
</script>

<SectionTitle title={view.title} column tag="h2" link={{ href, label: 'see all' }} />

<section class="carousel">
	{#each movies as movie}
		<a href="/movies/{movie.id}">
			<img src={media(movie.poster_path, 500)} alt={movie.title} />
		</a>
	{/each}
</section>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		display: flex;
		height: clamp(10rem, 25vw, 20rem);
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
		gap: 1rem;
		margin: 1rem 0;
	}

	/* For Webkit-based browsers (Chrome, Safari, and Opera) */
	.carousel::-webkit-scrollbar {
		display: none;
	}

	/* For IE, Edge, and Firefox */
	.carousel {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	a {
		scroll-snap-align: start;
		height: 100%;
		aspect-ratio: 2 / 3;
	}

	img {
		height: 100%;
		border-radius: 0.5rem;
	}
</style>
