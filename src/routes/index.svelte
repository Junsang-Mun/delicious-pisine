<script lang="ts">
    import { onMount } from 'svelte';
    import { getDB } from './variable';
    //import 'dotenv/config'

    onMount(async () => {
        console.log(import.meta.env.VITE_DB_ID);
        console.log(import.meta.env.VITE_NOTION_API_KEY);

        fetch(`https://api.notion.com/v1/databases/${import.meta.env.VITE_DB_ID}/query`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-08'
            },
            method: 'POST',
            mode: 'no-cors'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    })

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
