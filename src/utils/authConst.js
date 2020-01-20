export const authority = 'http://192.168.102.117:5051/';
export const client_id = 'tinbotPWA';
export const redirect_uri = 'http://localhost:3001/callback.html';
export const post_logout_redirect_uri = 'http://localhost:3001/index.html';

export const IDENTITY_CONFIG = {
	authority,
	client_id,
	redirect_uri,
	post_logout_redirect_uri,
	silent_redirect_uri: 'http://localhost:3001/callback.html',
	response_type: 'id_token token',
	automaticSilentRenew: false,
	loadUserInfo: false,
	scope: 'openid profile'
};
