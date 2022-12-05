<script>
	export let id;
	export let name;
	export let summary;
	export let price;
	export let category;
	export let detail;
	export let credit;

	function showCreditUser(id) {
		const url = `https://profile.intra.42.fr/users/${id}`;
		window.open(url);
	}
</script>

<label for="{id}" class="card w-96 bg-base-100 shadow m-5" style="cursor: pointer;">
	<div class="card-body">
		<h1 class="card-title prose">{name}</h1>
		<p>{summary}</p>
		<br>
		<div class="card-actions justify-end">
			<button class="btn btn-outline">{category}</button>
			{#if price == '가격 높음'}
				<button class="btn btn-error btn-outline">{price}</button>
			{:else if price == '가격 보통'}
				<button class="btn btn-warning btn-outline">{price}</button>
			{:else if price == '가격 낮음'}
				<button class="btn btn-success btn-outline">{price}</button>
			{:else}
				<button class="btn btn-outline">가격 정보 없음</button>
			{/if}
		</div>
	</div>
</label>

<input type="checkbox" id="{id}" class="modal-toggle" />
<label for="{id}" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h1 class="font-bold text-2xl p-2 m-1">{name}</h1>
		<flex class="p-2">
			<div class="badge badge-primary">{category}</div>
			<div class="badge badge-primary">{price}</div>
			{#if credit != undefined}
			<button class="badge badge-primary" on:click={showCreditUser(credit)}>{credit}</button>
			{/if}
		</flex>
		<p class="p-2 pt-4">{@html detail}</p>
		<div class="modal-action">
			<label for="{id}" class="btn">닫기</label>
		</div>
	</div>
</label>
