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
		font-family: inherit;
		font-size: 1.2em;
		padding: 0.5em;
		width: 100%;
		border-radius: 0.2em;
		color: white;
		margin: 0.5em 0;
		backdrop-filter: blur(4px);
		background-color: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
		transition: background-color 400ms, border-color 400ms;
	}

	input:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	input:focus-visible {
		outline: 1px solid var(--accent);
	}
</style>
