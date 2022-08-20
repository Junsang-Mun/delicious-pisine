<script>
    import { onMount } from 'svelte';
    import { apiCall, apiCallFilter } from '../scripts/apiCall';
    import { restaurantDatas } from '../scripts/store';

    onMount(() => {
        apiCall()
    })
</script>

<main>
<div>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {#each $restaurantDatas as rd}
            <div class="card w-96 bg-base-100 shadow-xl m-10">
                <div class="card-body">
                    <h1 class="card-title prose">{JSON.stringify(rd.attributes.Name).replace(/\"/g, '')}</h1>
                    <p>{@html JSON.stringify(rd.attributes.Menu).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-outline" on:click={() => apiCallFilter('Kind', JSON.stringify(rd.attributes.Kind).replace(/\"/g, ''))}>{JSON.stringify(rd.attributes.Kind).replace(/\"/g, '')}</button>
                        {#if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'High'}
                            <button class="btn btn-outline btn-error" on:click={() => apiCallFilter('Price', 'High')}>가격 높음</button>
                        {:else if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'Mid'}
                            <button class="btn btn-outline btn-warning" on:click={() => apiCallFilter('Price', 'Mid')}>가격 보통</button>
                        {:else if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'Low'}
                            <button class="btn btn-outline btn-success" on:click={() => apiCallFilter('Price', 'Low')}>가격 낮음</button>
                        {:else}
                            <button class="btn btn-outline no-animmation">가격 정보 없음</button>
                        {/if}
                        <button class="btn btn-primary">자세히 보기</button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
</main>