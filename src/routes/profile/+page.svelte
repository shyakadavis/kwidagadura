<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	export let data;
</script>

<section>
	<SectionTitle title="Profile" column />
	<div class="column profile">
		Email: <button>
			{data.user?.email}
		</button>

		Phone:
		<button>
			{data.user?.phone || 'N/A'}
		</button>
	</div>
</section>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 1em;
	}

	button {
		width: 30em;
	}
</style>
