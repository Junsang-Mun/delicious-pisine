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

<div>{restaurantDatas}</div>

<div>
    {#each restaurantDatas as rData}
    <div>
        {JSON.stringify(rData.attributes.Name)}
    </div>
    {/each}
</div>










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
