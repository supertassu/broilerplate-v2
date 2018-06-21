import logger from './logger';
import ClientError from './client-error';

const httpLogger = async (ctx, next) => {
	const start = Date.now();
	logger.log('debug', `--> ${ctx.method} ${ctx.originalUrl}`);

	try {
		await next();
	} catch (err) {
		logger.log('debug', `xxx ${ctx.status} ${ctx.method} ${ctx.originalUrl}`);
		if (logger.enabled) {
			console.log(err);
		}

		if (err instanceof ClientError) {
			ctx.status = err.code;
			ctx.body = `${ctx.status} ${err.status}: ${err.info || 'No additional info provided'}`;
		} else {
			ctx.status = 500;
			ctx.body = '500 Internal Server Error';
		}
	}

	const ms = Date.now() - start;
	logger.log('debug', `<-- ${ctx.status} ${ctx.method} ${ctx.originalUrl}`);
	ctx.set('X-Response-Time', `${ms}ms`);
};

export default httpLogger;
