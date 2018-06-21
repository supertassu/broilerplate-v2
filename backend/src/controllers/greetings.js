import Greeting from '../models/greeting';
import ClientError from '../utils/client-error';

/**
* @api {get} /greetings  Lists all greetings stored in the database
* @param {object} ctx Koa context
*/
export const list = async ctx => {
	const greetings = await Greeting.findAll();
	const greetingsJSON = await Promise.all(greetings.map(greeting => greeting.toJSON()));

	ctx.body = {
		results: greetingsJSON,
		request: {
			count: greetingsJSON.length
		}
	};
	ctx.status = 200;
};

/**
* @api {post} /greetings  Create a greeting
* @param {object} ctx Koa context
*/
export const create = async ctx => {
	const params = ctx.request.body;

	let greeting;
	try {
		greeting = await Greeting.create({text: params.text, language: params.language});
	} catch (e) {
		throw new ClientError(400, 'SAVING_ERROR');
	}

	ctx.body = await greeting.toJSON();
	ctx.status = 201;
};
