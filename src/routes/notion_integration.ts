export function getDB() {
  fetch(`https://api.notion.com/v1/databases/${import.meta.env.VITE_DB_ID}/query`, {
    headers: new Headers({
        'Authorization': `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-08'
    }),
    method: 'post',
    mode: 'cors'
  })
  .then(response =>  {
    console.log(response);
    response.json()
  })
  .then(data => {
    console.log(data);
    return data;
  }).catch(error => {
    console.log(error);
  });
}