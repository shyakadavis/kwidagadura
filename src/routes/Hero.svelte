<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
	$: logo = images.logos.find((image) => image.iso_639_1 === 'en') || images.logos[0];
</script>

<a href="/movies/{movie.id}" class="column">
	<img
		class="backdrop"
		src={media(backdrop.file_path, 1280)}
		alt={movie.title}
		style="aspect-ratio: {backdrop.aspect_ratio}"
	/>
	<img
		class="backdrop2"
		src={media(images.backdrops[1].file_path, 1280)}
		alt={movie.title}
		style="aspect-ratio: {backdrop.aspect_ratio}"
	/>
	<img
		class="backdrop3"
		src={media(images.backdrops[2].file_path, 1280)}
		alt={movie.title}
		style="aspect-ratio: {backdrop.aspect_ratio}"
	/>
	<img
		class="logo"
		src={media(logo.file_path, 1280)}
		alt={movie.title}
		style="aspect-ratio: {logo.aspect_ratio}"
	/>
</a>

<style>
	a {
		display: flex;
		margin-top: 1em;
		margin-bottom: 2rem;
	}
	.backdrop {
		width: 100%;
		border-radius: 0.5rem;
		filter: drop-shadow(0 0 1rem black);
		transform: rotate(-3deg);
		z-index: 2;
	}

	.backdrop2 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 0.5rem;
		transform: rotate(-2deg);
		z-index: 1;
		/* filter: blur(1rem) brightness(0.5); */
		/* filter: blur(2px) brightness(0.6); */
	}

	.backdrop3 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 0.5rem;
		filter: blur(2px) brightness(0.6);
		transform: rotate(2deg);
	}

	.logo {
		position: absolute;
		top: 0;
		right: 1rem;
		height: 100%;
		width: 30%;
		object-fit: contain;
		filter: drop-shadow(0 0 1rem black);
		z-index: 2;
	}
</style>
