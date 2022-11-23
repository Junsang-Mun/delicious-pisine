import { showThisLocation } from "./store";

export function getLocation() {
	const loc = window.localStorage.getItem('location')
	if (loc !== undefined) {
		return loc;
	} else {
		return 'gaepo';
	}
}

export function setLocation(loc) {
	showThisLocation.set(loc);
	window.localStorage.setItem('location', loc);
}