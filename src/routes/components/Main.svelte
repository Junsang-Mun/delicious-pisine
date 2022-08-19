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
    <p></p>
<div>
    {#each restaurantDatas as rData}
    <div class="card w-96 bg-base-100 shadow-xl m-10">
        <div class="card-body">
          <h2 class="card-title">{JSON.stringify(rData.attributes.Name).replace(/\"/g, '')}</h2>
          <p>{@html JSON.stringify(rData.attributes.Menu).replace(/\\n/g, "<br />").replace(/\"/g, '')}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    {/each}
</div>
</main>







<!-- <script>
    import { onMount } from 'svelte';
    import { apiCall } from '../functions/apicall'
    let restaurants = [];

    onMount(async () => {
        apiCall();
        console.log('asdfasdf');
        console.log('dd');
    });
</script>

<div>
    {#each restaurants as data}
	<pre>{data.data.id}</pre>
    {/each}
</div>
 -->
