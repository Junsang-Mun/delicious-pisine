<script>
	import { onMount } from 'svelte';
	import { sortData } from '../scripts/api';
	import { getLocation, setLocation } from '../scripts/localStorage';
	import logo from '../images/42delicious.png';
	let locatoinFlag = '';
	let buttonText = 'test';
	function sort(opt) {
		sortData(opt);
	}
	function location(opt) {
		if (opt === 'gaepo') {
			setLocation(opt);
			locatoinFlag = '개포';
		} else if (opt === 'seocho') {
			setLocation(opt);
			locatoinFlag = '서초';
		} else {
			setLocation('gaepo');
			locatoinFlag = '개포';
			console.error('Unsupported location');
		}
	}
	onMount(() => {
		const loc = getLocation();
		if (loc === 'gaepo') {
			setLocation(loc);
			locatoinFlag = '개포';
		} else if (loc === 'seocho') {
			setLocation(loc);
			locatoinFlag = '서초';
		} else {
			setLocation('gaepo');
			locatoinFlag = '개포';
			console.error('Unsupported location');
		}
	})
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a><img src={logo} class="h-12 pl-2"/></a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<a>
					{locatoinFlag}
					<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
				</a>
				<ul class="p-2 bg-base-100 z-50 border-2 border-base-300">
					<li><a on:click={() => location('gaepo')}>개포 클러스터</a></li>
					<li><a on:click={() => location('seocho')}>서초 클러스터</a></li>
				</ul>
			</li>
			<li tabindex="0">
				<a>
					정렬 옵션
					<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
				</a>
				<ul class="p-2 bg-base-100 z-50 border-2 border-base-300">
					<li><a on:click={() => sort('P_LTH')}>가격 낮은 순</a></li>
					<li><a on:click={() => sort('P_HTL')}>가격 높은 순</a></li>
					<li><a on:click={() => sort('A_ATZ')}>가게 이름 오름차순</a></li>
					<li><a on:click={() => sort('A_ZTA')}>가게 이름 내림차순</a></li>
					<li><a on:click={() => sort('C_ATZ')}>카테고리별로 묶기</a></li>
				</ul>
			</li>
			<li><a on:click={() => console.log('')}>추천받기</a></li>
		</ul>
	</div>
</div>