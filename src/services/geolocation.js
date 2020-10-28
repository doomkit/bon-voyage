export function getUserCoordinates(callback, errorCallback) {
	navigator.geolocation.getCurrentPosition((location) => {
		if (location) callback(location);
		else errorCallback();
	});
}