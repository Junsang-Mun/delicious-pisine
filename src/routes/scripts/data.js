import { writable } from 'svelte/store';

export function setLocation(location) {
	if (location === 'gaepo') {
		window.localStorage.setItem('location', 'gaepo');
	} else if (location === 'seocho') {
		window.localStorage.setItem('location', 'seocho');
	} else {
		console.error('Unsupported location');
		window.localStorage.setItem('location', 'gaepo');
	}
}

export function getLocation() {
	const loc = window.localStorage.getItem('location');
	if (loc !== undefined) {
		return loc;
	} else {
		return 'gaepo';
	}
}

export const restaurantDatas = writable([]);
export const currentView = writable('LIST');