<script lang="ts">
	export let title: string;
	export let column = false;
</script>

<h1 class:column>
	{title}
</h1>

<style>
	h1 {
		font-weight: bold;
		font-size: 2em;
		text-decoration: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(to right, var(--accent), #f6ad55, #fc8181);
	}
</style>
