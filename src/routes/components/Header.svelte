<script>
	import { setLocation, currentLocation, currentView } from '../scripts/data';
	import { sortData, getRandomData } from '../scripts/api';
	import logo from '../images/42delicious.png';
	let locatoinFlag = '';
	let viewText = '리스트 보기';

	currentLocation.subscribe(l => {
		if (l == 'gaepo') {
			locatoinFlag = '개포';
		} else if (l == 'seocho') {
			locatoinFlag = '서초';
		} else {
			console.error(`ERR: @Header | value: ${l}`);
		}
	});

	currentView.subscribe(v => {
		if (v == 'MAP') {
			viewText = '지도 보기';
		} else if (v == 'LIST'){
			viewText = '리스트 보기'
		} else {
			console.error(`ERR: @currentView.subscribe | val: ${v}`);
		}
	});

	function switchView() {
		let view;
		currentView.subscribe(v => {
			view = v;
		});
		if (view == 'LIST') {
			currentView.set('MAP');
		} else if (view == 'MAP') {
			currentView.set('LIST');
		}
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<img src={logo} class="h-12 pl-2" alt="42Delicious Logo"/>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<p>
					{locatoinFlag}
					<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
				</p>
				<ul class="p-2 bg-base-100 z-50 border-2 border-base-300">
					<li><p on:click={() => setLocation('gaepo')}>개포 클러스터</p></li>
					<li><p on:click={() => setLocation('seocho')}>서초 클러스터</p></li>
				</ul>
			</li>
			{#if viewText == '리스트 보기'}
			<li tabindex="0">
				<p>
					정렬 옵션
					<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
				</p>
				<ul class="p-2 bg-base-100 z-50 border-2 border-base-300">
					<li><p on:click={() => sortData('P_LTH')}>가격순</p></li>
					<li><p on:click={() => sortData('A_ATZ')}>가게 이름 오름차순</p></li>
					<li><p on:click={() => sortData('A_ZTA')}>가게 이름 내림차순</p></li>
					<li><p on:click={() => sortData('C_ATZ')}>카테고리별로 묶기</p></li>
				</ul>
			</li>
			{/if}
			<li><p on:click={() => getRandomData()}>추천받기</p></li>
			<li><p on:click={() => switchView()}>{viewText}</p></li>
		</ul>
	</div>
</div>