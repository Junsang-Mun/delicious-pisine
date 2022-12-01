import { writable } from 'svelte/store';

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
export const currentLocation = writable('gaepo');
export const currentView = writable('LIST');