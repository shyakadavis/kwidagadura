<script lang="ts">
	type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	type Link = {
		href: string | null;
		label: string;
	};

	export let title: string;
	export let column = false;
	export let tag: Tag = 'h1';
	export let link: Link | null = null;
</script>

<svelte:element this={tag} class:column>
	{title}
	{#if link}<a href={link.href}>{link.label}</a>{/if}
</svelte:element>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		text-decoration: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(to right, var(--accent), #f6ad55, #fc8181);
	}

	a {
		font-size: 1rem;
	}
</style>
