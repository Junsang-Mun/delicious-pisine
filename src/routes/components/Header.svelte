<script>
    import { apiCall } from '../scripts/apiCall';

</script>

<div class="navbar bg-base-100 shadow p-3">
    <div class="flex-1">
        <button class="btn btn-ghost normal-case text-xl" on:click="{() => apiCall()}">존맛탱 피씬</button>
    </div>
    <div class="flex-none">
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="79.8 99.7 31.8 99.7 31.8 51.7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="176.2 156.3 224.2 156.3 224.2 204.3" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
        </button>
    </div>
</div>