import axios from 'axios';
import { restaurantDatas } from './data';

const url = 'https://api_42delicious.deta.dev/api';

export function listData() {
	axios.get(`${url}/list`)
		.then(r => {
			restaurantDatas.set(r.data.list);
		})
		.catch(e => {
			console.error(e);
		});
}

export function sortData(method) {
	axios.post(`${url}/sort`, { 'sort': method })
		.then(r => {
			restaurantDatas.set(r.data.list);
		})
		.catch(e => {
			console.error(e);
		});
}

export function getRandomData() {
	let len;
	restaurantDatas.subscribe(v => {
		len = v.length;
	});
	const id = Math.floor(Math.random() * (len + 1));
	console.log(id); //needs to be developed
}

export function provideDirections(lat, lng, provider, name) {
	const s_lng = '127.0300294';
	const s_lat = '37.4921415';
	let isMobile;

	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	} else {
		isMobile = false;
	}

	if (provider == 'N') {
		//naver map
		let url;
		if (isMobile === true) {
			url = `nmap://route/walk?slat=${s_lat}&slng=${s_lng}&sname=피씨너들의%20무덤&dlat=${lat}&dlng=${lng}&dname=${name}`;
		} else {
			url = `https://map.naver.com/v5/directions/${s_lng},${s_lat},피씨너들의%20무덤,,PLACE_POI/${lng},${lat},${name},,PLACE_POI/-/walk`;
		}
		console.log(url);
		window.open(url);
	} else if (provider == 'K') {
		//kakao map
		let url;
		if (isMobile === true) {
			url = `kakaomap://route?sp=${s_lat},${s_lng}&ep=${lat},${lng}&by=FOOT`;
		} else {
			url = `https://map.kakao.com/link/to/${name},${lat},${lng}`;
		}
		window.open(url);
	}
}