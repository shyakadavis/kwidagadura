<script lang="ts">
	import * as api from '$lib/api';
	import { navigating, page } from '$app/stores';
	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
	import NavigatingIndicator from '$lib/components/NavigatingIndicator.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href={api.base} />
	<title>{$page.data.title ?? 'SvelteFlix'}</title>
	<meta name="description" content="Discover today's top movies" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="kwidagadura.vercel.app" />
	<meta property="twitter:url" content="https://kwidagadura.vercel.app/" />
	<meta name="twitter:title" content="SvelteFlix" />
	<meta name="twitter:description" content="Discover today's top movies" />
	<meta name="twitter:image" content="https://kwidagadura.vercel.app/og.png" />
</svelte:head>

<nav>
	<a href="/"><img src={logo} alt="SvelteFlix" srcset="" /></a>

	<section class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log In</a>
	</section>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>Data provided by</p>
	<a href="https://www.themoviedb.org/"> <img src={tmdb} alt="The Movie DB" /></a>
</footer>

{#if $navigating}
	<NavigatingIndicator />
{/if}

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		color: var(--accent);
		max-width: var(--column);
		margin: 2rem auto;
		padding: 0 var(--side);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
	}
</style>
