import axios from 'axios';
import { restaurantDatas } from './store';
const url = 'https://delicious-pisine-backend.herokuapp.com/api/restaurants';

export function apiCall() {
    axios.get(url)
    .then(response => {
        console.log(response.data.data);
        restaurantDatas.set(response.data.data);
    })
    .catch(error => {
        console.log(error);
    })
}
export function apiCallFilter(k, v){
    axios.get(`${url}?filters[${k}][$eq]=${v}`)
    .then(response => {
        console.log(response.data.data);
        restaurantDatas.set(response.data.data);
    })
}
