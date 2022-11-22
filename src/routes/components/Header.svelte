<script>
	import { onMount } from 'svelte';
	import { listData, sortData } from '../scripts/api';
	import { getLocation, setLocation, cookieAgreement } from '../scripts/cookie';
	import img1 from '../images/1.png';
	import img2 from '../images/2.png';
	let locatoinFlag = '';
	let currentLocation = ''
	let userAgreedForCookie = false;
	function sort(opt) {
		sortData(opt);
	}
	function location(opt) {
		userAgreedForCookie = cookieAgreement();
		if (opt === 'gaepo') {
			if (userAgreedForCookie) {
				setLocation('gaepo');
			}
			locatoinFlag = '개포';
			currentLocation = 'gaepo';
		} else if (opt === 'seocho') {
			if (userAgreedForCookie) {
				setLocation('seocho');
			}
			locatoinFlag = '서초';
			currentLocation = 'seocho';
		}
	}
	onMount(() => {
		const loc = getLocation();
		if (loc == 'gaepo') {
			locatoinFlag = '개포';
			location('gaepo');
		} else if (loc == 'seocho') {
			locatoinFlag = '서초'
			location('seocho');
		} else {
			locatoinFlag = '개포'
			location('gaepo');
		}
		userAgreedForCookie = cookieAgreement();
	})
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" on:click={() => listData()}>daisyUI</a>
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
			<li><a>Item 3</a></li>
		</ul>
	</div>
</div>
		<!-- 사용설명서 시작 --
		<label for="modal-help" class="modal cursor-pointer">
			<label class="modal-box relative" for="">
				<label for="modal-help" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
				<h2 class="text-lg font-bold">존맛탱 피씬 사용설명서</h2>
				<img src="{img1}" alt="맥도날드 서초뱅뱅점 | 피씨너의 마음의 고향 McDonald's | 패스트푸드 | 가격 낮음 | 자세히 보기"/>
				<p class="py-4">상단의 제목은 음식점 이름을 나타냅니다.</p>
				<p class="py-1">하단의 버튼 세 개는 각각 '<b>음식점 종류</b>', '<b>가격대</b>' 및 '<b>상세정보</b>'를 나타내며, 모든 버튼은 누를 수 있습니다.</p>
				<p class="py-1"><b>음식점 종류</b>를 누르면 동일한 종류의 음식점을 모아서 보여줍니다.</p>
				<p class="py-1"><b>가격대</b>를 누르면 동일한 종류의 음식점을 모아서 보여줍니다.</p>
				<img src="{img2}" alt=" " class="py-4" />
				<p class="py-4"><b>상세정보</b>를 누르면 간략한 메뉴와 음식점의 위치, 영업시간 및 기타 정보가 나타납니다.</p>
				<p class="py-1">네이버 지도와 카카오맵을 통해 바로 길을 찾을 수 있습니다.</p>
				<p class="py-1">모바일에서는 애플리케이션이, PC에서는 웹이 열립니다.</p>
				<p class="py-4">필터를 해제하고 싶으시면 상단의 <b>존맛탱 피씬</b>을 클릭해 주세요.</p>
			</label>
		</label>
		사용설명서 끝 -->