<script>
    import { onMount } from 'svelte';
    import { apiCall } from '../functions/apicall'
    const restaurants = [];
    let data;


    onMount(async () => {
        data = apiCall();
        restaurants = await data.json();
    });
</script>

<div>
	<pre>{restaurants}</pre>
</div>

