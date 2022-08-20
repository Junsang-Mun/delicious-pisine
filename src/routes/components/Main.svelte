<script>
    import { onMount } from 'svelte';
    import { apiCall, apiCallFilter } from '../scripts/apiCall';
    import { restaurantDatas } from '../scripts/store';
    import { giveMeWay } from '../scripts/giveMeWay';

    onMount(() => {
        apiCall()
    })
</script>

<main>
<div>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {#each $restaurantDatas as rd}
            <div class="card w-95 bg-base-100 shadow m-5">
                <div class="card-body">
                    <h1 class="card-title prose">{JSON.stringify(rd.attributes.Name).replace(/\"/g, '')}</h1>
                    <p>{@html JSON.stringify(rd.attributes.Summary).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
                    <br>
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
                        <label for="rd-modal-{JSON.stringify(rd.id)}" class="btn btn-primary modal-button">자세히 보기</label>
                        <input type="checkbox" id="rd-modal-{JSON.stringify(rd.id)}" class="modal-toggle" />
                        <label for="rd-modal-{JSON.stringify(rd.id)}" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <label for="rd-modal-{JSON.stringify(rd.id)}" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h2 class="text-lg font-bold">메뉴</h2>
                                <p class="py-4">{@html JSON.stringify(rd.attributes.Menu).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
                                <br>
                                <h2 class="text-lg font-bold">위치</h2>
                                <p class="py-4">{@html JSON.stringify(rd.attributes.Location).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
                                <br>
                                <h2 class="text-lg font-bold">영업시간 및 기타 정보</h2>
                                <p class="py-4">{@html JSON.stringify(rd.attributes.Note).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
                                <button class="btn btn-link bg-[#03c75a] text-black m-2" on:click="{() => giveMeWay(JSON.stringify(rd.attributes.Lat).replace(/\"/g, ''), JSON.stringify(rd.attributes.Lng).replace(/\"/g, ''), 'N', JSON.stringify(rd.attributes.Name).replace(/\"/g, ''))}">네이버 지도 길찾기</button>
                                <button class="btn btn-link	bg-[#fee500] text-black m-2" on:click="{() => giveMeWay(JSON.stringify(rd.attributes.Lat).replace(/\"/g, ''), JSON.stringify(rd.attributes.Lng).replace(/\"/g, ''), 'K', JSON.stringify(rd.attributes.Name).replace(/\"/g, ''))}">카카오 지도 길찾기</button>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
</main>