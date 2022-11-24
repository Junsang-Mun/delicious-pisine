<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { listData } from '../scripts/api';
	import { restaurantDatas, showThisLocation } from '../scripts/store';
	let displayLocation;
	let forceUpdate;
	let displayFlag = 'LIST';
	restaurantDatas.subscribe(() => {
		forceUpdate = {};
	})
	showThisLocation.subscribe(loc => {
		displayLocation = loc;
	})
	onMount(() => {
		listData();
	})
</script>

<main>
	{#if displayFlag === 'LIST'}
	<div>
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{#key displayLocation || forceUpdate}
					{#each $restaurantDatas as rd}
						{#if rd.coordinate.loc == displayLocation}
							<Card name={rd.name} summary={rd.summary} price={rd.price} category={rd.category} detail={rd.detail}/>
						{/if}
					{/each}
				{/key}
			</div>
		</div>
	</div>
	{/if}
</main>