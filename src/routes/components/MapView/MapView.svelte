<svelte:head>
	<script defer async src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f669eb7c418a8417b6abbf601a9fb7d9&autoload=false"></script>
</svelte:head>

<script>
	import { onMount } from "svelte";
	let map;
	let mapOptions;
	let container;

	kakao.maps.load(() => {
		mapOptions = {
			center: new kakao.maps.LatLng(37.4901676, 127.030612),
			zoom: 10
		};
		map = new kakao.maps.Map(container, mapOptions);
	})
</script>


<div bind:this={container}></div>