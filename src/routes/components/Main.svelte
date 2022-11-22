<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { listData, sortData } from '../scripts/api';
	import { restaurantDatas } from '../scripts/store';
	import { cookieAgreement } from '../scripts/cookie';
	import { giveMeWay } from '../scripts/giveMeWay';
	let userAgreedForCookie = false;
	let displayCookieAlert = false;
	function userSaidYes() {
		cookieAgreement(true);
		displayCookieAlert = false;
	}
	function userSaidNo() {
		cookieAgreement(false);
		displayCookieAlert = false;
	}
	onMount(() => {
		listData();
		userAgreedForCookie = cookieAgreement();
		if (userAgreedForCookie !== true) {
			displayCookieAlert = true;
		}
	})
</script>

<main>
	<div>
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{#each $restaurantDatas as rd}
					<Card name={rd.name} summary={rd.summary} price={rd.price} category={rd.category} />
				{/each}
			</div>
		</div>
	</div>
	{#if displayCookieAlert === true}
		<div class="alert shadow-lg fixed z-50 max-w-xl bottom-10 left-10">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				<span>we use cookies for no reason.</span>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost" on:click|preventDefault={() => userSaidNo()}>Deny</button>
				<button class="btn btn-sm btn-primary" on:click|preventDefault={() => userSaidYes(true)}>Accept</button>
			</div>
		</div>
	{/if}
</main>