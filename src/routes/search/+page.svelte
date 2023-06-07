<script lang="ts">
	import ResultsPage from '$lib/components/ResultsPage.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	export let data;
</script>

<section class="column">
	<SectionTitle title="Search" />

	<form>
		<input name="query" value={data.query} autocomplete="off" spellcheck="false" />
	</form>

	{#if data.query}
		<ResultsPage movies={data.movies} next={null} />
	{/if}
</section>

<style>
	input {
		font-size: 1.2em;
	}
</style>
