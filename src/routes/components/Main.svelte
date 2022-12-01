<script>
	import { onMount } from 'svelte';
	import ListView from './ListView/ListView.svelte';
	import MapView from './MapView/MapView.svelte';
	import { currentView } from '../scripts/data';

	let view = 'LIST';
	//currentView.subscribe(v => {
	//	view = v;
	//});
</script>

<main>
	{#if view === 'LIST'}
		<ListView />
	{:else if view === 'MAP'}
		<MapView />
	{/if}
</main>