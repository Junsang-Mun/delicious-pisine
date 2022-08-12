<script>
import { dotenv } from "dotenv";
import { onMount } from "svelte";
import { apiData, drinkNames } from './store.js';
dotenv.config();

const databaseId = process.env.DB_ID;
const apiKey = process.env.API_KEY;

onMount(async () => {
  fetch("https://api.notion.com/v1/databases/" + apiKey)
  .then(response => response.json())
  .then(data => {
		console.log(data);
    apiData.set(data);
  }).catch(error => {
    console.log(error);
    return [];
  });
});
</script>



<div class="navbar bg-base-100 shadow-lg bg-base-200">
  <a class="btn btn-ghost normal-case text-xl" href="http://localhost:5173">daisyUI</a>
</div>

<div class="m-10">
    <h1>Whiskey Drinks Menu</h1>
    {#each $drinkNames as drinkName}
    <div class="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
      <div class="card-body">
        <h2 class="card-title">{drinkName}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    {/each}
</div>