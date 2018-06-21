export default class ClientError extends Error {
	constructor(code, status, info) {
		super(status);
		this.code = code || 'USER_ERROR';
		this.status = status || 400;
		this.info = info || '';
	}
}
