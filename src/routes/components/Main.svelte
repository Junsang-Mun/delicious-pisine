<script>
  import { onMount } from "svelte";
  import ListView from "./ListView/ListView.svelte";
  import { initLocation } from "../scripts/data";
  import "../../app.css";

  onMount(() => {
    initLocation();
  });
</script>

<main>
  <ListView />
</main>
