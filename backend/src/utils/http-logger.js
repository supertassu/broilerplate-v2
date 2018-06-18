import logger from './logger';

const httpLogger = async (ctx, next) => {
	const start = Date.now();
	logger.log('debug', `--> ${ctx.method} ${ctx.originalUrl}`);

	try {
		await next();
	} catch (e) {
		logger.error(e);
		ctx.status = 500;
		ctx.body = '500 Internal Server Error';
	}

	const ms = Date.now() - start;
	logger.log('debug', `<-- ${ctx.status} ${ctx.method} ${ctx.originalUrl}`);
	ctx.set('X-Response-Time', `${ms}ms`);
};

export default httpLogger;
