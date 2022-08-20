<script>
    import { apiCall } from '../scripts/apiCall';
    import img1 from '../images/1.png';
</script>

<div class="navbar bg-base-100 shadow mb-4">
    <div class="flex-1">
        <button class="btn btn-ghost normal-case text-xl" on:click="{() => apiCall()}">존맛탱 피씬</button>
    </div>
    <div class="flex-none">
        <label for="modal-help" class="btn btn-square btn-ghost modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="128" cy="180" r="12"></circle><path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
        </label>
        <input type="checkbox" id="modal-help" class="modal-toggle" />
        
        <label for="modal-help" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
                <label for="modal-help" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h2 class="text-lg font-bold">존맛탱 피씬 사용설명서</h2>
                <img src="{img1}" alt="맥도날드 서초뱅뱅점 | 피씨너의 마음의 고향 McDonald's | 패스트푸드 | 가격 낮음 | 자세히 보기"/>
                <p class="py-4">상단의 제목은 음식점 이름을 나타냅니다.</p>
                <p class="py-1">하단의 버튼 세 개는 각각 '<b>음식점 종류</b>', '<b>가격대</b>' 및 '<b>상세정보</b>'를 나타내며, 모든 버튼은 누를 수 있습니다.</p>
                <p class="py-1"><b>음식점 종류</b>를 누르면 동일한 종류의 음식점을 모아서 보여줍니다.</p>
                <p class="py-1"><b>가격대</b>를 누르면 동일한 종류의 음식점을 모아서 보여줍니다.</p>
                <p class="py-1"><b>상세정보</b>를 누르면 간략한 메뉴와 음식점의 위치, 영업시간 및 기타 정보가 나타나고 네이버와 카카오 지도 길찾기를 지원합니다(모바일 한정).</p>
                <p class="py-4">필터를 해제하고 싶으시면 상단의 <b>존맛탱 피씬</b>을 클릭해 주세요.</p>
            </label>
        </label>

    </div>
</div>