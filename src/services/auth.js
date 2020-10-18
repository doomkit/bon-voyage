export function login(username, password) {
	if (!username || !password) return false;
	// TODO: get token and save it to session storage
	const tempToken = 'temporary token';
	sessionStorage.setItem('AUTH_TOKEN', tempToken);
	return true;
}

export function logout() {
	const token = sessionStorage.getItem('AUTH_TOKEN');
	if (token) sessionStorage.removeItem('AUTH_TOKEN');
	// TODO: delete session on server side (if necessary)
}

export function isAuthenticated() {
	const token = sessionStorage.getItem('AUTH_TOKEN');
	return !!token;
}

export function createAccount() {
	return false;
}

export function deleteAccount() {
	return false;
}
