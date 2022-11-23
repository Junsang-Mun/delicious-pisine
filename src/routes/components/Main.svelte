<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { listData } from '../scripts/api';
	import { restaurantDatas, showThisLocation } from '../scripts/store';
	let displayLocation;
	showThisLocation.subscribe(loc => {
		displayLocation = loc;
	})
	onMount(() => {
		listData();
	})
</script>

<main>
	<div>
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{#key displayLocation}
					{#each $restaurantDatas as rd}
						 {#if rd.coordinate.loc == displayLocation}
							<Card name={rd.name} summary={rd.summary} price={rd.price} category={rd.category} />
						{/if}
					{/each}
				{/key}
			</div>
		</div>
	</div>
</main>