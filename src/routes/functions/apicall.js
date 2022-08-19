// import { writable } from 'svelte/store'

// export default function () {
//     const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';
// 	const loading = writable(false)
// 	const error = writable(false)
// 	const data = writable({})
	
// 	async function get() {
// 		loading.set(true)
// 		error.set(false)
// 		try {
// 			const response = await fetch(url)
// 			data.set(response)
// 		} catch(e) {
// 			error.set(e)
// 		}
// 		loading.set(false)
// 	}
	
// 	get()
	
// 	return [ data, loading, error, get]
// }

export async function apiCall() {
	const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';

	await fetch(url)
	.then(response => {
		console.log(response);
		return response;
	})
	.catch(error => {
		console.log(error);
		return error;
	});
}