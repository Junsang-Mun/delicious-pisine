<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { listData, sortData } from '../scripts/api';
	import { restaurantDatas } from '../scripts/store';
	import { giveMeWay } from '../scripts/giveMeWay';
	onMount(() => {
		listData()
	})
</script>

<main>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('P_LTH')}>P_LTH</button>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('P_HTL')}>P_HTL</button>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('A_ATZ')}>A_ATZ</button>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('A_ZTA')}>A_ZTA</button>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('C_ATZ')}>C_ATZ</button>
<button class="btn btn-outline" on:click|preventDefault={() => sortData('C_ZTA')}>C_ZTA</button>
<div>
	<div class="container mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
			{#each $restaurantDatas as rd}
				<Card name={rd.name} summary={rd.summary} price={rd.price} category={rd.category} />
			{/each}
		</div>
	</div>
</div>
</main>