<script lang="ts">
	import { page } from '$app/stores';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
</script>

<main>
	<SectionTitle title={$page.status.toString()} />
	<p>
		{#if $page.status === 404}
			The page you are looking for does not exist.
		{:else if $page.status === 500}
			An error occurred while trying to load this page.
		{:else}
			Something went wrong.
		{/if}
	</p>
	<a href="/">Go back home</a>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		gap: 1rem;
	}
</style>
