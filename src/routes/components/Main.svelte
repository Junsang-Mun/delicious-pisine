<script>
  import { onMount } from "svelte";
  import ListView from "./ListView/ListView.svelte";
  import { initLocation, setLocation, currentLocation } from "../scripts/data";
  import { queryData } from "../scripts/api";
  import logo from "../images/42delicious.png";
  import "../../app.css";

  let queryValue;
  let locatoinFlag = '개포';

  onMount(() => {
    initLocation();
  });

  currentLocation.subscribe((l) => {
    if (l == "gaepo") {
      locatoinFlag = "개포";
    } else if (l == "seocho") {
      locatoinFlag = "서초";
    } else {
      console.error(`ERR: No such location | value: ${l}`);
    }
  });
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300 h-12 mt-2">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2"><img src={logo} class="h-12 pl-2 aspect-auto" alt="42Delicious Logo" /></div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li>
            <div>
            <input type="text" placeholder="Search" class="input input-bordered" bind:value={queryValue}/>
            <button class="btn btn-ghost" on:click={() => queryData(queryValue)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
          </div>
          </li>
          <li>
            <div class="dropdown dropdown-bottom dropdown-end">
              <label tabindex="0" class="btn m-2 pr-5 pl-4">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                {locatoinFlag}
              </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><p on:click={() => setLocation("gaepo")}>개포 클러스터</p></li>
                <li><p on:click={() => setLocation("seocho")}>서초 클러스터</p></li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <ListView />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li>
        <input type="text" placeholder="Search" class="input input-bordered" bind:value={queryValue}/>
        <button class="btn btn-ghost" on:click={() => queryData(queryValue)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
      </li>
      <li>
        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabindex="0" class="btn m-2 pr-5 pl-4">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            {locatoinFlag}
          </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><p on:click={() => setLocation("gaepo")}>개포 클러스터</p></li>
            <li><p on:click={() => setLocation("seocho")}>서초 클러스터</p></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
