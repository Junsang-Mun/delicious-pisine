import { writable } from 'svelte/store';

export function initLocation() {
	const loc = window.localStorage.getItem('location');
	if (loc == 'seocho') {
		setLocation('seocho');
	} else {
		setLocation('gaepo');
	}
}

export function setLocation(location) {
	if (location === 'gaepo') {
		window.localStorage.setItem('location', 'gaepo');
		currentLocation.set('gaepo');
	} else if (location === 'seocho') {
		window.localStorage.setItem('location', 'seocho');
		currentLocation.set('seocho');
	} else {
		console.error('Unsupported location');
		window.localStorage.setItem('location', 'gaepo');
		currentLocation.set('gaepo');
	}
}

export const restaurantDatas = writable([]);
export const currentLocation = writable('');
export const currentView = writable('LIST');