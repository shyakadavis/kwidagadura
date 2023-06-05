<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { views } from '$lib/views';

	export let data;
</script>

<SectionTitle title="Top Trending Movies" column />

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending" />
<Carousel movies={data.now_playing.results} view={views.now_playing} href="/movies/now_playing" />
<Carousel movies={data.upcoming.results} view={views.upcoming} href="/movies/upcoming" />
