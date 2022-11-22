export function cookieAgreement(agreed) {
	if (agreed === true) {
		window.localStorage.setItem('userAgree', 'yes');
		return true;
	}
	if (agreed === false) {
		window.localStorage.removeItem('userAgree', 'false');
		return false;
	}
	if (window.localStorage.getItem('userAgree') === 'yes') {
		return true;
	}
	return false;
}

export function getLocation() {
	const loc = window.localStorage.getItem('location')
	if (loc !== undefined) {
		return loc;
	} else {
		return 'gaepo';
	}
}

export function setLocation(loc) {
	window.localStorage.setItem('location', loc);
}