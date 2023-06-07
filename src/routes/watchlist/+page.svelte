<script>
	import ResultsPage from '$lib/components/ResultsPage.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	export let data;
</script>

<div class="column flex">
    <SectionTitle title="Watchlist" />

	{#if data.movies.length > 0}
		<ResultsPage movies={data.movies} next={null} />
	{:else}
		<p>You haven't added anything to your watchlist yet.</p>
	{/if}
</div>
