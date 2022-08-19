<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';
    let restaurantDatas = [];

    function apiCall(u) {
        axios.get(u)
        .then(response => {
            console.log(response.data.data);
            restaurantDatas = response.data.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
    onMount(() => {
        apiCall(url)
    })
    
</script>

<main>
<div>
    {#each restaurantDatas as rd}
    <div class="card w-96 bg-base-100 shadow-xl m-10">
        <div class="card-body">
          <h2 class="card-title">{JSON.stringify(rd.attributes.Name).replace(/\"/g, '')}</h2>
          <p>{@html JSON.stringify(rd.attributes.Menu).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
          <div class="card-actions justify-end">
            <p class="btn btn-outline">{JSON.stringify(rd.attributes.Kind).replace(/\"/g, '')}</p>
            {#if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'High'}
                <button class="btn btn-outline btn-error no-animation">가격 높음</button>
            {:else if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'Mid'}
                <button class="btn btn-outline btn-warning no-animation">가격 보통</button>
            {:else if JSON.stringify(rd.attributes.Price).replace(/\"/g, '') == 'Low'}
                <button class="btn btn-outline btn-success no-animation">가격 낮음</button>
            {:else}
                <button class="btn btn-outline no-animmation">가격 정보 없음</button>
            {/if}
            <button class="btn btn-primary">자세히 보기</button>
          </div>
        </div>
      </div>
    {/each}
</div>
</main>