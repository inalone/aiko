<script lang="ts">
	import '../app.css';
	import Loading from '$lib/components/Loading.svelte';
	import { toggleLogin } from '$lib/musickit';
	import { isLoggedIn, isMusicKitInitialised, theme } from '$lib/store';
</script>

<svelte:head>
	<script src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"></script>
</svelte:head>

<main data-theme={$theme}>
	{#if !$isMusicKitInitialised}
		<div class="flex min-h-screen justify-center items-center">
			<Loading />
		</div>
	{:else if !$isLoggedIn}
		<div class="hero min-h-screen">
			<div class="hero-content text-center">
				<div class="max-w-md space-y-4">
					<h1 class="text-5xl font-bold">Welcome to aiko</h1>
					<p>To get started, please log into your Apple Music account.</p>
					<button class="btn btn-primary" on:click={toggleLogin}>Log In</button>
				</div>
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</main>
