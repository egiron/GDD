<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher defaultMode="light"/>
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
