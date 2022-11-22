<script>
	export let name;
	export let summary;
	export let price;
	export let category;
</script>

<div class="card w-95 bg-base-100 shadow m-5">
	<div class="card-body">
		<h1 class="card-title prose">{name}</h1>
		<p>{summary}</p>
		<br>
		<div class="card-actions justify-end">
			<button class="btn btn-outline">{category}</button>
			{#if price === 3}
				<button class="btn btn-outline btn-error">가격 높음</button>
			{:else if price === 2}
				<button class="btn btn-outline btn-warning">가격 보통</button>
			{:else if price === 1}
				<button class="btn btn-outline btn-success">가격 낮음</button>
			{:else}
				<button class="btn btn-outline no-animmation">가격 정보 없음</button>
			{/if}
		</div>
	</div>
</div>