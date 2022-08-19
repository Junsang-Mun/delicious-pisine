import axios from 'axios';

export async function apiCall() {
	const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';

	const response = axios.get(url)
	.then(response => response.data)
	.then(console.log(response));
}

// export async function apiCall() {
// 	const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';

// 	await fetch(url)
// 	.then(response => response.json())
// 	.then(result => {
// 		console.log(result);
// 		return result;
// 	})
// 	.catch(error => {
// 		console.log(error);
// 		return error;
// 	});
// }