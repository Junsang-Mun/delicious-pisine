import axios from 'axios';
import { restaurantDatas } from './store';

const url = 'http://localhost:5961/api';

export function listData() {
	axios.get(`${url}/list`)
	.then(r => {
		restaurantDatas.set(r.data.list);
	})
	.catch(e => {
		console.error(e);
	})
}

export function sortData(method) {
	axios.post(`${url}/sort`, {
		'sort': method 
	})
	.then(r => {
		restaurantDatas.set(r.data.list);
	})
	.catch(e => {
		console.error(e);
	})
}