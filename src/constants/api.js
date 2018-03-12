export const baseUrl = `http://${window.location.hostname || 'localhost'}:8080`;

const ENDPOINTS = {
	users: 'users',
};

export const getEndpoint = endpoint => ENDPOINTS[endpoint] || '';
