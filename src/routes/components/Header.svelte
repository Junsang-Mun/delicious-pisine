<script>
  import { setLocation, currentLocation } from "../scripts/data";
  import { queryData } from "../scripts/api";
  import logo from "../images/42delicious.png";
  let locatoinFlag = "개포";

  currentLocation.subscribe((l) => {
    if (l == "gaepo") {
      locatoinFlag = "개포";
    } else if (l == "seocho") {
      locatoinFlag = "서초";
    } else {
      console.error(`ERR: No such location | value: ${l}`);
    }
  });
  let queryValue;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <img src={logo} class="h-12 pl-2" alt="42Delicious Logo" />
  </div>
  <div class="flex-2 gap-0">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" bind:value={queryValue}/>
    </div>
    <button class="btn btn-ghost" on:click={() => queryData(queryValue)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        /></svg
      >
    </button>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn m-2 pr-5 pl-4">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          ><path
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          /></svg
        >
        {locatoinFlag}</label
      >
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><p on:click={() => setLocation("gaepo")}>개포 클러스터</p></li>
        <li><p on:click={() => setLocation("seocho")}>서초 클러스터</p></li>
      </ul>
    </div>
  </div>
</div>
