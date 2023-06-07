<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	export let data;
	export let form;
</script>

<section class="column">
	<SectionTitle title="Auth" />

	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}

	<form method="post">
		<label for="email">
			Email
			<input type="email" name="email" required />
		</label>

		<label>
			Password
			<input type="password" name="password" required />
		</label>

		<div class="buttons">
			<button formaction="?/login&redirect_to={data.redirect_to}" type="submit">Login</button>
			<button formaction="?/register&redirect_to={data.redirect_to}" type="submit">Register</button>
		</div>
	</form>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.error {
		color: red;
	}

	form {
		width: 20em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	label {
		display: block;
	}

	.buttons {
		display: flex;
		width: 100%;
		margin-top: 1rem;
		gap: 1rem;
	}

	input,
	button {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.5rem;
	}

	input {
		display: block;
		margin: 0.5rem 0 0 0;
		width: 100%;
	}

	button {
		flex: 1;
		cursor: pointer;
	}
</style>
