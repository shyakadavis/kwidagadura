<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: string;
	export let infinite: boolean | undefined;
</script>

{#key url}
	<main class="h-full" in:fade class:infinite>
		<slot />
	</main>
{/key}

<style>
	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}
</style>
