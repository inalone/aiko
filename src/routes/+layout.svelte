<script lang="ts">
	import '../app.css';
	import { toggleLogin } from '../lib/musickit';
	import { isLoggedIn } from '../lib/store';
</script>

<svelte:head>
	<script src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"></script>
</svelte:head>

{#if $isLoggedIn}
	<slot />
{:else}
	<h2>Welcome to aiko!</h2>
	<button on:click={toggleLogin}>Log In</button>
{/if}
