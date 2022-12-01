<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { listData } from '../../scripts/api';
	import { restaurantDatas, currentLocation } from '../../scripts/data';
	let location = 'seocho';
	let update;
	restaurantDatas.subscribe(() => {
		update = {};
	});
	currentLocation.subscribe(l => {
		location = l;
	});
	onMount(() => {
		listData();
	})
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
		{#key location || update}
			{#each $restaurantDatas as rd}
				{#if rd.coordinate.loc == location}
					<Card id={rd.id} name={rd.name} summary={rd.summary} price={rd.price} category={rd.category} detail={rd.detail} credit={rd.credit}/>
				{/if}
			{/each}
		{/key}
	</div>
</div>