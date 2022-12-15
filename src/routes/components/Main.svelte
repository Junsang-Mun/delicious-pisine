<script>
	import { onMount } from 'svelte';
	import ListView from './ListView/ListView.svelte';
	import MapView from './MapView/MapView.svelte';
	import { currentView, initLocation } from '../scripts/data';
	import '../../app.css';

	let view = 'LIST';
	currentView.subscribe(v => {
		view = v;
	});
	onMount(() => {
		initLocation();
	})
</script>

<main>
	{#if view === 'LIST'}
		<ListView />
	{:else if view === 'MAP'}
		<MapView />
	{/if}
</main>